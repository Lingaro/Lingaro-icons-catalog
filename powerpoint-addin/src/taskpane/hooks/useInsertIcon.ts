import { useState, useCallback } from "react";
import { IconsClient } from "@lingaro/icons-client";
import type { Icon } from "@lingaro/icons-client";

interface InsertState {
  inserting: boolean;
  lastInserted: string | null;
  error: Error | null;
}

async function iconToBase64Png(blob: Blob, filename: string): Promise<string> {
  const isSvg = filename.endsWith(".svg");

  if (!isSvg) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        resolve(result.split(",")[1]);
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }

  // SVG → PNG via canvas at 4x resolution
  const svgText = await blob.text();
  const svgBlob = new Blob([svgText], { type: "image/svg+xml" });
  const url = URL.createObjectURL(svgBlob);

  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const scale = 4;
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth * scale;
      canvas.height = img.naturalHeight * scale;
      const ctx = canvas.getContext("2d")!;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(url);

      const dataUrl = canvas.toDataURL("image/png");
      resolve(dataUrl.split(",")[1]);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Failed to render SVG to canvas"));
    };
    img.src = url;
  });
}

export function useInsertIcon(client: IconsClient) {
  const [state, setState] = useState<InsertState>({
    inserting: false,
    lastInserted: null,
    error: null,
  });

  const insert = useCallback(
    async (icon: Icon) => {
      setState({ inserting: true, lastInserted: null, error: null });

      try {
        const blob = await client.getIconBlob(icon.id);
        const base64 = await iconToBase64Png(blob, icon.filename);

        await new Promise<void>((resolve, reject) => {
          Office.context.document.setSelectedDataAsync(
            base64,
            {
              coercionType: Office.CoercionType.Image,
              imageWidth: 72,
            } as any,
            (result) => {
              if (result.status === Office.AsyncResultStatus.Succeeded) {
                resolve();
              } else {
                reject(new Error(result.error?.message ?? "Insert failed"));
              }
            }
          );
        });

        setState({ inserting: false, lastInserted: icon.name, error: null });
      } catch (error) {
        setState({ inserting: false, lastInserted: null, error: error as Error });
      }
    },
    [client]
  );

  return { ...state, insert };
}
