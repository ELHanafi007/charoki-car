import React from 'react';
import { carModels } from '../../data/carModels';

const CAR_ID = 'hyundai-accent';
const car = carModels.find(c => c.id === CAR_ID);

const HyundaiAccentPage: React.FC = () => {
  if (!car) {
    return <div>Car model not found.</div>;
  }

  return (
    <div>
      <h1>{car.brand} {car.model}</h1>
      <img src={car.imageUrl} alt={`${car.brand} ${car.model}`} style={{ maxWidth: '100%', height: 'auto' }} />
      <p>Details for {car.brand} {car.model} will go here.</p>
    </div>
  );
};

export default HyundaiAccentPage;