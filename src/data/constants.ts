import type { Car } from '../types';

export const INITIAL_CARS: Car[] = [
  { 
    id: 1, brand: "Hyundai", name: "Hyundai Tucson", price: 600, category: "SUV", 
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&q=80&w=1000", 
    specs: ["Automatique", "5 Sièges", "Diesel", "Showroom Casa"],
    details: "Le confort moderne pour vos trajets urbains et familiaux.",
    fullDescription: "Le Hyundai Tucson est le SUV polyvalent par excellence. Son design audacieux et son habitacle spacieux en font le compagnon idéal pour explorer Casablanca ou partir en voyage à travers le Maroc.",
    engine: "1.6L CRDi 136ch", transmission: "Automatique 7 rapports", fuel: "Diesel", status: 'disponible'
  },
  { 
    id: 2, brand: "Peugeot", name: "Peugeot 208", price: 400, category: "Citadine", 
    image: "https://images.unsplash.com/photo-1610903251120-0096690fa6cc?auto=format&fit=crop&q=80&w=1000", 
    specs: ["Manuelle", "5 Sièges", "i-Cockpit", "Ville"],
    details: "Agile et irrésistible, la reine des rues de Casablanca.",
    fullDescription: "La Peugeot 208 séduit par son style affirmé et sa technologie embarquée. Agile dans le trafic urbain, elle offre une conduite dynamique et économique sans compromis sur le confort.",
    engine: "1.2L PureTech 75ch", transmission: "Manuelle 5 rapports", fuel: "Essence", status: 'disponible'
  },
  { 
    id: 3, brand: "Citroën", name: "Citroën C4", price: 550, category: "Berline", 
    image: "https://images.unsplash.com/photo-1632243193041-563a017a92ad?auto=format&fit=crop&q=80&w=1000", 
    specs: ["Automatique", "5 Sièges", "Confort", "Design"],
    details: "Une berline surélevée au confort de suspension exceptionnel.",
    fullDescription: "La Citroën C4 réinvente la berline compacte. Avec son design unique mixant les codes de la berline et du SUV, elle offre un confort de suspension 'tapis volant' typique de Citroën.",
    engine: "1.5L BlueHDi 130ch", transmission: "EAT8 Automatique", fuel: "Diesel", status: 'disponible'
  },
  { 
    id: 4, brand: "Citroën", name: "Citroën C5 Aircross", price: 650, category: "SUV", 
    image: "https://images.unsplash.com/photo-1616455579100-2ceaa4eb2df1?auto=format&fit=crop&q=80&w=1000", 
    specs: ["Automatique", "5 Sièges", "Luxe", "Voyage"],
    details: "Le SUV le plus confortable de sa catégorie.",
    fullDescription: "Le C5 Aircross est conçu pour les longs trajets en toute serrénité. Ses sièges Advanced Comfort et son espace intérieur modulable en font le choix premium pour les familles exigeantes.",
    engine: "1.5L BlueHDi 130ch", transmission: "EAT8 Automatique", fuel: "Diesel", status: 'loué', availableFrom: '2024-04-12'
  },
  { 
    id: 5, brand: "Renault", name: "Renault Clio 5", price: 350, category: "Citadine", 
    image: "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?auto=format&fit=crop&q=80&w=1000", 
    specs: ["Manuelle", "5 Sièges", "Économique", "Pratique"],
    details: "Fiabilité et polyvalence pour votre quotidien.",
    fullDescription: "La Renault Clio 5 est la référence du segment. Moderne, sûre et dotée d'une excellente finition intérieure, elle est parfaite pour tous vos déplacements à Casablanca.",
    engine: "1.5L dCi 85ch", transmission: "Manuelle 6 rapports", fuel: "Diesel", status: 'disponible'
  },
  { 
    id: 6, brand: "Volkswagen", name: "VW Golf 8", price: 700, category: "Berline", 
    image: "https://images.unsplash.com/photo-1621815124003-88339397669d?auto=format&fit=crop&q=80&w=1000", 
    specs: ["Automatique", "5 Sièges", "Digital", "Allemande"],
    details: "La perfection allemande alliée à la technologie numérique.",
    fullDescription: "La Golf 8 est une icône de l'automobile mondiale. Toujours à la pointe de l'innovation, elle offre un agrément de conduite et une qualité de finition qui font référence.",
    engine: "2.0L TDI 150ch", transmission: "DSG Automatique", fuel: "Diesel", status: 'disponible'
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
