import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Car, Calendar, MapPin, Shield, Clock, Phone, Instagram, Facebook, Twitter, ChevronRight, Menu, X, type LucideProps, Search, Star, User, Settings, Info } from 'lucide-react';

// --- DATA ---
const cars = [
  { id: 1, name: "Range Rover Vogue", price: 2500, category: "SUV", image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c15d?auto=format&fit=crop&q=80&w=1000", specs: ["Automatique", "5 Sièges", "Luxe"] },
  { id: 2, name: "Porsche 911 Carrera", price: 4500, category: "Sport", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1000", specs: ["Séquentielle", "2 Sièges", "Sport"] },
  { id: 3, name: "Mercedes Classe S", price: 3500, category: "Berline", image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=1000", specs: ["Automatique", "5 Sièges", "Business"] },
  { id: 4, name: "Audi RS6 Avant", price: 4000, category: "Sport", image: "https://images.unsplash.com/photo-1606148664019-5963c1735768?auto=format&fit=crop&q=80&w=1000", specs: ["Automatique", "5 Sièges", "Performance"] },
  { id: 5, name: "BMW X7 M50i", price: 3200, category: "SUV", image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=1000", specs: ["Automatique", "7 Sièges", "Luxe Famille"] },
  { id: 6, name: "Lamborghini Urus", price: 8500, category: "SUV", image: "https://images.unsplash.com/photo-1544636331-e268592033c2?auto=format&fit=crop&q=80&w=1000", specs: ["Automatique", "5 Sièges", "Super SUV"] }
];

const cities = ["Marrakech", "Casablanca", "Tanger", "Agadir", "Rabat"];

// --- COMPONENTS ---

const Navbar = ({ activePage, setPage }: { activePage: string, setPage: (p: string) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`glass-nav ${isScrolled || activePage !== 'home' ? 'scrolled' : ''}`}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="logo" onClick={() => setPage('home')} style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '2px', cursor: 'pointer' }}>
          CHAROKI<span className="gold-text">CARS</span> <span style={{fontSize: '0.8rem', fontWeight: 300}}>MAROC</span>
        </div>
        
        <div className="desktop-menu" style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
          {[
            { label: 'Accueil', id: 'home' },
            { label: 'Notre Parc', id: 'fleet' },
            { label: 'Services', id: 'services' },
            { label: 'Contact', id: 'contact' }
          ].map((item) => (
            <span 
              key={item.id} 
              onClick={() => setPage(item.id)}
              style={{ 
                color: activePage === item.id ? 'var(--gold)' : 'inherit', 
                cursor: 'pointer', 
                fontSize: '0.9rem', 
                fontWeight: 500,
                transition: 'var(--transition)'
              }}
            >
              {item.label}
            </span>
          ))}
          <button className="btn-primary" onClick={() => setPage('booking')} style={{ padding: '10px 24px' }}>Réserver</button>
        </div>
      </div>
    </nav>
  );
};

const Home = ({ setPage }: { setPage: (p: string) => void }) => (
  <>
    <section className="hero">
      <div className="container">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} style={{ maxWidth: '600px' }}>
          <h1 style={{ fontSize: '4.5rem', lineHeight: 1.1, marginBottom: '20px' }}>
            L'Excellence <br /><span className="gold-text">Sur Mesure</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '40px', lineHeight: 1.6 }}>
            Découvrez notre collection exclusive de véhicules de prestige au Maroc. Voyagez avec élégance.
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <button className="btn-primary" onClick={() => setPage('fleet')}>Explorer le Parc</button>
            <button style={{ background: 'transparent', border: '1px solid white', color: 'white', padding: '14px 32px', fontWeight: 600, cursor: 'pointer' }}>
              Nous Contacter
            </button>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Featured Preview */}
    <section>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem' }}>Sélection <span className="gold-text">Exclusive</span></h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
          {cars.slice(0, 3).map((car) => (
            <div key={car.id} className="car-card">
              <div className="car-image" style={{ backgroundImage: `url(${car.image})` }}></div>
              <div style={{ padding: '25px' }}>
                <h3>{car.name}</h3>
                <div style={{ margin: '15px 0', color: 'var(--gold)', fontWeight: 700 }}>{car.price} MAD / Jour</div>
                <button className="btn-primary" style={{ width: '100%' }} onClick={() => setPage('booking')}>Détails & Réservation</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

const Fleet = ({ setPage }: { setPage: (p: string) => void }) => {
  const [filter, setFilter] = useState('Tous');
  const categories = ['Tous', 'SUV', 'Sport', 'Berline'];
  
  const filteredCars = filter === 'Tous' ? cars : cars.filter(c => c.category === filter);

  return (
    <section style={{ paddingTop: '150px' }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '40px' }}>Notre <span className="gold-text">Flotte de Prestige</span></h1>
          
          {/* Filters */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '60px' }}>
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  background: filter === cat ? 'var(--gold)' : 'transparent',
                  border: '1px solid var(--gold)',
                  color: filter === cat ? 'black' : 'var(--gold)',
                  padding: '10px 25px',
                  borderRadius: '30px',
                  cursor: 'pointer',
                  fontWeight: 600,
                  transition: 'var(--transition)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
            {filteredCars.map((car, idx) => (
              <motion.div 
                key={car.id} 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="car-card"
              >
                <div className="car-image" style={{ backgroundImage: `url(${car.image})` }}></div>
                <div style={{ padding: '30px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                    <h3>{car.name}</h3>
                    <span style={{ color: 'var(--gold)', fontSize: '0.8rem', border: '1px solid var(--gold)', padding: '2px 8px' }}>{car.category}</span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '25px', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><User size={14}/> {car.specs[1]}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Settings size={14}/> {car.specs[0]}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Clock size={14}/> 24/7 Support</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Shield size={14}/> Assurance Incluse</div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontSize: '1.2rem', fontWeight: 700 }}>{car.price} <span style={{ fontSize: '0.8rem', fontWeight: 400 }}>MAD/J</span></div>
                    <button className="btn-primary" onClick={() => setPage('booking')}>Réserver</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Booking = () => {
  const [step, setStep] = useState(1);
  
  return (
    <section style={{ paddingTop: '150px', minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ background: 'var(--card-bg)', padding: '50px', borderRadius: '4px', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
          <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '40px' }}>Réserver <span className="gold-text">Votre Véhicule</span></h2>
          
          {/* Progress Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '50px', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '15px', left: 0, width: '100%', height: '1px', background: '#333', zIndex: 0 }}></div>
            {[1, 2, 3].map(s => (
              <div key={s} style={{ 
                width: '30px', height: '30px', borderRadius: '50%', background: step >= s ? 'var(--gold)' : '#111', 
                color: step >= s ? 'black' : 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', 
                zIndex: 1, fontWeight: 700, fontSize: '0.8rem', border: '1px solid var(--gold)'
              }}>
                {s}
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '10px', fontSize: '0.8rem', color: 'var(--gold)' }}>VILLE DE DÉPART</label>
                    <select style={{ width: '100%', background: '#000', border: '1px solid #333', color: 'white', padding: '15px' }}>
                      {cities.map(c => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '10px', fontSize: '0.8rem', color: 'var(--gold)' }}>VÉHICULE SOUHAITÉ</label>
                    <select style={{ width: '100%', background: '#000', border: '1px solid #333', color: 'white', padding: '15px' }}>
                      {cars.map(c => <option key={c.id}>{c.name}</option>)}
                    </select>
                  </div>
                </div>
                <button className="btn-primary" style={{ width: '100%' }} onClick={() => setStep(2)}>Continuer</button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '10px', fontSize: '0.8rem', color: 'var(--gold)' }}>DATE DE DÉBUT</label>
                    <input type="date" style={{ width: '100%', background: '#000', border: '1px solid #333', color: 'white', padding: '15px' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '10px', fontSize: '0.8rem', color: 'var(--gold)' }}>DATE DE FIN</label>
                    <input type="date" style={{ width: '100%', background: '#000', border: '1px solid #333', color: 'white', padding: '15px' }} />
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <button style={{ flex: 1, background: 'transparent', border: '1px solid #333', color: 'white', padding: '15px' }} onClick={() => setStep(1)}>Retour</button>
                  <button className="btn-primary" style={{ flex: 2 }} onClick={() => setStep(3)}>Détails du Client</button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <div style={{ display: 'grid', gap: '20px', marginBottom: '30px' }}>
                  <input placeholder="Nom Complet" style={{ width: '100%', background: '#000', border: '1px solid #333', color: 'white', padding: '15px' }} />
                  <input placeholder="Email" style={{ width: '100%', background: '#000', border: '1px solid #333', color: 'white', padding: '15px' }} />
                  <input placeholder="Téléphone" style={{ width: '100%', background: '#000', border: '1px solid #333', color: 'white', padding: '15px' }} />
                </div>
                <button className="btn-primary" style={{ width: '100%' }} onClick={() => alert('Réservation envoyée ! Nous vous contacterons sous peu.')}>Confirmer la Réservation</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

// --- MAIN APP ---

const App = () => {
  const [page, setPage] = useState('home');

  return (
    <div className="app">
      <Navbar activePage={page} setPage={setPage} />
      
      <main>
        {page === 'home' && <Home setPage={setPage} />}
        {page === 'fleet' && <Fleet setPage={setPage} />}
        {page === 'booking' && <Booking />}
        
        {/* Common sections for some pages */}
        {(page === 'home' || page === 'services') && (
          <section id="services" style={{ background: 'var(--darker-bg)' }}>
            <div className="container">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '60px' }}>
                {[
                  { icon: <Shield />, title: "Assurance Premium", desc: "Voyagez en toute sérénité avec notre couverture complète." },
                  { icon: <Clock />, title: "Support 24/7", desc: "Une assistance dédiée disponible à tout moment, où que vous soyez." },
                  { icon: <Phone />, title: "Chauffeur Privé", desc: "Profitez d'un service VIP avec nos chauffeurs professionnels." }
                ].map((service, idx) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.2 }} style={{ textAlign: 'center' }}>
                    <div style={{ color: 'var(--gold)', marginBottom: '20px', display: 'inline-block' }}>
                      {React.cloneElement(service.icon as React.ReactElement<LucideProps>, { size: 40 })}
                    </div>
                    <h3 style={{ marginBottom: '15px' }}>{service.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{service.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <footer style={{ padding: '80px 0 40px', borderTop: '1px solid #111' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '60px', marginBottom: '60px' }}>
            <div>
              <div className="logo" style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '2px', marginBottom: '20px' }}>
                CHAROKI<span className="gold-text">CARS</span>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                L'excellence de la location de voitures de luxe au Maroc. Voyagez avec élégance.
              </p>
            </div>
            <div>
              <h4 style={{ marginBottom: '20px', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>Villes</h4>
              <ul style={{ listStyle: 'none', color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li>Marrakech</li>
                <li>Casablanca</li>
                <li>Tanger</li>
                <li>Agadir</li>
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: '20px', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>Suivez-nous</h4>
              <div style={{ display: 'flex', gap: '20px' }}>
                <Instagram size={20} />
                <Facebook size={20} />
                <Twitter size={20} />
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', borderTop: '1px solid #111', paddingTop: '40px', color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
            &copy; 2024 CHAROKI CARS MAROC. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
