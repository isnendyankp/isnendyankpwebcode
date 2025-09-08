import '@testing-library/jest-dom'

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
    return <img {...props} />
  },
}))

// Mock react-type-animation
jest.mock('react-type-animation', () => ({
  TypeAnimation: ({ sequence, wrapper, cursor, ...props }) => {
    const Component = wrapper || 'span'
    return <Component {...props}>{sequence[0]}</Component>
  },
}))

// Mock IntersectionObserver
global.IntersectionObserver = jest.fn(() => ({
  observe: jest.fn(),
  disconnect: jest.fn(),
  unobserve: jest.fn(),
}))

// Mock window.scrollTo
global.scrollTo = jest.fn()