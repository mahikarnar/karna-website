<div align="center">
  <img src="public/images/KElogo.png" alt="Karna Enterprises Logo" width="72" height="72" style="border-radius:50%; background:#fff; padding:4px;" />

  # Karna Enterprises

  **Manufacturer & Supplier of Premium Packaging Materials**
  Bangalore, India &nbsp;·&nbsp; Since 2010

  [![Live Site](https://img.shields.io/badge/Live%20Site-karnaenterprises.in-C41E3A?style=for-the-badge&logo=google-chrome&logoColor=white)](https://karnaenterprises.in)
  [![Built with React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
  [![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)

</div>

---

## About

Official website for **Karna Enterprises**, a Bangalore-based manufacturer and supplier of premium packaging materials. The site showcases their full product range, featured clients, and provides direct contact and enquiry channels.

> *Packaging Solutions That Protect What Matters*

---

## Pages

| Page | Description |
|---|---|
| **Home** | Hero, stats, why us, product highlights, client names, CTA |
| **Products** | Full product catalogue with search, images, tags & WhatsApp enquiry |
| **About** | Company story, director profile, company info card |
| **Clients** | Featured client logos, full client list, stats |
| **Contact** | Contact form (Formspree), address, phone, map embed |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite |
| Routing | React Router DOM v6 |
| Icons | Lucide React |
| Forms | Formspree |
| SEO | React Helmet Async |
| Fonts | Google Fonts (Inter, Poppins, Cinzel) |
| Hosting | Hostinger (Apache + `.htaccess` SPA routing) |

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx / .css
│   └── Footer.jsx / .css
├── pages/
│   ├── Home.jsx / .css
│   ├── About.jsx / .css
│   ├── Products.jsx / .css
│   ├── Clients.jsx / .css
│   ├── Contact.jsx / .css
│   └── NotFound.jsx
├── styles/
│   └── global.css
└── main.jsx
public/
├── images/
│   ├── products/      ← 24 product images
│   ├── clients/       ← client logos
│   └── KEoffice.jpeg
├── .htaccess          ← SPA routing for Hostinger
└── robots.txt
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

Upload the contents of the generated `dist/` folder to `public_html` on Hostinger.

---

<div align="center">
  <sub>Built and maintained by <strong>Mahi Karna R</strong></sub>
</div>
