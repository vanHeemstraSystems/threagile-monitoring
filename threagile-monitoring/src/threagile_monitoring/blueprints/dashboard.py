# threagile-monitoring/src/threagile_monitoring/blueprints/dashboard.py
from flask import Blueprint, render_template, request, redirect, url_for, flash, jsonify
from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField
from wtforms.validators import DataRequired
from utils.db_utils import db, get_dashboard, get_dashboard_risks, init_db, create_dashboard, delete_dashboard, update_dashboard
from models.dashboard_model import Dashboard
import json
from pathlib import Path

dashboard_bp = Blueprint('dashboard', __name__, url_prefix='/dashboard')

class DashboardForm(FlaskForm):
    title = StringField('Title', validators=[DataRequired()])
    description = TextAreaField('Description')  # Removed DataRequired as it's nullable
    code = TextAreaField('Code')  # Removed DataRequired as it's nullable

@dashboard_bp.route('/')
def list_dashboards():
    # Get all dashboards from TinyDB
    dashboards = db.all()
    return render_template('dashboard/list_dashboards.html', dashboards=dashboards)


@dashboard_bp.route('/new', methods=['GET', 'POST'])
def new_dashboard():
    form = DashboardForm()

    if form.validate_on_submit():
        dashboard = Dashboard(
            title=form.title.data,
            description=form.description.data,
            code=form.code.data
        )
        db.session.add(dashboard)
        db.session.commit()
        flash('Dashboard created successfully!', 'success')
        return redirect(url_for('dashboard.list_dashboards'))
    return render_template('dashboard/new_dashboard.html', form=form)

@dashboard_bp.route('/<int:dashboard_id>')
def view_dashboard(dashboard_id):
    dashboard = get_dashboard(dashboard_id)
    if not dashboard:
        flash('Dashboard not found.')
        return redirect(url_for('dashboard.list_dashboards'))
    return render_template('dashboard/view_dashboard.html', dashboard=dashboard)


@dashboard_bp.route('/<int:dashboard_id>/edit', methods=['GET', 'POST'])
def edit_dashboard_route(dashboard_id):
    dashboard = get_dashboard(dashboard_id)
    if request.method == 'POST':
        title = request.form['title']
        description = request.form['description']
        dashboard = update_dashboard(dashboard_id, title, description)
        flash('Dashboard updated successfully!')
        return redirect(url_for('dashboard.view_dashboard', dashboard_id=dashboard_id))
    return render_template('dashboard/edit_dashboard.html', dashboard=dashboard)

@dashboard_bp.route('/<int:dashboard_id>/delete', methods=['POST'])
def delete_dashboard_route(dashboard_id):
    delete_dashboard(dashboard_id)
    flash('Dashboard deleted successfully!')
    return redirect(url_for('dashboard.list_dashboards'))

@dashboard_bp.route('/api/dashboard/<int:dashboard_id>/risks')
def get_risks(dashboard_id):
    risks_data = get_dashboard_risks(dashboard_id)
    if risks_data is None:
        return jsonify({'error': 'Dashboard not found'}), 404
    return jsonify(risks_data)

@dashboard_bp.route('/create', methods=['GET', 'POST'])
def create_dashboard_route():
    if request.method == 'POST':
        title = request.form['title']
        description = request.form['description']
        dashboard = create_dashboard(title, description)
        flash('Dashboard created successfully!')
        return redirect(url_for('dashboard.view_dashboard', dashboard_id=dashboard.id))
    return render_template('dashboard/create_dashboard.html')

# Initialize the database when the blueprint is registered
def init_app(app):
    with app.app_context():
        init_db() 