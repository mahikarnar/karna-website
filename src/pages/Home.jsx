import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import {
  ArrowRight,
  Clock,
  Factory,
  Handshake,
  IndianRupee,
  MessageCircle,
  Phone,
  Settings,
  ShieldCheck,
} from 'lucide-react'
import './Home.css'

const whyCards = [
  { icon: Factory, title: 'Direct Manufacturer', desc: 'No middlemen. We make it, we sell it, better prices and consistent quality every order.' },
  { icon: Settings, title: 'Custom Solutions', desc: 'Printed tapes, custom sizes, branded packaging, tailored to your exact specifications.' },
  { icon: Clock, title: 'On-Time Delivery', desc: 'Quick turnaround so your production line never stops. We take deadlines seriously.' },
  { icon: ShieldCheck, title: 'Quality Guaranteed', desc: 'Every product passes strict quality checks before it leaves our facility.' },
  { icon: IndianRupee, title: 'Competitive Pricing', desc: 'Bulk pricing for businesses of all sizes. Free quote within 24 hours.' },
  { icon: Handshake, title: 'Long-Term Partnership', desc: 'We build relationships, not just transactions. Our clients come back year after year.' },
]

const products = [
  { img: '/images/products/ThermocolBox.png', name: 'Thermocol Boxes', desc: 'Custom sizes for fragile product protection' },
  { img: '/images/products/BOPPplain.png', name: 'BOPP Tapes', desc: 'Plain & printed, bulk rolls available' },
  { img: '/images/products/AirBubblePouch.png', name: 'Air Bubble Pouches', desc: 'For fragile goods, electronics & glassware' },
  { img: '/images/products/EPEfoamFitments.png', name: 'EPE Foam Fitments', desc: 'Precision cut inserts for any product shape' },
]

const clients = [
  'Alleima India','Mother Dairy','Printo','Fanuc India','Soch Apparels','Impress Apparel', 'IQF Foods', 'Namdhari', 'Sri Sri Publication', 'Transworld'
]

function Home() {
  return (
    <div className="home">

      <Helmet>
        <title>Karna Enterprises | Durapack Adhesive Tape </title>
        <meta name="description" content="Karna Enterprises is a Bangalore-based manufacturer and supplier of BOPP tapes, thermocol boxes, EPE foam, air bubble pouches, corrugated boxes and custom packaging solutions since 2010." />
        <meta name="keywords" content="packaging materials Bangalore, BOPP tapes, thermocol boxes, EPE foam, corrugated boxes, air bubble pouches, packaging manufacturer Bangalore" />
        <link rel="canonical" href="https://www.karnaenterprises.in/" />
      </Helmet>

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-badge">Bangalore's Trusted Packaging Partner Since 2010</div>
          <h1>Packaging Solutions That <span>Protect What Matters</span></h1>
          <p className="hero-sub">
            Manufacturer and supplier of BOPP tapes, thermocol, EPE foam,
            corrugated boxes and custom packaging for industries across India.
          </p>
          <div className="hero-btns">
            <a href="tel:+919901506336" className="btn-primary">
              <Phone size={16} /> Call Now
            </a>
            <a
              href="https://wa.me/919901506336?text=Hi I am interested in your packaging products"
              className="btn-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={16} /> WhatsApp Us
            </a>
            <Link to="/products" className="btn-ghost">
              View Products <ArrowRight size={14} />
            </Link>
          </div>
        </div>
        <div className="hero-image-wrap">
          <img
            src="/images/KEoffice.jpeg"
            alt="Karna Enterprises Office"
            className="hero-office-img"
          />
        </div>
        <div className="hero-ring hero-ring-1"></div>
        <div className="hero-ring hero-ring-2"></div>
      </section>

      {/* STATS */}
      <section className="stats-bar">
        <div className="stat-item">
          <span className="stat-num">2,342+</span>
          <span className="stat-label">Happy Clients</span>
        </div>
        <div className="stat-item">
          <span className="stat-num">6,302+</span>
          <span className="stat-label">Orders Completed</span>
        </div>
        <div className="stat-item">
          <span className="stat-num">100%</span>
          <span className="stat-label">Satisfaction Rate</span>
        </div>
        <div className="stat-item">
          <span className="stat-num">16+</span>
          <span className="stat-label">Years of Service</span>
        </div>
      </section>

      {/* WHY US */}
      <section className="section">
        <div className="section-inner">
          <p className="section-label">Why choose us</p>
          <h2 className="section-title">Built on reliability, trusted by industry</h2>
          <p className="section-sub">
            From Fanuc to Mother Dairy, over 2,000 businesses rely on us
            for consistent quality and on-time delivery.
          </p>
          <div className="why-grid">
            {whyCards.map(({ icon: Icon, title, desc }) => (
              <div className="why-card" key={title}>
                <div className="why-icon-wrap"><Icon size={20} /></div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section section-alt">
        <div className="section-inner">
          <p className="section-label">Our products</p>
          <h2 className="section-title">Everything your business needs to pack right</h2>
          <p className="section-sub">
            A complete range of inner and outer packaging materials for manufacturing,
            food, pharma, apparel and more.
          </p>
          <div className="product-grid">
            {products.map(({ img, name, desc }) => (
              <div className="product-card" key={name}>
                <div className="product-thumb">
                  <img src={img} alt={name} className="product-thumb-img"/></div>
                <h4>{name}</h4>
                <p>{desc}</p>
                <a
                  href="https://wa.me/919901506336?text=Hi I would like to enquire about your packaging products"
                  className="product-enquire"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={13} /> Enquire Now
                </a>
              </div>
            ))}
          </div>
          <Link to="/products" className="btn-outline">
            View all products <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="section section-dark">
        <div className="section-inner">
          <p className="section-label" style={{ color: '#F87191' }}>Our clients</p>
          <h2 className="section-title" style={{ color: '#FFFFFF' }}>
            Trusted by industry leaders across India
          </h2>
          <p className="section-sub" style={{ color: '#9CA3AF' }}>
            From automotive to food and beverage to apparel, these brands trust us with their packaging.
          </p>
          <div className="clients-grid">
            {clients.map(name => (
              <div className="client-chip" key={name}>{name}</div>
            ))}
          </div>
          <Link to="/clients" className="btn-outline-light">
            View all clients <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="cta-band">
        <div className="cta-inner">
          <div>
            <h2>Need packaging materials for your business?</h2>
            <p>Get a free quote within 24 hours. No commitment required.</p>
          </div>
          <div className="cta-btns">
            <Link to="/contact" className="btn-white">
              Request Free Quote
            </Link>
            <a
              href="https://wa.me/919901506336?text=Hi I would like a quote for packaging materials"
              className="btn-wa-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={15} /> WhatsApp for Quick Quote
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home