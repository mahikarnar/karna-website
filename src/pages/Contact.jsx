import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import { useForm, ValidationError } from '@formspree/react'
import { Helmet } from 'react-helmet-async'
import ContactIllustration from '../assets/illustrations/contact-illustration.svg';
import './Contact.css'

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
            <Helmet>
                <title>Contact Us | Karna Enterprises Packaging Supplier Bangalore</title>
                <meta name="description" content="Contact Karna Enterprises for packaging materials in Bangalore. Call +91 99015 06336, WhatsApp us, or fill in our enquiry form. Located on Electronic City Road." />
                <link rel="canonical" href="https://www.karnaenterprises.in/contact" />
            </Helmet>
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

            {/* PAGE HEADER */}
            <section className="page-header">
                <div className="page-header-inner">

                    {/* Left Side */}
                    <div className="page-header-content">

                        <p className="page-label">
                            Get in touch
                        </p>

                        <h1>
                            Contact Us
                        </h1>

                        <p className="page-sub">
                            Have a packaging requirement? We respond within 24 hours.
                            Call, WhatsApp, or fill in the form below.
                        </p>

                    </div>

                    {/* Right Side Illustration */}

                    <div className="page-header-illustration">

                        <img
                            src={ContactIllustration}
                            alt="Contact illustration"
                        />

                    </div>

                </div>
            </section>

            {/* MAIN CONTACT SECTION */}
            <section className="contact-section">
                <div className="contact-inner">
                    <div className="contact-grid">

                        {/* LEFT — INFO */}
                        <div className="contact-info">

                            <div className="contact-card">
                                <div className="contact-card-icon"><Phone size={20} /></div>
                                <div>
                                    <p className="contact-card-label">Call us</p>
                                    <a href="tel:+919901506336" className="contact-card-value">
                                        +91 99015 06336
                                    </a>
                                    <p className="contact-card-note">Mon to Fri, 10:00 AM – 6:00 PM IST</p>
                                </div>
                            </div>

                            <div className="contact-card">
                                <div className="contact-card-icon"><MessageCircle size={20} /></div>
                                <div>
                                    <p className="contact-card-label">WhatsApp</p>
                                    <a
                                        href="https://wa.me/919901506336?text=Hi, I would like to enquire about your packaging products"
                                        className="contact-card-value"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        +91 99015 06336
                                    </a>
                                    <p className="contact-card-note">Fastest way to reach us</p>
                                </div>
                            </div>

                            <div className="contact-card">
                                <div className="contact-card-icon"><Mail size={20} /></div>
                                <div>
                                    <p className="contact-card-label">Email</p>
                                    <a href="mailto:info@karnaenterprises.in" className="contact-card-value">
                                        info@karnaenterprises.in
                                    </a>
                                    <p className="contact-card-note">We reply within 24 hours</p>
                                </div>
                            </div>

                            <div className="contact-card">
                                <div className="contact-card-icon"><MapPin size={20} /></div>
                                <div>
                                    <p className="contact-card-label">Address</p>
                                    <p className="contact-card-value contact-address">
                                        Dinnepalya, CK Palya<br />
                                        Electronic City Road<br />
                                        Bangalore 560083
                                    </p>
                                </div>
                            </div>

                            <div className="contact-card">
                                <div className="contact-card-icon"><Clock size={20} /></div>
                                <div>
                                    <p className="contact-card-label">Business hours</p>
                                    <p className="contact-card-value">Monday – Friday</p>
                                    <p className="contact-card-note">10:00 AM – 6:00 PM IST</p>
                                </div>
                            </div>

                            <a
                                href="https://wa.me/919901506336?text=Hi, I would like to enquire about your packaging products"
                                className="whatsapp-big-btn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <MessageCircle size={20} />
                                Chat with us on WhatsApp
                            </a>

                        </div>

                        {/* RIGHT — FORM */}
                        <div className="contact-form-wrap">
                            <h2>Send an Enquiry</h2>
                            <p className="form-sub">
                                Fill in your details and we will get back to you within 24 hours
                                with pricing and availability.
                            </p>
                            <ContactForm />
                        </div>

                    </div>
                </div>
            </section>

            {/* MAP */}
            <section className="map-section">
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
            </section>

        </div>
    )
}

export default Contact