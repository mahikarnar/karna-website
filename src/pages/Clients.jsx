import { MessageCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import './Clients.css'

const featuredClients = [
  {
    name: 'Alleima India',
    description: 'Precision materials and special alloys manufacturer',
    logo: '/images/clients/alleimaLogo.png',
  },
  {
    name: 'Allied Solutions Pvt Ltd',
    description: 'Industrial products and solutions provider',
    logo: '/images/clients/alliedLogo.png',
  },
  {
    name: 'Printo Document Services Pvt Ltd',
    description: "India's leading chain of print and design stores",
    logo: '/images/clients/printoLogo.png',
  },
  {
    name: 'Purflux Engine Systems Pvt Ltd',
    description: 'Automotive filtration systems manufacturer',
    logo: '/images/clients/purfluxLogo.jpg',
  },
  {
    name: 'Soch Apparels Pvt Ltd',
    description: 'Leading Indian fashion and lifestyle retail brand',
    logo: '/images/clients/sochLogo.jpg',
  },
]

const allClients = [
  'Adharsha Packaging Pvt Ltd',
  'Ags Fourwinds India Pvt Ltd',
  "Arthur's Food Company Pvt Ltd",
  'Fanuc India Pvt Ltd',
  'Impress Apparel Machines Pvt Ltd',
  'IQF Foods Pvt Ltd',
  'Matts Corner India Pvt Ltd',
  'Metal Impact Pvt Ltd',
  'Mother Dairy Fruit & Vegetables Pvt Ltd',
  'Namdhari Seeds Pvt Ltd',
  'Natural Remedies Pvt Ltd',
  'Shakti Automotive',
  'Sri Sri Publication',
  'Transworld International',
  'Wow Craft',
]

function Clients() {
  return (
    <div className="clients-page">
      <Helmet>
        <title>Our Clients | Karna Enterprises Bangalore</title>
        <meta
          name="description"
          content="Karna Enterprises supplies packaging materials to 2,342+ businesses including Fanuc India, Mother Dairy, Sandvik Asia, Soch Apparels and more."
        />
        <link rel="canonical" href="https://www.karnaenterprises.in/clients" />
      </Helmet>

      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="page-header-inner">
          <p className="page-label">Who trusts us</p>
          <h1>Our Clients</h1>
          <p className="page-sub">
            From automotive to food and beverage to apparel over 2,300 businesses
            across India trust Karna Enterprises for their packaging needs.
          </p>
        </div>
      </section>

      {/* STATS STRIP */}
      <div className="clients-stats">
        <div className="clients-stat">
          <span className="clients-stat-num">2,342+</span>
          <span className="clients-stat-label">Clients served</span>
        </div>
        <div className="clients-stat">
          <span className="clients-stat-num">6,302+</span>
          <span className="clients-stat-label">Orders completed</span>
        </div>
        <div className="clients-stat">
          <span className="clients-stat-num">16+</span>
          <span className="clients-stat-label">Years of trust</span>
        </div>
        <div className="clients-stat">
          <span className="clients-stat-num">100%</span>
          <span className="clients-stat-label">Satisfaction rate</span>
        </div>
      </div>

      {/* FEATURED CLIENTS */}
      <section className="featured-section">
        <div className="clients-inner">
          <p className="section-label">Key partnerships</p>
          <h2 className="section-title">Featured Clients</h2>
          <p className="section-sub">
            These industry leaders rely on us for consistent quality, timely delivery,
            and packaging solutions tailored to their needs.
          </p>

          <div className="featured-grid">
            {featuredClients.map(({ name, description, logo }) => (
              <div className="featured-card" key={name}>
                <div className="featured-logo-wrap">
                  <img
                    src={logo}
                    alt={`${name} logo`}
                    className="featured-logo-img"
                  />
                </div>

                <h3>{name}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALL CLIENTS */}
      <section className="all-clients-section">
        <div className="clients-inner">
          <p className="section-label">Our client network</p>
          <h2 className="section-title">All Clients</h2>
          <p className="section-sub">
            A growing network of businesses across industries that trust us
            with their packaging requirements.
          </p>

          <div className="all-clients-grid">
            {allClients.map(name => (
              <div className="client-name-chip" key={name}>
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="clients-cta">
        <div className="clients-cta-inner">
          <div>
            <h2>Join our growing client network</h2>
            <p>Get a free quote and experience the Karna Enterprises difference.</p>
          </div>

          <div className="clients-cta-btns">
            <Link to="/contact" className="btn-white">
              Request Free Quote <ArrowRight size={14} />
            </Link>

            <a
              href="https://wa.me/919901506336?text=Hi, I would like to enquire about your packaging products"
              className="btn-wa-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={15} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Clients