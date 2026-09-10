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
import Reveal from '../components/Reveal'
import FAQSection from '../components/FAQSection'
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
  { img: '/images/products/BOPPplain.png', name: 'BOPP Tapes', desc: 'Plain & printed - with reliable adhesion, bulk rolls available.' },
  { img: '/images/products/AirBubblePouch.png', name: 'Air Bubble Pouches', desc: 'For fragile goods, electronics & glassware' },
  { img: '/images/products/EPEfoamFitments.png', name: 'EPE Foam Fitments', desc: 'Precision cut inserts for any product shape' },
]

const clients = [
  'Alleima India','Mother Dairy','Printo','Fanuc India','Soch Apparels','Impress Apparel', 'IQF Foods', 'Namdhari', 'Sri Sri Publication', 'Transworld'
]

const homeFaqs = [
  {
    question: 'What packaging materials does Karna Enterprises manufacture?',
    answer: 'Karna Enterprises manufactures and supplies EPE Foam, Bubble Wrap, Thermocol, BOPP Tapes, Straps, Stretch Wrap, and Corrugated Boxes for industrial and commercial packaging needs.',
  },
  {
    question: 'Do you supply packaging materials in Hosur and other parts of South India?',
    answer: 'Yes, we supply packaging materials across Bangalore, Hosur, and other locations in South India, catering to businesses of all sizes.',
  },
  {
    question: 'What types of tapes are available from Karna Enterprises?',
    answer: 'We offer a wide range of tapes including BOPP Adhesive Tapes, Brown Tapes, Masking Tapes, Craft Paper Tapes, Filament Tapes, and Custom Printed Tapes.',
  },
  {
    question: 'Can I get custom packaging solutions for my products?',
    answer: 'Yes, we provide custom packaging solutions including Thermocol Fitment Boxes, Molded Fitments, and Custom Printed Tapes tailored to your specific product requirements.',
  },
  {
    question: 'How can I request a quote for bulk packaging materials?',
    answer: 'You can request a quote by contacting us directly through our website, phone, or email, and our team will assist you with pricing and product availability.',
  },
]

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "Karna Enterprises",
      "url": "https://karnaenterprises.in/overviewofhospital.html",
      "logo": "https://karnaenterprises.in/images/KElogo.png",
      "image": "https://karnaenterprises.in/images/KElogo.png",
      "description": "Karna Enterprises supplies EPE Foam, Bubble Wrap, Thermocol, BOPP Tapes, Straps & Corrugated Boxes across Bangalore, Hosur & South India.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Dinnepalya, CK Palya, Electronic City Road",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "postalCode": "560083",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 12.8400,
        "longitude": 77.6000
      },
      "email": "info@karnaenterprises.in",
      "telephone": "+91 99015 06336",
      "datePublished": "2025-04-10",
      "areaServed": [
        "Bangalore",
        "Hosur",
        "Electronic City",
        "CK Palya",
        "Dinnepalya",
        "South India"
      ],
      "keywords": [
        "Packaging Materials Manufacturer in Bangalore & Hosur",
        "EPE Foam Manufacturer in Bangalore",
        "Thermocol Boxes Supplier in Bangalore",
        "BOPP Tapes Manufacturer in Bangalore",
        "Corrugated Boxes Supplier in Hosur",
        "Bubble Wrap Supplier in Bangalore"
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What packaging materials does Karna Enterprises manufacture?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Karna Enterprises manufactures and supplies EPE Foam, Bubble Wrap, Thermocol, BOPP Tapes, Straps, Stretch Wrap, and Corrugated Boxes for industrial and commercial packaging needs."
          }
        },
        {
          "@type": "Question",
          "name": "Do you supply packaging materials in Hosur and other parts of South India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we supply packaging materials across Bangalore, Hosur, and other locations in South India, catering to businesses of all sizes."
          }
        },
        {
          "@type": "Question",
          "name": "What types of tapes are available from Karna Enterprises?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer a wide range of tapes including BOPP Adhesive Tapes, Brown Tapes, Masking Tapes, Craft Paper Tapes, Filament Tapes, and Custom Printed Tapes."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get custom packaging solutions for my products?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we provide custom packaging solutions including Thermocol Fitment Boxes, Molded Fitments, and Custom Printed Tapes tailored to your specific product requirements."
          }
        },
        {
          "@type": "Question",
          "name": "How can I request a quote for bulk packaging materials?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can request a quote by contacting us directly through our website, phone, or email, and our team will assist you with pricing and product availability."
          }
        }
      ]
    }
  ]
}

