import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, MapPin, Star, ChevronDown } from 'lucide-react';
import { useCars } from '../context/CarContext';
import SectionTitle from '../components/SectionTitle';
import CarCard from '../components/CarCard';
import { TESTIMONIALS, FAQS } from '../data/constants';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section className="premium-hero" style={{ height: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#000' }}>
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 2, ease: "easeOut" }}
        style={{ 
          position: 'absolute', 
          inset: 0, 
          backgroundImage: `url(https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=2070)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} 
      />
      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="hero-title serif" style={{ color: '#fff', fontSize: 'clamp(4rem, 12vw, 10rem)', lineHeight: 0.9, marginBottom: '40px' }}>
            CHAROKI <br /> <span style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--accent)' }}>CARS</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 50px', fontWeight: 300, letterSpacing: '0.05em' }}>
            L'excellence de la mobilité premium à Casablanca. <br /> Redécouvrez le voyage avec notre collection exclusive.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
             <Link to="/fleet" className="btn-primary" style={{ padding: '22px 50px', background: 'var(--accent)', color: '#fff', border: 'none', textDecoration: 'none' }}>{t('hero.browse')}</Link>
             <Link to="/contact" className="btn-outline" style={{ padding: '22px 50px', border: '1px solid #fff', color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: '0.65rem', letterSpacing: '0.25em' }}>{t('hero.contact')}</Link>
          </div>
        </motion.div>
      </div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}
      >
        <span style={{ fontSize: '0.6rem', letterSpacing: '0.3em', opacity: 0.5 }}>SCROLL</span>
        <div style={{ width: '1px', height: '60px', background: 'linear-gradient(to bottom, var(--accent), transparent)' }}></div>
      </motion.div>
    </section>
  );
};

const Home: React.FC = () => {
  const { t } = useTranslation();
  const { cars } = useCars();

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Hero />

      <section style={{ padding: '140px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
            <div>
              <SectionTitle title={t('sections.excellence')} subtitle={t('sections.vision')} centered={false} />
              <p style={{ marginBottom: '35px', fontSize: '1.1rem' }}>CHAROKI CARS redéfinit les standards de la location premium au Maroc, avec un parc exclusif et un service sur-mesure.</p>
              <div style={{ display: 'grid', gap: '30px' }}>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <ShieldCheck color="var(--accent)" size={28} />
                  <div><h4 style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', marginBottom: '5px' }}>SÉRÉNITÉ</h4><p style={{ fontSize: '0.9rem' }}>Assurance tous risques et assistance 24/7 incluse.</p></div>
                </div>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <MapPin color="var(--accent)" size={28} />
                  <div><h4 style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', marginBottom: '5px' }}>LIVRAISON</h4><p style={{ fontSize: '0.9rem' }}>Aéroport, domicile ou bureau selon vos besoins.</p></div>
                </div>
              </div>
            </div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ position: 'relative', padding: '20px' }}>
              <img src="https://images.unsplash.com/photo-1469033092076-096ff723f901?auto=format&fit=crop&q=80&w=1000" style={{ width: '100%', position: 'relative', zIndex: 1, boxShadow: '0 10px 40px rgba(0,0,0,0.04)' }} alt="Luxury Interior" />
            </motion.div>
          </div>
        </div>
      </section>

      <section style={{ padding: '140px 0', background: 'var(--bg-secondary)' }}>
        <div className="container">
          <SectionTitle title={t('sections.fleet_title')} subtitle={t('sections.fleet_subtitle')} />
          <div className="grid-3">
            {cars.slice(0, 3).map(car => <CarCard key={car.id} car={car} />)}
          </div>
          <div style={{ textAlign: 'center', marginTop: '70px' }}>
            <Link to="/fleet" className="btn-outline" style={{ border: '1px solid #000', padding: '15px 40px', textDecoration: 'none', color: '#000', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em' }}>VOIR TOUTE LA COLLECTION</Link>
          </div>
        </div>
      </section>

      <section style={{ padding: '140px 0' }}>
        <div className="container">
          <SectionTitle title={t('sections.testimonials')} subtitle="TEMOIGNAGES" />
          <div className="grid-3" style={{ gap: '40px' }}>
            {TESTIMONIALS.map(t => (
              <div key={t.id} style={{ textAlign: 'center', padding: '40px', background: 'var(--bg-secondary)', borderRadius: '2px' }}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '25px' }}>
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={12} fill="var(--accent)" color="var(--accent)" />)}
                </div>
                <p className="serif" style={{ fontSize: '1.4rem', fontStyle: 'italic', color: 'var(--text-primary)', marginBottom: '30px', lineHeight: 1.5 }}>"{t.content}"</p>
                <div style={{ fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>{t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '140px 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <SectionTitle title="FAQ" subtitle={t('sections.faq')} />
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
    </motion.div>
  );
};

export default Home;
