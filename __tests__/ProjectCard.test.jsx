import { render, screen } from '@testing-library/react'
import ProjectCard from '../src/app/components/ProjectCard'

const mockProject = {
  id: 1,
  title: 'Test Project',
  description: {
    intro: 'This is a test project.',
    features: ['Feature 1', 'Feature 2'],
    outro: 'Conclusion.'
  },
  image: '/images/test.png',
  gitUrl: 'https://github.com/test',
  deployUrl: 'https://test.vercel.app'
}

describe('ProjectCard', () => {
  it('renders project title', () => {
    render(<ProjectCard {...mockProject} />)
    expect(screen.getByText('Test Project')).toBeInTheDocument()
  })

  it('renders project description intro', () => {
    render(<ProjectCard {...mockProject} />)
    expect(screen.getByText('This is a test project.')).toBeInTheDocument()
  })

  it('renders continue reading button', () => {
    render(<ProjectCard {...mockProject} />)
    expect(screen.getByText('Continue Reading...')).toBeInTheDocument()
  })
})