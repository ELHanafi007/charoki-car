import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Zap, Fuel, ArrowUpRight } from 'lucide-react';
import type { Car, Language } from '../types';

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language as Language) || 'fr';
  
  return (
    <motion.div 
      className="car-card" 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      style={{ overflow: 'hidden' }}
    >
      <Link to={`/car/${car.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="image-wrapper" style={{ overflow: 'hidden', position: 'relative' }}>
          <img 
            src={car.image.startsWith('http') ? car.image + "&fm=webp" : car.image} 
            alt={`Charoki Car Rental: ${car.name}`} 
            style={{ transition: 'transform 1s cubic-bezier(0.16, 1, 0.3, 1)' }} 
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'} 
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} 
            loading="lazy"
            width="400"
            height="267"
          />
          {car.status === 'loué' && (
            <div style={{ position: 'absolute', top: '20px', right: '20px', background: 'rgba(230, 126, 34, 0.9)', color: '#fff', padding: '5px 15px', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.1em' }}>
              {t('car.unavailable').split(' ')[0]} {/* simplified status */}
            </div>
          )}
        </div>
        <div className="card-body" style={{ padding: '1.5rem' }}>
          <span style={{ fontSize: '0.55rem', color: 'var(--accent)', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>{car.brand}</span>
          <h3 style={{ fontSize: '1.4rem', marginBottom: '15px', color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{car.name}</h3>
          <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', color: 'var(--text-secondary)', fontSize: '0.65rem', fontWeight: 500 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Zap size={12} color="var(--accent)" /> {car.transmission[lang].split(' ')[0]}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Fuel size={12} color="var(--accent)" /> {car.fuel[lang]}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-light)', paddingTop: '15px' }}>
            <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>{car.price} <span style={{ fontSize: '0.6rem', color: 'var(--text-secondary)', fontWeight: 400 }}>MAD/{t('car.days').slice(0,1)}</span></div>
            <div style={{ width: '28px', height: '28px', borderRadius: '50%', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ArrowUpRight size={14} /></div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CarCard;
