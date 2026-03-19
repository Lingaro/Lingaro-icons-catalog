"""Personal API Token endpoints — GET/POST/DELETE /api/tokens/me."""

import uuid
from datetime import datetime, timezone
from typing import Literal

from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel, Field

from ..auth import CurrentUser
from ..database import get_db
from ..dependencies import require_bearer_auth, get_database
from ..services.token_utils import generate_token, hash_token, make_expires_at, is_expired

router = APIRouter(prefix="/api/tokens", tags=["tokens"])


class TokenCreate(BaseModel):
    expires_days: Literal[30, 60, 90]
    name: str = Field(default="My CLI token", min_length=1, max_length=100)


class TokenInfo(BaseModel):
    name: str
    expires_at: datetime
    created_at: datetime
    expired: bool


class TokenCreated(BaseModel):
    token: str
    expires_at: datetime
    warning: str


def _parse_utc(value: str) -> datetime:
    dt = datetime.fromisoformat(value)
    if dt.tzinfo is None:
        dt = dt.replace(tzinfo=timezone.utc)
    return dt


@router.get("/me", response_model=TokenInfo)
def get_my_token(
    user: CurrentUser = Depends(require_bearer_auth),
    db=Depends(get_database),
):
    row = db.execute(
        "SELECT name, expires_at, created_at FROM personal_tokens WHERE user_email = ?",
        (user.email,),
    ).fetchone()
    if not row:
        raise HTTPException(status_code=404, detail="No token found")
    expires_at = _parse_utc(row["expires_at"])
    created_at = _parse_utc(row["created_at"])
    return TokenInfo(
        name=row["name"],
        expires_at=expires_at,
        created_at=created_at,
        expired=is_expired(expires_at),
    )


@router.post("/me", response_model=TokenCreated, status_code=201)
def create_my_token(
    body: TokenCreate,
    user: CurrentUser = Depends(require_bearer_auth),
    db=Depends(get_database),
):
    raw = generate_token()
    expires_at = make_expires_at(body.expires_days)
    created_at = datetime.now(timezone.utc)
    token_id = str(uuid.uuid4())

    db.execute(
        """INSERT INTO personal_tokens (id, user_email, token_hash, name, expires_at, created_at)
           VALUES (?, ?, ?, ?, ?, ?)
           ON CONFLICT(user_email) DO UPDATE SET
               id = excluded.id,
               token_hash = excluded.token_hash,
               name = excluded.name,
               expires_at = excluded.expires_at,
               created_at = excluded.created_at""",
        (token_id, user.email, hash_token(raw), body.name,
         expires_at.isoformat(), created_at.isoformat()),
    )
    db.commit()

    return TokenCreated(
        token=raw,
        expires_at=expires_at,
        warning="Copy this token now — it will not be shown again.",
    )


@router.delete("/me", status_code=204)
def delete_my_token(
    user: CurrentUser = Depends(require_bearer_auth),
    db=Depends(get_database),
):
    result = db.execute(
        "DELETE FROM personal_tokens WHERE user_email = ?", (user.email,)
    )
    db.commit()
    if result.rowcount == 0:
        raise HTTPException(status_code=404, detail="No token found")
