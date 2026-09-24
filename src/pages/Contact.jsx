import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import { useForm, ValidationError } from '@formspree/react'
import { Helmet } from 'react-helmet-async'
import ContactIllustration from '../assets/illustrations/contact-illustration.svg'
import Reveal from '../components/Reveal'
import FAQSection from '../components/FAQSection'
import './Contact.css'

const contactFaqs = [
  {
    question: 'How can I contact Karna Enterprises for a quote?',
    answer: 'You can contact us via phone at +91 99015 06336, email at info@karnaenterprises.in, or visit our facility in Bangalore.',
  },
  {
    question: 'Where is Karna Enterprises located?',
    answer: 'We are located at Dinnepalya, CK Palya, Electronic City Road, Bangalore, Karnataka – 560083.',
  },
  {
    question: 'Do you respond to inquiries from Hosur and Tamil Nadu?',
    answer: 'Yes, we serve and respond to inquiries from businesses across Hosur, Tamil Nadu, and South India.',
  },
  {
    question: 'What information should I include when requesting a quote?',
    answer: 'Please include the product type, required quantity, and delivery location so we can provide accurate pricing and availability.',
  },
  {
    question: 'What are your business hours for inquiries?',
    answer: 'Our team is available during standard business hours to assist with product inquiries, quotes, and support.',
  },
]

const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "name": "Contact Karna Enterprises",
      "url": "https://karnaenterprises.in/contact",
      "description": "Get in touch with Karna Enterprises for EPE Foam, Thermocol, Tapes & Corrugated Packaging solutions. Serving Bangalore, Hosur & South India.",
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
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 12.8400,
          "longitude": 77.6000
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
          "name": "How can I contact Karna Enterprises for a quote?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can contact us via phone at +91 99015 06336, email at info@karnaenterprises.in, or visit our facility in Bangalore."
          }
        },
        {
          "@type": "Question",
          "name": "Where is Karna Enterprises located?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We are located at Dinnepalya, CK Palya, Electronic City Road, Bangalore, Karnataka – 560083."
          }
        },
        {
          "@type": "Question",
          "name": "Do you respond to inquiries from Hosur and Tamil Nadu?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we serve and respond to inquiries from businesses across Hosur, Tamil Nadu, and South India."
          }
        },
        {
          "@type": "Question",
          "name": "What information should I include when requesting a quote?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Please include the product type, required quantity, and delivery location so we can provide accurate pricing and availability."
          }
        },
        {
          "@type": "Question",
          "name": "What are your business hours for inquiries?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our team is available during standard business hours to assist with product inquiries, quotes, and support."
          }
        }
      ]
    }
  ]
}

