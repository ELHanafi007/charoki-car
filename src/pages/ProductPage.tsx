import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowLeft, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { useCars } from '../context/CarContext';
import DateSelectionBar from '../components/DateSelectionBar';

const ProductPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language as Language) || 'fr';
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getCarById } = useCars();
  const car = getCarById(Number(id));

  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  if (!car) {
    return (
      <div style={{ paddingTop: '200px', textAlign: 'center' }}>
        <h2>Vehicle not found</h2>
        <Link to="/fleet">Back to fleet</Link>
      </div>
    );
  }

  const calculateDays = (s: string, e: string) => {
    if (!s || !e) return 0;
    const diff = new Date(e).getTime() - new Date(s).getTime();
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days > 0 ? days : 0;
  };

  const days = calculateDays(start, end);

  return (
    <section style={{ paddingTop: '160px', paddingBottom: '140px' }}>
      <div className="container">
        <button 
          onClick={() => navigate('/fleet')} 
          style={{ border: 'none', background: 'transparent', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '50px', cursor: 'pointer', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}
        >
          <ArrowLeft size={16} /> {t('car.back')}
        </button>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '80px' }}>
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <img 
              src={car.image.startsWith('http') ? car.image + "&fm=webp" : car.image} 
              alt={`Charoki Car Rental: ${car.name} luxury vehicle`} 
              style={{ width: '100%', height: '550px', objectFit: 'cover', border: '1px solid var(--border)' }} 
              width="800"
              height="550"
            />
            <div style={{ marginTop: '50px' }}>
              <div style={{ color: 'var(--accent)', fontWeight: 800, fontSize: '0.7rem', letterSpacing: '0.3em', marginBottom: '15px' }}>{car.brand.toUpperCase()}</div>
              <h1 style={{ fontSize: '4rem', marginBottom: '25px' }}>{car.name}</h1>
              <div style={{ display: 'flex', gap: '15px', marginBottom: '40px' }}>
                <span style={{ border: '1px solid var(--border)', padding: '6px 18px', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em' }}>{car.category[lang]}</span>
                <span style={{ 
                  background: car.status === 'disponible' ? 'var(--accent)' : '#e67e22', 
                  color: '#fff', 
                  padding: '6px 18px', 
                  fontSize: '0.7rem', 
                  fontWeight: 700, 
                  letterSpacing: '0.1em' 
                }}>
                  {car.status === 'disponible' ? t('admin.disp') : t('admin.rent')}
                </span>
              </div>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '50px' }}>{car.fullDescription[lang]}</p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '20px' }}>
                <div style={{ padding: '30px', background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
                  <div style={{ fontSize: '0.6rem', fontWeight: 800, opacity: 0.5, letterSpacing: '0.1em', marginBottom: '10px' }}>{t('car.engine')}</div>
                  <div style={{ fontWeight: 700 }}>{car.engine}</div>
                </div>
                <div style={{ padding: '30px', background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
                  <div style={{ fontSize: '0.6rem', fontWeight: 800, opacity: 0.5, letterSpacing: '0.1em', marginBottom: '10px' }}>{t('car.transmission')}</div>
                  <div style={{ fontWeight: 700 }}>{car.transmission[lang]}</div>
                </div>
                <div style={{ padding: '30px', background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
                  <div style={{ fontSize: '0.6rem', fontWeight: 800, opacity: 0.5, letterSpacing: '0.1em', marginBottom: '10px' }}>{t('car.fuel')}</div>
                  <div style={{ fontWeight: 700 }}>{car.fuel[lang]}</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} style={{ position: 'sticky', top: '140px', height: 'fit-content' }}>
            <div style={{ padding: '50px', border: '1px solid var(--border)', background: '#fff', boxShadow: '0 10px 40px rgba(0,0,0,0.04)' }}>
              <div style={{ fontSize: '0.6rem', fontWeight: 800, opacity: 0.5, letterSpacing: '0.1em', marginBottom: '10px' }}>{t('car.details')}</div>
              <div style={{ fontSize: '2.8rem', fontWeight: 800, marginBottom: '40px' }}>{car.price} MAD <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 400 }}>{t('car.per_day')}</span></div>
              
              <div style={{ display: 'grid', gap: '25px', marginBottom: '40px' }}>
                <DateSelectionBar 
                  label={t('booking.start')}
                  value={start}
                  onChange={setStart}
                />
                <DateSelectionBar 
                  label={t('booking.end')}
                  value={end}
                  onChange={setEnd}
                />
              </div>

              {days > 0 && (
                <div style={{ padding: '25px', background: 'var(--bg-secondary)', marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 800 }}>{t('car.total')} ({days} {t('car.days')})</span>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>{days * car.price} MAD</div>
                </div>
              )}

              <button 
                className="btn-primary" 
                style={{ width: '100%' }} 
                onClick={() => navigate(`/booking/${car.id}?start=${start}&end=${end}`)}
                disabled={car.status === 'loué'}
              >
                {car.status === 'loué' ? t('car.unavailable') : t('car.reserve')}
              </button>
              
              <div style={{ marginTop: '40px', borderTop: '1px solid var(--border-light)', paddingTop: '30px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                  <ShieldCheck size={20} color="var(--accent)" />
                  <span style={{ fontSize: '0.85rem' }}>{t('car.insurance')}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                  <MapPin size={20} color="var(--accent)" />
                  <span style={{ fontSize: '0.85rem' }}>{t('car.delivery')}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <Clock size={20} color="var(--accent)" />
                  <span style={{ fontSize: '0.85rem' }}>{t('car.assistance')}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
