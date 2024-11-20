from flask import render_template, Blueprint
app_bp = Blueprint('app',__name__)

@app_bp.route('/')
@app_bp.route('/app')
def index():
	return render_template("index.html")