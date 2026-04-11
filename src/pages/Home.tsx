import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, MapPin, Star, ChevronDown } from 'lucide-react';
import { useCars } from '../context/CarContext';
import SectionTitle from '../components/SectionTitle';
import CarCard from '../components/CarCard';
import { TESTIMONIALS, FAQS } from '../data/constants';

const MaskHero: React.FC = () => {
  const { t } = useTranslation();
  const mouseX = useMotionValue(50);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const p = (e.clientX / window.innerWidth) * 100;
      mouseX.set(p);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX]);

  const [clipPath, setClipPath] = useState('inset(0 0 0 50%)');
  useEffect(() => {
    return springX.on("change", (latest) => {
      setClipPath(`inset(0 0 0 ${latest}%)`);
    });
  }, [springX]);

  return (
    <section className="mask-hero">
      <div className="hero-layer layer-base">
        <div className="container hero-content-wrapper">
          <motion.h1 initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }} className="hero-title text-black serif">
            CHAROKI <br /> <span style={{ fontStyle: 'italic', fontWeight: 300 }}>CARS</span>
          </motion.h1>
          <div style={{ marginTop: '40px', display: 'flex', gap: '20px', justifyContent: 'center' }}>
             <Link to="/fleet" className="btn-primary" style={{ textDecoration: 'none' }}>{t('hero.browse')}</Link>
             <Link to="/contact" className="btn-outline" style={{ border: '1px solid #000', padding: '20px 45px', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.25em', textDecoration: 'none', color: '#000' }}>{t('hero.contact')}</Link>
          </div>
        </div>
      </div>

      <div className="hero-layer layer-overlay" style={{ 
        backgroundImage: `url(https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=2070)`,
        clipPath: clipPath
      }}>
        <div className="container hero-content-wrapper">
          <h1 className="hero-title text-reveal serif">
            CHAROKI <br /> <span style={{ fontStyle: 'italic', fontWeight: 300 }}>CARS</span>
          </h1>
          <div style={{ marginTop: '40px', display: 'flex', gap: '20px', justifyContent: 'center' }}>
             <Link to="/fleet" className="btn-primary" style={{ background: '#fff', color: '#000', textDecoration: 'none' }}>{t('hero.browse')}</Link>
             <Link to="/contact" className="btn-outline" style={{ borderColor: '#fff', color: '#fff', border: '1px solid #fff', padding: '20px 45px', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.25em', textDecoration: 'none' }}>{t('hero.contact')}</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const Home: React.FC = () => {
  const { t } = useTranslation();
  const { cars } = useCars();

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <MaskHero />

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
