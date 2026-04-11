import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useCars } from '../context/CarContext';
import SectionTitle from '../components/SectionTitle';
import CarCard from '../components/CarCard';

const Fleet: React.FC = () => {
  const { t } = useTranslation();
  const { cars } = useCars();
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: t('filters.all') },
    { id: 'Citadine', label: t('filters.city') },
    { id: 'SUV', label: t('filters.suv') },
    { id: 'Berline', label: t('filters.sedan') }
  ];

  const filtered = filter === 'all' ? cars : cars.filter(c => c.category === filter);

  return (
    <section style={{ paddingTop: '180px', paddingBottom: '140px' }}>
      <div className="container">
        <SectionTitle title={t('sections.fleet_title')} subtitle={t('sections.fleet_subtitle')} />
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '80px', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button 
              key={cat.id} 
              onClick={() => setFilter(cat.id)} 
              style={{ 
                background: filter === cat.id ? 'var(--text-primary)' : 'transparent', 
                border: '1px solid var(--border)', 
                color: filter === cat.id ? '#fff' : 'var(--text-primary)', 
                padding: '12px 30px', 
                cursor: 'pointer', 
                fontWeight: 700, 
                fontSize: '0.65rem', 
                letterSpacing: '0.2em', 
                transition: '0.3s' 
              }}
            >
              {cat.label.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="grid-3">
          {filtered.map(car => <CarCard key={car.id} car={car} />)}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