function Home() {
  return (
    <div className="home">

      <Helmet>
        <title>Packaging Materials Manufacturer in Bangalore & Hosur | Karna Enterprises</title>
        <meta
          name="description"
          content="Karna Enterprises supplies EPE Foam, Bubble Wrap, Thermocol, BOPP Tapes, Straps & Corrugated Boxes across Bangalore, Hosur & South India. Get a quote today."
        />
        <meta
          name="keywords"
          content="Packaging Materials Manufacturer in Bangalore & Hosur, EPE Foam Manufacturer in Bangalore, Thermocol Boxes Supplier in Bangalore, BOPP Tapes Manufacturer in Bangalore, Corrugated Boxes Supplier in Hosur, Bubble Wrap Supplier in Bangalore"
        />
        <link rel="canonical" href="https://karnaenterprises.in/" />
        <script type="application/ld+json">
          {JSON.stringify(homeSchema)}
        </script>
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

      {/* H2 SEO & WHY US SECTION */}
      <section className="section">
        <div className="section-inner">
          <Reveal>
            <p className="section-label">Why choose us</p>
            <h2 className="section-title">Packaging Materials Manufacturer in Bangalore</h2>
            <p className="section-sub">
              Karna Enterprises supplies EPE Foam, Bubble Wrap, Thermocol, BOPP Tapes, Straps & Corrugated Boxes across Bangalore, Hosur & South India.
              Built on reliability, trusted by industry leaders from Fanuc to Mother Dairy.
            </p>
          </Reveal>
          <div className="why-grid">
            {whyCards.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 70}>
                <div className="why-card">
                  <div className="why-icon-wrap"><Icon size={20} /></div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section section-alt">
        <div className="section-inner">
          <Reveal>
            <p className="section-label">Our products</p>
            <h2 className="section-title">Everything your business needs to pack right</h2>
            <p className="section-sub">
              A complete range of inner and outer packaging materials for manufacturing,
              food, pharma, apparel and more.
            </p>
          </Reveal>
          <div className="product-grid">
            {products.map(({ img, name, desc }, i) => (
              <Reveal key={name} delay={i * 70}>
                <div className="product-card">
                  <div className="product-thumb">
                    <img src={img} alt={name} className="product-thumb-img" />
                  </div>
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
              </Reveal>
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
          <Reveal>
            <p className="section-label" style={{ color: '#F87191' }}>Our clients</p>
            <h2 className="section-title" style={{ color: '#FFFFFF' }}>
              Trusted by industry leaders across India
            </h2>
            <p className="section-sub" style={{ color: '#9CA3AF' }}>
              From automotive to food and beverage to apparel, these brands trust us with their packaging.
            </p>
          </Reveal>
          <div className="clients-grid">
            {clients.map((name, i) => (
              <Reveal key={name} delay={i * 70}>
                <div className="client-chip">{name}</div>
              </Reveal>
            ))}
          </div>
          <Link to="/clients" className="btn-outline-light">
            View all clients <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* 5 FAQS FOR HOMEPAGE */}
      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Common questions about our packaging manufacturing, custom solutions, and regional supply across Bangalore, Hosur, and South India."
        faqs={homeFaqs}
      />

      {/* BOTTOM CTA */}
      <Reveal tag="section" className="cta-band">
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
      </Reveal>

    </div>
  )
}

export default Home
