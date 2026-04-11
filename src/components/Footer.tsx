import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer style={{ padding: '100px 0 60px', background: '#fff', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '80px', marginBottom: '80px' }}>
          <div>
            <div className="logo" style={{ fontSize: '1.8rem', fontWeight: 800, letterSpacing: '2px', marginBottom: '30px' }}>
              CHAROKI<span style={{ color: 'var(--accent)' }}>CAR</span>
            </div>
            <p style={{ maxWidth: '400px', marginBottom: '35px', lineHeight: 1.8 }}>
              {t('hero.subtitle')}
            </p>
            <div style={{ display: 'flex', gap: '25px' }}>
              <Instagram size={18} style={{ opacity: 0.6, cursor: 'pointer' }} />
              <Facebook size={18} style={{ opacity: 0.6, cursor: 'pointer' }} />
              <MessageCircle size={18} style={{ opacity: 0.6, cursor: 'pointer' }} />
            </div>
          </div>
          <div>
            <h4 style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.2em', marginBottom: '30px', color: 'var(--text-secondary)' }}>{t('footer.useful_links')}</h4>
            <ul style={{ listStyle: 'none', display: 'grid', gap: '18px' }}>
              <li><Link to="/" style={{ textDecoration: 'none', color: 'inherit', fontSize: '0.8rem', fontWeight: 600, opacity: 0.6 }}>{t('nav.home')}</Link></li>
              <li><Link to="/fleet" style={{ textDecoration: 'none', color: 'inherit', fontSize: '0.8rem', fontWeight: 600, opacity: 0.6 }}>{t('nav.fleet')}</Link></li>
              <li><Link to="/contact" style={{ textDecoration: 'none', color: 'inherit', fontSize: '0.8rem', fontWeight: 600, opacity: 0.6 }}>{t('nav.contact')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.2em', marginBottom: '30px', color: 'var(--text-secondary)' }}>{t('footer.coordinates')}</h4>
            <div style={{ fontSize: '0.9rem', lineHeight: 1.8, opacity: 0.8 }}>
              12 Rue Gauthier, Casablanca, Maroc<br /><br />
              {t('contact.phone')} : +212 700 382 718<br />
              Mail : contact@charokicar.ma
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--text-secondary)', fontSize: '0.65rem', letterSpacing: '0.15em' }}>
          <span>© {new Date().getFullYear()} CHAROKI CAR. {t('footer.rights')}</span>
          <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>LUXURY DIGITAL</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
