import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, Zap, Fuel, 
  Menu, X, ArrowLeft, Star,
  ShieldCheck, Clock, MapPin, MessageCircle,
  ChevronDown, Instagram, Facebook, ArrowUpRight
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

const TESTIMONIALS = [
  { id: 1, name: "Youssef El Amrani", role: "Entrepreneur", content: "Service exceptionnel. La voiture était impeccable et livrée à l'heure à l'aéroport.", rating: 5 },
  { id: 2, name: "Sarah Bennani", role: "Consultante", content: "J'ai loué une citadine pour mes déplacements à Casablanca. Équipe très professionnelle.", rating: 5 },
  { id: 3, name: "Marc Lefebvre", role: "Touriste", content: "Une expérience sans stress. Tarifs transparents et assistance réactive.", rating: 4 }
];

const FAQS = [
  { question: "Quels sont les documents requis ?", answer: "Permis de conduire (min. 2 ans), CIN ou passeport et justificatif de domicile." },
  { question: "L'assurance est-elle incluse ?", answer: "Oui, tous nos tarifs incluent une assurance tous risques avec franchise." },
  { question: "Puis-je restituer la voiture dans une autre ville ?", answer: "Nos restitutions se font principalement à Casablanca. Pour d'autres villes, des frais s'appliquent." },
  { question: "Quel est le mode de paiement ?", answer: "Espèces, virement bancaire ou carte de crédit lors de la prise en charge." }
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

// --- REUSABLE COMPONENTS ---
const SectionTitle = ({ title, subtitle, centered = true }: { title: string, subtitle: string, centered?: boolean }) => (
  <div style={{ marginBottom: '80px', textAlign: centered ? 'center' : 'left' }}>
    <motion.span 
      initial={{ opacity: 0, letterSpacing: '0em' }} 
      whileInView={{ opacity: 1, letterSpacing: '0.3em' }} 
      viewport={{ once: true }} 
      style={{ color: 'var(--accent)', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', display: 'block', marginBottom: '15px' }}
    >
      {subtitle}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1 }}
    >
      {title}
    </motion.h2>
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
    { label: 'Accueil', id: 'home' },
    { label: 'La Flotte', id: 'fleet' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <>
      <nav className={`glass-nav ${isScrolled || activePage !== 'home' ? 'scrolled' : ''}`}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="logo" onClick={() => setPage('home')} style={{ fontSize: '1.4rem', fontWeight: 700, letterSpacing: '2px', cursor: 'pointer' }}>
            CHAROKI<span className="gold-text">CARS</span>
          </div>
          <div className="desktop-menu" style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
            {menuItems.map((item) => (
              <span key={item.id} className={`nav-link ${activePage === item.id ? 'active' : ''}`} onClick={() => setPage(item.id)} style={{ cursor: 'pointer' }}>{item.label}</span>
            ))}
            <button className="btn-primary" onClick={() => setPage('booking')} style={{ padding: '12px 30px' }}>RÉSERVER</button>
          </div>
          <div className="mobile-toggle" style={{ display: 'none', cursor: 'pointer' }} onClick={() => setIsMobileMenuOpen(true)}>
             <Menu size={28} color="white" />
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div className="mobile-nav-overlay" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} style={{ position: 'fixed', inset: 0, background: 'var(--bg-main)', zIndex: 2000, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '30px' }}>
            <div style={{ position: 'absolute', top: '40px', right: '40px', cursor: 'pointer' }} onClick={() => setIsMobileMenuOpen(false)}><X size={32} color="var(--accent)" /></div>
            {menuItems.map((item) => (
              <span key={item.id} className="serif" style={{ fontSize: '2.5rem', color: activePage === item.id ? 'var(--accent)' : 'white', cursor: 'pointer' }} onClick={() => { setPage(item.id); setIsMobileMenuOpen(false); }}>{item.label}</span>
            ))}
            <button className="btn-primary" onClick={() => { setPage('booking'); setIsMobileMenuOpen(false); }}>RÉSERVER MAINTENANT</button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const CarCard = ({ car, setPage }: { car: Car, setPage: (p: string) => void }) => (
  <motion.div 
    className="car-card" 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    onClick={() => setPage(`product-${car.id}`)}
    style={{ cursor: 'pointer' }}
  >
    <div className="image-wrapper">
      <img src={car.image} alt={car.name} />
      {car.status === 'loué' && (
        <div style={{ position: 'absolute', top: '20px', left: '20px', background: 'var(--accent)', color: 'black', padding: '5px 15px', fontSize: '0.6rem', fontWeight: 800, letterSpacing: '1px' }}>
          LOUÉ
        </div>
      )}
    </div>
    <div className="content">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
        <div>
          <span style={{ fontSize: '0.65rem', color: 'var(--accent)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>{car.brand}</span>
          <h3 style={{ fontSize: '1.8rem', marginTop: '5px' }}>{car.name}</h3>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ fontSize: '1.4rem', fontWeight: 600 }}>{car.price}</span>
          <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', display: 'block' }}>MAD / JOUR</span>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', padding: '20px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', marginBottom: '25px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.75rem', color: 'var(--text-secondary)' }}><Zap size={14} color="var(--accent)" /> {car.transmission}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.75rem', color: 'var(--text-secondary)' }}><Fuel size={14} color="var(--accent)" /> {car.fuel}</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', color: 'var(--accent)', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '2px' }}>
        DÉCOUVRIR <ArrowUpRight size={16} style={{ marginLeft: '5px' }} />
      </div>
    </div>
  </motion.div>
);

