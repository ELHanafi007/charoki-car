import React from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, MapPin, Clock } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Map from '../components/Map';
import { WHATSAPP_NUMBER } from '../data/constants';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section style={{ paddingTop: '180px', paddingBottom: '140px' }}>
      <div className="container">
        <SectionTitle title={t('sections.contact_title')} subtitle={t('sections.contact_subtitle')} />
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginBottom: '100px' }}>
          <div style={{ background: '#fff', padding: '40px', border: '1px solid var(--border)' }}>
            <div style={{ width: '50px', height: '50px', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '25px' }}><Phone size={20} /></div>
            <div className="label-text" style={{ fontSize: '0.65rem', letterSpacing: '0.2em', fontWeight: 700, opacity: 0.6, marginBottom: '10px' }}>{t('contact.phone')}</div>
            <div style={{ fontSize: '1.2rem', fontWeight: 700 }}>+212 700 382 718</div>
          </div>
          <div style={{ background: '#fff', padding: '40px', border: '1px solid var(--border)' }}>
            <div style={{ width: '50px', height: '50px', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '25px' }}><MapPin size={20} /></div>
            <div className="label-text" style={{ fontSize: '0.65rem', letterSpacing: '0.2em', fontWeight: 700, opacity: 0.6, marginBottom: '10px' }}>{t('contact.showroom')}</div>
            <div style={{ fontSize: '1.2rem', fontWeight: 700 }}>Quartier Gauthier, Casablanca</div>
          </div>
          <div style={{ background: '#fff', padding: '40px', border: '1px solid var(--border)' }}>
            <div style={{ width: '50px', height: '50px', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '25px' }}><Clock size={20} /></div>
            <div className="label-text" style={{ fontSize: '0.65rem', letterSpacing: '0.2em', fontWeight: 700, opacity: 0.6, marginBottom: '10px' }}>{t('contact.hours')}</div>
            <div style={{ fontSize: '1.2rem', fontWeight: 700 }}>{t('contact.hours_text')}</div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '80px', alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: '1.3rem', lineHeight: 1.6, marginBottom: '45px', color: 'var(--text-primary)' }}>
              {t('contact.text')}
            </p>
            <button 
              className="btn-primary" 
              style={{ width: '100%', padding: '25px' }} 
              onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}`)}
            >
              {t('contact.whatsapp')}
            </button>
          </div>
          <Map />
        </div>
      </div>
    </section>
  );
};

export default Contact;
