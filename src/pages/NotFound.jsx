import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div style={{
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '48px 24px',
      fontFamily: 'Inter, sans-serif'
    }}>
      <h1 style={{ fontSize: '72px', fontWeight: '700', color: '#C41E3A', lineHeight: 1 }}>404</h1>
      <h2 style={{ fontSize: '24px', color: '#1A1A2E', margin: '16px 0 8px' }}>Page not found</h2>
      <p style={{ color: '#666', marginBottom: '32px' }}>The page you are looking for does not exist.</p>
      <Link to="/" style={{
        background: '#93172C',
        color: '#fff',
        padding: '12px 28px',
        borderRadius: '8px',
        textDecoration: 'none',
        fontWeight: '600',
        fontSize: '14px'
      }}>
        Back to Home
      </Link>
    </div>
  )
}

export default NotFound