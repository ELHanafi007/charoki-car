import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, Zap, Fuel, 
  Menu, X, ArrowLeft, ChevronRight, Star,
  ShieldCheck, Clock, MapPin, MessageCircle,
  ChevronDown, Instagram, Facebook, Mail
} from 'lucide-react';

// --- TYPES ---
interface Car {
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

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

interface FAQItem {
  question: string;
  answer: string;
}

// --- INITIAL DATA ---
const INITIAL_CARS: Car[] = [
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

const TESTIMONIALS: Testimonial[] = [
  { id: 1, name: "Youssef El Amrani", role: "Entrepreneur", content: "Service exceptionnel. La voiture était impeccable et livrée à l'heure à l'aéroport. Je recommande vivement CHAROKI CARS.", rating: 5 },
  { id: 2, name: "Sarah Bennani", role: "Consultante", content: "J'ai loué une citadine pour mes déplacements à Casablanca. Très agile et consommation minime. Équipe très pro.", rating: 5 },
  { id: 3, name: "Marc Lefebvre", role: "Touriste", content: "Une expérience de location sans stress. Tarifs transparents et assistance réactive via WhatsApp.", rating: 4 }
];

const FAQS: FAQItem[] = [
  { question: "Quels sont les documents requis ?", answer: "Vous aurez besoin d'un permis de conduire valide (minimum 2 ans d'ancienneté), d'une pièce d'identité (CIN ou passeport) et d'un justificatif de domicile." },
  { question: "L'assurance est-elle incluse ?", answer: "Oui, tous nos tarifs incluent une assurance tous risques avec franchise. Des options d'assurance complémentaire sont disponibles sur demande." },
  { question: "Puis-je restituer la voiture dans une autre ville ?", answer: "Actuellement, nos restitutions se font principalement à Casablanca. Pour d'autres villes, des frais de convoyage peuvent s'appliquer." },
  { question: "Quel est le mode de paiement ?", answer: "Nous acceptons les paiements en espèces, par virement bancaire ou par carte de crédit lors de la prise en charge du véhicule." }
];

const WHATSAPP_NUMBER = "+212700382718";

// --- UTILS ---
const calculateDays = (start: string, end: string) => {
  if (!start || !end) return 0;
  const s = new Date(start);
  const e = new Date(end);
  const diff = e.getTime() - s.getTime();
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  return days > 0 ? days : 0;
};

// --- COMPONENTS ---
const SectionTitle = ({ title, subtitle, centered = true }: { title: string, subtitle: string, centered?: boolean }) => (
  <div style={{ marginBottom: '60px', textAlign: centered ? 'center' : 'left' }}>
    <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ color: 'var(--gold)', letterSpacing: '4px', fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>{subtitle}</motion.span>
    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ fontSize: '2.5rem', fontWeight: 400, fontFamily: 'var(--font-serif)' }}>{title}</motion.h2>
    <div style={{ width: '60px', height: '2px', background: 'var(--gold)', margin: centered ? '25px auto 0' : '25px 0 0' }}></div>
  </div>
);

