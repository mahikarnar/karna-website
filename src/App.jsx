import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Products = lazy(() => import('./pages/Products'))
const Clients = lazy(() => import('./pages/Clients'))
const Contact = lazy(() => import('./pages/Contact'))
const Sitemap = lazy(() => import('./pages/Sitemap'))
const NotFound = lazy(() => import('./pages/NotFound'))

// EPE Foam Dedicated Landing Pages
const EPEFoamPackagingProducts = lazy(() => import('./pages/EPEFoamPackagingProducts'))
const EPEFoamFitment = lazy(() => import('./pages/EPEFoamFitment'))
const EPEFoamBoxes = lazy(() => import('./pages/EPEFoamBoxes'))
const EPEFoamSheets = lazy(() => import('./pages/EPEFoamSheets'))
const EPEFoamRolls = lazy(() => import('./pages/EPEFoamRolls'))
const EPEFoamPouches = lazy(() => import('./pages/EPEFoamPouches'))

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sitemap" element={<Sitemap />} />

            {/* EPE Foam Dedicated SEO Landing Pages */}
            <Route path="/epe-foam-packaging-products-bangalore" element={<EPEFoamPackagingProducts />} />
            <Route path="/epe-foam-fitment-bangalore" element={<EPEFoamFitment />} />
            <Route path="/epe-foam-boxes-bangalore" element={<EPEFoamBoxes />} />
            <Route path="/epe-foam-sheets-bangalore" element={<EPEFoamSheets />} />
            <Route path="/epe-foam-rolls-bangalore" element={<EPEFoamRolls />} />
            <Route path="/epe-foam-pouches-bangalore" element={<EPEFoamPouches />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </Suspense>
      <Footer />
    </BrowserRouter>
  )
}

export default App