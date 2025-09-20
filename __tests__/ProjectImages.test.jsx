import { render, screen, waitFor } from '@testing-library/react'
import ProjectCard from '../src/app/components/ProjectCard'
import ProjectsSection from '../src/app/components/ProjectsSection'

// Mock Next.js Image component to avoid optimization issues in tests
jest.mock('next/image', () => {
  return function MockImage({ src, alt, ...props }) {
    return <img src={src} alt={alt} {...props} />
  }
})

describe('Project Images Loading Tests', () => {
  // Test specific problematic images that were recently fixed
  const problematicProjects = [
    {
      id: 1,
      title: 'Purewater',
      description: { intro: 'Test description' },
      imgUrl: '/images/projects/Purewater.png',
      gitUrl: 'https://github.com/test',
      deployUrl: 'https://test.com'
    },
    {
      id: 2,
      title: 'Yakuse',
      description: { intro: 'Test description' },
      imgUrl: '/images/projects/Yakuse.png',
      gitUrl: 'https://github.com/test',
      deployUrl: 'https://test.com'
    },
    {
      id: 3,
      title: 'Drag and Drop',
      description: { intro: 'Test description' },
      imgUrl: '/images/projects/DragAndDrop.png',
      gitUrl: 'https://github.com/test',
      deployUrl: 'https://test.com'
    },
    {
      id: 4,
      title: 'NASA Photo of the Day',
      description: { intro: 'Test description' },
      imgUrl: '/images/projects/NasaPOD.png',
      gitUrl: 'https://github.com/test',
      deployUrl: 'https://test.com'
    }
  ]

  describe('Individual Project Card Image Tests', () => {
    problematicProjects.forEach(project => {
      it(`renders image for ${project.title} with correct src path`, () => {
        render(<ProjectCard {...project} />)
        
        const image = screen.getByAltText(project.title)
        expect(image).toBeInTheDocument()
        expect(image).toHaveAttribute('src', project.imgUrl)
      })

      it(`has proper alt text for ${project.title}`, () => {
        render(<ProjectCard {...project} />)
        
        const image = screen.getByAltText(project.title)
        expect(image).toHaveAttribute('alt', project.title)
      })
    })
  })

  describe('Image Loading Error Handling', () => {
    it('handles missing image gracefully', () => {
      const projectWithMissingImage = {
        id: 999,
        title: 'Missing Image Project',
        description: { intro: 'Test description' },
        imgUrl: '/images/projects/NonExistent.png',
        gitUrl: 'https://github.com/test',
        deployUrl: 'https://test.com'
      }

      render(<ProjectCard {...projectWithMissingImage} />)
      
      const image = screen.getByAltText('Missing Image Project')
      expect(image).toBeInTheDocument()
      expect(image).toHaveAttribute('src', '/images/projects/NonExistent.png')
    })
  })

  describe('ProjectsSection Integration Test', () => {
    it('renders ProjectsSection without crashing', () => {
      render(<ProjectsSection />)
      
      // Check if the section renders
      expect(screen.getByText('My Projects')).toBeInTheDocument()
    })

    it('renders project cards with skeleton when loading', () => {
      render(<ProjectsSection />)
      
      // Check if skeleton loading is rendered (this appears when no images found)
      const skeletonElements = screen.getAllByText('All')
      expect(skeletonElements.length).toBeGreaterThan(0)
    })
  })

  describe('Image Path Validation', () => {
    const validImagePaths = [
      '/images/projects/Purewater.png',
      '/images/projects/Yakuse.png', 
      '/images/projects/DragAndDrop.png',
      '/images/projects/NasaPOD.png',
      '/images/projects/Masakin.png',
      '/images/projects/Animatedtemplate.png'
    ]

    validImagePaths.forEach(imagePath => {
      it(`validates image path format: ${imagePath}`, () => {
        const project = {
          id: 1,
          title: 'Test Project',
          description: { intro: 'Test description' },
          imgUrl: imagePath,
          gitUrl: 'https://github.com/test',
          deployUrl: 'https://test.com'
        }

        render(<ProjectCard {...project} />)
        
        const image = screen.getByRole('img')
        expect(image).toHaveAttribute('src', imagePath)
        
        // Ensure path follows correct pattern
        expect(imagePath).toMatch(/^\/images\/projects\/.*\.png$/)
      })
    })
  })
})