import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, Zap, Fuel, 
  Menu, X, ArrowLeft, LayoutDashboard, 
  Plus, Trash2, ChevronRight
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
    fullDescription: "Le C5 Aircross est conçu pour les longs trajets en toute sérénité. Ses sièges Advanced Comfort et son espace intérieur modulable en font le choix premium pour les familles exigeantes.",
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
  <div style={{ marginBottom: '40px', textAlign: centered ? 'center' : 'left' }}>
    <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ color: 'var(--gold)', letterSpacing: '4px', fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>{subtitle}</motion.span>
    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ fontSize: '2rem', fontWeight: 400 }}>{title}</motion.h2>
    <div style={{ width: '50px', height: '2px', background: 'var(--gold)', margin: centered ? '20px auto 0' : '20px 0 0' }}></div>
  </div>
);

const Navbar = ({ activePage, setPage, onAdminClick }: { activePage: string, setPage: (p: string) => void, onAdminClick: () => void }) => {
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
            <div onClick={onAdminClick} style={{ cursor: 'pointer', color: '#333', marginLeft: '10px' }}><LayoutDashboard size={18} /></div>
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
            <div onClick={() => { onAdminClick(); setIsMobileMenuOpen(false); }} style={{ marginTop: '40px', color: '#555', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.8rem', cursor: 'pointer' }}><LayoutDashboard size={16} /> ACCÈS ADMIN</div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Home = ({ setPage, cars }: { setPage: (p: string) => void, cars: Car[] }) => (
  <>
    <section className="hero">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} style={{ color: 'var(--gold)', letterSpacing: '4px', fontSize: '0.7rem', fontWeight: 700, display: 'block', marginBottom: '10px' }}>LOCATION AUTOMOBILE À CASABLANCA</motion.span>
          <h1 style={{ fontSize: '3rem', lineHeight: 1.1, marginBottom: '20px' }}>Votre Voyage <br /><span className="gold-text">Commence Ici</span></h1>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '30px', lineHeight: 1.6, maxWidth: '500px' }}>Une flotte moderne et un service irréprochable pour tous vos déplacements professionnels ou personnels.</p>
          <div style={{ display: 'flex', gap: '15px' }}>
            <button className="btn-primary" onClick={() => setPage('fleet')}>NOS VÉHICULES</button>
            <button style={{ background: 'transparent', border: '1px solid var(--gold)', color: 'var(--gold)', padding: '12px 25px', fontWeight: 700, cursor: 'pointer', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.7rem' }} onClick={() => setPage('contact')}>CONTACT</button>
          </div>
        </motion.div>
      </div>
    </section>
    <section style={{ background: 'var(--darker-bg)' }}>
      <div className="container">
        <SectionTitle title="Sélection du Moment" subtitle="À LA UNE" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {cars.filter(c => c.status !== 'archive').slice(0, 3).map((car) => (
            <motion.div key={car.id} className="car-card" onClick={() => setPage(`product-${car.id}`)} style={{ cursor: 'pointer' }}>
              <div className="car-image" style={{ backgroundImage: `url(${car.image})` }}>
                {car.status === 'loué' && <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', background: 'rgba(0,0,0,0.85)', color: 'var(--gold)', padding: '10px', fontSize: '0.65rem', fontWeight: 700, textAlign: 'center' }}>Disponible le {car.availableFrom}</div>}
              </div>
              <div style={{ padding: '20px' }}>
                <span style={{ color: 'var(--gold)', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '2px' }}>{car.brand.toUpperCase()}</span>
                <h3 style={{ fontSize: '1.2rem', margin: '5px 0 10px' }}>{car.name}</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '15px', borderTop: '1px solid var(--border-color)' }}>
                  <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--gold)' }}>{car.price} MAD <small style={{fontSize: '0.6rem', fontWeight: 400}}>/ J</small></span>
                  <ChevronRight size={18} color="var(--gold)" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </>
);

const Fleet = ({ setPage, cars }: { setPage: (p: string) => void, cars: Car[] }) => {
  const [filter, setFilter] = useState('Tous');
  const categories = ['Tous', 'Citadine', 'SUV', 'Berline'];
  const filteredCars = (filter === 'Tous' ? cars : cars.filter(c => c.category === filter)).filter(c => c.status !== 'archive');

  return (
    <section style={{ paddingTop: '120px' }}>
      <div className="container">
        <SectionTitle title="Parc Automobile" subtitle="NOS OFFRES" />
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '40px', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)} style={{ background: filter === cat ? 'var(--gold)' : 'transparent', border: '1px solid var(--gold)', color: filter === cat ? 'black' : 'var(--gold)', padding: '6px 15px', cursor: 'pointer', fontWeight: 700, fontSize: '0.6rem', letterSpacing: '1px' }}>{cat.toUpperCase()}</button>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {filteredCars.map((car) => (
            <motion.div key={car.id} className="car-card" onClick={() => setPage(`product-${car.id}`)} style={{ cursor: 'pointer' }}>
              <div className="car-image" style={{ backgroundImage: `url(${car.image})` }}>
                {car.status === 'loué' && <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', background: 'rgba(0,0,0,0.85)', color: 'var(--gold)', padding: '10px', fontSize: '0.65rem', fontWeight: 700, textAlign: 'center' }}>Disponible le {car.availableFrom}</div>}
              </div>
              <div style={{ padding: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px' }}>
                  <h3 style={{ fontSize: '1.2rem' }}>{car.name}</h3>
                  <span style={{ color: 'var(--gold)', fontSize: '0.6rem', border: '1px solid var(--gold)', padding: '2px 6px', fontWeight: 700 }}>{car.category}</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '20px', color: 'var(--text-secondary)', fontSize: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Zap size={12} color="var(--gold)"/> {car.transmission}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Fuel size={12} color="var(--gold)"/> {car.fuel}</div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-color)', paddingTop: '15px' }}>
                  <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--gold)' }}>{car.price} MAD <small style={{fontSize: '0.6rem', fontWeight: 400}}>/ J</small></span>
                  <button className="btn-primary" style={{ padding: '8px 16px', width: 'auto', fontSize: '0.65rem' }}>DÉTAILS</button>
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
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ paddingTop: '100px' }}>
      <div className="container">
        <button onClick={() => setPage('fleet')} style={{ background: 'transparent', border: 'none', color: 'var(--gold)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '30px', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '1px' }}><ArrowLeft size={16} /> RETOUR AU PARC</button>
        <div className="booking-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '40px' }}>
          <div>
            <div style={{ width: '100%', height: '350px', backgroundImage: `url(${car.image})`, backgroundSize: 'cover', backgroundPosition: 'center', border: '1px solid var(--border-color)', marginBottom: '30px' }}></div>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>{car.name}</h1>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '30px' }}>
                <span style={{ color: 'var(--gold)', border: '1px solid var(--gold)', padding: '4px 12px', fontWeight: 700, fontSize: '0.7rem' }}>{car.category.toUpperCase()}</span>
                {car.status === 'disponible' ? <span style={{ color: '#4CAF50', background: 'rgba(76, 175, 80, 0.1)', padding: '4px 12px', fontWeight: 700, fontSize: '0.7rem' }}>DISPONIBLE</span> : <span style={{ color: 'var(--gold)', background: 'rgba(212, 175, 55, 0.1)', padding: '4px 12px', fontWeight: 700, fontSize: '0.7rem' }}>DISPONIBLE LE {car.availableFrom}</span>}
            </div>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '40px' }}>{car.fullDescription}</p>
            <div style={{ background: 'var(--card-bg)', padding: '25px', border: '1px solid var(--border-color)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div><div style={{fontSize: '0.6rem', color: 'var(--gold)', fontWeight: 700, marginBottom: '5px'}}>MOTEUR</div><div style={{fontWeight: 600}}>{car.engine}</div></div>
                <div><div style={{fontSize: '0.6rem', color: 'var(--gold)', fontWeight: 700, marginBottom: '5px'}}>TRANSMISSION</div><div style={{fontWeight: 600}}>{car.transmission}</div></div>
                <div><div style={{fontSize: '0.6rem', color: 'var(--gold)', fontWeight: 700, marginBottom: '5px'}}>CARBURANT</div><div style={{fontWeight: 600}}>{car.fuel}</div></div>
                <div><div style={{fontSize: '0.6rem', color: 'var(--gold)', fontWeight: 700, marginBottom: '5px'}}>SHOWROOM</div><div style={{fontWeight: 600}}>Casablanca</div></div>
            </div>
          </div>
          <div style={{ position: 'sticky', top: '120px', background: 'var(--darker-bg)', border: '1px solid var(--gold)', padding: '30px', height: 'fit-content' }}>
                <div style={{ marginBottom: '30px' }}><span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '5px' }}>TARIF JOURNALIER</span><span style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--gold)' }}>{car.price} MAD</span></div>
                <div style={{ display: 'grid', gap: '15px', marginBottom: '30px' }}>
                    <div><label className="label-text" style={{ fontSize: '0.6rem' }}>DÉBUT DE LOCATION</label><input type="date" className="input-field" value={startDate} onChange={e => setStartDate(e.target.value)} /></div>
                    <div><label className="label-text" style={{ fontSize: '0.6rem' }}>FIN DE LOCATION</label><input type="date" className="input-field" value={endDate} onChange={e => setEndDate(e.target.value)} /></div>
                </div>
                {days > 0 && <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} style={{ padding: '20px', background: 'var(--card-bg)', border: '1px solid var(--border-color)', marginBottom: '30px', textAlign: 'center' }}><div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginBottom: '5px' }}>TOTAL POUR {days} JOURS</div><div style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--gold)' }}>{totalPrice} MAD</div></motion.div>}
                <button className="btn-primary" style={{ width: '100%', padding: '15px' }} onClick={() => setPage(`booking-${car.id}-${startDate}-${endDate}`)}>RÉSERVER MAINTENANT</button>
                <p style={{ textAlign: 'center', fontSize: '0.7rem', color: 'var(--text-secondary)', marginTop: '20px' }}>WhatsApp : +212 700 382 718</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

