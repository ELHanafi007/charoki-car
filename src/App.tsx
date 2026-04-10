import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Clock, Phone, Instagram, Facebook, Twitter, type LucideProps, User, Settings, Star, CheckCircle, MapPin, Award, Zap, Briefcase } from 'lucide-react';

// --- DATA ---
const cars = [
  { 
    id: 1, 
    name: "Range Rover Vogue", 
    price: 2500, 
    category: "SUV", 
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c15d?auto=format&fit=crop&q=80&w=1000", 
    specs: ["Automatique", "5 Sièges", "V8 4.4L", "Showroom Casablanca"],
    details: "Le summum du luxe et de la puissance. Idéal pour vos déplacements à Casablanca et vos voyages longue distance."
  },
  { 
    id: 2, 
    name: "Porsche 911 Carrera", 
    price: 4500, 
    category: "Sport", 
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1000", 
    specs: ["Séquentielle", "2 Sièges", "Flat-6 Turbo", "Performance"],
    details: "Une icône de l'ingénierie allemande. Ressentez l'adrénaline pure sur les côtes marocaines."
  },
  { 
    id: 3, 
    name: "Mercedes Classe S", 
    price: 3500, 
    category: "Berline", 
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=1000", 
    specs: ["Automatique", "5 Sièges", "Chauffeur Disponible", "Confort VIP"],
    details: "L'élégance absolue pour vos rendez-vous d'affaires ou vos événements prestigieux."
  },
  { 
    id: 4, 
    name: "Audi RS6 Avant", 
    price: 4000, 
    category: "Sport", 
    image: "https://images.unsplash.com/photo-1606148664019-5963c1735768?auto=format&fit=crop&q=80&w=1000", 
    specs: ["Automatique", "5 Sièges", "Quattro V8", "Performance"],
    details: "Alliez praticité et sportivité extrême. Une voiture qui ne passe jamais inaperçue."
  },
  { 
    id: 5, 
    name: "BMW X7 M50i", 
    price: 3200, 
    category: "SUV", 
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=1000", 
    specs: ["Automatique", "7 Sièges", "Luxe Familial", "Espace"],
    details: "Le SUV le plus imposant de chez BMW. Confort royal pour toute la famille."
  },
  { 
    id: 6, 
    name: "Lamborghini Urus", 
    price: 8500, 
    category: "SUV", 
    image: "https://images.unsplash.com/photo-1544636331-e268592033c2?auto=format&fit=crop&q=80&w=1000", 
    specs: ["Automatique", "5 Sièges", "Supercar DNA", "Exclusivité"],
    details: "Le premier Super SUV au monde. Une expérience de conduite sans précédent à Casablanca."
  }
];

const testimonials = [
  { name: "Ahmed B.", role: "CEO, Tech Horizon", text: "Un service irréprochable. La Range Rover était impeccable et la livraison à l'aéroport était pile à l'heure." },
  { name: "Sarah L.", role: "Architecte d'intérieur", text: "Louer chez Charoki Cars a transformé mon séjour à Casablanca. Professionnalisme et discrétion absolue." },
  { name: "Marc D.", role: "Voyageur d'affaires", text: "La Mercedes Classe S avec chauffeur est le meilleur service que j'ai testé au Maroc. Je recommande vivement." }
];

const WHATSAPP_NUMBER = "+212700382718";

// --- REUSABLE COMPONENTS ---

const SectionTitle = ({ title, subtitle, centered = true }: { title: string, subtitle: string, centered?: boolean }) => (
  <div style={{ marginBottom: '80px', textAlign: centered ? 'center' : 'left' }}>
    <motion.span 
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      viewport={{ once: true }}
      style={{ color: 'var(--gold)', letterSpacing: '4px', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', display: 'block', marginBottom: '15px' }}
    >
      {subtitle}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }}
      style={{ fontSize: '3rem', fontWeight: 400 }}
    >
      {title}
    </motion.h2>
    <div style={{ width: '60px', height: '2px', background: 'var(--gold)', margin: centered ? '30px auto 0' : '30px 0 0' }}></div>
  </div>
);

