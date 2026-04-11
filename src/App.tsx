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

const calculateDays = (start: string, end: string) => {
  if (!start || !end) return 0;
  const s = new Date(start);
  const e = new Date(end);
  const diff = e.getTime() - s.getTime();
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  return days > 0 ? days : 0;
};

const SectionTitle = ({ title, subtitle, centered = true }: { title: string, subtitle: string, centered?: boolean }) => (
  <div style={{ marginBottom: '60px', textAlign: centered ? 'center' : 'left' }}>
    <motion.span 
      initial={{ opacity: 0, y: 10 }} 
      whileInView={{ opacity: 0.6, y: 0 }} 
      viewport={{ once: true }} 
      style={{ color: 'var(--text-primary)', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', display: 'block', marginBottom: '15px', letterSpacing: '0.3em' }}
    >
      {subtitle}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'var(--text-primary)' }}
    >
      {title}
    </motion.h2>
    <div style={{ width: '40px', height: '1px', background: 'var(--accent)', margin: centered ? '30px auto 0' : '30px 0 0' }}></div>
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
          <div className="logo" onClick={() => setPage('home')} style={{ fontSize: '1.2rem', fontWeight: 800, letterSpacing: '3px', cursor: 'pointer', color: 'var(--text-primary)' }}>
            CHAROKI<span className="gold-text">CARS</span>
          </div>
          <div className="desktop-menu" style={{ display: 'flex', gap: '45px', alignItems: 'center' }}>
            {menuItems.map((item) => (
              <span key={item.id} className={`nav-link ${activePage === item.id ? 'active' : ''}`} onClick={() => setPage(item.id)} style={{ cursor: 'pointer' }}>{item.label}</span>
            ))}
            <button className="btn-primary" onClick={() => setPage('booking')} style={{ padding: '12px 35px' }}>RÉSERVER</button>
          </div>
          <div className="mobile-toggle" style={{ display: 'none', cursor: 'pointer' }} onClick={() => setIsMobileMenuOpen(true)}>
             <Menu size={28} color="var(--text-primary)" />
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ position: 'fixed', inset: 0, background: '#fff', zIndex: 2000, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '40px' }}>
            <div style={{ position: 'absolute', top: '40px', right: '40px', cursor: 'pointer' }} onClick={() => setIsMobileMenuOpen(false)}><X size={32} color="var(--text-primary)" /></div>
            {menuItems.map((item) => (
              <span key={item.id} className="serif" style={{ fontSize: '3rem', color: activePage === item.id ? 'var(--accent)' : 'var(--text-primary)', cursor: 'pointer' }} onClick={() => { setPage(item.id); setIsMobileMenuOpen(false); }}>{item.label}</span>
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
    </div>
    <div className="card-body">
      <span style={{ fontSize: '0.6rem', color: 'var(--accent)', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>{car.brand}</span>
      <h3 style={{ fontSize: '1.8rem', marginBottom: '20px', color: 'var(--text-primary)' }}>{car.name}</h3>
      <div style={{ display: 'flex', gap: '20px', marginBottom: '25px', color: 'var(--text-secondary)', fontSize: '0.75rem', fontWeight: 500 }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Zap size={14} color="var(--accent)" /> {car.transmission}</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Fuel size={14} color="var(--accent)" /> {car.fuel}</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-light)', paddingTop: '20px' }}>
        <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)' }}>{car.price} MAD <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontWeight: 400 }}>/ jour</span></div>
        <div style={{ width: '35px', height: '35px', borderRadius: '50%', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ArrowUpRight size={16} /></div>
      </div>
    </div>
  </motion.div>
);

const Home = ({ setPage, cars }: { setPage: (p: string) => void, cars: Car[] }) => (
  <>
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <span style={{ color: 'var(--accent)', fontWeight: 800, letterSpacing: '0.4em', fontSize: '0.7rem', display: 'block', marginBottom: '25px' }}>L'ART DE LA MOBILITÉ PREMIUM</span>
            <h1 style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)', lineHeight: 1, marginBottom: '35px', color: 'var(--text-primary)' }}>
              Voyagez avec <br />
              <span className="serif" style={{ fontStyle: 'italic', fontWeight: 400 }}>Élégance</span>
            </h1>
            <p style={{ maxWidth: '500px', fontSize: '1.1rem', marginBottom: '50px', lineHeight: 1.8 }}>
              Découvrez une sélection rigoureuse de véhicules d'exception pour vos séjours à Casablanca. Un service sur-mesure pour une expérience inégalée.
            </p>
            <div style={{ display: 'flex', gap: '20px' }}>
              <button className="btn-primary" onClick={() => setPage('fleet')}>NOTRE COLLECTION</button>
              <button className="btn-outline" onClick={() => setPage('contact')}>CONTACTER</button>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="hero-image-container">
        <motion.img initial={{ scale: 1.1, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.5 }} className="hero-img" src="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=2070" alt="Luxury Car" />
      </div>
    </section>

    <section style={{ padding: '140px 0', background: '#fff' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
          <div>
            <SectionTitle title="L'Excellence du Service" subtitle="NOTRE VISION" centered={false} />
            <p style={{ marginBottom: '35px', fontSize: '1.1rem' }}>Basé au cœur du prestigieux quartier Gauthier, CHAROKI CARS redéfinit les standards de la location automobile au Maroc.</p>
            <div style={{ display: 'grid', gap: '30px' }}>
              <div style={{ display: 'flex', gap: '20px' }}>
                <ShieldCheck color="var(--accent)" size={28} />
                <div><h4 style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', marginBottom: '5px' }}>SÉCURITÉ & SÉRÉNITÉ</h4><p style={{ fontSize: '0.9rem' }}>Assurance tous risques et assistance 24/7 incluse.</p></div>
              </div>
              <div style={{ display: 'flex', gap: '20px' }}>
                <MapPin color="var(--accent)" size={28} />
                <div><h4 style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', marginBottom: '5px' }}>LIVRAISON PRIVÉE</h4><p style={{ fontSize: '0.9rem' }}>Aéroport, domicile ou bureau selon votre convenance.</p></div>
              </div>
            </div>
          </div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ position: 'relative', padding: '20px' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '70%', height: '100%', border: '1px solid var(--accent-light)', zIndex: 0 }}></div>
            <img src="https://images.unsplash.com/photo-1469033092076-096ff723f901?auto=format&fit=crop&q=80&w=1000" style={{ width: '100%', position: 'relative', zIndex: 1, boxShadow: '0 10px 40px rgba(0,0,0,0.04)' }} alt="Luxury Interior" />
          </motion.div>
        </div>
      </div>
    </section>

    <section style={{ padding: '140px 0', background: 'var(--bg-secondary)' }}>
      <div className="container">
        <SectionTitle title="Notre Sélection" subtitle="LA FLOTTE" />
        <div className="grid-3">
          {cars.slice(0, 3).map(car => <CarCard key={car.id} car={car} setPage={setPage} />)}
        </div>
        <div style={{ textAlign: 'center', marginTop: '70px' }}>
          <button className="btn-outline" onClick={() => setPage('fleet')}>VOIR TOUTE LA COLLECTION</button>
        </div>
      </div>
    </section>

    <section style={{ padding: '140px 0' }}>
      <div className="container">
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <SectionTitle title="Expériences Clients" subtitle="ILS NOUS FONT CONFIANCE" />
          <div className="grid-3" style={{ gap: '40px' }}>
            {TESTIMONIALS.map(t => (
              <div key={t.id} style={{ textAlign: 'center', padding: '40px', background: 'var(--bg-secondary)', borderRadius: '2px' }}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '25px' }}>
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={12} fill="var(--accent)" color="var(--accent)" />)}
                </div>
                <p className="serif" style={{ fontSize: '1.4rem', fontStyle: 'italic', color: 'var(--text-primary)', marginBottom: '30px', lineHeight: 1.5 }}>"{t.content}"</p>
                <div style={{ fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>{t.name}</div>
                <div style={{ color: 'var(--accent)', fontSize: '0.65rem', marginTop: '5px' }}>{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section style={{ padding: '140px 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <SectionTitle title="FAQ" subtitle="QUESTIONS" />
          {FAQS.map((faq, i) => (
            <details key={i} style={{ borderBottom: '1px solid var(--border)', padding: '25px 0', cursor: 'pointer' }}>
              <summary style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '1.1rem', fontWeight: 600 }}>
                {faq.question}
                <ChevronDown size={18} color="var(--accent)" />
              </summary>
              <p style={{ marginTop: '20px', fontSize: '0.95rem', lineHeight: 1.7 }}>{faq.answer}</p>
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
    <section style={{ paddingTop: '180px', paddingBottom: '140px' }}>
      <div className="container">
        <SectionTitle title="Notre Collection" subtitle="LA FLOTTE" />
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '80px', flexWrap: 'wrap' }}>
          {['Tous', 'Citadine', 'SUV', 'Berline'].map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{ background: filter === f ? 'var(--text-primary)' : 'transparent', border: '1px solid var(--border)', color: filter === f ? '#fff' : 'var(--text-primary)', padding: '12px 30px', cursor: 'pointer', fontWeight: 700, fontSize: '0.65rem', letterSpacing: '0.2em', transition: '0.3s' }}>
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
    <section style={{ paddingTop: '160px', paddingBottom: '140px' }}>
      <div className="container">
        <button onClick={() => setPage('fleet')} style={{ border: 'none', background: 'transparent', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '50px', cursor: 'pointer', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
          <ArrowLeft size={16} /> RETOUR AU PARC
        </button>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '80px' }}>
          <div>
            <img src={car.image} alt={car.name} style={{ width: '100%', height: '550px', objectFit: 'cover', border: '1px solid var(--border)' }} />
            <div style={{ marginTop: '50px' }}>
              <div style={{ color: 'var(--accent)', fontWeight: 800, fontSize: '0.7rem', letterSpacing: '0.3em', marginBottom: '15px' }}>{car.brand.toUpperCase()}</div>
              <h1 style={{ fontSize: '4rem', marginBottom: '25px' }}>{car.name}</h1>
              <div style={{ display: 'flex', gap: '15px', marginBottom: '40px' }}>
                <span style={{ border: '1px solid var(--border)', padding: '6px 18px', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em' }}>{car.category}</span>
                <span style={{ background: 'var(--accent)', color: '#fff', padding: '6px 18px', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em' }}>{car.status.toUpperCase()}</span>
              </div>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '50px' }}>{car.fullDescription}</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                <div style={{ padding: '30px', background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
                  <span className="label-text">MOTEUR</span>
                  <div style={{ fontWeight: 700 }}>{car.engine}</div>
                </div>
                <div style={{ padding: '30px', background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
                  <span className="label-text">TRANSMISSION</span>
                  <div style={{ fontWeight: 700 }}>{car.transmission}</div>
                </div>
                <div style={{ padding: '30px', background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
                  <span className="label-text">CARBURANT</span>
                  <div style={{ fontWeight: 700 }}>{car.fuel}</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ position: 'sticky', top: '140px', height: 'fit-content' }}>
            <div style={{ padding: '50px', border: '1px solid var(--border)', background: '#fff', boxShadow: '0 10px 40px rgba(0,0,0,0.04)' }}>
              <span className="label-text">TARIF EXCLUSIF</span>
              <div style={{ fontSize: '2.8rem', fontWeight: 800, marginBottom: '40px' }}>{car.price} MAD <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 400 }}>/ jour</span></div>
              
              <div style={{ display: 'grid', gap: '20px', marginBottom: '40px' }}>
                <div><label className="label-text">DÉBUT</label><input type="date" className="input-field" value={start} onChange={e => setStart(e.target.value)} /></div>
                <div><label className="label-text">RETOUR</label><input type="date" className="input-field" value={end} onChange={e => setEnd(e.target.value)} /></div>
              </div>

              {days > 0 && (
                <div style={{ padding: '25px', background: 'var(--bg-secondary)', marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="label-text" style={{ marginBottom: 0 }}>TOTAL ({days} JOURS)</span>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>{days * car.price} MAD</div>
                </div>
              )}

              <button className="btn-primary" style={{ width: '100%' }} onClick={() => setPage(`booking-${car.id}-${start}-${end}`)}>RÉSERVER CE VÉHICULE</button>
              <p style={{ textAlign: 'center', marginTop: '30px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Assistance WhatsApp : +212 700 382 718</p>
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
    <section style={{ paddingTop: '180px', paddingBottom: '140px', background: 'var(--bg-secondary)', minHeight: '100vh' }}>
      <div className="container">
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '60px' }}>
          <div style={{ background: '#fff', padding: '60px', border: '1px solid var(--border)', boxShadow: '0 10px 40px rgba(0,0,0,0.04)' }}>
            <h2 className="serif" style={{ fontSize: '2.5rem', marginBottom: '40px' }}>Confirmation de <br /><span className="gold-text">Réservation</span></h2>
            {step === 1 ? (
              <div style={{ display: 'grid', gap: '30px' }}>
                <div><label className="label-text">DÉBUT DE LOCATION</label><input type="date" className="input-field" value={form.start} onChange={e => setForm({...form, start: e.target.value})} /></div>
                <div><label className="label-text">FIN DE LOCATION</label><input type="date" className="input-field" value={form.end} onChange={e => setForm({...form, end: e.target.value})} /></div>
                <button className="btn-primary" onClick={() => setStep(2)}>SUIVANT</button>
              </div>
            ) : (
              <div style={{ display: 'grid', gap: '30px' }}>
                <div><label className="label-text">VOTRE NOM COMPLET</label><input className="input-field" value={form.name} onChange={e => setForm({...form, name: e.target.value})} /></div>
                <div><label className="label-text">VOTRE TÉLÉPHONE</label><input className="input-field" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} /></div>
                <button className="btn-primary" onClick={submit}>TERMINER SUR WHATSAPP</button>
                <button className="btn-outline" style={{ border: 'none' }} onClick={() => setStep(1)}>MODIFIER LES DATES</button>
              </div>
            )}
          </div>
          <div style={{ padding: '40px', border: '1px solid var(--border)', background: '#fff' }}>
            <img src={car.image} style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover', marginBottom: '30px' }} />
            <h3 style={{ fontSize: '1.6rem', marginBottom: '10px' }}>{car.name}</h3>
            <div style={{ color: 'var(--accent)', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.1em' }}>{car.price} MAD / JOUR</div>
            {days > 0 && (
              <div style={{ marginTop: '40px', paddingTop: '30px', borderTop: '1px solid var(--border-light)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}><span style={{ color: 'var(--text-secondary)' }}>Durée</span><span>{days} jours</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.4rem', fontWeight: 800 }}><span>Total</span><span className="gold-text">{days * car.price} MAD</span></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section style={{ paddingTop: '180px', paddingBottom: '140px' }}>
    <div className="container">
      <SectionTitle title="Parlons de votre Séjour" subtitle="CONTACT" />
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '80px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ background: '#fff', padding: '60px', border: '1px solid var(--border)', boxShadow: '0 10px 40px rgba(0,0,0,0.04)' }}>
          <div style={{ display: 'grid', gap: '50px' }}>
            <div style={{ display: 'flex', gap: '25px' }}>
              <div style={{ width: '50px', height: '50px', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border)' }}><Phone size={20} /></div>
              <div><div className="label-text">TÉLÉPHONE</div><div style={{ fontSize: '1.3rem', fontWeight: 700 }}>+212 700 382 718</div></div>
            </div>
            <div style={{ display: 'flex', gap: '25px' }}>
              <div style={{ width: '50px', height: '50px', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border)' }}><MapPin size={20} /></div>
              <div><div className="label-text">SHOWROOM</div><div style={{ fontSize: '1.3rem', fontWeight: 700 }}>Quartier Gauthier, Casablanca</div></div>
            </div>
            <div style={{ display: 'flex', gap: '25px' }}>
              <div style={{ width: '50px', height: '50px', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border)' }}><Clock size={20} /></div>
              <div><div className="label-text">HORAIRES</div><div style={{ fontSize: '1.3rem', fontWeight: 700 }}>09:00 - 20:00 • Lun - Sam</div></div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p style={{ fontSize: '1.3rem', lineHeight: 1.6, marginBottom: '45px' }}>Notre équipe est à votre disposition pour vous conseiller et organiser votre mobilité sur-mesure à Casablanca.</p>
          <button className="btn-primary" style={{ padding: '25px' }} onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}`)}>DÉBUTER SUR WHATSAPP</button>
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
          {page === 'home' && <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}><Home setPage={setPage} cars={cars} /></motion.div>}
          {page === 'fleet' && <motion.div key="fleet" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}><Fleet setPage={setPage} cars={cars} /></motion.div>}
          {page === 'contact' && <motion.div key="contact" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}><Contact /></motion.div>}
          {page === 'booking' && <motion.div key="booking" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}><Booking cars={cars} /></motion.div>}
          {page.startsWith('booking-') && <motion.div key="booking-car" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}><Booking cars={cars} selectedCarId={Number(page.split('-')[1])} start={page.split('-')[2]} end={page.split('-')[3]} /></motion.div>}
          {page.startsWith('product-') && <motion.div key="product" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}><ProductPage carId={Number(page.split('-')[1])} setPage={setPage} cars={cars} /></motion.div>}
        </AnimatePresence>
      </main>
      <footer style={{ padding: '100px 0 60px', background: '#fff', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1.2fr', gap: '80px', marginBottom: '80px' }}>
            <div>
              <div className="logo" style={{ fontSize: '1.8rem', fontWeight: 800, letterSpacing: '2px', marginBottom: '30px' }}>CHAROKI<span className="gold-text">CARS</span></div>
              <p style={{ maxWidth: '400px', marginBottom: '35px', lineHeight: 1.8 }}>L'excellence automobile à Casablanca. Une collection exclusive de véhicules premium pour vos exigences les plus hautes.</p>
              <div style={{ display: 'flex', gap: '25px' }}>
                <Instagram size={18} style={{ opacity: 0.6, cursor: 'pointer' }} />
                <Facebook size={18} style={{ opacity: 0.6, cursor: 'pointer' }} />
                <MessageCircle size={18} style={{ opacity: 0.6, cursor: 'pointer' }} />
              </div>
            </div>
            <div>
              <h4 className="label-text" style={{ marginBottom: '30px' }}>LIENS UTILES</h4>
              <ul style={{ listStyle: 'none', display: 'grid', gap: '18px' }}>
                <li style={{ cursor: 'pointer', fontSize: '0.8rem', fontWeight: 600, opacity: 0.6 }} onClick={() => setPage('home')}>ACCUEIL</li>
                <li style={{ cursor: 'pointer', fontSize: '0.8rem', fontWeight: 600, opacity: 0.6 }} onClick={() => setPage('fleet')}>NOTRE COLLECTION</li>
                <li style={{ cursor: 'pointer', fontSize: '0.8rem', fontWeight: 600, opacity: 0.6 }} onClick={() => setPage('contact')}>NOUS CONTACTER</li>
              </ul>
            </div>
            <div>
              <h4 className="label-text" style={{ marginBottom: '30px' }}>COORDONNÉES</h4>
              <div style={{ fontSize: '0.9rem', lineHeight: 1.8, opacity: 0.8 }}>
                12 Rue Gauthier, Casablanca, Maroc<br /><br />
                Tél : +212 700 382 718<br />
                Mail : contact@charokicars.ma
              </div>
            </div>
          </div>
          <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--text-secondary)', fontSize: '0.65rem', letterSpacing: '0.15em' }}>
            <span>© {new Date().getFullYear()} CHAROKI CARS. TOUS DROITS RÉSERVÉS.</span>
            <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>LUXURY DIGITAL</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
