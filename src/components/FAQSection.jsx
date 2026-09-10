import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import Reveal from './Reveal'
import './FAQSection.css'

function FAQSection({
  title = 'Frequently Asked Questions',
  subtitle = 'Find quick answers to common questions about our products, customization, and delivery.',
  badge = 'Got Questions?',
  faqs = [],
  className = '',
}) {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  if (!faqs || faqs.length === 0) return null

  return (
    <section className={`faq-section ${className}`}>
      <div className="faq-inner">
        <Reveal>
          <div className="faq-header">
            {badge && (
              <span className="faq-badge">
                <HelpCircle size={14} />
                {badge}
              </span>
            )}
            <h2 className="faq-title">{title}</h2>
            {subtitle && <p className="faq-subtitle">{subtitle}</p>}
          </div>
        </Reveal>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <Reveal key={index} delay={index * 50}>
                <div className={`faq-item ${isOpen ? 'is-open' : ''}`}>
                  <button
                    type="button"
                    className="faq-question-btn"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                  >
                    <span className="faq-question-text">{faq.question}</span>
                    <span className="faq-icon-wrapper" aria-hidden="true">
                      <ChevronDown size={18} className="faq-chevron" />
                    </span>
                  </button>
                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    className="faq-answer-collapse"
                    style={{
                      maxHeight: isOpen ? '500px' : '0px',
                    }}
                  >
                    <div className="faq-answer-inner">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQSection
