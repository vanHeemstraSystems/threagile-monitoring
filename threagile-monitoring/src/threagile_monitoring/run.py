from templates import app
#Load this config object for development mode
from config import DevelopmentConfig # DevelopmentConfig | ProductionConfig
app.config.from_object(config)
app.run()