import { useState } from 'react'
import { MessageCircle, ArrowRight, Search } from 'lucide-react'
import Reveal from '../components/Reveal'
import FAQSection from '../components/FAQSection'
import './Products.css'
import { Helmet } from 'react-helmet-async'

const categoryOverviews = [
  {
    title: 'EPE Foam Packaging Products',
    desc: 'Karna Enterprises manufactures a complete range of EPE Foam products in Bangalore, including EPE Foam Corner, EPE Foam Fitment, EPE Boxes, EPE Sheets, EPE Rolls, and EPE Pouches ideal for cushioning fragile goods during transit across Karnataka and Hosur.',
  },
  {
    title: 'Bubble Wrap & ESD Packaging Products',
    desc: 'Our Air Bubble Pouches, Bubble Bags, and ESD Pink Bubble Pouches protect electronic and sensitive items, while Adhesive Bubble Bags offer quick, tamper-proof sealing for businesses across South India.',
  },
  {
    title: 'Thermocol Packaging Products',
    desc: 'We supply Thermocol Sheets, Thermocol Boxes, Thermocol Fitment Boxes, and Thermocol Mug Boxes for insulation and structural protection, widely used across Bangalore, Karnataka, and Tamil Nadu.',
  },
  {
    title: 'Adhesive Tapes for Industrial Packaging',
    desc: 'From BOPP Adhesive Tapes to Brown Tapes, Masking Tapes, and Custom Printed Tapes, our tape range covers every industrial and commercial packaging requirement in Hosur and South India.',
  },
  {
    title: 'Straps, Wraps & Films',
    desc: 'Secure your shipments with PET Strap, PP Strap, Stretch Wrap, and Wrapping Film trusted by businesses across Bangalore and Hosur.',
  },
  {
    title: 'Corrugated & Other Packaging Products',
    desc: 'We also manufacture Corrugated Rolls, Corrugated Boxes, Aluminium Foil Pouches, and Polythene LD HM for versatile packaging needs across South India.',
  },
]

const productsFaqs = [
  {
    question: 'What packaging products does Karna Enterprises offer?',
    answer: 'We offer EPE Foam, Bubble Wrap, ESD Packaging, Thermocol, Adhesive Tapes, Straps, Wraps, and Corrugated Boxes for a wide range of industries.',
  },
  {
    question: 'Do you manufacture ESD-safe packaging for electronics?',
    answer: 'Yes, our ESD Pink Bubble Pouches and ESD Pouches are specifically designed to protect electronic components from static damage.',
  },
  {
    question: 'What types of tapes do you provide for industrial use?',
    answer: 'We provide BOPP Adhesive Tapes, Brown Tapes, Masking Tapes, Filament Tapes, Double Side Tapes, and Custom Printed Tapes for various industrial applications.',
  },
  {
    question: 'Can I get Thermocol packaging customized for my product?',
    answer: 'Yes, we manufacture custom Thermocol Fitment Boxes and Molded Fitments tailored to your specific product dimensions.',
  },
  {
    question: 'Do you supply corrugated boxes and rolls in bulk?',
    answer: 'Yes, we manufacture and supply Corrugated Boxes and Corrugated Rolls in bulk quantities across Bangalore, Hosur, and South India.',
  },
]

const productsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "name": "Packaging Products by Karna Enterprises",
      "url": "https://karnaenterprises.in/products",
      "description": "Explore Karna Enterprises' complete range of packaging products – EPE Foam, Bubble Wrap, Thermocol, BOPP Tapes, Straps & Corrugated Boxes. Serving Bangalore, Hosur & South India.",
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "EPE Foam Corner" },
          { "@type": "ListItem", "position": 2, "name": "EPE Foam Fitment" },
          { "@type": "ListItem", "position": 3, "name": "EPE Boxes" },
          { "@type": "ListItem", "position": 4, "name": "EPE Sheets" },
          { "@type": "ListItem", "position": 5, "name": "EPE Rolls" },
          { "@type": "ListItem", "position": 6, "name": "EPE Pouches" },
          { "@type": "ListItem", "position": 7, "name": "EPE Foam Bags" },
          { "@type": "ListItem", "position": 8, "name": "EPE Edge Protectors" },
          { "@type": "ListItem", "position": 9, "name": "Air Bubble Pouches" },
          { "@type": "ListItem", "position": 10, "name": "Bubble Bags" },
          { "@type": "ListItem", "position": 11, "name": "ESD Pink Bubble Pouches" },
          { "@type": "ListItem", "position": 12, "name": "ESD Pouch" },
          { "@type": "ListItem", "position": 13, "name": "Adhesive Bubble Bags" },
          { "@type": "ListItem", "position": 14, "name": "Thermocol Sheet" },
          { "@type": "ListItem", "position": 15, "name": "Thermocol Boxes" },
          { "@type": "ListItem", "position": 16, "name": "Thermocol Fitment Box" },
          { "@type": "ListItem", "position": 17, "name": "Thermocol Molded Fitment" },
          { "@type": "ListItem", "position": 18, "name": "Thermocol Mug Boxes" },
          { "@type": "ListItem", "position": 19, "name": "BOPP Adhesive Tapes" },
          { "@type": "ListItem", "position": 20, "name": "Brown Tapes" },
          { "@type": "ListItem", "position": 21, "name": "Masking Tapes" },
          { "@type": "ListItem", "position": 22, "name": "Custom Printed Tapes" },
          { "@type": "ListItem", "position": 23, "name": "PET Strap" },
          { "@type": "ListItem", "position": 24, "name": "PP Strap" },
          { "@type": "ListItem", "position": 25, "name": "Stretch Wrap" },
          { "@type": "ListItem", "position": 26, "name": "Corrugated Boxes" },
          { "@type": "ListItem", "position": 27, "name": "Corrugated Rolls" },
          { "@type": "ListItem", "position": 28, "name": "Aluminium Foil Pouch" },
          { "@type": "ListItem", "position": 29, "name": "Polythene LD HM" }
        ]
      },
      "provider": {
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
          "name": "What packaging products does Karna Enterprises offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer EPE Foam, Bubble Wrap, ESD Packaging, Thermocol, Adhesive Tapes, Straps, Wraps, and Corrugated Boxes for a wide range of industries."
          }
        },
        {
          "@type": "Question",
          "name": "Do you manufacture ESD-safe packaging for electronics?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our ESD Pink Bubble Pouches and ESD Pouches are specifically designed to protect electronic components from static damage."
          }
        },
        {
          "@type": "Question",
          "name": "What types of tapes do you provide for industrial use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We provide BOPP Adhesive Tapes, Brown Tapes, Masking Tapes, Filament Tapes, Double Side Tapes, and Custom Printed Tapes for various industrial applications."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get Thermocol packaging customized for my product?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we manufacture custom Thermocol Fitment Boxes and Molded Fitments tailored to your specific product dimensions."
          }
        },
        {
          "@type": "Question",
          "name": "Do you supply corrugated boxes and rolls in bulk?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we manufacture and supply Corrugated Boxes and Corrugated Rolls in bulk quantities across Bangalore, Hosur, and South India."
          }
        }
      ]
    }
  ]
}

