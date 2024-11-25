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
  // Sample data for ScatterGraph
//   const sample_data = [
//     { x: 1, y: 23 },
//     { x: 2, y: 3 },
//     { x: 3, y: 15 },
//     { x: 4, y: 35 },
//     { x: 5, y: 45 },
//     { x: 6, y: 25 },
//     { x: 7, y: 17 },
//     { x: 8, y: 32 },
//     { x: 9, y: 43 }
//   ]
  const [activeIndex, setActiveIndex] = useState(0)
  const [selectedSeverity, setSelectedSeverity] = useState(null)
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
    console.debug('renderActiveShape')
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
  const RiskMatrix = data => {
    console.debug('RiskMatrix, data: ', data)
    const severityColors = {
      critical: '#dc2626',
      high: '#ea580c',
      elevated: '#eab308',
      medium: '#84cc16',
      low: '#22c55e'
    }

    // return (
    //   <ResponsiveContainer width='100%' height={400}>
    //     <ScatterChart
    //       width={400}
    //       height={300}
    //       margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
    //     >
    //       <CartesianGrid />
    //       <XAxis type='number' dataKey='x' name='stature' unit='cm' />
    //       <YAxis type='number' dataKey='y' name='weight' unit='kg' />
    //       <Tooltip cursor={{ strokeDasharray: '3 3' }} />
    //       <Scatter name='A school' data={sample_data} fill='#8884d8' />
    //     </ScatterChart>
    //   </ResponsiveContainer>
    // )

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

      {/* Risk Summary Cards */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div className='bg-white p-4 rounded-lg shadow flex items-center gap-4'>
          <AlertCircle className='text-red-500' size={24} />
          <div>
            <h3 className='text-lg font-semibold'>Critical Risks</h3>
            <p className='text-2xl font-bold'>
              {data.risksBySeverity.find(
                r => r.name.toLowerCase() === 'critical'
              ).count || 0}
            </p>
          </div>
        </div>
        <div className='bg-white p-4 rounded-lg shadow flex items-center gap-4'>
          <Activity className='text-yellow-500' size={24} />
          <div>
            <h3 className='text-lg font-semibold'>Active Mitigations</h3>
            <p className='text-2xl font-bold'>
              {data.mitigationStatus.find(s => s.name === 'in-progress')
                .value || 0}{' '}
            </p>
          </div>
        </div>
        <div className='bg-white p-4 rounded-lg shadow flex items-center gap-4'>
          <TrendingDown className='text-green-500' size={24} />
          <div>
            <h3 className='text-lg font-semibold'>Risk Reduction</h3>
            <p className='text-2xl font-bold'>23%</p>
          </div>
        </div>
      </div>

      {/* Main Dashboard Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {/* Risk Matrix */}
        <div className='bg-white p-4 rounded-lg shadow col-span-2'>
          <h3 className='text-lg font-semibold mb-4'>Risk Matrix</h3>
          <RiskMatrix
            data={[
              { x: 100, y: 200, z: 200 },
              { x: 120, y: 100, z: 260 },
              { x: 170, y: 300, z: 400 },
              { x: 140, y: 250, z: 280 },
              { x: 150, y: 400, z: 500 },
              { x: 110, y: 280, z: 200 }
            ]}
          />
          <p className='mt-2 text-sm text-gray-600'>
            Interactive risk matrix showing impact vs likelihood. Click on
            points to see risk details.
          </p>
        </div>

        {/* Risk Categories */}
        <div className='bg-white p-4 rounded-lg shadow'>
          <h3 className='text-lg font-semibold mb-4'>Risk Categories</h3>
          <PieChart width={400} height={300}>
            <Pie
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              data={data.risksByCategory}
              cx='50%'
              cy='50%'
              innerRadius={60}
              outerRadius={80}
              dataKey='value'
              onMouseEnter={(_, index) => setActiveIndex(index)}
            >
              {data.risksByCategory.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={`hsl(${index * 45}, 70%, 50%)`}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

        {/* Risk Trend */}
        <div className='bg-white p-4 rounded-lg shadow col-span-2'>
          <h3 className='text-lg font-semibold mb-4'>Risk Trend</h3>
          <RiskTrendChart timeRange={timeRange} />
          <p className='mt-2 text-sm text-gray-600'>
            Historical view of risk levels over time.
          </p>
        </div>

        {/* Technical Asset Risk Heatmap */}
        <div className='bg-white p-4 rounded-lg shadow'>
          <h3 className='text-lg font-semibold mb-4'>Asset Risk Heatmap</h3>
          <Treemap
            width={400}
            height={300}
            data={data.technicalAssetRisks}
            dataKey='value'
            ratio={4 / 3}
            stroke='#fff'
            fill='#8884d8'
            content={({
              root,
              depth,
              x,
              y,
              width,
              height,
              index,
              payload,
              colors,
              rank,
              name
            }) => (
              <g>
                <rect
                  x={x}
                  y={y}
                  width={width}
                  height={height}
                  style={{
                    fill: `hsl(${index * 45}, 70%, 50%)`,
                    stroke: '#fff',
                    strokeWidth: 2,
                    strokeOpacity: 1 / (depth + 1e-10)
                  }}
                />
                {depth === 1 && (
                  <text
                    x={x + width / 2}
                    y={y + height / 2}
                    textAnchor='middle'
                    fill='#fff'
                    fontSize={12}
                  >
                    {name}
                  </text>
                )}
              </g>
            )}
          />
        </div>
      </div>

      {/* Custom Controls */}
      <div className='bg-white p-4 rounded-lg shadow'>
        <h3 className='text-lg font-semibold mb-4'>Visualization Controls</h3>
        <div className='flex gap-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Severity Filter
            </label>
            <select
              className='mt-1 block w-full p-2 border rounded'
              value={selectedSeverity || ''}
              onChange={e => setSelectedSeverity(e.target.value || null)}
            >
              <option value=''>All Severities</option>
              {data.risksBySeverity.map(risk => (
                <option key={risk.name} value={risk.name}>
                  {risk.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Time Range
            </label>
            <select
              className='mt-1 block w-full p-2 border rounded'
              value={timeRange}
              onChange={e => setTimeRange(e.target.value)}
            >
              <option value='1M'>Last Month</option>
              <option value='3M'>Last 3 Months</option>
              <option value='6M'>Last 6 Months</option>
              <option value='1Y'>Last Year</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
