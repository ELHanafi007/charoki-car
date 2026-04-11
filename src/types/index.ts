export interface Car {
  id: number;
  brand: string;
  name: string;
  price: number;
  category: {
    fr: string;
    en: string;
    ar: string;
  };
  image: string;
  specs: {
    fr: string[];
    en: string[];
    ar: string[];
  };
  details: {
    fr: string;
    en: string;
    ar: string;
  };
  fullDescription: {
    fr: string;
    en: string;
    ar: string;
  };
  engine: string;
  transmission: {
    fr: string;
    en: string;
    ar: string;
  };
  fuel: {
    fr: string;
    en: string;
    ar: string;
  };
  status: 'disponible' | 'loué' | 'archive';
  availableFrom?: string;
}

export type Language = 'fr' | 'en' | 'ar';
