import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CarProvider } from './context/CarContext';
import './i18n/config';

// Layout
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy Loaded Pages
const Home = lazy(() => import('./pages/Home'));
const Admin = lazy(() => import('./pages/Admin'));
const Fleet = lazy(() => import('./pages/Fleet'));
const Contact = lazy(() => import('./pages/Contact'));
const ProductPage = lazy(() => import('./pages/ProductPage'));
const Booking = lazy(() => import('./pages/Booking'));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <CarProvider>
      <Router>
        <ScrollToTop />
        <Navbar />
        <main>
          <Suspense fallback={<div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', color: 'var(--accent)', fontSize: '1.2rem', fontWeight: 600 }}>CHAROKI CAR...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/fleet" element={<Fleet />} />
              <Route path="/car/:id" element={<ProductPage />} />
              <Route path="/booking/:id" element={<Booking />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </Router>
    </CarProvider>
  );
};

export default App;
