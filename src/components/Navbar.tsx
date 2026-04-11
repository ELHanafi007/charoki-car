import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    document.dir = lng === 'ar' ? 'rtl' : 'ltr';
  };

  const menuItems = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.fleet'), path: '/fleet' },
    { label: t('nav.contact'), path: '/contact' }
  ];

  const isHome = location.pathname === '/';

  return (
    <>
      <nav className={`glass-nav ${isScrolled || !isHome ? 'scrolled' : ''}`}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" className="logo" style={{ fontSize: '1.2rem', fontWeight: 800, letterSpacing: '3px', cursor: 'pointer', color: 'var(--text-primary)', textDecoration: 'none' }}>
            CHAROKI<span style={{ color: 'var(--accent)' }}>CAR</span>
          </Link>
          
          <div className="desktop-menu" style={{ display: 'flex', gap: '45px', alignItems: 'center' }}>
            {menuItems.map((item) => (
              <Link 
                key={item.path} 
                to={item.path} 
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            ))}
            
            <div style={{ display: 'flex', gap: '15px', alignItems: 'center', marginLeft: '20px', borderLeft: '1px solid var(--border)', paddingLeft: '20px' }}>
              <button onClick={() => changeLanguage('fr')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.65rem', fontWeight: i18n.language === 'fr' ? 800 : 400, color: 'var(--text-primary)' }}>FR</button>
              <button onClick={() => changeLanguage('en')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.65rem', fontWeight: i18n.language === 'en' ? 800 : 400, color: 'var(--text-primary)' }}>EN</button>
              <button onClick={() => changeLanguage('ar')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.65rem', fontWeight: i18n.language === 'ar' ? 800 : 400, color: 'var(--text-primary)' }}>AR</button>
            </div>

            <Link to="/fleet" className="btn-primary" style={{ padding: '12px 35px', textDecoration: 'none' }}>
              {t('nav.book')}
            </Link>
          </div>

          <div className="mobile-toggle" style={{ display: 'none', cursor: 'pointer' }} onClick={() => setIsMobileMenuOpen(true)}>
             <Menu size={28} color="var(--text-primary)" />
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }} 
            animate={{ x: 0 }} 
            exit={{ x: '100%' }} 
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{ position: 'fixed', inset: 0, background: '#fff', zIndex: 2000, display: 'flex', flexDirection: 'column', padding: '40px' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '80px' }}>
              <div className="logo" style={{ fontSize: '1.2rem', fontWeight: 800, letterSpacing: '3px', color: 'var(--text-primary)' }}>
                CHAROKI<span style={{ color: 'var(--accent)' }}>CAR</span>
              </div>
              <div style={{ cursor: 'pointer' }} onClick={() => setIsMobileMenuOpen(false)}>
                <X size={32} color="var(--text-primary)" />
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              {menuItems.map((item) => (
                <Link 
                  key={item.path} 
                  to={item.path} 
                  className="serif" 
                  style={{ fontSize: '2.5rem', color: location.pathname === item.path ? 'var(--accent)' : 'var(--text-primary)', textDecoration: 'none' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div style={{ marginTop: 'auto', display: 'flex', gap: '30px' }}>
               <button onClick={() => changeLanguage('fr')} style={{ background: 'none', border: 'none', fontSize: '1rem', fontWeight: i18n.language === 'fr' ? 800 : 400 }}>FRANÇAIS</button>
               <button onClick={() => changeLanguage('en')} style={{ background: 'none', border: 'none', fontSize: '1rem', fontWeight: i18n.language === 'en' ? 800 : 400 }}>ENGLISH</button>
               <button onClick={() => changeLanguage('ar')} style={{ background: 'none', border: 'none', fontSize: '1rem', fontWeight: i18n.language === 'ar' ? 800 : 400 }}>العربية</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
