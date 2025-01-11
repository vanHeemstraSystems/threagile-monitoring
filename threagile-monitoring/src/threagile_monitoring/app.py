# threagile-monitoring/src/threagile_monitoring/app.py
import json
import os
from utils import create_app

app = create_app()

def get_manifest():
    try:
        manifest_path = os.path.join(os.path.dirname(__file__), 'static', 'js', 'manifest.json')
        with open(manifest_path) as f:
            return json.load(f)
    except:
        # Fallback for development
        return {
            'main.js': 'main.js',
            'vendors.js': 'vendors.js'
        }

# Make manifest available to all templates
@app.context_processor
def utility_processor():
    return dict(manifest=get_manifest())


if __name__ == "__main__":
    app.run(
        debug=True, host=os.getenv("IP", "0.0.0.0"), port=int(os.getenv("PORT", 5000))
    )