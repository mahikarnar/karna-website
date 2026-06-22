import { MessageCircle, Box, Package, Layers, Truck, Wind, Ribbon, Wrench, Container, Frame, Palette, FileStack, Hexagon, ArrowRight } from 'lucide-react'
import './Products.css'
import { Helmet } from 'react-helmet-async'

const products = [
  {
    icon: Box,
    name: 'Thermocol Boxes',
    desc: 'Lightweight, shock-absorbent thermocol boxes in custom sizes. Ideal for electronics, fragile goods, and temperature-sensitive products.',
    tags: ['Custom sizes', 'Lightweight', 'Shock-resistant'],
  },
  {
    icon: Hexagon,
    name: 'Thermocol Sheets',
    desc: 'High-density thermocol sheets for insulation and cushioning. Available in various thicknesses for industrial and commercial use.',
    tags: ['Various thickness', 'Insulation', 'Bulk available'],
  },
  {
    icon: Layers,
    name: 'BOPP Tapes — Plain',
    desc: 'Strong, reliable brown and transparent BOPP tapes for everyday packaging and carton sealing. Available in bulk rolls.',
    tags: ['Brown & clear', 'Bulk rolls', 'High adhesion'],
  },
  {
    icon: Palette,
    name: 'BOPP Tapes — Printed',
    desc: 'Custom printed BOPP tapes with your brand logo or message. A cost-effective way to brand every package you ship.',
    tags: ['Custom print', 'Brand logo', 'MOQ applies'],
  },
  {
    icon: Ribbon,
    name: 'Masking Tapes',
    desc: 'Clean-peel masking tapes for painting, surface protection, and bundling. Available in multiple widths.',
    tags: ['Clean peel', 'Multiple widths', 'Surface safe'],
  },
  {
    icon: FileStack,
    name: 'Double Sided Tape',
    desc: 'High-tack double sided tapes for mounting, bonding, and assembly applications across industries.',
    tags: ['High tack', 'Mounting', 'Assembly use'],
  },
  {
    icon: Wind,
    name: 'Air Bubble Pouches',
    desc: 'Pre-made air bubble pouches for quick packing of fragile items. Available in standard and custom sizes.',
    tags: ['Fragile protection', 'Custom sizes', 'Ready-made'],
  },
  {
    icon: Package,
    name: 'EPE Foam Pouches',
    desc: 'Expanded polyethylene foam pouches that provide excellent cushioning for glassware, ceramics, and electronics.',
    tags: ['EPE foam', 'Electronics safe', 'Cushioning'],
  },
  {
    icon: Frame,
    name: 'EPE Foam Fitments',
    desc: 'Precision-cut EPE foam inserts custom-shaped to hold your product securely inside any box or carton.',
    tags: ['Custom cut', 'Precision fit', 'Any shape'],
  },
  {
    icon: Container,
    name: 'Corrugated Boxes',
    desc: 'Strong single and double wall corrugated boxes for shipping and storage. Custom sizes and print available.',
    tags: ['Single & double wall', 'Custom sizes', 'Printable'],
  },
  {
    icon: Truck,
    name: 'PP Strapping Rolls',
    desc: 'Polypropylene strapping rolls for securing heavy packages and pallets. High tensile strength for safe transit.',
    tags: ['High tensile', 'Pallet strapping', 'Bulk rolls'],
  },
  {
    icon: Wrench,
    name: 'Stretch Film',
    desc: 'Machine and hand-grade stretch wrap films for pallet unitisation and load stability during transport.',
    tags: ['Pallet wrap', 'Machine grade', 'Hand grade'],
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
            {products.map(({ icon: Icon, name, desc, tags }) => (
              <div className="product-card" key={name}>
                <div className="product-card-top">
                  <div className="product-icon-wrap">
                    <Icon size={22} />
                  </div>
                  <h3>{name}</h3>
                  <p>{desc}</p>
                  <div className="product-tags">
                    {tags.map(tag => (
                      <span className="product-tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
                <a
                  href={`https://wa.me/919901506336?text=Hi, I would like to enquire about ${name}`}
                  className="product-enquire-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={14} />
                  Enquire on WhatsApp
                </a>
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