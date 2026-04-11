import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Zap, Fuel, ArrowUpRight } from 'lucide-react';
import type { Car } from '../types';

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const { t } = useTranslation();
  
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
            src={car.image + "&fm=webp"} 
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
        <div className="card-body">
          <span style={{ fontSize: '0.6rem', color: 'var(--accent)', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>{car.brand}</span>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '20px', color: 'var(--text-primary)' }}>{car.name}</h3>
          <div style={{ display: 'flex', gap: '20px', marginBottom: '25px', color: 'var(--text-secondary)', fontSize: '0.75rem', fontWeight: 500 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Zap size={14} color="var(--accent)" /> {car.transmission}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Fuel size={14} color="var(--accent)" /> {car.fuel}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-light)', paddingTop: '20px' }}>
            <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)' }}>{car.price} MAD <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontWeight: 400 }}>{t('car.per_day')}</span></div>
            <div style={{ width: '35px', height: '35px', borderRadius: '50%', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ArrowUpRight size={16} /></div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CarCard;
