# threagile-monitoring/src/threagile_monitoring/app.py
import os
from utils import create_app

app = create_app()

if __name__ == "__main__":
    app.run(
        debug=True, host=os.getenv("IP", "0.0.0.0"), port=int(os.getenv("PORT", 5000))
    )