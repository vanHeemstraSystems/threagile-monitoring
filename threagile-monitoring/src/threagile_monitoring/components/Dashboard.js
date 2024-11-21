import React, { useState, useEffect, Component } from 'react'
import { Barchart } from 'recharts'

// Temporarily hard coded, make dynamic import
const risksJson = {}

// Parse Threagile risks.json structure
const parseThreagileData = risksJson => {
    return ('foo')
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

  if (!data) return <div>Loading...</div>;
  
}

export default Dashboard
