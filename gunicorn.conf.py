import os
import sys

# Add app root to Python path so 'api' and 'scripts' packages are importable
# __file__ is available in gunicorn config context (loaded via exec())
try:
    _app_root = os.path.dirname(os.path.abspath(__file__))
except NameError:
    _app_root = os.getcwd()

if _app_root not in sys.path:
    sys.path.insert(0, _app_root)

chdir = _app_root

bind = "0.0.0.0:8000"
workers = 2
worker_class = "uvicorn.workers.UvicornWorker"
