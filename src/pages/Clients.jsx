import { MessageCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Reveal from '../components/Reveal'
import FAQSection from '../components/FAQSection'
import './Clients.css'

const featuredClients = [
  {
    name: 'Mother Dairy Fruit & Vegetables Pvt Ltd',
    description: 'Leading dairy and food products company',
    logo: '/images/clients/motherDairy.png',
  },
  {
    name: 'Alleima India',
    description: 'Precision materials and special alloys manufacturer',
    logo: '/images/clients/alleimaLogo.png',
  },
  {
    name: 'Fanuc India Pvt Ltd',
    description: 'Industrial automation and robotics solutions provider',
    logo: '/images/clients/fanuc.png',
  },
  {
    name: 'Soch Apparels Pvt Ltd',
    description: 'Leading Indian fashion and lifestyle retail brand',
    logo: '/images/clients/sochLogo.jpg',
  },
  {
    name: 'Printo Document Services Pvt Ltd',
    description: "India's leading chain of print and design stores",
    logo: '/images/clients/printoLogo.png',
  }
]

const allClients = [ 
  'Impress Apparel Pvt Ltd',
  'IQF Foods Pvt Ltd',
  'Namdhari Seeds Pvt Ltd',
  'Sri Sri Publication',
  'Transworld International',
]

const clientsFaqs = [
  {
    question: 'Which industries does Karna Enterprises serve?',
    answer: 'We serve industries including manufacturing, e-commerce, electronics, FMCG, and logistics across Bangalore, Hosur, and South India.',
  },
  {
    question: 'Does Karna Enterprises supply to businesses outside Bangalore?',
    answer: 'Yes, we supply packaging materials to clients across Karnataka, Hosur, Tamil Nadu, and other parts of South India.',
  },
  {
    question: 'Can Karna Enterprises handle bulk orders for large clients?',
    answer: 'Yes, we manufacture and supply packaging materials in bulk quantities to meet the demands of large-scale clients and businesses.',
  },
  {
    question: 'What packaging solutions do you provide for electronics manufacturers?',
    answer: 'We provide ESD Pink Bubble Pouches, ESD Pouches, and Adhesive Bubble Bags specifically designed for static-sensitive electronic components.',
  },
  {
    question: 'How can my business become a client of Karna Enterprises?',
    answer: 'You can reach out to our team through our website, phone, or email to discuss your packaging requirements and get started.',
  },
]

const clientsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "name": "Our Clients | Karna Enterprises",
      "url": "https://karnaenterprises.in/clients",
      "description": "Karna Enterprises proudly serves businesses across Bangalore, Hosur & South India with reliable EPE Foam, Thermocol, Tapes & Corrugated Packaging solutions.",
      "about": {
        "@type": "Organization",
        "name": "Karna Enterprises",
        "url": "https://karnaenterprises.in/",
        "logo": "https://karnaenterprises.in/images/KElogo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Dinnepalya, CK Palya, Electronic City Road",
          "addressLocality": "Bangalore",
          "addressRegion": "Karnataka",
          "postalCode": "560083",
          "addressCountry": "IN"
        },
        "email": "info@karnaenterprises.in",
        "telephone": "+91 99015 06336",
        "areaServed": ["Bangalore", "Karnataka", "Hosur", "Tamil Nadu", "South India"]
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Which industries does Karna Enterprises serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We serve industries including manufacturing, e-commerce, electronics, FMCG, and logistics across Bangalore, Hosur, and South India."
          }
        },
        {
          "@type": "Question",
          "name": "Does Karna Enterprises supply to businesses outside Bangalore?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we supply packaging materials to clients across Karnataka, Hosur, Tamil Nadu, and other parts of South India."
          }
        },
        {
          "@type": "Question",
          "name": "Can Karna Enterprises handle bulk orders for large clients?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we manufacture and supply packaging materials in bulk quantities to meet the demands of large-scale clients and businesses."
          }
        },
        {
          "@type": "Question",
          "name": "What packaging solutions do you provide for electronics manufacturers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We provide ESD Pink Bubble Pouches, ESD Pouches, and Adhesive Bubble Bags specifically designed for static-sensitive electronic components."
          }
        },
        {
          "@type": "Question",
          "name": "How can my business become a client of Karna Enterprises?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can reach out to our team through our website, phone, or email to discuss your packaging requirements and get started."
          }
        }
      ]
    }
  ]
}

