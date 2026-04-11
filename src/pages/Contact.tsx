import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Map from '../components/Map';
import { WHATSAPP_NUMBER } from '../data/constants';

const Contact: React.FC = () => {
  return (
    <section style={{ paddingTop: '180px', paddingBottom: '140px' }}>
      <div className="container">
        <SectionTitle title="Parlons de votre Séjour" subtitle="CONTACT" />
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginBottom: '100px' }}>
          <div style={{ background: '#fff', padding: '40px', border: '1px solid var(--border)' }}>
            <div style={{ width: '50px', height: '50px', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '25px' }}><Phone size={20} /></div>
            <div className="label-text" style={{ fontSize: '0.65rem', letterSpacing: '0.2em', fontWeight: 700, opacity: 0.6, marginBottom: '10px' }}>TÉLÉPHONE</div>
            <div style={{ fontSize: '1.2rem', fontWeight: 700 }}>+212 700 382 718</div>
          </div>
          <div style={{ background: '#fff', padding: '40px', border: '1px solid var(--border)' }}>
            <div style={{ width: '50px', height: '50px', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '25px' }}><MapPin size={20} /></div>
            <div className="label-text" style={{ fontSize: '0.65rem', letterSpacing: '0.2em', fontWeight: 700, opacity: 0.6, marginBottom: '10px' }}>SHOWROOM</div>
            <div style={{ fontSize: '1.2rem', fontWeight: 700 }}>Quartier Gauthier, Casablanca</div>
          </div>
          <div style={{ background: '#fff', padding: '40px', border: '1px solid var(--border)' }}>
            <div style={{ width: '50px', height: '50px', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '25px' }}><Clock size={20} /></div>
            <div className="label-text" style={{ fontSize: '0.65rem', letterSpacing: '0.2em', fontWeight: 700, opacity: 0.6, marginBottom: '10px' }}>HORAIRES</div>
            <div style={{ fontSize: '1.2rem', fontWeight: 700 }}>09:00 - 20:00 • Lun - Sam</div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: '1.3rem', lineHeight: 1.6, marginBottom: '45px', color: 'var(--text-primary)' }}>
              Notre équipe est à votre disposition pour vous conseiller et organiser votre mobilité sur-mesure à Casablanca.
            </p>
            <button 
              className="btn-primary" 
              style={{ width: '100%', padding: '25px' }} 
              onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}`)}
            >
              DÉBUTER SUR WHATSAPP
            </button>
          </div>
          <Map />
        </div>
      </div>
    </section>
  );
};

export default Contact;
