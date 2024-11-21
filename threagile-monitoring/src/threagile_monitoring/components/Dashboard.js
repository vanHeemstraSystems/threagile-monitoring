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
    })),
    risksByCategory: Object.entries(
      risksJson.reduce((acc, risk) => {
        acc[risk.category] = (acc[risk.category] || 0) + 1
        return acc
      }, {})
    ).map(([category, value]) => ({ name: category, value })),
    riskMatrix: risksJson.map(risk => ({
      id: risk.id,
      impact: risk.riskAssessment.impact,
      likelihood: risk.riskAssessment.likelihood,
      severity: risk.severity,
      title: risk.title
    })),
    mitigationStatus: Object.entries(
      risksJson.reduce((acc, risk) => {
        acc[risk.status] = (acc[risk.status] || 0) + 1
        return acc
      }, {})
    ).map(([status, count]) => ({ name: status, value: count })),
    technicalAssetRisks: Object.entries(
      risksJson.reduce((acc, risk) => {
        risk.affectedTechnicalAssets.forEach(asset => {
          acc[asset] =
            (acc[asset] || 0) + severityMap[risk.severity.toLowerCase()].weight
        })
        return acc
      }, {})
    ).map(([asset, weight]) => ({ name: asset, value: weight }))
  }
}

const Dashboard = ({ risksJson }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [selectedSevereity, setSelectedSeverity] = useState(null)
  const [timeRange, setTimeRange] = useState('1M')
  const [data, setData] = useState(null)
  useEffect(() => {
    console.debug('Dashboard with risksJson started: ', risksJson)
    if (risksJson) {
      setData(parseThreagileData(risksJson))
    }
  }, [risksJson])

  if (!data) return <div>Loading...</div>

  // Custom Active Shape for Pie Chart
  const renderActiveShape = props => {
    const {
      cx,
      cy,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
      value
    } = props

    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor='middle' fill={fill}>
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
      </g>
    )
  }

  // Interactive Risk Matrix
  const RiskMatrix = ({ data }) => {
    const severityColors = {
      critical: '#dc2626',
      high: '#ea580c',
      elevated: '#eab308',
      medium: '#84cc16',
      low: '#22c55e'
    }

    return (
      <ScatterChart width={400} height={300}>
        <CartesianGrid />
        <XAxis type='number' dataKey='likelihood' name='Likelihood' />
        <YAxis type='number' dataKey='impact' name='Impact' />
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              const risk = payload[0].payload
              return (
                <div className='bg-white p-2 shadow rounded'>
                  <p className='font-bold'>{risk.title}</p>
                  <p>Impact: {risk.impact}</p>
                  <p>Likelihood: {risk.likelihood}</p>
                  <p>Severity: {risk.severity}</p>
                </div>
              )
            }
            return null
          }}
        />
        <Scatter
          data={data.riskMatrix}
          fill='#8884d8'
          shape={props => (
            <circle
              cx={props.cx}
              cy={props.cy}
              r={8}
              fill={severityColors[props.payload.severity.toLowerCase()]}
              opacity={0.8}
            />
          )}
        />
      </ScatterChart>
    )
  }

  // Risk Trend Over Time
  const RiskTrendChart = ({ timeRange }) => {
    // Simulate historical data based on current risks
    const generateHistoricalData = () => {
      const periods = {
        '1M': 30,
        '3M': 90,
        '6M': 180,
        '1Y': 365
      }

      const days = periods[timeRange]
      return Array.from({ length: days }, (_, i) => ({
        date: new Date(Date.now() - (days - i) * 24 * 60 * 60 * 1000),
        risks: Math.floor(Math.random() * 20) + 30
      }))
    }

    return (
      <AreaChart width={400} height={300} data={generateHistoricalData()}>
        <defs>
          <linearGradient id='riskColor' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor='#3b82f6' stopOpacity={0.8} />
            <stop offset='95%' stopColor='#3b82f6' stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey='date'
          tickFormatter={date => new Date(date).toLocaleDateString()}
        />
        <YAxis />
        <CartesianGrid strokeDasharray='3 3' />
        <Tooltip labelFormatter={date => new Date(date).toLocaleDateString()} />
        <Area
          type='monotone'
          dataKey='risks'
          stroke='#3b82f6'
          fillOpacity={1}
          fill='url(#riskColor)'
        />
      </AreaChart>
    )
  }
  return (
    <div className='p-6 space-y-8'>
      {/* Dashboard Header */}
      <div className='flex justify-between items-center'>
        <h2 className='text-2xl font-bold'>Security Risk Dashboard</h2>
        <div className='flex gap-4'>
          <select
            className='p-2 border rounded'
            value={timeRange}
            onChange={e => setTimeRange(e.target.value)}
          >
            <option value='1M'>Last Month</option>
            <option value='3M'>Last 3 Months</option>
            <option value='6M'>Last 6 Months</option>
            <option value='1Y'>Last Year</option>
          </select>
          <button
            className='p-2 bg-blue-500 text-white rounded flex items-center gap-2'
            onClick={() => window.location.reload()}
          >
            <Settings size={16} /> Refresh
          </button>
        </div>
      </div>
      {/* Risk Summary Cards  ==   WE ARE HERE */}
    </div>
  )
}

export default Dashboard
