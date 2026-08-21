import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Mail } from 'lucide-react'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <Link to="/" className="navbar-logo">
          <div className="ke-logo-wrap">
            <img src="/images/KElogo.png" alt="Karna Enterprises" className="ke-logo-img" />
          </div>
          <span className="logo-company">Karna Enterprises</span>
          <div className="logo-divider" />
          <div className="dura-logo-wrap">
            <img src="/images/DuraLogo.png" alt="Durapack" className="dura-logo-img" />
          </div>
        </Link>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} color="#fff" /> : <Menu size={22} color="#fff" />}
        </button>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link></li>
          <li><Link to="/clients" onClick={() => setMenuOpen(false)}>Clients</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          <li>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=info@karnaenterprises.in"
              className="nav-cta"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              <Mail size={16} /> Mail Us
            </a>
          </li>
        </ul>

      </div>
    </nav>
  )
}

export default Navbar