function ContactForm() {
  const [state, handleSubmit] = useForm('xwvdeklr')

  if (state.succeeded) {
    return (
      <div className="form-success">
        <div className="form-success-icon">✓</div>
        <h3>Message sent successfully!</h3>
        <p>
          Thank you for reaching out. We will get back to you
          within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your full name"
            required
          />
          <ValidationError field="name" prefix="Name" errors={state.errors} className="field-error" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="+91 XXXXX XXXXX"
            required
          />
          <ValidationError field="phone" prefix="Phone" errors={state.errors} className="field-error" />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="your@email.com"
          />
          <ValidationError field="email" prefix="Email" errors={state.errors} className="field-error" />
        </div>
        <div className="form-group">
          <label htmlFor="company">Company Name</label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Your company"
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="message">What do you need? *</label>
        <textarea
          id="message"
          name="message"
          placeholder="Tell us about your packaging requirement — product type, quantity, size, any specific needs..."
          rows={5}
          required
        />
        <ValidationError field="message" prefix="Message" errors={state.errors} className="field-error" />
      </div>

      <ValidationError errors={state.errors} className="form-error" />

      <button
        type="submit"
        className="form-submit"
        disabled={state.submitting}
      >
        {state.submitting ? 'Sending...' : 'Send Enquiry'}
      </button>

      <p className="form-note">
        * We will never share your details with third parties.
      </p>
    </form>
  )
}

function Contact() {
  return (
    <div className="contact-page">
      <Helmet>
        <title>Contact Karna Enterprises | Packaging Materials Supplier in Bangalore & Hosur</title>
        <meta
          name="description"
          content="Get in touch with Karna Enterprises for EPE Foam, Thermocol, Tapes & Corrugated Packaging solutions. Serving Bangalore, Hosur & South India. Call or email us today."
        />
        <link rel="canonical" href="https://karnaenterprises.in/contact" />
        <script type="application/ld+json">
          {JSON.stringify(contactSchema)}
        </script>
      </Helmet>

      {/* PAGE HEADER */}
      <section className="page-header">
        <div className="page-header-inner">
          {/* Left Side */}
          <div className="page-header-content">
            <p className="page-label">Get in touch</p>
            <h1>Contact Karna Enterprises <p>Packaging Materials Supplier in Bangalore</p></h1>
            <p className="page-sub">
              Have a packaging requirement? We respond within 24 hours.
              Call, WhatsApp, or fill in the form below.
            </p>
          </div>

          {/* Right Side Illustration */}
          <div className="page-header-illustration">
            <img src={ContactIllustration} alt="Contact illustration" />
          </div>
        </div>
      </section>

      {/* H2: GET IN TOUCH FOR PACKAGING SOLUTIONS */}
      <section className="contact-overview-section">
        <div className="contact-inner">
          <Reveal>
            <p className="section-label">Direct Communication & Assistance</p>
            <h2 className="section-title">Get in Touch for Packaging Solutions in Bangalore, Hosur & South India</h2>
            <div className="contact-overview-content">
              <p>
                Karna Enterprises is here to help with all your packaging material requirements. Whether you need EPE Foam, Bubble Wrap, Thermocol, BOPP Tapes, or Corrugated Boxes, our team is ready to assist businesses across Bangalore, Karnataka, Hosur, and South India.
              </p>
              <p>
                We understand that timely communication is essential for your business operations, which is why we offer multiple ways to reach us — phone, email, or by visiting our facility located at Dinnepalya, CK Palya, Electronic City Road, Bangalore.
              </p>
              <p>
                Our team can guide you in choosing the right packaging solution for your products, from EPE Foam Corner and Thermocol Fitment Boxes to PET Strap, Stretch Wrap, and Custom Printed Tapes. We also assist with bulk order inquiries, custom packaging requirements, and pricing details.
              </p>
              <p>
                For businesses in Hosur, Tamil Nadu, and across South India, we ensure prompt responses and reliable delivery timelines. Reach out to us today to discuss your packaging needs, request a quote, or learn more about our complete product range.
              </p>
              <p>
                We look forward to building a lasting business relationship with you.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MAIN CONTACT SECTION */}
      <Reveal tag="section" className="contact-section">
        <div className="contact-inner">
          <div className="contact-grid">
            {/* LEFT — INFO */}
            <div className="contact-info">
              {[
                { icon: <Phone size={20} />, label: 'Call us', value: <a href="tel:+919901506336" className="contact-card-value">+91 99015 06336</a>, note: 'Mon to Fri, 10:00 AM – 6:00 PM IST' },
                { icon: <MessageCircle size={20} />, label: 'WhatsApp', value: <a href="https://wa.me/919901506336?text=Hi, I would like to enquire about your packaging products" className="contact-card-value" target="_blank" rel="noopener noreferrer">+91 99015 06336</a>, note: 'Fastest way to reach us' },
                { icon: <Mail size={20} />, label: 'Email', value: <a href="mailto:info@karnaenterprises.in" className="contact-card-value">info@karnaenterprises.in</a>, note: 'We reply within 24 hours' },
                { icon: <MapPin size={20} />, label: 'Address', value: <p className="contact-card-value contact-address">Dinnepalya, CK Palya<br />Electronic City Road<br />Bangalore 560083</p>, note: null },
                { icon: <Clock size={20} />, label: 'Business hours', value: <p className="contact-card-value">Monday – Friday</p>, note: '10:00 AM – 6:00 PM IST' },
              ].map(({ icon, label, value, note }, i) => (
                <Reveal key={label} delay={i * 60}>
                  <div className="contact-card">
                    <div className="contact-card-icon">{icon}</div>
                    <div>
                      <p className="contact-card-label">{label}</p>
                      {value}
                      {note && <p className="contact-card-note">{note}</p>}
                    </div>
                  </div>
                </Reveal>
              ))}

              <Reveal delay={300}>
                <a href="https://wa.me/919901506336?text=Hi, I would like to enquire about your packaging products" className="whatsapp-big-btn" target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={20} /> Chat with us on WhatsApp
                </a>
              </Reveal>
            </div>

            {/* RIGHT — FORM */}
            <Reveal className="contact-form-wrap" delay={100}>
              <h2>Send an Enquiry</h2>
              <p className="form-sub">
                Fill in your details and we will get back to you within 24 hours
                with pricing and availability.
              </p>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </Reveal>

      {/* MAP */}
      <Reveal tag="section" className="map-section">
        <div className="map-label">
          <MapPin size={16} />
          Dinnepalya, CK Palya, Electronic City Road, Bangalore 560083
        </div>
        <iframe
          title="Karna Enterprises Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.078083331421!2d77.60355391018257!3d12.838230717736947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15d857bd4a51%3A0x8d6afafd497fbf6a!2sKARNA%20ENTERPRISES!5e0!3m2!1sen!2sin!4v1781977946075!5m2!1sen!2sin"
          width="100%"
          height="420"
          style={{ border: 0, display: 'block' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Reveal>

      {/* 5 FAQS FOR CONTACT PAGE */}
      <FAQSection
        title="Frequently Asked Questions"
        subtitle="Quick information on contacting us, quote requests, visiting our facility, and service areas."
        faqs={contactFaqs}
      />
    </div>
  )
}

export default Contact