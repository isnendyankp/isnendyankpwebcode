import { render, screen } from '@testing-library/react'
import HeroSection from '../src/app/components/HeroSection'

describe('HeroSection', () => {
  it('renders without crashing', () => {
    render(<HeroSection />)
    expect(screen.getByText("Hello, I'm")).toBeInTheDocument()
  })

  it('renders main buttons', () => {
    render(<HeroSection />)
    expect(screen.getByText('Hire Me')).toBeInTheDocument()
    expect(screen.getByText('Download CV')).toBeInTheDocument()
  })

  it('renders hero image', () => {
    render(<HeroSection />)
    expect(screen.getByAltText('hero image')).toBeInTheDocument()
  })
})