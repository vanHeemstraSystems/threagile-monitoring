import { render, screen, fireEvent } from '@testing-library/react'
import Dashboard from './Dashboard'

const mockRisksData = [
  {
    id: '1',
    severity: 'critical',
    category: 'Authentication',
    exploitation_impact: 4,
    exploitation_likelihood: 3,
    title: 'Authentication Bypass',
    risk_status: 'in-progress',
    data_breach_technical_assets: ['web-server']
  },
  {
    id: '2',
    severity: 'high',
    category: 'Authorization',
    exploitation_impact: 3,
    exploitation_likelihood: 4,
    title: 'Privilege Escalation',
    risk_status: 'open',
    data_breach_technical_assets: ['database']
  }
]

describe('Dashboard Component', () => {
  test('shows loading state when no data is provided', () => {
    render(<Dashboard />)
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  describe('with risk data', () => {
    beforeEach(() => {
      render(<Dashboard risksJson={mockRisksData} />)
    })

    test('renders dashboard header', () => {
      expect(screen.getByText('Security Risk Dashboard')).toBeInTheDocument()
      expect(screen.getByText('Refresh')).toBeInTheDocument()
    })

    test('renders risk summary cards', () => {
      expect(screen.getByText('Critical Risks')).toBeInTheDocument()
      expect(screen.getByText('Active Mitigations')).toBeInTheDocument()
      expect(screen.getByText('Risk Reduction')).toBeInTheDocument()
    })

    test('renders all chart sections', () => {
      expect(screen.getByText('Test Risk Matrix')).toBeInTheDocument()
      expect(screen.getByText('Risk Matrix')).toBeInTheDocument()
      expect(screen.getByText('Risk Categories')).toBeInTheDocument()
      expect(screen.getByText('Risk Trend')).toBeInTheDocument()
      expect(screen.getByText('Asset Risk Heatmap')).toBeInTheDocument()
    })

    test('renders visualization controls', () => {
      expect(screen.getByText('Visualization Controls')).toBeInTheDocument()
      expect(screen.getByText('Severity Filter')).toBeInTheDocument()
      expect(screen.getByText('Time Range')).toBeInTheDocument()
    })

    test('allows time range selection', () => {
      const timeRangeSelect = screen.getAllByRole('combobox')[0]
      fireEvent.change(timeRangeSelect, { target: { value: '3M' } })
      expect(timeRangeSelect.value).toBe('3M')
    })

    test('allows severity filter selection', () => {
      const severitySelect = screen.getAllByRole('combobox')[1]
      fireEvent.change(severitySelect, { target: { value: 'critical' } })
      expect(severitySelect.value).toBe('critical')
    })
  })

  test('parses risk data correctly', () => {
    render(<Dashboard risksJson={mockRisksData} />)
    
    // Check critical risks count
    const criticalCount = screen.getByText('1')
    expect(criticalCount).toBeInTheDocument()
    
    // Check active mitigations count
    const activeMitigationsCount = screen.getByText('1')
    expect(activeMitigationsCount).toBeInTheDocument()
  })
})
