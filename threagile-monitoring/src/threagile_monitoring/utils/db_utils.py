# threagile-monitoring/src/threagile_monitoring/utils/db_utils.py
from tinydb import TinyDB, Query
import json
from pathlib import Path
from models.dashboard_model import Dashboard as DashboardModel

db = TinyDB('dashboards.json')

def init_db():
    # Seed initial data
    risks_path = Path(__file__).parent.parent / 'static' / 'json' / 'risks.json'
    with open(risks_path) as f:
        risks_data = json.load(f)
    
    DashboardQuery = Query()
    db.upsert({
        'id': 1,
        'title': 'Initial Dashboard',
        'description': 'Auto-generated dashboard',
        'risks_json': risks_data
    }, DashboardQuery.id == 1)

def get_dashboard(dashboard_id: int) -> DashboardModel:
    DashboardQuery = Query()
    data = db.get(DashboardQuery.id == dashboard_id)
    if data:
        return DashboardModel(**data)
    return None

def get_dashboard_risks(dashboard_id: int):
    DashboardQuery = Query()
    dashboard = db.get(DashboardQuery.id == dashboard_id)
    return dashboard['risks_json'] if dashboard else None

def create_dashboard(title: str, description: str, risks_json: list = None):
    if risks_json is None:
        risks_path = Path(__file__).parent.parent / 'static' / 'json' / 'risks.json'
        with open(risks_path) as f:
            risks_json = json.load(f)
    
    # Get next available ID
    dashboards = db.all()
    next_id = max([d.get('id', 0) for d in dashboards], default=0) + 1
    
    new_dashboard = {
        'id': next_id,
        'title': title,
        'description': description,
        'risks_json': risks_json
    }
    db.insert(new_dashboard)
    return DashboardModel(**new_dashboard)