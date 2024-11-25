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