const Home = ({ setPage, cars }: { setPage: (p: string) => void, cars: Car[] }) => (
  <>
    <section className="hero">
      <img className="hero-img" src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2070" alt="Hero" />
      <div className="hero-overlay"></div>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
          <span style={{ color: 'var(--accent)', fontWeight: 700, letterSpacing: '5px', fontSize: '0.75rem', display: 'block', marginBottom: '20px' }}>EST. 2016 • CASABLANCA</span>
          <h1 style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)', lineHeight: 0.9, marginBottom: '30px' }}>
            L'Émotion <br />
            <span className="gold-text serif" style={{ fontStyle: 'italic' }}>Automobile</span>
          </h1>
          <p style={{ maxWidth: '500px', fontSize: '1.1rem', marginBottom: '45px' }}>
            Une collection exclusive de véhicules pour ceux qui ne font aucun compromis sur l'excellence et le style.
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <button className="btn-primary" onClick={() => setPage('fleet')}>NOTRE PARC</button>
            <button className="btn-outline" onClick={() => setPage('contact')}>CONTACT</button>
          </div>
        </motion.div>
      </div>
      <motion.div 
        animate={{ y: [0, 15, 0] }} 
        transition={{ repeat: Infinity, duration: 2 }}
        style={{ position: 'absolute', bottom: '50px', left: '50vw', transform: 'translateX(-50%)', zIndex: 2 }}
      >
        <div style={{ width: '1px', height: '80px', background: 'linear-gradient(to bottom, var(--accent), transparent)' }}></div>
      </motion.div>
    </section>

    <section style={{ padding: '150px 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '100px', alignItems: 'center' }}>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <div style={{ position: 'relative' }}>
              <img src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=1000" alt="Concierge" style={{ width: '100%', height: '600px', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: '-40px', right: '-40px', background: 'var(--accent)', padding: '40px', color: 'black' }}>
                <div style={{ fontSize: '3rem', fontWeight: 700, lineHeight: 1 }}>100%</div>
                <div style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '2px' }}>SATISFACTION</div>
              </div>
            </div>
          </motion.div>
          <div>
            <SectionTitle title="Le Service Conciergerie" subtitle="NOTRE VISION" centered={false} />
            <p style={{ marginBottom: '30px', fontSize: '1.2rem', color: '#fff' }}>Nous ne louons pas seulement des voitures, nous orchestrons vos déplacements avec une précision horlogère.</p>
            <p style={{ marginBottom: '40px' }}>Situé au cœur de Gauthier, CHAROKI CARS est devenu la référence du luxe à Casablanca. Notre mission est simple : transformer chaque trajet en une expérience mémorable.</p>
            <div className="grid-3" style={{ gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
              <div>
                <ShieldCheck color="var(--accent)" size={32} style={{ marginBottom: '15px' }} />
                <h4 style={{ fontSize: '0.8rem', letterSpacing: '1px', fontWeight: 700, marginBottom: '10px' }}>SÉRÉNITÉ TOTALE</h4>
                <p style={{ fontSize: '0.85rem' }}>Assurance premium et assistance dédiée 24/7.</p>
              </div>
              <div>
                <MapPin color="var(--accent)" size={32} style={{ marginBottom: '15px' }} />
                <h4 style={{ fontSize: '0.8rem', letterSpacing: '1px', fontWeight: 700, marginBottom: '10px' }}>MOBILITÉ LIBRE</h4>
                <p style={{ fontSize: '0.85rem' }}>Livraison personnalisée : aéroport, hôtel ou bureau.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section style={{ background: '#08080A', padding: '150px 0' }}>
      <div className="container">
        <SectionTitle title="Sélection Premium" subtitle="L'EXCELLENCE" />
        <div className="grid-3">
          {cars.slice(0, 3).map(car => <CarCard key={car.id} car={car} setPage={setPage} />)}
        </div>
        <div style={{ textAlign: 'center', marginTop: '80px' }}>
          <button className="btn-outline" onClick={() => setPage('fleet')}>DÉCOUVRIR TOUTE LA FLOTTE</button>
        </div>
      </div>
    </section>

    <section style={{ padding: '150px 0' }}>
      <div className="container">
        <SectionTitle title="Ils nous font Confiance" subtitle="TÉMOIGNAGES" />
        <div className="grid-3">
          {TESTIMONIALS.map(t => (
            <motion.div key={t.id} style={{ background: 'var(--bg-card)', padding: '50px', border: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', gap: '5px', marginBottom: '30px' }}>
                {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} fill="var(--accent)" color="var(--accent)" />)}
              </div>
              <p className="serif" style={{ fontSize: '1.5rem', color: '#fff', fontStyle: 'italic', marginBottom: '40px', lineHeight: 1.4 }}>"{t.content}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ width: '40px', height: '1px', background: 'var(--accent)' }}></div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{t.name}</div>
                  <div style={{ color: 'var(--accent)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '1px' }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section style={{ padding: '150px 0', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <SectionTitle title="FAQ" subtitle="QUESTIONS" />
          {FAQS.map((faq, i) => (
            <details key={i} style={{ borderBottom: '1px solid var(--border)', padding: '30px 0', cursor: 'pointer' }}>
              <summary style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '1.2rem', fontWeight: 500 }}>
                {faq.question}
                <ChevronDown size={20} color="var(--accent)" />
              </summary>
              <p style={{ marginTop: '20px', fontSize: '1rem', lineHeight: 1.6 }}>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  </>
);

const Fleet = ({ setPage, cars }: { setPage: (p: string) => void, cars: Car[] }) => {
  const [filter, setFilter] = useState('Tous');
  const filtered = filter === 'Tous' ? cars : cars.filter(c => c.category === filter);

  return (
    <section style={{ paddingTop: '200px' }}>
      <div className="container">
        <SectionTitle title="Notre Flotte" subtitle="COLLECTION" />
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '80px' }}>
          {['Tous', 'Citadine', 'SUV', 'Berline'].map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{ background: filter === f ? 'var(--accent)' : 'transparent', border: '1px solid var(--accent)', color: filter === f ? 'black' : 'var(--accent)', padding: '10px 30px', cursor: 'pointer', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '2px', transition: '0.3s' }}>
              {f.toUpperCase()}
            </button>
          ))}
        </div>
        <div className="grid-3">
          {filtered.map(car => <CarCard key={car.id} car={car} setPage={setPage} />)}
        </div>
      </div>
    </section>
  );
};

const ProductPage = ({ carId, setPage, cars }: { carId: number, setPage: (p: string) => void, cars: Car[] }) => {
  const car = cars.find(c => c.id === carId) || cars[0];
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const days = calculateDays(start, end);

  return (
    <section style={{ paddingTop: '180px' }}>
      <div className="container">
        <button onClick={() => setPage('fleet')} className="nav-link" style={{ border: 'none', background: 'transparent', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '60px', cursor: 'pointer' }}>
          <ArrowLeft size={16} /> RETOUR À LA COLLECTION
        </button>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '80px' }}>
          <div>
            <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} src={car.image} alt={car.name} style={{ width: '100%', height: '600px', objectFit: 'cover', border: '1px solid var(--border)' }} />
            <div style={{ marginTop: '60px' }}>
              <h1 style={{ fontSize: '4rem', marginBottom: '20px' }}>{car.name}</h1>
              <div style={{ display: 'flex', gap: '15px', marginBottom: '40px' }}>
                <span style={{ border: '1px solid var(--accent)', color: 'var(--accent)', padding: '5px 15px', fontSize: '0.7rem', fontWeight: 700 }}>{car.category}</span>
                <span style={{ background: 'rgba(255,255,255,0.05)', padding: '5px 15px', fontSize: '0.7rem', fontWeight: 700 }}>{car.status.toUpperCase()}</span>
              </div>
              <p style={{ fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '60px' }}>{car.fullDescription}</p>
              <div className="grid-3" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                <div style={{ background: 'var(--bg-card)', padding: '30px', border: '1px solid var(--border)' }}>
                  <span className="label-text">MOTEUR</span>
                  <div style={{ fontWeight: 600 }}>{car.engine}</div>
                </div>
                <div style={{ background: 'var(--bg-card)', padding: '30px', border: '1px solid var(--border)' }}>
                  <span className="label-text">TRANSMISSION</span>
                  <div style={{ fontWeight: 600 }}>{car.transmission}</div>
                </div>
                <div style={{ background: 'var(--bg-card)', padding: '30px', border: '1px solid var(--border)' }}>
                  <span className="label-text">CARBURANT</span>
                  <div style={{ fontWeight: 600 }}>{car.fuel}</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ position: 'sticky', top: '150px', height: 'fit-content' }}>
            <div style={{ background: 'var(--bg-card)', padding: '50px', border: '1px solid var(--accent)' }}>
              <span className="label-text">TARIF EXCLUSIF</span>
              <div style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '40px' }}>{car.price} MAD <span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>/ jour</span></div>
              
              <div style={{ display: 'grid', gap: '20px', marginBottom: '40px' }}>
                <div><label className="label-text">DÉPART</label><input type="date" className="input-field" value={start} onChange={e => setStart(e.target.value)} /></div>
                <div><label className="label-text">RETOUR</label><input type="date" className="input-field" value={end} onChange={e => setEnd(e.target.value)} /></div>
              </div>

              {days > 0 && (
                <div style={{ padding: '30px', background: 'rgba(255,255,255,0.03)', marginBottom: '40px', textAlign: 'center' }}>
                  <span className="label-text">TOTAL ({days} JOURS)</span>
                  <div style={{ fontSize: '2rem', fontWeight: 700 }}>{days * car.price} MAD</div>
                </div>
              )}

              <button className="btn-primary" style={{ width: '100%' }} onClick={() => setPage(`booking-${car.id}-${start}-${end}`)}>RÉSERVER MAINTENANT</button>
              
              <div style={{ marginTop: '30px', textAlign: 'center' }}>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Besoin d'aide ? <br /> <strong>+212 700 382 718</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Booking = ({ selectedCarId, start, end, cars }: { selectedCarId?: number, start?: string, end?: string, cars: Car[] }) => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: '', phone: '', start: start || '', end: end || '' });
  const car = cars.find(c => c.id === selectedCarId) || cars[0];
  const days = calculateDays(form.start, form.end);

  const submit = () => {
    const msg = `Réservation CHAROKI CARS\n\nVéhicule: ${car.name}\nPériode: ${form.start} au ${form.end} (${days} j)\nTotal: ${days * car.price} MAD\n\nClient: ${form.name}\nTél: ${form.phone}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section style={{ paddingTop: '200px', minHeight: '100vh' }}>
      <div className="container">
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '50px' }}>
          <div style={{ background: 'var(--bg-card)', padding: '60px', border: '1px solid var(--border)' }}>
            <h2 className="serif" style={{ fontSize: '2.5rem', marginBottom: '40px' }}>Finaliser la <span className="gold-text">Réservation</span></h2>
            {step === 1 ? (
              <div style={{ display: 'grid', gap: '25px' }}>
                <div><label className="label-text">DÉBUT</label><input type="date" className="input-field" value={form.start} onChange={e => setForm({...form, start: e.target.value})} /></div>
                <div><label className="label-text">FIN</label><input type="date" className="input-field" value={form.end} onChange={e => setForm({...form, end: e.target.value})} /></div>
                <button className="btn-primary" onClick={() => setStep(2)}>CONTINUER</button>
              </div>
            ) : (
              <div style={{ display: 'grid', gap: '25px' }}>
                <div><label className="label-text">NOM COMPLET</label><input className="input-field" value={form.name} onChange={e => setForm({...form, name: e.target.value})} /></div>
                <div><label className="label-text">TÉLÉPHONE</label><input className="input-field" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} /></div>
                <button className="btn-primary" onClick={submit}>CONFIRMER SUR WHATSAPP</button>
                <button className="btn-outline" onClick={() => setStep(1)}>MODIFIER DATES</button>
              </div>
            )}
          </div>
          <div style={{ padding: '40px', border: '1px solid var(--border)' }}>
            <img src={car.image} style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover', marginBottom: '25px' }} />
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{car.name}</h3>
            <div style={{ color: 'var(--accent)', fontWeight: 700 }}>{car.price} MAD / jour</div>
            {days > 0 && (
              <div style={{ marginTop: '30px', paddingTop: '30px', borderTop: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}><span>Durée</span><span>{days} jours</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', fontWeight: 700 }}><span>Total</span><span className="gold-text">{days * car.price} MAD</span></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section style={{ paddingTop: '200px' }}>
    <div className="container">
      <SectionTitle title="Nous Contacter" subtitle="DISPONIBILITÉ" />
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '80px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ background: 'var(--bg-card)', padding: '60px', border: '1px solid var(--border)' }}>
          <h3 className="serif" style={{ fontSize: '2.5rem', marginBottom: '40px' }}>Parlons de votre <span className="gold-text">Projet</span></h3>
          <div style={{ display: 'grid', gap: '40px' }}>
            <div style={{ display: 'flex', gap: '20px' }}>
              <div style={{ width: '50px', height: '50px', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Phone color="black" /></div>
              <div><div className="label-text">TÉLÉPHONE</div><div style={{ fontSize: '1.2rem', fontWeight: 600 }}>+212 700 382 718</div></div>
            </div>
            <div style={{ display: 'flex', gap: '20px' }}>
              <div style={{ width: '50px', height: '50px', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><MapPin color="black" /></div>
              <div><div className="label-text">ADRESSE</div><div style={{ fontSize: '1.2rem', fontWeight: 600 }}>Quartier Gauthier, Casablanca</div></div>
            </div>
            <div style={{ display: 'flex', gap: '20px' }}>
              <div style={{ width: '50px', height: '50px', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Clock color="black" /></div>
              <div><div className="label-text">HORAIRES</div><div style={{ fontSize: '1.2rem', fontWeight: 600 }}>09:00 - 20:00 • Lun - Sam</div></div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '40px' }}>Notre équipe vous accompagne pour une location sur mesure adaptée à vos exigences.</p>
          <button className="btn-primary" style={{ padding: '25px' }} onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}`)}>DÉMARRER LA DISCUSSION WHATSAPP</button>
        </div>
      </div>
    </div>
  </section>
);

