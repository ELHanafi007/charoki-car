import type { Car } from '../types';

export const INITIAL_CARS: Car[] = [
  { 
    id: 1, brand: "Hyundai", name: "Hyundai Tucson", price: 600, category: "SUV", 
    image: "/cars/hyundai-tucson-ultimate-17.webp", 
    specs: ["Automatique", "5 Sièges", "Diesel", "Showroom Casa"],
    details: "Le confort moderne pour vos trajets urbains et familiaux.",
    fullDescription: "Le Hyundai Tucson est le SUV polyvalent par excellence. Son design audacieux et son habitacle spacieux en font le compagnon idéal pour explorer Casablanca ou partir en voyage à travers le Maroc.",
    engine: "1.6L CRDi 136ch", transmission: "Automatique 7 rapports", fuel: "Diesel", status: 'disponible'
  },
  { 
    id: 7, brand: "Hyundai", name: "Hyundai Accent", price: 350, category: "Berline", 
    image: "/cars/hyundai-accent-in-grey-color-with-almaty-car-number-front-view.webp", 
    specs: ["Manuelle", "5 Sièges", "Diesel", "Économique"],
    details: "Une berline fiable et économe, idéale pour les longs trajets.",
    fullDescription: "La Hyundai Accent combine élégance et efficacité. Sa consommation de carburant optimisée et son confort intérieur en font un choix privilégié pour vos déplacements professionnels et personnels au Maroc.",
    engine: "1.5L CRDi 115ch", transmission: "Manuelle 6 rapports", fuel: "Diesel", status: 'disponible'
  },
  { 
    id: 8, brand: "Hyundai", name: "Hyundai i20", price: 350, category: "Citadine", 
    image: "/cars/hyundai-i20-n-line-reveal-02_Image Video Collection Item Mobile.webp", 
    specs: ["Manuelle", "5 Sièges", "Essence", "Urbaine"],
    details: "Agile et moderne, parfaite pour naviguer en centre-ville.",
    fullDescription: "La Hyundai i20 se distingue par son design dynamique et sa maniabilité exceptionnelle. Parfaite pour se faufiler dans le trafic de Casablanca tout en offrant un intérieur technologique.",
    engine: "1.2L MPi 84ch", transmission: "Manuelle 5 rapports", fuel: "Essence", status: 'disponible'
  },
  { 
    id: 5, brand: "Renault", name: "Renault Clio 4", price: 350, category: "Citadine", 
    image: "/cars/renault-clio-v-on-a-street.webp", 
    specs: ["Manuelle", "5 Sièges", "Diesel", "Pratique"],
    details: "Fiabilité et polyvalence pour votre quotidien.",
    fullDescription: "La Renault Clio 4 est une icône de polyvalence. Son design intemporel et sa sobriété en font la voiture idéale pour explorer les rues de la ville ou s'évader sur la côte.",
    engine: "1.5L dCi 85ch", transmission: "Manuelle 5 rapports", fuel: "Diesel", status: 'disponible'
  },
  { 
    id: 9, brand: "Renault", name: "Renault Arkana", price: 650, category: "SUV", 
    image: "/cars/Renault-Arkana_EU-Version-2022-1280-01.webp", 
    specs: ["Automatique", "5 Sièges", "Hybride", "Style"],
    details: "Le SUV coupé qui allie élégance et performance.",
    fullDescription: "Le Renault Arkana redéfinit le segment avec sa silhouette de coupé et sa position de conduite haute. Un mélange parfait de style, d'espace et de technologie hybride moderne.",
    engine: "E-Tech Hybrid 145ch", transmission: "Automatique Multi-modes", fuel: "Hybride", status: 'disponible'
  },
  { 
    id: 6, brand: "Volkswagen", name: "VW Golf 8", price: 700, category: "Berline", 
    image: "/cars/Volkswagen-Golf-facelift-2024-Neuve-Maroc-01.webp", 
    specs: ["Automatique", "5 Sièges", "Digital", "Allemande"],
    details: "La perfection allemande alliée à la technologie numérique.",
    fullDescription: "La Golf 8 est une icône de l'automobile mondiale. Toujours à la pointe de l'innovation, elle offre un agrément de conduite et une qualité de finition qui font référence.",
    engine: "2.0L TDI 150ch", transmission: "DSG Automatique", fuel: "Diesel", status: 'disponible'
  },
  { 
    id: 10, brand: "Volkswagen", name: "VW T-Roc", price: 550, category: "SUV", 
    image: "/cars/troc.webp", 
    specs: ["Automatique", "5 Sièges", "Diesel", "Compact"],
    details: "Le SUV compact au design affirmé et dynamique.",
    fullDescription: "Le VW T-Roc combine la force d'un SUV et l'agilité d'une compacte. Idéal pour ceux qui recherchent un style unique et une conduite réactive en toute circonstance.",
    engine: "2.0L TDI 150ch", transmission: "DSG Automatique", fuel: "Diesel", status: 'disponible'
  },
  { 
    id: 11, brand: "Volkswagen", name: "VW Tiguan", price: 750, category: "SUV", 
    image: "/cars/tiguan.webp", 
    specs: ["Automatique", "5 Sièges", "Diesel", "Luxe"],
    details: "Polyvalence et confort haut de gamme pour toute la famille.",
    fullDescription: "Le Volkswagen Tiguan est la référence des SUV familiaux. Spacieux, technologique et extrêmement confortable, il vous accompagnera dans tous vos voyages avec une sérénité totale.",
    engine: "2.0L TDI 150ch", transmission: "DSG Automatique", fuel: "Diesel", status: 'disponible'
  },
  { 
    id: 12, brand: "Volkswagen", name: "VW Touareg", price: 1200, category: "SUV", 
    image: "/cars/touareg.webp", 
    specs: ["Automatique", "5 Sièges", "Diesel", "Premium"],
    details: "Le summum du luxe et de la puissance tout-terrain.",
    fullDescription: "Le VW Touareg est un chef-d'œuvre d'ingénierie. Offrant un luxe incomparable et des performances exceptionnelles, c'est le choix ultime pour une expérience de conduite prestigieuse.",
    engine: "3.0L V6 TDI 286ch", transmission: "Tiptronic 8 rapports", fuel: "Diesel", status: 'disponible'
  },
  { 
    id: 13, brand: "Citroën", name: "Citroën C3", price: 300, category: "Citadine", 
    image: "/cars/c3.webp", 
    specs: ["Manuelle", "5 Sièges", "Essence", "Confort"],
    details: "Colorée et confortable, la citadine pétillante.",
    fullDescription: "La Citroën C3 se distingue par son design audacieux et ses Airbump®. Ses sièges Advanced Comfort garantissent une conduite détendue dans toutes les rues de Casablanca.",
    engine: "1.2L PureTech 82ch", transmission: "Manuelle 5 rapports", fuel: "Essence", status: 'disponible'
  },
  { 
    id: 3, brand: "Citroën", name: "Citroën C4", price: 550, category: "Berline", 
    image: "/cars/c4.webp", 
    specs: ["Automatique", "5 Sièges", "Confort", "Design"],
    details: "Une berline surélevée au confort de suspension exceptionnel.",
    fullDescription: "La Citroën C4 réinvente la berline compacte. Avec son design unique mixant les codes de la berline et du SUV, elle offre un confort de suspension 'tapis volant' typique de Citroën.",
    engine: "1.5L BlueHDi 130ch", transmission: "EAT8 Automatique", fuel: "Diesel", status: 'disponible'
  },
  { 
    id: 4, brand: "Citroën", name: "Citroën C5 Aircross", price: 650, category: "SUV", 
    image: "/cars/citroen-c5-aircross.webp", 
    specs: ["Automatique", "5 Sièges", "Luxe", "Voyage"],
    details: "Le SUV le plus confortable de sa catégorie.",
    fullDescription: "Le C5 Aircross est conçu pour les longs trajets en toute sérénité. Ses sièges Advanced Comfort et son espace intérieur modulable en font le choix premium pour les familles exigeantes.",
    engine: "1.5L BlueHDi 130ch", transmission: "EAT8 Automatique", fuel: "Diesel", status: 'disponible'
  },
  { 
    id: 2, brand: "Peugeot", name: "Peugeot 208", price: 400, category: "Citadine", 
    image: "/cars/1758455-1920x1080-desktop-1080p-peugeot-208-wallpaper.webp", 
    specs: ["Manuelle", "5 Sièges", "i-Cockpit", "Ville"],
    details: "Agile et irrésistible, la reine des rues de Casablanca.",
    fullDescription: "La Peugeot 208 séduit par son style affirmé et sa technologie embarquée. Agile dans le trafic urbain, elle offre une conduite dynamique et économique sans compromis sur le confort.",
    engine: "1.2L PureTech 75ch", transmission: "Manuelle 5 rapports", fuel: "Essence", status: 'disponible'
  },
  { 
    id: 14, brand: "Peugeot", name: "Peugeot 2008", price: 550, category: "SUV", 
    image: "/cars/1755809-1920x1080-desktop-1080p-peugeot-2008-background-photo.webp", 
    specs: ["Automatique", "5 Sièges", "Diesel", "Moderne"],
    details: "Le SUV compact au design futuriste et élégant.",
    fullDescription: "Le Peugeot 2008 offre une expérience de conduite enrichie grâce à son i-Cockpit® 3D. Un SUV compact qui ne passe pas inaperçu avec ses lignes acérées et sa signature lumineuse distinctive.",
    engine: "1.5L BlueHDi 130ch", transmission: "EAT8 Automatique", fuel: "Diesel", status: 'disponible'
  },
  { 
    id: 15, brand: "Peugeot", name: "Peugeot 3008", price: 700, category: "SUV", 
    image: "/cars/peugeot-3008-front-cross-side-view-973750.webp", 
    specs: ["Automatique", "5 Sièges", "Diesel", "Luxe"],
    details: "Design spectaculaire et technologies de pointe.",
    fullDescription: "Le Peugeot 3008 est une invitation au voyage. Son design raffiné et son habitacle high-tech offrent un confort et une sécurité de haut niveau pour tous vos déplacements.",
    engine: "1.5L BlueHDi 130ch", transmission: "EAT8 Automatique", fuel: "Diesel", status: 'disponible'
  },
  { 
    id: 16, brand: "Peugeot", name: "Peugeot 5008", price: 850, category: "SUV", 
    image: "/cars/peugeot-5008.webp", 
    specs: ["Automatique", "7 Sièges", "Diesel", "Espace"],
    details: "Le SUV 7 places idéal pour les grandes familles.",
    fullDescription: "Le Peugeot 5008 allie la modularité d'un monospace et le style d'un SUV. Avec ses 7 places indépendantes, il offre un espace et un confort exceptionnels pour les groupes et les familles.",
    engine: "1.5L BlueHDi 130ch", transmission: "EAT8 Automatique", fuel: "Diesel", status: 'disponible'
  }
];

export const TESTIMONIALS = [
  { id: 1, name: "Youssef El Amrani", role: "Entrepreneur", content: "Service exceptionnel. La voiture était impeccable et livrée à l'heure.", rating: 5 },
  { id: 2, name: "Sarah Bennani", role: "Consultante", content: "J'ai loué une citadine pour mes déplacements à Casablanca. Équipe pro.", rating: 5 },
  { id: 3, name: "Marc Lefebvre", role: "Touriste", content: "Une expérience sans stress. Tarifs transparents et assistance réactive.", rating: 4 }
];

export const FAQS = [
  { question: "Quels sont les documents requis ?", answer: "Permis de conduire (min. 2 ans), CIN ou passeport et justificatif de domicile." },
  { question: "L'assurance est-elle incluse ?", answer: "Oui, tous nos tarifs incluent une assurance tous risques avec franchise." },
  { question: "Puis-je restituer la voiture dans une autre ville ?", answer: "Nos restitutions se font principalement à Casablanca. Pour d'autres villes, des frais s'appliquent." },
  { question: "Quel est le mode de paiement ?", answer: "Espèces, virement bancaire ou carte de crédit lors de la prise en charge." }
];

export const WHATSAPP_NUMBER = "+212700382718";
