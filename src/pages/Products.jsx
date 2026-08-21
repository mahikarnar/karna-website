import { MessageCircle, ArrowRight } from 'lucide-react'
import './Products.css'
import { Helmet } from 'react-helmet-async'

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
  return (
    <div className="products-page">
      <Helmet>
        <title>Packaging Products | Karna Enterprises Bangalore</title>
        <meta name="description" content="Browse our full range of packaging products — BOPP tapes, thermocol boxes, EPE foam fitments, air bubble pouches, corrugated boxes, PP strapping, stretch film and more." />
        <link rel="canonical" href="https://www.karnaenterprises.in/products" />
      </Helmet>

      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="page-header-inner">
          <p className="page-label">What we make</p>
          <h1>Our Products</h1>
          <p className="page-sub">
            A complete range of inner and outer packaging solutions from protective foam
            fitments to branded tapes, all manufactured and supplied from Bangalore.
          </p>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="products-section">
        <div className="products-inner">
          <div className="products-grid">
            {products.map(({ image, name, desc, tags }) => (
              <div className="product-card" key={name}>
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
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOM SOLUTIONS BAND */}
      <section className="custom-band">
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
      </section>

    </div>
  )
}

export default Products
