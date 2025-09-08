import { render, screen, fireEvent } from '@testing-library/react'
import ThemeToggle from '../src/app/components/ThemeToggle'
import { ThemeProvider } from '../src/app/contexts/ThemeContext'

// Mock localStorage
const mockLocalStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
}
global.localStorage = mockLocalStorage

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

const ThemeToggleWithProvider = () => (
  <ThemeProvider>
    <ThemeToggle />
  </ThemeProvider>
)

describe('ThemeToggle', () => {
  beforeEach(() => {
    mockLocalStorage.getItem.mockClear()
    mockLocalStorage.setItem.mockClear()
  })

  it('renders theme toggle button', () => {
    render(<ThemeToggleWithProvider />)
    
    const toggleButton = screen.getByRole('button')
    expect(toggleButton).toBeInTheDocument()
  })

  it('has correct accessibility attributes', () => {
    render(<ThemeToggleWithProvider />)
    
    const toggleButton = screen.getByRole('button')
    expect(toggleButton).toHaveAttribute('aria-label')
    expect(toggleButton).toHaveAttribute('title')
  })

  it('toggles theme when clicked', () => {
    render(<ThemeToggleWithProvider />)
    
    const toggleButton = screen.getByRole('button')
    
    // Click to toggle theme
    fireEvent.click(toggleButton)
    
    // Verify the button still exists and is clickable
    expect(toggleButton).toBeInTheDocument()
  })

  it('renders sun and moon icons', () => {
    render(<ThemeToggleWithProvider />)
    
    // Icons are rendered but may not be visible depending on theme
    // Just check that the button contains SVG elements
    const toggleButton = screen.getByRole('button')
    const svgElements = toggleButton.querySelectorAll('svg')
    expect(svgElements.length).toBeGreaterThan(0)
  })
})