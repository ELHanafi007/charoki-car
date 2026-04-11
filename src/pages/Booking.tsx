import React, { useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCars } from '../context/CarContext';
import { WHATSAPP_NUMBER } from '../data/constants';
import DateSelectionBar from '../components/DateSelectionBar';

const Booking: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const { getCarById } = useCars();
  const car = getCarById(Number(id));

  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    start: searchParams.get('start') || '',
    end: searchParams.get('end') || ''
  });

  const calculateDays = (s: string, e: string) => {
    if (!s || !e) return 0;
    const diff = new Date(e).getTime() - new Date(s).getTime();
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days > 0 ? days : 0;
  };

  const days = calculateDays(form.start, form.end);

  if (!car) return <div>Car not found</div>;

  const submit = () => {
    const msg = `Réservation CHAROKI CARS\n\nVéhicule: ${car.name}\nPériode: ${form.start} au ${form.end} (${days} j)\nTotal: ${days * car.price} MAD\n\nClient: ${form.name}\nTél: ${form.phone}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section style={{ paddingTop: '180px', paddingBottom: '140px', background: 'var(--bg-secondary)', minHeight: '100vh' }}>
      <div className="container">
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '60px' }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ background: '#fff', padding: '60px', border: '1px solid var(--border)', boxShadow: '0 10px 40px rgba(0,0,0,0.04)' }}
          >
            <h2 className="serif" style={{ fontSize: '2.5rem', marginBottom: '40px' }}>Confirmation de <br /><span>Réservation</span></h2>
            
            {step === 1 ? (
              <div style={{ display: 'grid', gap: '30px' }}>
                <DateSelectionBar 
                  label="DÉBUT DE LOCATION"
                  value={form.start}
                  onChange={(val) => setForm({...form, start: val})}
                />
                <DateSelectionBar 
                  label="FIN DE LOCATION"
                  value={form.end}
                  onChange={(val) => setForm({...form, end: val})}
                />
                <button className="btn-primary" onClick={() => setStep(2)} disabled={days <= 0}>SUIVANT</button>
              </div>
            ) : (
              <div style={{ display: 'grid', gap: '30px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.1em', marginBottom: '10px' }}>VOTRE NOM COMPLET</label>
                  <input 
                    placeholder="Ex: Youssef El Amrani"
                    style={{ width: '100%', padding: '15px', border: '1px solid var(--border)', fontSize: '0.9rem', background: 'var(--bg-secondary)', fontWeight: 600 }} 
                    value={form.name} 
                    onChange={e => setForm({...form, name: e.target.value})} 
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.1em', marginBottom: '10px' }}>VOTRE TÉLÉPHONE</label>
                  <input 
                    placeholder="Ex: 06 00 00 00 00"
                    style={{ width: '100%', padding: '15px', border: '1px solid var(--border)', fontSize: '0.9rem', background: 'var(--bg-secondary)', fontWeight: 600 }} 
                    value={form.phone} 
                    onChange={e => setForm({...form, phone: e.target.value})} 
                  />
                </div>
                <button className="btn-primary" onClick={submit} disabled={!form.name || !form.phone}>TERMINER SUR WHATSAPP</button>
                <button 
                  onClick={() => setStep(1)}
                  style={{ background: 'none', border: 'none', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', cursor: 'pointer', opacity: 0.5 }}
                >
                  MODIFIER LES DATES
                </button>
              </div>
            )}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ padding: '40px', border: '1px solid var(--border)', background: '#fff' }}
          >
            <img src={car.image} style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover', marginBottom: '30px' }} />
            <h3 style={{ fontSize: '1.6rem', marginBottom: '10px' }}>{car.name}</h3>
            <div style={{ color: 'var(--accent)', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.1em' }}>{car.price} MAD / JOUR</div>
            
            {days > 0 && (
              <div style={{ marginTop: '40px', paddingTop: '30px', borderTop: '1px solid var(--border-light)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Durée</span>
                  <span style={{ fontWeight: 600 }}>{days} jours</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.4rem', fontWeight: 800 }}>
                  <span>Total</span>
                  <span style={{ color: 'var(--accent)' }}>{days * car.price} MAD</span>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