const products = [
  {
    image: '/images/products/AirBubble.png',
    name: 'Air Bubble Rolls',
    desc: 'Lightweight air bubble rolls for cushioning and protecting fragile products from scratches, impact, and surface damage.',
    tags: ['Fragile protection', 'Lightweight', 'Cushioning'],
  },
  {
    image: '/images/products/AirBubblePouch.png',
    name: 'Air Bubble Pouches',
    desc: 'Pre-made air bubble pouches for quick and secure packing of fragile items, electronics, glassware, and other delicate products.',
    tags: ['Ready-made', 'Custom sizes', 'Fragile protection'],
  },
  {
    image: '/images/products/BOPPcolor.png',
    name: 'BOPP Tapes - Colour',
    desc: 'Coloured BOPP tapes for carton sealing, packaging, and product identification. Available in a range of colours for different applications.',
    tags: ['Multiple colours', 'Carton sealing', 'Bulk rolls'],
  },
  {
    image: '/images/products/BOPPplain.png',
    name: 'BOPP Tapes - Plain',
    desc: 'Strong, reliable brown and transparent BOPP tapes for everyday packaging and carton sealing. Available in bulk rolls.',
    tags: ['Brown & clear', 'Bulk rolls', 'High adhesion'],
  },
  {
    image: '/images/products/BOPPprinted.png',
    name: 'BOPP Tapes - Printed',
    desc: 'Custom printed BOPP tapes with your brand logo or message. A cost-effective way to brand every package you ship.',
    tags: ['Custom print', 'Brand logo', 'MOQ applies'],
  },
  {
    image: '/images/products/CorrugatedBox.png',
    name: 'Corrugated Boxes',
    desc: 'Strong single and double wall corrugated boxes for shipping, storage, and product protection. Custom sizes and printing available.',
    tags: ['Single & double wall', 'Custom sizes', 'Printable'],
  },
  {
    image: '/images/products/DoubelSidedTissue.png',
    name: 'Double Sided Tissue Tape',
    desc: 'Double sided tissue tapes with strong adhesion for mounting, bonding, and assembly applications across a range of industries.',
    tags: ['High adhesion', 'Mounting', 'Assembly use'],
  },
  {
    image: '/images/products/DoubleSidedFoam.png',
    name: 'Double Sided Foam Tape',
    desc: 'Cushioned double sided foam tapes for mounting and bonding on uneven surfaces, providing strong adhesion and reliable hold.',
    tags: ['Foam backing', 'Mounting', 'Strong adhesion'],
  },
  {
    image: '/images/products/DoubleSidedPolyster.png',
    name: 'Double Sided Polyester Tape',
    desc: 'Durable double sided polyester tapes for high-performance bonding, mounting, and assembly applications requiring reliable adhesion.',
    tags: ['Polyester backing', 'High tack', 'Industrial use'],
  },
  {
    image: '/images/products/EPEFoamCorner.png',
    name: 'EPE Foam Corners',
    desc: 'Protective EPE foam corners designed to shield product edges from impact, scratches, and damage during handling and transit.',
    tags: ['Edge protection','Secure', 'Shock absorbent'],
  },
  {
    image: '/images/products/EPEfoamFitments.png',
    name: 'EPE Foam Fitments',
    desc: 'Precision-cut EPE foam inserts custom-shaped to hold your product securely inside any box or carton.',
    tags: ['Custom cut', 'Precision fit', 'Any shape'],
  },
  {
    image: '/images/products/EPEFoamPouch.png',
    name: 'EPE Foam Pouches',
    desc: 'Expanded polyethylene foam pouches that provide excellent cushioning for glassware, ceramics, electronics, and other fragile products.',
    tags: ['EPE foam', 'Cushioning', 'Fragile protection'],
  },
  {
    image: '/images/products/ESDBubblePouch.png',
    name: 'ESD Bubble Pouches',
    desc: 'Anti-static ESD bubble pouches designed to protect sensitive electronic components from static discharge, scratches, and impact.',
    tags: ['Anti-static', 'Electronics safe', 'Bubble protection'],
  },
  {
    image: '/images/products/MaskingTape.png',
    name: 'Masking Tapes',
    desc: 'Clean-peel masking tapes for painting, surface protection, bundling, and general-purpose applications. Available in multiple widths.',
    tags: ['Clean peel', 'Multiple widths', 'Surface safe'],
  },
  {
    image: '/images/products/PaperTape.png',
    name: 'Paper Tapes',
    desc: 'Paper-based adhesive tapes for carton sealing, bundling, and general packaging applications with a clean and professional finish.',
    tags: ['Paper based', 'Packaging', 'Easy handling'],
  },
  {
    image: '/images/products/PPstrappingRoll.png',
    name: 'PP Strapping Rolls',
    desc: 'Polypropylene strapping rolls for securing cartons, heavy packages, and pallets. High tensile strength for safe and stable transit.',
    tags: ['High tensile', 'Pallet strapping', 'Bulk rolls'],
  },
  {
    image: '/images/products/StretchFilm.png',
    name: 'Stretch Film',
    desc: 'Machine and hand-grade stretch wrap films for pallet unitisation, load stability, and secure protection during storage and transport.',
    tags: ['Pallet wrap', 'Machine grade', 'Hand grade'],
  },
  {
    image: '/images/products/ThermocolBox.png',
    name: 'Thermocol Boxes',
    desc: 'Lightweight, shock-absorbent thermocol boxes in custom sizes. Ideal for electronics, fragile goods, and temperature-sensitive products.',
    tags: ['Custom sizes', 'Lightweight', 'Shock-resistant'],
  },
  {
    image: '/images/products/ThermocolDoubleMugBox.png',
    name: 'Thermocol Double Mug Boxes',
    desc: 'Custom-shaped thermocol boxes designed to securely hold and protect two mugs from impact and breakage during handling and transit.',
    tags: ['Mug protection', 'Custom fit', 'Shock-resistant'],
  },
  {
    image: '/images/products/ThermocolMugPackaging.png',
    name: 'Thermocol Mug Packaging',
    desc: 'Protective thermocol packaging designed for mugs and other delicate cylindrical products, providing cushioning against impact and breakage.',
    tags: ['Mug packaging', 'Cushioning', 'Fragile protection'],
  },
  {
    image: '/images/products/ThermocolPackingBox.png',
    name: 'Thermocol Packing Boxes',
    desc: 'Durable thermocol packing boxes providing lightweight cushioning and protection for fragile products during storage and transportation.',
    tags: ['Lightweight', 'Cushioning', 'Custom sizes'],
  },
  {
    image: '/images/products/ThermocolPackingScoop.png',
    name: 'Thermocol Packing Scoops',
    desc: 'Lightweight thermocol packing scoops designed for protective packaging and product cushioning in suitable packing applications.',
    tags: ['Lightweight', 'Protection', 'Custom uses'],
  },
  {
    image: '/images/products/ThermocolSheet.png',
    name: 'Thermocol Sheets',
    desc: 'High-density thermocol sheets for insulation and cushioning. Available in various thicknesses for industrial and commercial use.',
    tags: ['Various thickness', 'Insulation', 'Bulk available'],
  },
  {
    image: '/images/products/ThermocolSingleMugBox.png',
    name: 'Thermocol Single Mug Boxes',
    desc: 'Custom-shaped thermocol boxes designed to securely hold and protect individual mugs from impact and breakage during handling and transit.',
    tags: ['Mug protection', 'Custom fit', 'Shock-resistant'],
  },
]