const Booking = ({ selectedCarId, start, end, cars }: { selectedCarId?: number, start?: string, end?: string, cars: Car[] }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', phone: '', startDate: start || '', endDate: end || '', carId: selectedCarId || 1 });
  const selectedCar = cars.find(c => c.id === Number(formData.carId)) || cars[0];
  const days = calculateDays(formData.startDate, formData.endDate);
  const total = days * selectedCar.price;

  const handleWhatsApp = () => {
    const message = `Bonjour CHAROKI CARS,%0A%0AJe souhaite réserver :%0A- *Véhicule* : ${selectedCar.name}%0A- *Période* : du ${formData.startDate} au ${formData.endDate} (${days} jours)%0A- *Total estimé* : ${total} MAD%0A%0A*Client* :%0A- *Nom* : ${formData.name}%0A- *Tél* : ${formData.phone}%0A%0AMerci !`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${message}`, '_blank');
  };

  return (
    <section style={{ paddingTop: '120px', minHeight: '100vh' }}>
      <div className="container">
        <div className="booking-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '30px' }}>
          <div style={{ background: 'var(--card-bg)', padding: '30px', border: '1px solid var(--border-color)' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Finaliser votre Réservation</h2>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '30px' }}>{[1, 2].map(s => (<div key={s} style={{ flex: 1, height: '3px', background: step >= s ? 'var(--gold)' : '#333' }}></div>))}</div>
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}>
                  <div style={{ display: 'grid', gap: '15px', marginBottom: '30px' }}>
                    <div><label className="label-text">DÉBUT</label><input type="date" className="input-field" value={formData.startDate} onChange={e => setFormData({...formData, startDate: e.target.value})} /></div>
                    <div><label className="label-text">FIN</label><input type="date" className="input-field" value={formData.endDate} onChange={e => setFormData({...formData, endDate: e.target.value})} /></div>
                  </div>
                  <button className="btn-primary" onClick={() => setStep(2)}>CONTINUER</button>
                </motion.div>
              )}
              {step === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}>
                  <div style={{ display: 'grid', gap: '15px', marginBottom: '30px' }}>
                    <input placeholder="NOM COMPLET" className="input-field" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                    <input placeholder="TÉLÉPHONE" className="input-field" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                  </div>
                  <button className="btn-primary" onClick={handleWhatsApp}>RÉSERVER SUR WHATSAPP</button>
                  <button style={{ width: '100%', background: 'transparent', border: 'none', color: '#555', marginTop: '15px', fontSize: '0.7rem' }} onClick={() => setStep(1)}>RETOUR</button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div style={{ background: 'var(--darker-bg)', border: '1px solid var(--border-color)', padding: '20px' }}>
              <div style={{ height: '120px', backgroundImage: `url(${selectedCar.image})`, backgroundSize: 'cover', backgroundPosition: 'center', marginBottom: '15px' }}></div>
              <h3 style={{ fontSize: '1.2rem' }}>{selectedCar.name}</h3>
              <div style={{ borderTop: '1px solid #222', paddingTop: '15px', marginTop: '15px', fontSize: '0.8rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}><span>Prix / Jour</span><span>{selectedCar.price} MAD</span></div>
                {days > 0 && <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: 'var(--gold)' }}><span>Total ({days} jours)</span><span>{total} MAD</span></div>}
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AdminDashboard = ({ cars, onUpdateCar, setPage }: { cars: Car[], onUpdateCar: (c: Car[]) => void, setPage: (p: string) => void }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [newCar, setNewCar] = useState<Partial<Car>>({ brand: '', name: '', price: 0, category: 'Citadine', status: 'disponible', image: '' });

  const handleAdd = () => {
    const carToAdd = { ...newCar, id: Date.now(), specs: ["Automatique", "5 Sièges"], engine: "1.5L", transmission: "Auto", fuel: "Diesel", details: "", fullDescription: "" } as Car;
    onUpdateCar([...cars, carToAdd]);
    setIsAdding(false);
  };

  const deleteCar = (id: number) => {
    if (confirm("Supprimer ce véhicule ?")) onUpdateCar(cars.filter(c => c.id !== id));
  };

  const toggleStatus = (id: number) => {
    const updated = cars.map(c => {
      if (c.id === id) {
        if (c.status === 'disponible') return { ...c, status: 'loué' as const, availableFrom: new Date(Date.now() + 7 * 86400000).toISOString().split('T')[0] };
        if (c.status === 'loué') return { ...c, status: 'archive' as const };
        return { ...c, status: 'disponible' as const, availableFrom: undefined };
      }
      return c;
    });
    onUpdateCar(updated);
  };

  return (
    <section style={{ paddingTop: '100px' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
          <h1 style={{ fontSize: '1.8rem' }}>Gestion <span className="gold-text">du Parc</span></h1>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button className="btn-primary" style={{ width: 'auto', background: '#333', color: 'white' }} onClick={() => setPage('home')}>SITE</button>
            <button className="btn-primary" style={{ width: 'auto' }} onClick={() => setIsAdding(true)}><Plus size={16} /> AJOUTER</button>
          </div>
        </div>
        {isAdding && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ background: 'var(--card-bg)', padding: '30px', marginBottom: '40px', border: '1px solid var(--gold)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '20px' }}>
              <input placeholder="Marque" className="input-field" onChange={e => setNewCar({...newCar, brand: e.target.value})} />
              <input placeholder="Modèle" className="input-field" onChange={e => setNewCar({...newCar, name: e.target.value})} />
              <input placeholder="Prix / Jour" type="number" className="input-field" onChange={e => setNewCar({...newCar, price: Number(e.target.value)})} />
              <input placeholder="Lien Image" className="input-field" onChange={e => setNewCar({...newCar, image: e.target.value})} />
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button className="btn-primary" onClick={handleAdd}>ENREGISTRER</button>
              <button style={{ background: 'transparent', border: 'none', color: '#555' }} onClick={() => setIsAdding(false)}>ANNULER</button>
            </div>
          </motion.div>
        )}
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', color: 'white', background: 'var(--card-bg)', fontSize: '0.85rem' }}>
            <thead>
              <tr style={{ textAlign: 'left', borderBottom: '2px solid #333' }}>
                <th style={{ padding: '15px' }}>VÉHICULE</th>
                <th style={{ padding: '15px' }}>PRIX</th>
                <th style={{ padding: '15px' }}>STATUT</th>
                <th style={{ padding: '15px', textAlign: 'right' }}>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {cars.map(car => (
                <tr key={car.id} style={{ borderBottom: '1px solid #222' }}>
                  <td style={{ padding: '15px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ width: '40px', height: '25px', backgroundImage: `url(${car.image})`, backgroundSize: 'cover' }}></div>
                      <div>{car.name}</div>
                    </div>
                  </td>
                  <td style={{ padding: '15px' }}>{car.price} MAD</td>
                  <td style={{ padding: '15px' }}>
                    <span onClick={() => toggleStatus(car.id)} style={{ cursor: 'pointer', padding: '3px 8px', fontSize: '0.6rem', fontWeight: 700, borderRadius: '2px', background: car.status === 'disponible' ? '#4CAF50' : (car.status === 'loué' ? 'var(--gold)' : '#333'), color: car.status === 'disponible' ? 'white' : 'black' }}>{car.status.toUpperCase()}</span>
                  </td>
                  <td style={{ padding: '15px', textAlign: 'right' }}>
                    <button onClick={() => deleteCar(car.id)} style={{ background: 'transparent', border: 'none', color: '#ff4444', cursor: 'pointer' }}><Trash2 size={16} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

const App = () => {
  const [page, setPage] = useState('home');
  const [cars, setCars] = useState<Car[]>(() => {
    const saved = localStorage.getItem('charoki_fleet');
    return saved ? JSON.parse(saved) : INITIAL_CARS;
  });

  useEffect(() => {
    localStorage.setItem('charoki_fleet', JSON.stringify(cars));
  }, [cars]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <div className="app">
      <Navbar activePage={page} setPage={setPage} onAdminClick={() => setPage('admin')} />
      <main>
        <AnimatePresence mode="wait">
          {page === 'home' && <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}><Home setPage={setPage} cars={cars} /></motion.div>}
          {page === 'fleet' && <motion.div key="fleet" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}><Fleet setPage={setPage} cars={cars} /></motion.div>}
          {page === 'contact' && <motion.div key="contact" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}><Contact /></motion.div>}
          {page === 'admin' && <motion.div key="admin" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}><AdminDashboard cars={cars} onUpdateCar={setCars} setPage={setPage} /></motion.div>}
          {page === 'booking' && <motion.div key="booking-gen" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}><Booking cars={cars} /></motion.div>}
          {page.startsWith('booking-') && <motion.div key="booking-car" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}><Booking cars={cars} selectedCarId={Number(page.split('-')[1])} start={page.split('-')[2]} end={page.split('-')[3]} /></motion.div>}
          {page.startsWith('product-') && <motion.div key="product" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}><ProductPage carId={Number(page.split('-')[1])} setPage={setPage} cars={cars} /></motion.div>}
        </AnimatePresence>
      </main>
      <footer style={{ padding: '40px 0', background: 'var(--darker-bg)', borderTop: '1px solid var(--border-color)', textAlign: 'center' }}>
        <div className="container">
          <div className="logo" style={{ fontSize: '1rem', fontWeight: 700, letterSpacing: '2px', marginBottom: '10px' }}>CHAROKI<span className="gold-text">CARS</span></div>
          <p style={{ color: '#444', fontSize: '0.7rem' }}>Casablanca, Gauthier • +212 700 382 718</p>
        </div>
      </footer>
    </div>
  );
};

const Contact = () => (
  <section style={{ paddingTop: '120px' }}>
    <div className="container">
      <SectionTitle title="Showroom Gauthier" subtitle="CASABLANCA" />
      <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ display: 'grid', gap: '30px', background: 'var(--card-bg)', padding: '40px', border: '1px solid var(--border-color)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', justifyContent: 'center' }}><Phone color="var(--gold)" /><span style={{ fontSize: '1.2rem', fontWeight: 700 }}>+212 700 382 718</span></div>
          <p style={{ color: 'var(--text-secondary)' }}>Notre showroom est ouvert du Lundi au Samedi de 09:00 à 20:00. Service client disponible 24/7 sur WhatsApp.</p>
          <button className="btn-primary" onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}`, '_blank')}>NOUS CONTACTER SUR WHATSAPP</button>
        </div>
      </div>
    </div>
  </section>
);

export default App;