function Clients() {
  return (
    <div className="clients-page">
      <Helmet>
        <title>Our Clients | Trusted Packaging Supplier in Bangalore & Hosur – Karna Enterprises</title>
        <meta
          name="description"
          content="Karna Enterprises proudly serves businesses across Bangalore, Hosur & South India with reliable EPE Foam, Thermocol, Tapes & Corrugated Packaging solutions. See our client base."
        />
        <link rel="canonical" href="https://karnaenterprises.in/clients" />
        <script type="application/ld+json">
          {JSON.stringify(clientsSchema)}
        </script>
      </Helmet>

      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="page-header-inner">
          <Reveal>
            <p className="page-label">Who trusts us</p>
            <h1>Our Clients – Trusted Packaging Partner in Bangalore, Hosur & South India</h1>
            <p className="page-sub">
              From automotive to food and beverage to apparel over 2,300 businesses
              across India trust Karna Enterprises for their packaging needs.
            </p>
          </Reveal>
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

      {/* H2: BUSINESSES WE SERVE SECTION */}
      <section className="clients-serve-section">
        <div className="clients-inner">
          <Reveal>
            <p className="section-label">Trusted Partnerships</p>
            <h2 className="section-title">Businesses We Serve Across Bangalore, Karnataka, Hosur & Tamil Nadu</h2>
            <div className="clients-serve-content">
              <p>
                Karna Enterprises has built long-term relationships with businesses across Bangalore, Karnataka, Hosur, and Tamil Nadu by delivering consistent quality and timely supply of packaging materials. Our client base spans manufacturing units, e-commerce warehouses, electronics companies, and logistics providers across South India.
              </p>
              <p>
                We supply EPE Foam Corner, EPE Foam Fitment, and EPE Boxes to industries requiring cushioning solutions, while our ESD Pink Bubble Pouches and Adhesive Bubble Bags serve electronics and component manufacturers who need static-safe packaging. Our Thermocol Boxes and Thermocol Fitment solutions are trusted by businesses needing insulated and protective packaging.
              </p>
              <p>
                From BOPP Adhesive Tapes and Custom Printed Tapes to PET Strap, PP Strap, and Corrugated Boxes, we support clients across diverse sectors including FMCG, pharmaceuticals, electronics, and general manufacturing in Bangalore and Hosur.
              </p>
              <p>
                Our commitment to reliability and product consistency has made Karna Enterprises a preferred packaging partner for growing businesses across South India. We look forward to serving your packaging needs with the same dedication and quality our existing clients trust us for.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FEATURED CLIENTS */}
      <section className="featured-section">
        <div className="clients-inner">
          <Reveal>
            <p className="section-label">Key partnerships</p>
            <h2 className="section-title">Featured Clients</h2>
            <p className="section-sub">
              These industry leaders rely on us for consistent quality, timely delivery,
              and packaging solutions tailored to their needs.
            </p>
          </Reveal>

          <div className="featured-grid">
            {featuredClients.map(({ name, description, logo }, i) => (
              <Reveal key={name} delay={i * 70}>
                <div className="featured-card">
                  <div className="featured-logo-wrap">
                    <img src={logo} alt={`${name} logo`} className="featured-logo-img" />
                  </div>
                  <h3>{name}</h3>
                  <p>{description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ALL CLIENTS */}
      <section className="all-clients-section">
        <div className="clients-inner">
          <Reveal>
            <p className="section-label">Our client network</p>
            <h2 className="section-title">All Clients</h2>
            <p className="section-sub">
              A growing network of businesses across industries that trust us with their packaging requirements.
            </p>
          </Reveal>

          <div className="all-clients-grid">
            {allClients.map((name, i) => (
              <Reveal key={name} delay={(i % 6) * 70}>
                <div className="client-name-chip">{name}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5 FAQS FOR CLIENTS PAGE */}
      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Answers to common questions from prospective and existing clients across South India."
        faqs={clientsFaqs}
      />

      {/* CTA */}
      <Reveal tag="section" className="clients-cta">
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
      </Reveal>
    </div>
  )
}

export default Clients