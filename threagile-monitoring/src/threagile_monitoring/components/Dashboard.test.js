import { render, screen, fireEvent, within, cleanup } from '@testing-library/react'
import Dashboard from './Dashboard'

// Mock data
const mockRisksData = {
  risks: [
    {
      id: '1',
      severity: 'critical',
      category: 'Authentication',
      exploitation_impact: 4,
      exploitation_likelihood: 3,
      title: 'Authentication Bypass',
      risk_status: 'in-progress',
      data_breach_technical_assets: ['web-server']
    }
  ]
}

const multipleRisksData = {
  risks: [
    ...mockRisksData.risks,
    {
      id: '2',
      severity: 'critical',
      category: 'Authorization',
      exploitation_impact: 4,
      exploitation_likelihood: 4,
      title: 'Privilege Escalation',
      risk_status: 'open',
      data_breach_technical_assets: ['database']
    }
  ]
}

const noCriticalRisks = {
  risks: [
    {
      id: '1',
      severity: 'high',
      category: 'Authentication',
      exploitation_impact: 3,
      exploitation_likelihood: 3,
      title: 'Weak Password Policy',
      risk_status: 'in-progress',
      data_breach_technical_assets: ['web-server']
    }
  ]
}

describe('Dashboard Component', () => {
  beforeEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

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

    describe('Critical Risks Card', () => {
      it('displays correct number for single critical risk', () => {
        const { container } = render(<Dashboard risksJson={mockRisksData} />)
        const criticalRisksCard = container.querySelector('[data-testid="critical-risks-card"]')
        const count = criticalRisksCard.querySelector('[data-testid="critical-risks-count"]')
        expect(count).toHaveTextContent('1')
      })

      it('displays correct number for multiple critical risks', () => {
        const { container } = render(<Dashboard risksJson={multipleRisksData} />)
        const criticalRisksCard = container.querySelector('[data-testid="critical-risks-card"]')
        const count = criticalRisksCard.querySelector('[data-testid="critical-risks-count"]')
        expect(count).toHaveTextContent('2')
      })

      it('displays zero when no critical risks exist', () => {
        const { container } = render(<Dashboard risksJson={noCriticalRisks} />)
        const criticalRisksCard = container.querySelector('[data-testid="critical-risks-card"]')
        const count = criticalRisksCard.querySelector('[data-testid="critical-risks-count"]')
        expect(count).toHaveTextContent('0')
      })
    })

    test('parses risk data correctly', () => {
      const { container } = render(<Dashboard risksJson={mockRisksData} />)
      const criticalCount = container.querySelector('[data-testid="critical-risks-count"]')
      expect(criticalCount).toHaveTextContent('1')
    })
  })
})
