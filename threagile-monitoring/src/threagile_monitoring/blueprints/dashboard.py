# threagile-monitoring/src/threagile_monitoring/blueprints/dashboard.py
from flask import Blueprint, render_template, request, redirect, url_for, flash
from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField
from wtforms.validators import DataRequired
from utils.db_utils import db
from models.dashboard_model import Dashboard

bp = Blueprint('dashboard', __name__, url_prefix='/dashboard')

class DashboardForm(FlaskForm):
    title = StringField('Title', validators=[DataRequired()])
    description = TextAreaField('Description')  # Removed DataRequired as it's nullable
    code = TextAreaField('Code')  # Removed DataRequired as it's nullable

@bp.route('/')
def list_dashboards():
    dashboards = Dashboard.query.all()
    return render_template('dashboard/dashboards.html', dashboards=dashboards)

@bp.route('/new', methods=['GET', 'POST'])
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

@bp.route('/<int:dashboard_id>')
def view_dashboard(dashboard_id):
    dashboard = Dashboard.query.get_or_404(dashboard_id)
    return render_template('dashboard/view_dashboard.html', dashboard=dashboard)

@bp.route('/<int:dashboard_id>/edit', methods=['GET', 'POST'])
def edit_dashboard(dashboard_id):
    dashboard = Dashboard.query.get_or_404(dashboard_id)
    form = DashboardForm(obj=dashboard)
    
    if form.validate_on_submit():
        dashboard.title = form.title.data
        dashboard.description = form.description.data
        dashboard.code = form.code.data
        db.session.commit()
        flash('Dashboard updated successfully!', 'success')
        return redirect(url_for('dashboard.view_dashboard', dashboard_id=dashboard_id))
    
    return render_template('dashboard/edit_dashboard.html', form=form, dashboard_id=dashboard_id)

@bp.route('/<int:dashboard_id>/delete', methods=['POST'])
def delete_dashboard(dashboard_id):
    dashboard = Dashboard.query.get_or_404(dashboard_id)
    db.session.delete(dashboard)
    db.session.commit()
    flash('Dashboard deleted successfully!', 'success')
    return redirect(url_for('dashboard.list_dashboards')) 
