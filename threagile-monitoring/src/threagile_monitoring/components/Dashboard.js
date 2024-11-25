import React, { useState, useEffect } from 'react'
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

// Parse Threagile risks.json structure
const parseThreagileData = risksJson => {
  console.debug('parseThreagileData')
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
    })),
    risksByCategory: Object.entries(
      risksJson.reduce((acc, risk) => {
        acc[risk.category] = (acc[risk.category] || 0) + 1
        return acc
      }, {})
    ).map(([category, value]) => ({ name: category, value })),
    riskMatrix: risksJson.map(risk => ({
      id: risk.id,
      impact: risk.exploitation_impact,
      likelihood: risk.exploitation_likelihood,
      severity: risk.severity,
      title: risk.title
    })),
    mitigationStatus: Object.entries(
      risksJson.reduce((acc, risk) => {
        acc[risk.risk_status] = (acc[risk.risk_status] || 0) + 1
        return acc
      }, {})
    ).map(([status, count]) => ({ name: status, value: count })),
    technicalAssetRisks: Object.entries(
      risksJson.reduce((acc, risk) => {
        console.debug('acc:', acc, 'risk:', risk)
        if (!risk.data_breach_technical_assets || !acc) return {}
        risk.data_breach_technical_assets.forEach(asset => {
          acc[asset] =
            (acc[asset] || 0) + severityMap[risk.severity.toLowerCase()].weight
        })
        return acc
      }, {})
    ).map(([asset, weight]) => ({ name: asset, value: weight }))
  }
}

const Dashboard = ({ risksJson }) => {
  // Sample data
  const data = [
    { x: 1, y: 23 },
    { x: 2, y: 3 },
    { x: 3, y: 15 },
    { x: 4, y: 35 },
    { x: 5, y: 45 },
    { x: 6, y: 25 },
    { x: 7, y: 17 },
    { x: 8, y: 32 },
    { x: 9, y: 43 }
  ]

  return (
    <ScatterChart width={400} height={400}>
      <CartesianGrid />
      <XAxis type='number' dataKey='x' />
      <YAxis type='number' dataKey='y' />
      <Scatter data={data} fill='green' />
    </ScatterChart>
  )
}

export default Dashboard
