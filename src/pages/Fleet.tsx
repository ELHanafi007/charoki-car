import React, { useState } from 'react';
import { useCars } from '../context/CarContext';
import SectionTitle from '../components/SectionTitle';
import CarCard from '../components/CarCard';

const Fleet: React.FC = () => {
  const { cars } = useCars();
  const [filter, setFilter] = useState('Tous');

  const filtered = filter === 'Tous' ? cars : cars.filter(c => c.category === filter);

  return (
    <section style={{ paddingTop: '180px', paddingBottom: '140px' }}>
      <div className="container">
        <SectionTitle title="La Collection" subtitle="NOS VÉHICULES" />
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '80px', flexWrap: 'wrap' }}>
          {['Tous', 'Citadine', 'SUV', 'Berline'].map(f => (
            <button 
              key={f} 
              onClick={() => setFilter(f)} 
              style={{ 
                background: filter === f ? 'var(--text-primary)' : 'transparent', 
                border: '1px solid var(--border)', 
                color: filter === f ? '#fff' : 'var(--text-primary)', 
                padding: '12px 30px', 
                cursor: 'pointer', 
                fontWeight: 700, 
                fontSize: '0.65rem', 
                letterSpacing: '0.2em', 
                transition: '0.3s' 
              }}
            >
              {f.toUpperCase()}
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
