# threagile-monitoring/src/threagile_monitoring/app.py
import json
import os
from flask import Flask, render_template
from flask_cors import CORS
from utils.db_utils import db  # Updated import to use db_utils
from blueprints.dashboard import bp as dashboard_bp

app = Flask(__name__)
CORS(app)  # This applies CORS to all routes
app.config['SECRET_KEY'] = 'your-secret-key-here'  # Add this line after creating the app
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///threagile.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

with app.app_context():
    db.create_all()  # Create database tables

@app.route('/')
def index():
    return render_template('index.html')  # Make sure this template exists

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

app.register_blueprint(dashboard_bp)

if __name__ == "__main__":
    app.run(
        debug=True, host=os.getenv("IP", "0.0.0.0"), port=int(os.getenv("PORT", 5000))
    )