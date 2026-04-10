import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Car, Calendar, MapPin, Shield, Clock, Phone, Instagram, Facebook, Twitter, ChevronRight, Menu, X, type LucideProps } from 'lucide-react';

const cars = [
  {
    name: "Range Rover Vogue",
    price: "2500 MAD",
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c15d?auto=format&fit=crop&q=80&w=1000",
    specs: ["Automatique", "5 Sièges", "Luxe"]
  },
  {
    name: "Porsche 911 Carrera",
    price: "4500 MAD",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1000",
    specs: ["Séquentielle", "2 Sièges", "Sport"]
  },
  {
    name: "Mercedes Classe S",
    price: "3500 MAD",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=1000",
    specs: ["Automatique", "5 Sièges", "Business"]
  }
];

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`glass-nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="logo" style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '2px' }}>
            LUXE<span className="gold-text">DRIVE</span> <span style={{fontSize: '0.8rem', fontWeight: 300}}>MAROC</span>
          </div>
          
          <div className="desktop-menu" style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
            {['Accueil', 'Notre Parc', 'Services', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} style={{ color: 'inherit', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>{item}</a>
            ))}
            <button className="btn-primary" style={{ padding: '10px 24px' }}>Réserver</button>
          </div>
          
          <div className="mobile-toggle" onClick={() => setMobileMenu(!mobileMenu)} style={{ display: 'none', cursor: 'pointer' }}>
             {mobileMenu ? <X /> : <Menu />}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="accueil">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            style={{ maxWidth: '600px' }}
          >
            <h1 style={{ fontSize: '4.5rem', lineHeight: 1.1, marginBottom: '20px' }}>
              L'Excellence <br /><span className="gold-text">Sur Mesure</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '40px', lineHeight: 1.6 }}>
              Découvrez notre collection exclusive de véhicules de prestige à Marrakech, Casablanca et Tanger. Voyagez avec élégance.
            </p>
            <div style={{ display: 'flex', gap: '20px' }}>
              <button className="btn-primary">Explorer le Parc</button>
              <button style={{ background: 'transparent', border: '1px solid white', color: 'white', padding: '14px 32px', fontWeight: 600, cursor: 'pointer' }}>
                Nous Contacter
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking Quick Form */}
      <div className="container" style={{ marginTop: '-60px', position: 'relative', zIndex: 10 }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{ background: 'var(--card-bg)', padding: '40px', borderRadius: '4px', border: '1px solid rgba(212, 175, 55, 0.3)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', boxShadow: '0 30px 60px rgba(0,0,0,0.5)' }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--gold)', marginBottom: '10px' }}><MapPin size={18} /> <span style={{fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase'}}>Ville</span></div>
            <select style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid #333', color: 'white', padding: '10px 0', outline: 'none' }}>
              <option>Marrakech</option>
              <option>Casablanca</option>
              <option>Tanger</option>
            </select>
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--gold)', marginBottom: '10px' }}><Calendar size={18} /> <span style={{fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase'}}>Départ</span></div>
            <input type="date" style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid #333', color: 'white', padding: '10px 0', outline: 'none' }} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--gold)', marginBottom: '10px' }}><Car size={18} /> <span style={{fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase'}}>Modèle</span></div>
            <select style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid #333', color: 'white', padding: '10px 0', outline: 'none' }}>
              <option>Tous les modèles</option>
              <option>SUV & 4x4</option>
              <option>Sport & Cabriolet</option>
            </select>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end' }}>
            <button className="btn-primary" style={{ width: '100%' }}>Rechercher</button>
          </div>
        </motion.div>
      </div>

      {/* Featured Fleet */}
      <section id="notre parc">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '15px' }}>Notre <span className="gold-text">Flotte Prestige</span></h2>
            <div style={{ width: '80px', height: '2px', background: 'var(--gold)', margin: '0 auto' }}></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
            {cars.map((car, idx) => (
              <motion.div 
                key={idx}
                className="car-card"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="car-image" style={{ backgroundImage: `url(${car.image})` }}></div>
                <div style={{ padding: '30px' }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{car.name}</h3>
                  <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
                    {car.specs.map(spec => (
                      <span key={spec} style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', border: '1px solid #333', padding: '4px 10px', borderRadius: '20px' }}>{spec}</span>
                    ))}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #222', paddingTop: '20px' }}>
                    <div>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Par jour</span>
                      <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--gold)' }}>{car.price}</div>
                    </div>
                    <button style={{ background: 'transparent', border: 'none', color: 'white', display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer', fontWeight: 600 }}>
                      Réserver <ChevronRight size={16} color="var(--gold)" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={{ background: 'var(--darker-bg)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '60px' }}>
            {[
              { icon: <Shield />, title: "Assurance Premium", desc: "Voyagez en toute sérénité avec notre couverture complète." },
              { icon: <Clock />, title: "Support 24/7", desc: "Une assistance dédiée disponible à tout moment, où que vous soyez." },
              { icon: <Phone />, title: "Chauffeur Privé", desc: "Profitez d'un service VIP avec nos chauffeurs professionnels." }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                style={{ textAlign: 'center' }}
              >
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

      {/* Footer */}
      <footer style={{ padding: '80px 0 40px', borderTop: '1px solid #111' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '60px', marginBottom: '60px' }}>
            <div>
              <div className="logo" style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '2px', marginBottom: '20px' }}>
                LUXE<span className="gold-text">DRIVE</span>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                Le leader de la location de voitures de luxe au Maroc. Excellence, discrétion et prestige.
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
            &copy; 2024 LUXEDRIVE MAROC. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
