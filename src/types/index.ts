export interface Car {
  id: number;
  brand: string;
  name: string;
  price: number;
  category: string;
  image: string;
  specs: string[];
  details: string;
  fullDescription: string;
  engine: string;
  transmission: string;
  fuel: string;
  status: 'disponible' | 'loué' | 'archive';
  availableFrom?: string;
}

export type Language = 'fr' | 'en' | 'ar';
