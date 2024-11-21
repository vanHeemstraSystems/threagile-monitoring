import React, { useState, useEffect, Component } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  Sector,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Treemap,
  ScatterChart,
  Scatter,
  LineChart,
  Line,
  AreaChart,
  Area,
  ResponsiveContainer,
  Sankey
} from 'recharts'
import { AlertCircle, Activity, TrendingDown, Settings } from 'lucide-react'

// Temporarily hard coded, make dynamic import
const risksJson = {}

// Parse Threagile risks.json structure
const parseThreagileData = risksJson => {
  const severityMap = {
    critical: { weight: 5, color: '#dc2626' },
    high: { weight: 4, color: '#ea580c' },
    elevated: { weight: 3, color: '#eab308' },
    medium: { weight: 2, color: '#84cc16' },
    low: { weight: 1, color: '#22c55e' }
  }
  return {
    risksBySeverity: Object.entries(
      risksJson.reduce((acc, risk) => {
        acc[risk.severity] = (acc[risk.severity] || 0) + 1
        return acc
      }, {})
    ).map(([severity, count]) => ({
      name: severity,
      count,
      color: severityMap[severity.toLowerCase()].color
    })) //, MORE
  }
}

const Dashboard = ({ risksJson }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [selectedSevereity, setSelectedSeverity] = useState(null)
  const [timeRange, setTimeRange] = useState('1M')
  const [data, setData] = useState(null)
  useEffect(() => {
    if (risksJson) {
      setData(parseThreagileData(risksJson))
    }
  }, [risksJson])

  if (!data) return <div>Loading...</div>
}

export default Dashboard