function Products() {
  const [query, setQuery] = useState('')

  const filtered = query.trim() === ''
    ? products
    : products.filter(p =>
        p.name.toLowerCase().startsWith(query.trim().toLowerCase())
      )

  return (
    <div className="products-page">
      <Helmet>
        <title>Packaging Products in Bangalore & Hosur | EPE Foam, Tapes, Thermocol – Karna Enterprises</title>
        <meta
          name="description"
          content="Explore Karna Enterprises' complete range of packaging products – EPE Foam, Bubble Wrap, Thermocol, BOPP Tapes, Straps & Corrugated Boxes. Serving Bangalore, Hosur & South India."
        />
        <link rel="canonical" href="https://karnaenterprises.in/products" />
        <script type="application/ld+json">
          {JSON.stringify(productsSchema)}
        </script>
      </Helmet>

      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="page-header-inner">
          <Reveal>
            <p className="page-label">What we make</p>
            <h1>Packaging Products -<p>Manufactured in Bangalore, Karnataka</p></h1>
            <p className="page-sub">
              A complete range of inner and outer packaging solutions from protective foam
              fitments to branded tapes, all manufactured and supplied from Bangalore.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CATEGORIES OVERVIEW SECTION WITH EXACT H2 HEADERS AND CONTENT */}
      <section className="categories-overview-section">
        <div className="products-inner">
          <Reveal>
            <p className="page-label" style={{ color: '#C41E3A' }}>Category Range</p>
            <h2 style={{ fontSize: '28px', color: '#1A1A2E', marginBottom: '8px' }}>
              Specialised Packaging Solutions by Category
            </h2>
            <p style={{ color: '#666', fontSize: '15px' }}>
              Comprehensive packaging manufactured to protect products across industries in Bangalore, Hosur, and South India.
            </p>
          </Reveal>

          <div className="categories-grid">
            {categoryOverviews.map(({ title, desc }, i) => (
              <Reveal key={title} delay={(i % 3) * 80}>
                <div className="category-overview-card">
                  <h2>{title}</h2>
                  <p>{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="products-section">
        <div className="products-inner">

          {/* SEARCH BAR */}
          <div className="products-search-wrap">
            <Search size={18} className="products-search-icon" />
            <input
              type="text"
              className="products-search"
              placeholder="Search products"
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            {query && (
              <button className="products-search-clear" onClick={() => setQuery('')} aria-label="Clear search">
                ×
              </button>
            )}
          </div>

          {/* NO RESULTS */}
          {filtered.length === 0 && (
            <p className="products-no-results">No products found for "{query}"</p>
          )}

          <div className="products-grid">
            {filtered.map(({ image, name, desc, tags }, i) => (
              <Reveal key={name} delay={(i % 6) * 70}>
                <div className="product-card">
                  <div className="product-card-top">
                    <div className="product-image-wrap">
                      <img src={image} alt={name} className="product-image" />
                    </div>
                    <h3>{name}</h3>
                    <p>{desc}</p>
                    <div className="product-card-bottom">
                      <div className="product-tags">
                        {tags.map(tag => (
                          <span className="product-tag" key={tag}>{tag}</span>
                        ))}
                      </div>
                      <a
                        href={`https://wa.me/919901506336?text=Hi, I would like to enquire about ${name}`}
                        className="product-enquire-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle size={14} />
                        Enquire Now
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOM SOLUTIONS BAND */}
      <Reveal tag="section" className="custom-band">
        <div className="custom-band-inner">
          <div className="custom-band-text">
            <p className="page-label" style={{ color: '#F87191' }}>Need something specific?</p>
            <h2>We do custom packaging too.</h2>
            <p>
              Don't see exactly what you need? We manufacture custom sizes, printed
              packaging, and bespoke foam fitments tailored to your product dimensions.
              Tell us what you need and we will make it.
            </p>
          </div>
          <div className="custom-band-actions">
            <a
              href="https://wa.me/919901506336?text=Hi, I need a custom packaging solution"
              className="btn-whatsapp-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={16} /> Discuss on WhatsApp
            </a>
            <a href="tel:+919901506336" className="btn-call-lg">
              Call us directly <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </Reveal>

      {/* 5 FAQS FOR PRODUCTS PAGE */}
      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Common queries about our packaging product materials, ESD safety, custom fitments, and bulk order supply."
        faqs={productsFaqs}
      />

    </div>
  )
}

export default Products
