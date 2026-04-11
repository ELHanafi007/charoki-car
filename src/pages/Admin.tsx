import React, { useState } from 'react';
import { useCars } from '../context/CarContext';
import { useTranslation } from 'react-i18next';
import { Shield, Save, Settings, LogOut, Car as CarIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const ADMIN_CODE = "15139922";

const Admin: React.FC = () => {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language as Language) || 'fr';
  const [code, setCode] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const { cars, updateCarPrice, updateCarStatus } = useCars();
  const [editingCar, setEditingCar] = useState<number | null>(null);
  const [newPrice, setNewPrice] = useState<number>(0);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (code === ADMIN_CODE) {
      setIsAuthorized(true);
    } else {
      alert("Code incorrect");
    }
  };

  const handlePriceUpdate = (id: number) => {
    updateCarPrice(id, newPrice);
    setEditingCar(null);
  };

  if (!isAuthorized) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-secondary)' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ background: '#fff', padding: '50px', border: '1px solid var(--border)', boxShadow: 'var(--shadow-soft)', maxWidth: '400px', width: '100%', textAlign: 'center' }}
        >
          <div style={{ width: '60px', height: '60px', background: 'var(--bg-secondary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 30px' }}>
            <Shield size={30} color="var(--accent)" />
          </div>
          <h2 className="serif" style={{ fontSize: '2rem', marginBottom: '10px' }}>{t('admin.title')}</h2>
          <p style={{ fontSize: '0.85rem', marginBottom: '30px', opacity: 0.6 }}>{t('admin.subtitle')}</p>
          <form onSubmit={handleLogin} style={{ display: 'grid', gap: '20px' }}>
            <input 
              type="password" 
              placeholder={t('admin.placeholder')}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              style={{ padding: '15px', border: '1px solid var(--border)', fontSize: '1rem', textAlign: 'center', letterSpacing: '0.5em' }}
            />
            <button className="btn-primary" type="submit" style={{ width: '100%' }}>{t('admin.login')}</button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-secondary)', paddingTop: '120px', paddingBottom: '80px' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px' }}>
          <div>
            <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--accent)', letterSpacing: '0.2em' }}>{t('admin.dashboard')}</span>
            <h1 style={{ fontSize: '3rem', marginTop: '10px' }}>{t('admin.manage')}</h1>
          </div>
          <button onClick={() => setIsAuthorized(false)} style={{ border: 'none', background: 'none', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontWeight: 700, fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
            <LogOut size={16} /> {t('admin.logout')}
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' }}>
          <div style={{ background: '#fff', padding: '25px', border: '1px solid var(--border)' }}>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.65rem', fontWeight: 700, marginBottom: '10px' }}>{t('admin.total')}</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '10px' }}>
              <CarIcon size={24} color="var(--accent)" /> {cars.length}
            </div>
          </div>
          <div style={{ background: '#fff', padding: '25px', border: '1px solid var(--border)' }}>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.65rem', fontWeight: 700, marginBottom: '10px' }}>{t('admin.available')}</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#27ae60' }}>
              {cars.filter(c => c.status === 'disponible').length}
            </div>
          </div>
          <div style={{ background: '#fff', padding: '25px', border: '1px solid var(--border)' }}>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.65rem', fontWeight: 700, marginBottom: '10px' }}>{t('admin.rented')}</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#e67e22' }}>
              {cars.filter(c => c.status === 'loué').length}
            </div>
          </div>
          <div style={{ background: '#fff', padding: '25px', border: '1px solid var(--border)' }}>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.65rem', fontWeight: 700, marginBottom: '10px' }}>{t('admin.avg_price')}</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 700 }}>
              {Math.round(cars.reduce((acc, c) => acc + c.price, 0) / cars.length)} MAD
            </div>
          </div>
        </div>

        <div style={{ background: '#fff', border: '1px solid var(--border)', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '800px' }}>
            <thead style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)' }}>
              <tr>
                <th style={{ padding: '20px 30px', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.1em' }}>{t('admin.vehicle')}</th>
                <th style={{ padding: '20px 30px', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.1em' }}>{t('admin.price')} (MAD)</th>
                <th style={{ padding: '20px 30px', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.1em' }}>{t('admin.status')}</th>
                <th style={{ padding: '20px 30px', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.1em', textAlign: 'right' }}>{t('admin.actions')}</th>
              </tr>
            </thead>
            <tbody>
              {cars.map(car => (
                <tr key={car.id} style={{ borderBottom: '1px solid var(--border-light)' }}>
                  <td style={{ padding: '25px 30px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                      <img src={car.image} alt="" style={{ width: '60px', height: '40px', objectFit: 'cover' }} />
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{car.name}</div>
                        <div style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', fontWeight: 600, letterSpacing: '0.05em' }}>{car.category[lang]}</div>
                      </div>
                    </div>
                  </td>

                  <td style={{ padding: '25px 30px' }}>
                    {editingCar === car.id ? (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <input 
                          type="number" 
                          value={newPrice} 
                          onChange={(e) => setNewPrice(Number(e.target.value))}
                          style={{ width: '100px', padding: '8px', border: '1px solid var(--accent)' }}
                        />
                        <button onClick={() => handlePriceUpdate(car.id)} style={{ border: 'none', background: 'none', color: '#27ae60', cursor: 'pointer' }}><Save size={20} /></button>
                      </div>
                    ) : (
                      <div style={{ fontWeight: 700, display: 'flex', alignItems: 'center', gap: '10px' }}>
                        {car.price} MAD
                        <button onClick={() => { setEditingCar(car.id); setNewPrice(car.price); }} style={{ border: 'none', background: 'none', opacity: 0.3, cursor: 'pointer' }}><Settings size={14} /></button>
                      </div>
                    )}
                  </td>
                  <td style={{ padding: '25px 30px' }}>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <button 
                        onClick={() => updateCarStatus(car.id, 'disponible')}
                        style={{ 
                          padding: '6px 12px', 
                          fontSize: '0.65rem', 
                          fontWeight: 700, 
                          background: car.status === 'disponible' ? '#27ae60' : 'transparent',
                          color: car.status === 'disponible' ? '#fff' : 'var(--text-secondary)',
                          border: '1px solid ' + (car.status === 'disponible' ? '#27ae60' : 'var(--border)'),
                          cursor: 'pointer'
                        }}
                      >
                        {t('admin.disp')}
                      </button>
                      <button 
                        onClick={() => updateCarStatus(car.id, 'loué')}
                        style={{ 
                          padding: '6px 12px', 
                          fontSize: '0.65rem', 
                          fontWeight: 700, 
                          background: car.status === 'loué' ? '#e67e22' : 'transparent',
                          color: car.status === 'loué' ? '#fff' : 'var(--text-secondary)',
                          border: '1px solid ' + (car.status === 'loué' ? '#e67e22' : 'var(--border)'),
                          cursor: 'pointer'
                        }}
                      >
                        {t('admin.rent')}
                      </button>

                    </div>
                  </td>
                  <td style={{ padding: '25px 30px', textAlign: 'right' }}>
                    <button style={{ border: 'none', background: 'none', opacity: 0.4, cursor: 'not-allowed' }}>{t('admin.edit')}</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
