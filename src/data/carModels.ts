
export interface CarModel {
  id: string;
  brand: string;
  model: string;
  imageUrl: string; // Relative path from public directory
}

export const carModels: CarModel[] = [
  {
    id: 'hyundai-accent',
    brand: 'Hyundai',
    model: 'Accent',
    imageUrl: '/cars/hyundai-accent-in-grey-color-with-almaty-car-number-front-view.webp',
  },
  {
    id: 'hyundai-tucson',
    brand: 'Hyundai',
    model: 'Tucson',
    imageUrl: '/cars/hyundai-tucson-ultimate-17.webp',
  },
  {
    id: 'hyundai-i20',
    brand: 'Hyundai',
    model: 'i20',
    imageUrl: '/cars/hyundai-i20-n-line-reveal-02_Image Video Collection Item Mobile.webp',
  },
  {
    id: 'renault-clio-4',
    brand: 'Renault',
    model: 'Clio 4',
    imageUrl: '/cars/renault-clio-v-on-a-street.webp',
  },
  {
    id: 'renault-arkana',
    brand: 'Renault',
    model: 'Arkana',
    imageUrl: '/cars/Renault-Arkana_EU-Version-2022-1280-01.webp',
  },
  {
    id: 'volkswagen-t-roc',
    brand: 'Volkswagen',
    model: 'T-Roc',
    imageUrl: '/cars/troc.webp',
  },
  {
    id: 'volkswagen-golf-8',
    brand: 'Volkswagen',
    model: 'Golf 8',
    imageUrl: '/cars/Volkswagen-Golf-facelift-2024-Neuve-Maroc-01.webp',
  },
  {
    id: 'volkswagen-tiguan',
    brand: 'Volkswagen',
    model: 'Tiguan',
    imageUrl: '/cars/tiguan.webp',
  },
  {
    id: 'volkswagen-touareg',
    brand: 'Volkswagen',
    model: 'Touareg',
    imageUrl: '/cars/touareg.webp',
  },
  {
    id: 'citroen-c3',
    brand: 'Citroen',
    model: 'C3',
    imageUrl: '/cars/c3.webp',
  },
  {
    id: 'citroen-c4',
    brand: 'Citroen',
    model: 'C4',
    imageUrl: '/cars/c4.webp',
  },
  {
    id: 'citroen-c5',
    brand: 'Citroen',
    model: 'C5',
    imageUrl: '/cars/citroen-c5-aircross.webp',
  },
  {
    id: 'peugeot-208',
    brand: 'Peugeot',
    model: '208',
    imageUrl: '/cars/1758455-1920x1080-desktop-1080p-peugeot-208-wallpaper.webp',
  },
  {
    id: 'peugeot-2008',
    brand: 'Peugeot',
    model: '2008',
    imageUrl: '/cars/1755809-1920x1080-desktop-1080p-peugeot-2008-background-photo.webp',
  },
  {
    id: 'peugeot-3008',
    brand: 'Peugeot',
    model: '3008',
    imageUrl: '/cars/peugeot-3008-front-cross-side-view-973750.webp',
  },
  {
    id: 'peugeot-5008',
    brand: 'Peugeot',
    model: '5008',
    imageUrl: '/cars/peugeot-5008.webp',
  },
];
