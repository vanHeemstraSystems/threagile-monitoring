# threagile-monitoring/src/threagile_monitoring/models/dashboard_model.py
from dataclasses import dataclass
from typing import List, Any

@dataclass
class Dashboard:
    id: int
    title: str
    description: str
    risks_json: List[Any]

    def __repr__(self):
      return f'<Dashboard {self.title}>'