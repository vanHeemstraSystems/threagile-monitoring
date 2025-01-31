from flask import Blueprint, render_template

bp = Blueprint('dashboard', __name__, url_prefix='/dashboard')

@bp.route('/')
def list_dashboards():
    # For now, return empty list of dashboards
    dashboards = []
    return render_template('dashboard/dashboards.html', dashboards=dashboards)

@bp.route('/new')
def new_dashboard():
    return "New Dashboard Form"  # We'll implement this later

@bp.route('/<int:dashboard_id>')
def view_dashboard(dashboard_id):
    return f"View Dashboard {dashboard_id}"  # We'll implement this later

@bp.route('/<int:dashboard_id>/edit')
def edit_dashboard(dashboard_id):
    return f"Edit Dashboard {dashboard_id}"  # We'll implement this later

@bp.route('/<int:dashboard_id>/delete', methods=['POST'])
def delete_dashboard(dashboard_id):
    return f"Delete Dashboard {dashboard_id}"  # We'll implement this later 