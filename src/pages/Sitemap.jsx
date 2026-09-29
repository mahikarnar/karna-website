import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import './Sitemap.css'

const sitemapLinks = [
  {
    label: 'EPE Foam Packaging Products in Bangalore',
    path: '/epe-foam-packaging-products-bangalore',
    url: 'https://karnaenterprises.in/epe-foam-packaging-products-bangalore'
  },
  {
    label: 'EPE Foam Fitment in Bangalore',
    path: '/epe-foam-fitment-bangalore',
    url: 'https://karnaenterprises.in/epe-foam-fitment-bangalore'
  },
  {
    label: 'EPE Foam Boxes in Bangalore',
    path: '/epe-foam-boxes-bangalore',
    url: 'https://karnaenterprises.in/epe-foam-boxes-bangalore'
  },
  {
    label: 'EPE Foam Sheets in Bangalore',
    path: '/epe-foam-sheets-bangalore',
    url: 'https://karnaenterprises.in/epe-foam-sheets-bangalore'
  },
  {
    label: 'EPE Foam Rolls in Bangalore',
    path: '/epe-foam-rolls-bangalore',
    url: 'https://karnaenterprises.in/epe-foam-rolls-bangalore'
  },
  {
    label: 'EPE Foam Pouches in Bangalore',
    path: '/epe-foam-pouches-bangalore',
    url: 'https://karnaenterprises.in/epe-foam-pouches-bangalore'
  }
]

export default function Sitemap() {
  return (
    <div className="sitemap-container">
      <Helmet>
        <title>Sitemap | Karna Enterprises</title>
        <meta
          name="description"
          content="Sitemap of Karna Enterprises. Access all pages and EPE foam packaging product links."
        />
        <link rel="canonical" href="https://karnaenterprises.in/sitemap" />
      </Helmet>

      <main className="sitemap-content">
        <h1>Sitemap</h1>

        <ul className="sitemap-links-list">
          {sitemapLinks.map((item, index) => (
            <li key={index} className="sitemap-link-item">
              <Link to={item.path} className="sitemap-page-link">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}
