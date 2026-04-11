import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Car } from '../types';
import { INITIAL_CARS } from '../data/constants';

interface CarContextType {
  cars: Car[];
  updateCarPrice: (id: number, price: number) => void;
  updateCarStatus: (id: number, status: Car['status']) => void;
  getCarById: (id: number) => Car | undefined;
}

const CarContext = createContext<CarContextType | undefined>(undefined);

export const CarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cars, setCars] = useState<Car[]>(() => {
    const saved = localStorage.getItem('charoki_cars_v4');
    return saved ? JSON.parse(saved) : INITIAL_CARS;
  });

  useEffect(() => {
    localStorage.setItem('charoki_cars_v4', JSON.stringify(cars));
  }, [cars]);

  const updateCarPrice = (id: number, price: number) => {
    setCars(prev => prev.map(car => car.id === id ? { ...car, price } : car));
  };

  const updateCarStatus = (id: number, status: Car['status']) => {
    setCars(prev => prev.map(car => car.id === id ? { ...car, status } : car));
  };

  const getCarById = (id: number) => cars.find(c => c.id === id);

  return (
    <CarContext.Provider value={{ cars, updateCarPrice, updateCarStatus, getCarById }}>
      {children}
    </CarContext.Provider>
  );
};

export const useCars = () => {
  const context = useContext(CarContext);
  if (!context) throw new Error('useCars must be used within a CarProvider');
  return context;
};