const Navbar = ({ activePage, setPage }: { activePage: string, setPage: (p: string) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'ACCUEIL', id: 'home' },
    { label: 'PARC', id: 'fleet' },
    { label: 'CONTACT', id: 'contact' }
  ];

  return (
    <>
      <nav className={`glass-nav ${isScrolled || (activePage !== 'home' && !activePage.startsWith('product') && !activePage.startsWith('booking')) ? 'scrolled' : ''}`}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="logo" onClick={() => setPage('home')} style={{ fontSize: '1.2rem', fontWeight: 700, letterSpacing: '3px', cursor: 'pointer' }}>
            CHAROKI<span className="gold-text">CARS</span>
          </div>
          <div className="desktop-menu" style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
            {menuItems.map((item) => (
              <span key={item.id} onClick={() => setPage(item.id)} style={{ color: (activePage === item.id || (activePage.startsWith('product') && item.id === 'fleet')) ? 'var(--gold)' : 'inherit', cursor: 'pointer', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '1px' }}>{item.label}</span>
            ))}
            <button className="btn-primary" onClick={() => setPage('booking')} style={{ padding: '8px 20px', fontSize: '0.65rem' }}>RÉSERVER</button>
          </div>
          <div className="mobile-toggle" style={{ display: 'none', cursor: 'pointer' }} onClick={() => setIsMobileMenuOpen(true)}>
             <Menu size={24} color="white" />
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div className="mobile-nav-overlay" initial={{ opacity: 0, x: '100%' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '100%' }} transition={{ type: 'tween', duration: 0.3 }}>
            <div style={{ position: 'absolute', top: '30px', right: '30px', cursor: 'pointer' }} onClick={() => setIsMobileMenuOpen(false)}><X size={32} color="var(--gold)" /></div>
            {menuItems.map((item) => (
              <span key={item.id} className={`mobile-link ${activePage === item.id ? 'active' : ''}`} onClick={() => { setPage(item.id); setIsMobileMenuOpen(false); }}>{item.label}</span>
            ))}
            <button className="btn-primary" style={{ marginTop: '20px', width: 'auto' }} onClick={() => { setPage('booking'); setIsMobileMenuOpen(false); }}>RÉSERVER</button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const About = () => (
  <section id="about" style={{ background: 'var(--dark-bg)' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <SectionTitle title="L'Excellence du Service" subtitle="NOTRE VISION" centered={false} />
          <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', fontSize: '0.95rem' }}>
            Situé au cœur du quartier Gauthier à Casablanca, CHAROKI CARS redéfinit la location automobile. Nous ne nous contentons pas de louer des véhicules ; nous offrons une expérience de mobilité haut de gamme.
          </p>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '30px', fontSize: '0.95rem' }}>
            Notre flotte est rigoureusement entretenue et renouvelée pour vous garantir confort, sécurité et prestige à chaque kilomètre parcouru au Maroc.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><ShieldCheck size={24} color="var(--gold)" /> <span style={{ fontSize: '0.7rem', fontWeight: 700 }}>ASSURANCE TOUS RISQUES</span></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Clock size={24} color="var(--gold)" /> <span style={{ fontSize: '0.7rem', fontWeight: 700 }}>ASSISTANCE 24/7</span></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><MapPin size={24} color="var(--gold)" /> <span style={{ fontSize: '0.7rem', fontWeight: 700 }}>LIVRAISON AÉROPORT</span></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Star size={24} color="var(--gold)" /> <span style={{ fontSize: '0.7rem', fontWeight: 700 }}>FLOTTE PREMIUM</span></div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} style={{ height: '500px', background: 'url(https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=1000) center/cover', border: '1px solid var(--gold)', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '-20px', right: '-20px', background: 'var(--gold)', color: 'black', padding: '20px', fontWeight: 700, textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem' }}>10+</div>
            <div style={{ fontSize: '0.6rem' }}>ANS D'EXPÉRIENCE</div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section style={{ background: 'var(--darker-bg)' }}>
    <div className="container">
      <SectionTitle title="Avis de nos Clients" subtitle="TÉMOIGNAGES" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        {TESTIMONIALS.map((t) => (
          <motion.div key={t.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: t.id * 0.1 }} style={{ background: 'var(--card-bg)', padding: '40px', border: '1px solid var(--border-color)', position: 'relative' }}>
            <div style={{ display: 'flex', gap: '5px', marginBottom: '20px' }}>
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill={i < t.rating ? 'var(--gold)' : 'none'} color={i < t.rating ? 'var(--gold)' : '#333'} />)}
            </div>
            <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', marginBottom: '30px', fontSize: '0.95rem', lineHeight: 1.8 }}>"{t.content}"</p>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{t.name}</div>
              <div style={{ color: 'var(--gold)', fontSize: '0.7rem', fontWeight: 600 }}>{t.role}</div>
            </div>
            <MessageCircle size={40} style={{ position: 'absolute', top: '40px', right: '40px', opacity: 0.05 }} />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section style={{ background: 'var(--dark-bg)' }}>
      <div className="container">
        <SectionTitle title="Tout ce qu'il faut savoir" subtitle="QUESTIONS FRÉQUENTES" />
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {FAQS.map((faq, index) => (
            <div key={index} style={{ borderBottom: '1px solid var(--border-color)', marginBottom: '10px' }}>
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', padding: '25px 0', color: 'white', cursor: 'pointer', textAlign: 'left' }}
              >
                <span style={{ fontWeight: 600, fontSize: '1rem' }}>{faq.question}</span>
                <ChevronDown size={20} color="var(--gold)" style={{ transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0)', transition: '0.3s' }} />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} style={{ overflow: 'hidden' }}>
                    <p style={{ paddingBottom: '25px', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Home = ({ setPage, cars }: { setPage: (p: string) => void, cars: Car[] }) => (
  <>
    <section className="hero">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} style={{ color: 'var(--gold)', letterSpacing: '4px', fontSize: '0.7rem', fontWeight: 700, display: 'block', marginBottom: '10px' }}>LOCATION AUTOMOBILE À CASABLANCA</motion.span>
          <h1 style={{ fontSize: '4rem', lineHeight: 1.1, marginBottom: '20px', fontFamily: 'var(--font-serif)' }}>Votre Voyage <br /><span className="gold-text">Commence Ici</span></h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '40px', lineHeight: 1.6, maxWidth: '600px' }}>Une flotte moderne et un service irréprochable pour tous vos déplacements professionnels ou personnels au cœur du Maroc.</p>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={() => setPage('fleet')}>DÉCOUVRIR LE PARC</button>
            <button style={{ background: 'transparent', border: '1px solid var(--gold)', color: 'var(--gold)', padding: '16px 36px', fontWeight: 700, cursor: 'pointer', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem', transition: '0.3s' }} onClick={() => setPage('contact')}>NOUS CONTACTER</button>
          </div>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 2 }} style={{ position: 'absolute', bottom: '30px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
        <span style={{ fontSize: '0.6rem', letterSpacing: '2px', color: 'var(--text-secondary)' }}>SCROLLER</span>
        <div style={{ width: '1px', height: '50px', background: 'linear-gradient(to bottom, var(--gold), transparent)' }}></div>
      </motion.div>
    </section>
    
    <About />

    <section style={{ background: 'var(--darker-bg)' }}>
      <div className="container">
        <SectionTitle title="Sélection du Moment" subtitle="À LA UNE" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {cars.filter(c => c.status !== 'archive').slice(0, 3).map((car) => (
            <motion.div key={car.id} className="car-card" onClick={() => setPage(`product-${car.id}`)} style={{ cursor: 'pointer' }}>
              <div className="car-image" style={{ backgroundImage: `url(${car.image})` }}>
                {car.status === 'loué' && <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', background: 'rgba(0,0,0,0.85)', color: 'var(--gold)', padding: '10px', fontSize: '0.65rem', fontWeight: 700, textAlign: 'center' }}>Disponible le {car.availableFrom}</div>}
              </div>
              <div style={{ padding: '30px' }}>
                <span style={{ color: 'var(--gold)', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '2px' }}>{car.brand.toUpperCase()}</span>
                <h3 style={{ fontSize: '1.4rem', margin: '10px 0 15px' }}>{car.name}</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '20px', borderTop: '1px solid var(--border-color)' }}>
                  <span style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--gold)' }}>{car.price} MAD <small style={{fontSize: '0.7rem', fontWeight: 400}}>/ JOUR</small></span>
                  <ChevronRight size={20} color="var(--gold)" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <button className="btn-primary" onClick={() => setPage('fleet')}>VOIR TOUT LE PARC</button>
        </div>
      </div>
    </section>

    <Testimonials />
    <FAQ />
  </>
);

const Fleet = ({ setPage, cars }: { setPage: (p: string) => void, cars: Car[] }) => {
  const [filter, setFilter] = useState('Tous');
  const categories = ['Tous', 'Citadine', 'SUV', 'Berline'];
  const filteredCars = (filter === 'Tous' ? cars : cars.filter(c => c.category === filter)).filter(c => c.status !== 'archive');

  return (
    <section style={{ paddingTop: '150px' }}>
      <div className="container">
        <SectionTitle title="Parc Automobile" subtitle="NOS OFFRES" />
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '60px', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)} style={{ background: filter === cat ? 'var(--gold)' : 'transparent', border: '1px solid var(--gold)', color: filter === cat ? 'black' : 'var(--gold)', padding: '10px 25px', cursor: 'pointer', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '1px', transition: '0.3s' }}>{cat.toUpperCase()}</button>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {filteredCars.map((car) => (
            <motion.div key={car.id} className="car-card" onClick={() => setPage(`product-${car.id}`)} style={{ cursor: 'pointer' }}>
              <div className="car-image" style={{ backgroundImage: `url(${car.image})` }}>
                {car.status === 'loué' && <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', background: 'rgba(0,0,0,0.85)', color: 'var(--gold)', padding: '10px', fontSize: '0.65rem', fontWeight: 700, textAlign: 'center' }}>Disponible le {car.availableFrom}</div>}
              </div>
              <div style={{ padding: '30px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <h3 style={{ fontSize: '1.4rem' }}>{car.name}</h3>
                  <span style={{ color: 'var(--gold)', fontSize: '0.65rem', border: '1px solid var(--gold)', padding: '4px 10px', fontWeight: 700 }}>{car.category}</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '25px', color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Zap size={14} color="var(--gold)"/> {car.transmission}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Fuel size={14} color="var(--gold)"/> {car.fuel}</div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-color)', paddingTop: '20px' }}>
                  <span style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--gold)' }}>{car.price} MAD <small style={{fontSize: '0.7rem', fontWeight: 400}}>/ J</small></span>
                  <button className="btn-primary" style={{ padding: '10px 20px', width: 'auto', fontSize: '0.7rem' }}>DÉTAILS</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductPage = ({ carId, setPage, cars }: { carId: number, setPage: (p: string) => void, cars: Car[] }) => {
  const car = cars.find(c => c.id === carId) || cars[0];
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const days = useMemo(() => calculateDays(startDate, endDate), [startDate, endDate]);
  const totalPrice = days * car.price;

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ paddingTop: '150px' }}>
      <div className="container">
        <button onClick={() => setPage('fleet')} style={{ background: 'transparent', border: 'none', color: 'var(--gold)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '40px', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '1px' }}><ArrowLeft size={18} /> RETOUR AU PARC</button>
        <div className="booking-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '60px' }}>
          <div>
            <div style={{ width: '100%', height: '450px', backgroundImage: `url(${car.image})`, backgroundSize: 'cover', backgroundPosition: 'center', border: '1px solid var(--border-color)', marginBottom: '40px' }}></div>
            <h1 style={{ fontSize: '3rem', marginBottom: '20px', fontFamily: 'var(--font-serif)' }}>{car.name}</h1>
            <div style={{ display: 'flex', gap: '15px', marginBottom: '40px' }}>
                <span style={{ color: 'var(--gold)', border: '1px solid var(--gold)', padding: '6px 15px', fontWeight: 700, fontSize: '0.75rem' }}>{car.category.toUpperCase()}</span>
                {car.status === 'disponible' ? <span style={{ color: '#4CAF50', background: 'rgba(76, 175, 80, 0.1)', padding: '6px 15px', fontWeight: 700, fontSize: '0.75rem' }}>DISPONIBLE IMMÉDIATEMENT</span> : <span style={{ color: 'var(--gold)', background: 'rgba(212, 175, 55, 0.1)', padding: '6px 15px', fontWeight: 700, fontSize: '0.75rem' }}>DISPONIBLE LE {car.availableFrom}</span>}
            </div>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '50px' }}>{car.fullDescription}</p>
            <div style={{ background: 'var(--card-bg)', padding: '40px', border: '1px solid var(--border-color)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                <div><div style={{fontSize: '0.65rem', color: 'var(--gold)', fontWeight: 700, marginBottom: '8px', letterSpacing: '2px'}}>MOTEUR</div><div style={{fontWeight: 600, fontSize: '1rem'}}>{car.engine}</div></div>
                <div><div style={{fontSize: '0.65rem', color: 'var(--gold)', fontWeight: 700, marginBottom: '8px', letterSpacing: '2px'}}>TRANSMISSION</div><div style={{fontWeight: 600, fontSize: '1rem'}}>{car.transmission}</div></div>
                <div><div style={{fontSize: '0.65rem', color: 'var(--gold)', fontWeight: 700, marginBottom: '8px', letterSpacing: '2px'}}>CARBURANT</div><div style={{fontWeight: 600, fontSize: '1rem'}}>{car.fuel}</div></div>
                <div><div style={{fontSize: '0.65rem', color: 'var(--gold)', fontWeight: 700, marginBottom: '8px', letterSpacing: '2px'}}>SHOWROOM</div><div style={{fontWeight: 600, fontSize: '1rem'}}>Casablanca, Gauthier</div></div>
            </div>
          </div>
          <div style={{ position: 'sticky', top: '150px', background: 'var(--darker-bg)', border: '1px solid var(--gold)', padding: '40px', height: 'fit-content' }}>
                <div style={{ marginBottom: '40px' }}><span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '8px', letterSpacing: '1px' }}>TARIF LOCATION / JOUR</span><span style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--gold)' }}>{car.price} MAD</span></div>
                <div style={{ display: 'grid', gap: '20px', marginBottom: '40px' }}>
                    <div><label className="label-text">DÉBUT DE LOCATION</label><input type="date" className="input-field" value={startDate} onChange={e => setStartDate(e.target.value)} min={new Date().toISOString().split('T')[0]} /></div>
                    <div><label className="label-text">FIN DE LOCATION</label><input type="date" className="input-field" value={endDate} onChange={e => setEndDate(e.target.value)} min={startDate || new Date().toISOString().split('T')[0]} /></div>
                </div>
                {days > 0 && <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} style={{ padding: '25px', background: 'var(--card-bg)', border: '1px solid var(--border-color)', marginBottom: '40px', textAlign: 'center' }}><div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>TOTAL ESTIMÉ POUR {days} JOURS</div><div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--gold)' }}>{totalPrice} MAD</div></motion.div>}
                <button 
                  className="btn-primary" 
                  style={{ width: '100%', padding: '20px' }} 
                  onClick={() => {
                    if (!startDate || !endDate) {
                      alert("Veuillez sélectionner vos dates.");
                      return;
                    }
                    setPage(`booking-${car.id}-${startDate}-${endDate}`);
                  }}
                >
                  RÉSERVER MAINTENANT
                </button>
                <div style={{ marginTop: '30px', textAlign: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
                    <Phone size={14} /> WhatsApp : +212 700 382 718
                  </div>
                </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

const Booking = ({ selectedCarId, start, end, cars }: { selectedCarId?: number, start?: string, end?: string, cars: Car[] }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', phone: '', startDate: start || '', endDate: end || '', carId: selectedCarId || cars[0].id });
  const selectedCar = cars.find(c => c.id === Number(formData.carId)) || cars[0];
  const days = calculateDays(formData.startDate, formData.endDate);
  const total = days * selectedCar.price;

  const handleWhatsApp = () => {
    if (!formData.name || !formData.phone) {
      alert("Veuillez remplir toutes les informations client.");
      return;
    }
    const message = `Bonjour CHAROKI CARS,%0A%0AJe souhaite réserver :%0A- *Véhicule* : ${selectedCar.name}%0A- *Période* : du ${formData.startDate} au ${formData.endDate} (${days} jours)%0A- *Total estimé* : ${total} MAD%0A%0A*Client* :%0A- *Nom* : ${formData.name}%0A- *Tél* : ${formData.phone}%0A%0AMerci !`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${message}`, '_blank');
  };

  return (
    <section style={{ paddingTop: '150px', minHeight: '100vh' }}>
      <div className="container">
        <SectionTitle title="Confirmation" subtitle="VOTRE RÉSERVATION" />
        <div className="booking-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '40px', maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ background: 'var(--card-bg)', padding: '40px', border: '1px solid var(--border-color)' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '25px', fontFamily: 'var(--font-serif)' }}>Informations Personnelles</h2>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '40px' }}>{[1, 2].map(s => (<div key={s} style={{ flex: 1, height: '3px', background: step >= s ? 'var(--gold)' : '#333' }}></div>))}</div>
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}>
                  <div style={{ display: 'grid', gap: '20px', marginBottom: '40px' }}>
                    <div><label className="label-text">DÉBUT DE LOCATION</label><input type="date" className="input-field" value={formData.startDate} onChange={e => setFormData({...formData, startDate: e.target.value})} min={new Date().toISOString().split('T')[0]} /></div>
                    <div><label className="label-text">FIN DE LOCATION</label><input type="date" className="input-field" value={formData.endDate} onChange={e => setFormData({...formData, endDate: e.target.value})} min={formData.startDate || new Date().toISOString().split('T')[0]} /></div>
                  </div>
                  <button className="btn-primary" onClick={() => {
                    if (!formData.startDate || !formData.endDate) {
                      alert("Veuillez sélectionner vos dates.");
                      return;
                    }
                    setStep(2);
                  }}>CONTINUER</button>
                </motion.div>
              )}
              {step === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}>
                  <div style={{ display: 'grid', gap: '20px', marginBottom: '40px' }}>
                    <div>
                      <label className="label-text">NOM COMPLET</label>
                      <input placeholder="Ex: Jean Dupont" className="input-field" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                    </div>
                    <div>
                      <label className="label-text">TÉLÉPHONE / WHATSAPP</label>
                      <input placeholder="Ex: +212 600 000 000" className="input-field" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                    </div>
                  </div>
                  <button className="btn-primary" onClick={handleWhatsApp}>RÉSERVER VIA WHATSAPP</button>
                  <button style={{ width: '100%', background: 'transparent', border: 'none', color: '#555', marginTop: '20px', fontSize: '0.75rem', cursor: 'pointer', fontWeight: 700 }} onClick={() => setStep(1)}>MODIFIER LES DATES</button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div style={{ background: 'var(--darker-bg)', border: '1px solid var(--border-color)', padding: '30px' }}>
              <div style={{ height: '180px', backgroundImage: `url(${selectedCar.image})`, backgroundSize: 'cover', backgroundPosition: 'center', marginBottom: '20px' }}></div>
              <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-serif)' }}>{selectedCar.name}</h3>
              <div style={{ borderTop: '1px solid #222', paddingTop: '20px', marginTop: '20px', fontSize: '0.9rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', color: 'var(--text-secondary)' }}><span>Prix par Jour</span><span>{selectedCar.price} MAD</span></div>
                {days > 0 ? (
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: 'var(--gold)', fontSize: '1.1rem', marginTop: '20px' }}><span>Total ({days} jours)</span><span>{total} MAD</span></div>
                ) : (
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', fontStyle: 'italic', textAlign: 'center', marginTop: '20px' }}>Veuillez sélectionner vos dates pour calculer le total.</div>
                )}
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const App = () => {
  const [page, setPage] = useState('home');
  const [cars] = useState<Car[]>(INITIAL_CARS);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <div className="app">
      <Navbar activePage={page} setPage={setPage} />
      <main>
        <AnimatePresence mode="wait">
          {page === 'home' && <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}><Home setPage={setPage} cars={cars} /></motion.div>}
          {page === 'fleet' && <motion.div key="fleet" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}><Fleet setPage={setPage} cars={cars} /></motion.div>}
          {page === 'contact' && <motion.div key="contact" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}><Contact /></motion.div>}
          {page === 'booking' && <motion.div key="booking-gen" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}><Booking cars={cars} /></motion.div>}
          {page.startsWith('booking-') && <motion.div key="booking-car" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}><Booking cars={cars} selectedCarId={Number(page.split('-')[1])} start={page.split('-')[2]} end={page.split('-')[3]} /></motion.div>}
          {page.startsWith('product-') && <motion.div key="product" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}><ProductPage carId={Number(page.split('-')[1])} setPage={setPage} cars={cars} /></motion.div>}
        </AnimatePresence>
      </main>
      <footer style={{ padding: '80px 0 40px', background: 'var(--darker-bg)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '60px', marginBottom: '60px' }}>
            <div>
              <div className="logo" style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '3px', marginBottom: '25px' }}>CHAROKI<span className="gold-text">CARS</span></div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '25px' }}>Votre partenaire de confiance pour la location de véhicules premium à Casablanca. Excellence, confort et sécurité.</p>
              <div style={{ display: 'flex', gap: '15px' }}>
                <a href="#" style={{ color: 'white', opacity: 0.5, transition: '0.3s' }}><Instagram size={20} /></a>
                <a href="#" style={{ color: 'white', opacity: 0.5, transition: '0.3s' }}><Facebook size={20} /></a>
                <a href={`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}`} style={{ color: 'white', opacity: 0.5, transition: '0.3s' }}><MessageCircle size={20} /></a>
              </div>
            </div>
            <div>
              <h4 style={{ color: 'var(--gold)', fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '25px', textTransform: 'uppercase' }}>Navigation</h4>
              <ul style={{ listStyle: 'none', display: 'grid', gap: '15px', fontSize: '0.9rem' }}>
                <li><span onClick={() => setPage('home')} style={{ cursor: 'pointer', color: 'var(--text-secondary)' }}>Accueil</span></li>
                <li><span onClick={() => setPage('fleet')} style={{ cursor: 'pointer', color: 'var(--text-secondary)' }}>Notre Parc</span></li>
                <li><span onClick={() => setPage('contact')} style={{ cursor: 'pointer', color: 'var(--text-secondary)' }}>Contact</span></li>
                <li><span onClick={() => setPage('booking')} style={{ cursor: 'pointer', color: 'var(--text-secondary)' }}>Réserver</span></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: 'var(--gold)', fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '25px', textTransform: 'uppercase' }}>Contact</h4>
              <ul style={{ listStyle: 'none', display: 'grid', gap: '15px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><MapPin size={16} color="var(--gold)" /> 12 Rue Gauthier, Casablanca</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Phone size={16} color="var(--gold)" /> +212 700 382 718</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Mail size={16} color="var(--gold)" /> contact@charokicars.ma</li>
              </ul>
            </div>
          </div>
          <div style={{ borderTop: '1px solid #111', paddingTop: '40px', textAlign: 'center', color: '#333', fontSize: '0.75rem' }}>
            © {new Date().getFullYear()} CHAROKI CARS. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
};

const Contact = () => (
  <section style={{ paddingTop: '150px' }}>
    <div className="container">
      <SectionTitle title="Showroom Gauthier" subtitle="CASABLANCA" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', maxWidth: '1000px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} style={{ background: 'var(--card-bg)', padding: '40px', border: '1px solid var(--border-color)' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '30px', fontFamily: 'var(--font-serif)' }}>Nous Trouver</h3>
          <div style={{ display: 'grid', gap: '25px' }}>
            <div style={{ display: 'flex', gap: '15px' }}>
              <MapPin color="var(--gold)" size={24} />
              <div>
                <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '5px' }}>Adresse</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Quartier Gauthier, Casablanca, Maroc</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '15px' }}>
              <Phone color="var(--gold)" size={24} />
              <div>
                <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '5px' }}>Téléphone</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>+212 700 382 718</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '15px' }}>
              <Clock color="var(--gold)" size={24} />
              <div>
                <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '5px' }}>Horaires</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Lun - Sam: 09:00 - 20:00<br />Dim: Sur rendez-vous</div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', fontFamily: 'var(--font-serif)' }}>Une question ?</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '30px', lineHeight: 1.7 }}>Notre équipe est à votre disposition pour vous conseiller sur le choix de votre véhicule et préparer votre séjour.</p>
          <button className="btn-primary" onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}`, '_blank')}>DISCUTER SUR WHATSAPP</button>
          <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '0.8rem', color: '#555' }}>Réponse rapide garantie.</p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default App;