const App = () => {
  const [page, setPage] = useState('home');
  const cars = INITIAL_CARS;

  useEffect(() => { window.scrollTo(0, 0); }, [page]);

  return (
    <div className="app">
      <Navbar activePage={page} setPage={setPage} />
      <main>
        <AnimatePresence mode="wait">
          {page === 'home' && <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><Home setPage={setPage} cars={cars} /></motion.div>}
          {page === 'fleet' && <motion.div key="fleet" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><Fleet setPage={setPage} cars={cars} /></motion.div>}
          {page === 'contact' && <motion.div key="contact" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><Contact /></motion.div>}
          {page === 'booking' && <motion.div key="booking" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><Booking cars={cars} /></motion.div>}
          {page.startsWith('booking-') && <motion.div key="booking-car" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><Booking cars={cars} selectedCarId={Number(page.split('-')[1])} start={page.split('-')[2]} end={page.split('-')[3]} /></motion.div>}
          {page.startsWith('product-') && <motion.div key="product" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><ProductPage carId={Number(page.split('-')[1])} setPage={setPage} cars={cars} /></motion.div>}
        </AnimatePresence>
      </main>
      <footer style={{ padding: '100px 0 50px', background: '#050505', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '100px', marginBottom: '80px' }}>
            <div>
              <div className="logo" style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '30px' }}>CHAROKI<span className="gold-text">CARS</span></div>
              <p style={{ maxWidth: '400px', marginBottom: '30px' }}>L'excellence de la location automobile à Casablanca. Une flotte d'exception pour vos moments privilégiés.</p>
              <div style={{ display: 'flex', gap: '20px' }}>
                <Instagram size={20} className="nav-link" style={{ cursor: 'pointer' }} />
                <Facebook size={20} className="nav-link" style={{ cursor: 'pointer' }} />
                <MessageCircle size={20} className="nav-link" style={{ cursor: 'pointer' }} />
              </div>
            </div>
            <div>
              <h4 className="label-text">LIENS</h4>
              <ul style={{ listStyle: 'none', display: 'grid', gap: '15px' }}>
                <li className="nav-link" onClick={() => setPage('home')} style={{ cursor: 'pointer' }}>ACCUEIL</li>
                <li className="nav-link" onClick={() => setPage('fleet')} style={{ cursor: 'pointer' }}>LA FLOTTE</li>
                <li className="nav-link" onClick={() => setPage('contact')} style={{ cursor: 'pointer' }}>CONTACT</li>
              </ul>
            </div>
            <div>
              <h4 className="label-text">OFFICE</h4>
              <p style={{ fontSize: '0.9rem' }}>12 Rue Gauthier<br />Casablanca, Maroc<br /><br />+212 700 382 718</p>
            </div>
          </div>
          <div style={{ borderTop: '1px solid var(--border)', paddingTop: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--text-secondary)', fontSize: '0.7rem', letterSpacing: '1px' }}>
            <span>© {new Date().getFullYear()} CHAROKI CARS. TOUS DROITS RÉSERVÉS.</span>
            <span>DESIGN BY LUXURY DIGITAL</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
