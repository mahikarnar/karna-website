import { Eye, Users, ShieldCheck, Handshake, ArrowRight, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import './About.css'

const milestones = [
  { year: '2010', title: 'Founded', desc: 'Karna Enterprises was incorporated in Bangalore with the objective of providing best-quality packaging materials to local industries.' },
  { year: '2012', title: 'First 100 Clients', desc: 'Within two years, we built a loyal base of 100+ clients across manufacturing and food processing sectors.' },
  { year: '2015', title: 'Expanded Product Range', desc: 'Added EPE foam fitments, corrugated boxes, and custom printed tapes to serve a wider range of industries.' },
  { year: '2018', title: 'Crossed 1,000 Orders', desc: 'A major milestone — over 1,000 completed orders with zero compromise on quality or delivery timelines.' },
  { year: '2024', title: 'Today', desc: '2,342+ clients, 6,302+ orders completed, and still growing. Trusted by brands like Fanuc, Mother Dairy, and Sandvik Asia.' },
]

function About() {
  return (
    <div className="about-page">
      <Helmet>
        <title>About Us | Karna Enterprises Bangalore</title>
        <meta name="description" content="About Karna Enterprises — a packaging materials manufacturer in Bangalore since 2010. 2,342+ clients, 6,302+ orders, 100% satisfaction." />
        <link rel="canonical" href="https://www.karnaenterprises.in/about" />
      </Helmet>
      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="page-header-inner">
          <p className="page-label">Our story</p>
          <h1>About Karna Enterprises</h1>
          <p className="page-sub">
            A Bangalore-based manufacturer and supplier of premium packaging materials,
            serving industries across India since 2010.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="about-story">
        <div className="about-inner">
          <div className="story-grid">
            <div className="story-text">
              <p className="section-label">Who we are</p>
              <h2>14 years of packaging expertise, built in Bangalore</h2>
              <p>
                Karna Enterprises was incorporated in the year 2010 in Bangalore, with a clear
                objective — to provide the best quality packaging materials to industries across
                the region. From day one, we set the benchmark of quality in this sphere of business.
              </p>
              <p>
                We are a well-known manufacturer and fabricator of packaging materials for industries,
                supplying BOPP tapes (plain and printed), masking tapes, double-sided tape, foam tape,
                air bubble pouches, EPE pouches, EPE fitments, thermocol sheets, thermocol boxes,
                strapping rolls, packing machines, and various types of customised packaging solutions.
              </p>
              <p>
                Since our establishment, our business acumen and customer-centric approach have led
                us to the forefront of this field. We believe in developing long-term relationships
                with our customers by offering them durable, unmatched quality packaging products.
              </p>
              <div className="story-stats">
                <div className="story-stat">
                  <span className="story-stat-num">2,342+</span>
                  <span className="story-stat-label">Clients served</span>
                </div>
                <div className="story-stat">
                  <span className="story-stat-num">6,302+</span>
                  <span className="story-stat-label">Orders completed</span>
                </div>
                <div className="story-stat">
                  <span className="story-stat-num">14+</span>
                  <span className="story-stat-label">Years in business</span>
                </div>
              </div>
            </div>
            <div className="story-aside">
              <div className="story-info-card">
                <h3>Company Information</h3>
                <div className="info-row">
                  <span className="info-label">Founded</span>
                  <span className="info-value">2010</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Location</span>
                  <span className="info-value">Bangalore, Karnataka</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Address</span>
                  <span className="info-value">Dinnepalya, CK Palya, Electronic City Road, Bangalore 560083</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Phone</span>
                  <span className="info-value">+91 99015 06336</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Email</span>
                  <span className="info-value">info@karnaenterprises.in</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Hours</span>
                  <span className="info-value">Mon – Fri, 10:00 – 18:00</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Specialisation</span>
                  <span className="info-value">Packaging materials manufacturing and supply</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIRECTOR */}
      <section className="about-director">
        <div className="about-inner">
          <p className="section-label">Leadership</p>
          <h2 className="section-title">Meet our Director</h2>
          <div className="director-grid">
            <div className="director-photo-wrap">
              {/* ADD DIRECTOR PHOTO HERE */}
              {/* Replace the div below with: <img src="/images/rajeev-karna.jpg" alt="Rajeev Kumar Karna" className="director-photo" /> */}
              <div className="director-photo-placeholder">
                <span>Photo of<br />Rajeev Kumar Karna</span>
              </div>
            </div>
            <div className="director-text">
              <h3>Rajeev Kumar Karna</h3>
              <p className="director-title">Founder and Director, Karna Enterprises</p>
              {/* ADD DIRECTOR BIO HERE — a few lines about his background, experience, and vision */}
              {/* Example structure below, replace with actual content: */}
              <p className="director-bio director-bio-placeholder">
                [ Add a short biography of Rajeev Kumar Karna here — his background,
                what inspired him to start Karna Enterprises in 2010, his experience
                in the packaging industry, and his vision for the company. ]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="about-vision">
        <div className="about-inner">
          <div className="vision-grid">
            <div className="vision-block">
              <div className="vision-icon-wrap"><Eye size={22} /></div>
              <p className="section-label">Our Vision</p>
              <h2>A globally recognised packaging conglomerate</h2>
              <p>
                Our vision is to become a globally recognised packaging conglomerate. We are
                progressing ahead with the vision to cater to a broad spectrum of industries
                with products of the highest excellence — driven by profound knowledge,
                deep experience, and an unwavering pursuit of quality.
              </p>
            </div>
            <div className="vision-block">
              <div className="vision-icon-wrap"><Users size={22} /></div>
              <p className="section-label">Why Clients Choose Us</p>
              <h2>Expertise, reliability, and commitment</h2>
              <p>
                Our customers choose us for our expertise, reliability, customer support, and
                commitment — and we are proud to be their first choice. Our products have
                enormous demand across industries and deliver service for a durable period of time.
                This has placed us as a trusted, reliable supplier among our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUALITY POLICY */}
      <section className="about-quality">
        <div className="about-inner">
          <div className="quality-inner">
            <div className="quality-header">
              <div className="vision-icon-wrap"><ShieldCheck size={22} /></div>
              <div>
                <p className="section-label">Our commitment</p>
                <h2 className="section-title">Quality Policy</h2>
              </div>
            </div>
            <div className="quality-grid">
              <p>
                Karna Enterprises guarantees absolute quality of service. We manufacture all
                our products with precision and clarity in design, keeping in mind the quality
                standards applicable to adhesive and packaging materials.
              </p>
              <p>
                We maintain strict quality checks for each product we manufacture. Our dedicated
                customer care approach allows us to guarantee complete satisfaction — in terms of
                durability, quality standards, and efficient performance over a long period of time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="about-timeline">
        <div className="about-inner">
          <p className="section-label">How we got here</p>
          <h2 className="section-title">Our journey</h2>
          <div className="timeline">
            {milestones.map((m, i) => (
              <div className="timeline-item" key={m.year}>
                <div className="timeline-year">{m.year}</div>
                <div className="timeline-line">
                  <div className="timeline-dot"></div>
                  {i < milestones.length - 1 && <div className="timeline-connector"></div>}
                </div>
                <div className="timeline-content">
                  <h3>{m.title}</h3>
                  <p>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="about-cta-inner">
          <div>
            <h2>Want to work with us?</h2>
            <p>Get in touch for a free quote or to discuss your packaging requirements.</p>
          </div>
          <div className="about-cta-btns">
            <Link to="/contact" className="btn-white">
              Contact Us <ArrowRight size={14} />
            </Link>
            <a
              href="https://wa.me/919901506336?text=Hi, I would like to know more about Karna Enterprises"
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

export default About