// --- NAVIGATION ---

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
        <div className="logo" onClick={() => setPage('home')} style={{ fontSize: '1.8rem', fontWeight: 700, letterSpacing: '3px', cursor: 'pointer' }}>
          CHAROKI<span className="gold-text">CARS</span>
        </div>
        
        <div className="desktop-menu" style={{ display: 'flex', gap: '50px', alignItems: 'center' }}>
          {[
            { label: 'ACCUEIL', id: 'home' },
            { label: 'NOTRE PARC', id: 'fleet' },
            { label: 'SERVICES', id: 'services' },
            { label: 'CONTACT', id: 'contact' }
          ].map((item) => (
            <span 
              key={item.id} 
              onClick={() => setPage(item.id)}
              style={{ 
                color: activePage === item.id ? 'var(--gold)' : 'inherit', 
                cursor: 'pointer', 
                fontSize: '0.75rem', 
                fontWeight: 700,
                letterSpacing: '1.5px',
                transition: 'var(--transition)'
              }}
            >
              {item.label}
            </span>
          ))}
          <button className="btn-primary" onClick={() => setPage('booking')} style={{ padding: '12px 28px' }}>RÉSERVER</button>
        </div>
      </div>
    </nav>
  );
};

// --- PAGES ---

const Home = ({ setPage }: { setPage: (p: string) => void }) => (
  <>
    <section className="hero">
      <div className="container">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.2 }} style={{ maxWidth: '750px' }}>
          <motion.span 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.5 }}
            style={{ color: 'var(--gold)', letterSpacing: '6px', fontSize: '0.9rem', fontWeight: 700, display: 'block', marginBottom: '20px' }}
          >
            LOCATION DE PRESTIGE
          </motion.span>
          <h1 style={{ fontSize: '5.5rem', lineHeight: 1.1, marginBottom: '30px' }}>
            L'Art de <br /><span className="gold-text">Voyager</span> à Casablanca
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '50px', lineHeight: 1.8, maxWidth: '600px' }}>
            Plongez dans un univers d'exclusivité. Charoki Cars redéfinit la location de luxe avec une flotte d'exception et un service sur-mesure.
          </p>
          <div style={{ display: 'flex', gap: '25px' }}>
            <button className="btn-primary" onClick={() => setPage('fleet')}>DÉCOUVRIR LA FLOTTE</button>
            <button style={{ background: 'transparent', border: '1px solid var(--gold)', color: 'var(--gold)', padding: '16px 36px', fontWeight: 700, cursor: 'pointer', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem' }} onClick={() => setPage('contact')}>
              NOUS CONTACTER
            </button>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Featured Selection */}
    <section style={{ background: 'var(--darker-bg)' }}>
      <div className="container">
        <SectionTitle title="Sélection Exclusive" subtitle="NOTRE PARC" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px' }}>
          {cars.slice(0, 3).map((car, idx) => (
            <motion.div 
              key={car.id} 
              className="car-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <div className="car-image" style={{ backgroundImage: `url(${car.image})` }}></div>
              <div style={{ padding: '40px' }}>
                <span style={{ color: 'var(--gold)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '2px' }}>{car.category}</span>
                <h3 style={{ fontSize: '1.8rem', margin: '10px 0 20px' }}>{car.name}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '30px', height: '50px' }}>{car.details}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '30px', borderTop: '1px solid var(--border-color)' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'block' }}>À PARTIR DE</span>
                    <span style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--gold)' }}>{car.price} MAD <small style={{fontSize: '0.8rem', fontWeight: 400}}>/ J</small></span>
                  </div>
                  <button className="btn-primary" style={{ padding: '10px 20px', fontSize: '0.7rem' }} onClick={() => setPage(`booking-${car.id}`)}>RÉSERVER</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* How it Works */}
    <section>
      <div className="container">
        <SectionTitle title="Comment ça marche ?" subtitle="PROCESSUS" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '60px' }}>
          {[
            { icon: <Search />, title: "Sélectionnez", desc: "Choisissez le véhicule qui correspond à votre style et vos besoins parmi notre flotte d'exception." },
            { icon: <Calendar />, title: "Réservez", desc: "Fixez vos dates et validez votre demande en quelques secondes via notre plateforme." },
            { icon: <CheckCircle />, title: "Profitez", desc: "Récupérez vos clés à notre showroom ou faites-vous livrer où vous le souhaitez à Casablanca." }
          ].map((step, idx) => (
            <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: idx * 0.2 }}
                style={{ textAlign: 'center' }}
            >
              <div style={{ color: 'var(--gold)', marginBottom: '30px', background: 'rgba(212, 175, 55, 0.05)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 30px' }}>
                {React.cloneElement(step.icon as React.ReactElement, { size: 32 })}
              </div>
              <h3 style={{ marginBottom: '20px', fontSize: '1.5rem' }}>{step.title}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section style={{ background: 'var(--darker-bg)' }}>
      <div className="container">
        <SectionTitle title="La Voix de nos Clients" subtitle="TÉMOIGNAGES" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
          {testimonials.map((t, idx) => (
            <motion.div 
                key={idx} 
                style={{ background: 'var(--dark-bg)', padding: '50px', border: '1px solid var(--border-color)', position: 'relative' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
            >
              <div style={{ color: 'var(--gold)', display: 'flex', gap: '5px', marginBottom: '20px' }}>
                {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="var(--gold)" />)}
              </div>
              <p style={{ fontStyle: 'italic', marginBottom: '30px', color: 'var(--text-secondary)', lineHeight: 1.8 }}>"{t.text}"</p>
              <div>
                <span style={{ display: 'block', fontWeight: 700, fontSize: '1.1rem' }}>{t.name}</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '1px' }}>{t.role}</span>
              </div>
            </motion.div>
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
    <section style={{ paddingTop: '180px' }}>
      <div className="container">
        <SectionTitle title="L'Excellence Automobile" subtitle="NOTRE PARC" />
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '80px', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button 
                key={cat} 
                onClick={() => setFilter(cat)} 
                style={{ 
                    background: filter === cat ? 'var(--gold)' : 'transparent', 
                    border: '1px solid var(--gold)', 
                    color: filter === cat ? 'black' : 'var(--gold)', 
                    padding: '12px 35px', 
                    borderRadius: '0', 
                    cursor: 'pointer', 
                    fontWeight: 700, 
                    fontSize: '0.75rem',
                    letterSpacing: '2px',
                    transition: 'var(--transition)' 
                }}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '50px' }}>
          {filteredCars.map((car, idx) => (
            <motion.div key={car.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} className="car-card">
              <div className="car-image" style={{ backgroundImage: `url(${car.image})` }}>
                <div style={{ position: 'absolute', top: '20px', right: '20px', background: 'var(--gold)', color: 'black', padding: '5px 15px', fontWeight: 700, fontSize: '0.7rem' }}>DISPONIBLE</div>
              </div>
              <div style={{ padding: '40px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                  <h3 style={{ fontSize: '1.8rem' }}>{car.name}</h3>
                  <span style={{ color: 'var(--gold)', fontSize: '0.7rem', border: '1px solid var(--gold)', padding: '3px 10px', fontWeight: 700 }}>{car.category}</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '35px', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Zap size={16} color="var(--gold)"/> {car.specs[2]}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Settings size={16} color="var(--gold)"/> {car.specs[0]}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><User size={16} color="var(--gold)"/> {car.specs[1]}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Shield size={16} color="var(--gold)"/> Premium Plus</div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-color)', paddingTop: '30px' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--gold)' }}>{car.price} <span style={{ fontSize: '0.8rem', fontWeight: 400, color: 'white' }}>MAD/J</span></div>
                  <button className="btn-primary" style={{ padding: '12px 25px' }} onClick={() => setPage(`booking-${car.id}`)}>RÉSERVER</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Booking = ({ selectedCarId }: { selectedCarId?: number }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', startDate: '', endDate: '', carId: selectedCarId || 1 });

  const selectedCar = cars.find(c => c.id === Number(formData.carId)) || cars[0];

  const handleWhatsApp = () => {
    const message = `Bonjour CHAROKI CARS CASABLANCA,%0A%0AJe souhaite réserver :%0A- *Véhicule* : ${selectedCar.name}%0A- *Période* : du ${formData.startDate} au ${formData.endDate}%0A%0A*Client* :%0A- *Nom* : ${formData.name}%0A- *Email* : ${formData.email}%0A- *Tél* : ${formData.phone}%0A%0AMerci de me confirmer la disponibilité.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${message}`, '_blank');
  };

  return (
    <section style={{ paddingTop: '180px', minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '50px' }}>
          <div style={{ background: 'var(--card-bg)', padding: '60px', border: '1px solid var(--border-color)' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '40px' }}>Réservation <span className="gold-text">Prestige</span></h2>
            
            <div style={{ display: 'flex', gap: '20px', marginBottom: '50px' }}>
              {[1, 2].map(s => (
                <div key={s} style={{ flex: 1, height: '4px', background: step >= s ? 'var(--gold)' : '#333', transition: '0.5s' }}></div>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '40px' }}>
                    <div>
                      <label className="label-text">Date de Début</label>
                      <input type="date" className="input-field" value={formData.startDate} onChange={e => setFormData({...formData, startDate: e.target.value})} />
                    </div>
                    <div>
                      <label className="label-text">Date de Fin</label>
                      <input type="date" className="input-field" value={formData.endDate} onChange={e => setFormData({...formData, endDate: e.target.value})} />
                    </div>
                  </div>
                  <button className="btn-primary" style={{ width: '100%' }} onClick={() => setStep(2)}>CONTINUER</button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                  <div style={{ display: 'grid', gap: '30px', marginBottom: '40px' }}>
                    <input placeholder="NOM COMPLET" className="input-field" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                    <input placeholder="EMAIL" className="input-field" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                    <input placeholder="TÉLÉPHONE" className="input-field" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                  </div>
                  <div style={{ display: 'flex', gap: '20px' }}>
                    <button style={{ flex: 1, background: 'transparent', border: '1px solid #333', color: 'white', padding: '18px', fontWeight: 700, cursor: 'pointer', letterSpacing: '1px' }} onClick={() => setStep(1)}>RETOUR</button>
                    <button className="btn-primary" style={{ flex: 2 }} onClick={handleWhatsApp}>RÉSERVER VIA WHATSAPP</button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div>
            <div style={{ position: 'sticky', top: '200px' }}>
              <div style={{ background: 'var(--darker-bg)', border: '1px solid var(--border-color)', overflow: 'hidden' }}>
                <div style={{ height: '200px', backgroundImage: `url(${selectedCar.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <div style={{ padding: '40px' }}>
                  <span style={{ color: 'var(--gold)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '2px' }}>VÉHICULE SÉLECTIONNÉ</span>
                  <h3 style={{ fontSize: '1.8rem', margin: '15px 0' }}>{selectedCar.name}</h3>
                  <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '20px', marginTop: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                      <span style={{ color: 'var(--text-secondary)' }}>Prix / Jour</span>
                      <span style={{ fontWeight: 700 }}>{selectedCar.price} MAD</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-secondary)' }}>Assurance</span>
                      <span style={{ color: '#4CAF50', fontWeight: 700 }}>Incluse (Full)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section style={{ paddingTop: '180px' }}>
    <div className="container">
      <SectionTitle title="Nous Contacter" subtitle="SHOWROOM" />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '80px' }}>
        <div>
          <div style={{ marginBottom: '50px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '25px', color: 'var(--gold)' }}>COORDONNÉES</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
              <div style={{ display: 'flex', gap: '20px' }}>
                <MapPin color="var(--gold)" />
                <div>
                  <span style={{ display: 'block', fontWeight: 700 }}>Showroom Casablanca</span>
                  <span style={{ color: 'var(--text-secondary)' }}>Quartier Gauthier, Casablanca, Maroc</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '20px' }}>
                <Phone color="var(--gold)" />
                <div>
                  <span style={{ display: 'block', fontWeight: 700 }}>Téléphone & WhatsApp</span>
                  <span style={{ color: 'var(--text-secondary)' }}>+212 700 382 718</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '20px' }}>
                <Clock color="var(--gold)" />
                <div>
                  <span style={{ display: 'block', fontWeight: 700 }}>Disponibilité</span>
                  <span style={{ color: 'var(--text-secondary)' }}>Showroom: 09:00 - 20:00<br />Service Client: 24/7</span>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
             <div style={{ width: '50px', height: '50px', background: 'var(--card-bg)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><Instagram size={20} /></div>
             <div style={{ width: '50px', height: '50px', background: 'var(--card-bg)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><Facebook size={20} /></div>
             <div style={{ width: '50px', height: '50px', background: 'var(--card-bg)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><Twitter size={20} /></div>
          </div>
        </div>
        <div style={{ background: 'var(--card-bg)', padding: '60px', border: '1px solid var(--border-color)' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '30px' }}>Envoyez-nous un <span className="gold-text">Message</span></h3>
          <div style={{ display: 'grid', gap: '30px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
              <input placeholder="NOM" className="input-field" />
              <input placeholder="EMAIL" className="input-field" />
            </div>
            <input placeholder="SUJET" className="input-field" />
            <textarea placeholder="MESSAGE" className="input-field" style={{ minHeight: '150px', resize: 'vertical' }}></textarea>
            <button className="btn-primary" style={{ width: '200px' }}>ENVOYER</button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- APP ---

const App = () => {
  const [page, setPage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <div className="app">
      <Navbar activePage={page.startsWith('booking') ? 'booking' : page} setPage={setPage} />
      
      <main>
        <AnimatePresence mode="wait">
          {page === 'home' && <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}><Home setPage={setPage} /></motion.div>}
          {page === 'fleet' && <motion.div key="fleet" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}><Fleet setPage={setPage} /></motion.div>}
          {page === 'contact' && <motion.div key="contact" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}><Contact /></motion.div>}
          {page.startsWith('booking') && <motion.div key="booking" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}><Booking selectedCarId={page.includes('-') ? Number(page.split('-')[1]) : undefined} /></motion.div>}
        </AnimatePresence>
        
        {/* Why Us section for several pages */}
        {(page === 'home' || page === 'services') && (
          <section style={{ borderTop: '1px solid var(--border-color)' }}>
            <div className="container">
              <SectionTitle title="Pourquoi nous choisir ?" subtitle="EXCELLENCE" />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px' }}>
                {[
                  { icon: <Award />, title: "Service Conciergerie", desc: "Bien plus qu'une simple location, nous vous offrons une expérience VIP complète à chaque étape." },
                  { icon: <Shield />, title: "Discrétion Absolue", desc: "La confidentialité est au cœur de nos valeurs pour nos clients les plus exigeants." },
                  { icon: <Briefcase />, title: "Showroom en Centre-Ville", desc: "Idéalement situé au cœur de Casablanca pour une accessibilité maximale." }
                ].map((service, idx) => (
                  <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.2 }} style={{ textAlign: 'center' }}>
                    <div style={{ color: 'var(--gold)', marginBottom: '30px' }}>
                      {React.cloneElement(service.icon as React.ReactElement, { size: 40 })}
                    </div>
                    <h3 style={{ marginBottom: '20px', fontSize: '1.4rem' }}>{service.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>{service.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <footer style={{ padding: '100px 0 50px', background: 'var(--darker-bg)', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '80px', marginBottom: '80px' }}>
            <div>
              <div className="logo" style={{ fontSize: '1.8rem', fontWeight: 700, letterSpacing: '3px', marginBottom: '30px' }}>
                CHAROKI<span className="gold-text">CARS</span>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.8, maxWidth: '300px' }}>
                La référence de l'automobile de luxe à Casablanca. Nous offrons l'excellence à ceux qui ne transigent pas avec la qualité.
              </p>
            </div>
            <div>
              <h4 style={{ marginBottom: '30px', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '2px', fontWeight: 700, color: 'var(--gold)' }}>NAVIGATION</h4>
              <ul style={{ listStyle: 'none', color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <li onClick={() => setPage('home')} style={{ cursor: 'pointer' }}>Accueil</li>
                <li onClick={() => setPage('fleet')} style={{ cursor: 'pointer' }}>Notre Parc</li>
                <li onClick={() => setPage('contact')} style={{ cursor: 'pointer' }}>Showroom</li>
                <li onClick={() => setPage('booking')} style={{ cursor: 'pointer' }}>Réservation</li>
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: '30px', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '2px', fontWeight: 700, color: 'var(--gold)' }}>SHOWROOM</h4>
              <ul style={{ listStyle: 'none', color: 'var(--text-secondary)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <li>Casablanca, Gauthier</li>
                <li>+212 700 382 718</li>
                <li>contact@charokicars.ma</li>
                <li>Ouvert 24/7</li>
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: '30px', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '2px', fontWeight: 700, color: 'var(--gold)' }}>SUIVEZ-NOUS</h4>
              <div style={{ display: 'flex', gap: '20px' }}>
                <Instagram size={20} style={{ cursor: 'pointer' }} />
                <Facebook size={20} style={{ cursor: 'pointer' }} />
                <Twitter size={20} style={{ cursor: 'pointer' }} />
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '50px', color: '#555', fontSize: '0.8rem', letterSpacing: '1px' }}>
            &copy; 2024 CHAROKI CARS CASABLANCA. TOUS DROITS RÉSERVÉS.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
