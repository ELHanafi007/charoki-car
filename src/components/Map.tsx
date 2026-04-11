import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';

const Map: React.FC = () => {
  const mapUrl = "https://www.google.com/maps?q=33.370330810546875,-7.540477275848389&z=17&hl=en&t=m&output=embed";

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="map-container"
      style={{
        position: 'relative',
        height: '600px',
        width: '100%',
        borderRadius: '2px',
        overflow: 'hidden',
        boxShadow: '0 30px 60px rgba(0,0,0,0.1)',
        border: '1px solid var(--border)'
      }}
    >
      <iframe
        title="Charoki Cars Location"
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(90%)' }}
        allowFullScreen={true}
        loading="lazy"
      ></iframe>
      
      {/* Sophisticated Overlay */}
      <div style={{
        position: 'absolute',
        top: '40px',
        left: '40px',
        background: 'rgba(26, 26, 26, 0.95)',
        padding: '30px',
        color: '#fff',
        zIndex: 10,
        maxWidth: '300px',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(176, 141, 87, 0.3)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
          <div style={{ background: 'var(--accent)', padding: '10px' }}>
            <MapPin size={24} color="#fff" />
          </div>
          <div>
            <h4 style={{ fontSize: '0.65rem', letterSpacing: '0.2em', fontWeight: 700, opacity: 0.6, marginBottom: '5px' }}>VISITEZ NOTRE</h4>
            <span style={{ fontSize: '1.2rem', fontWeight: 500, fontFamily: 'var(--font-serif)' }}>SHOWROOM</span>
          </div>
        </div>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '25px' }}>
          Quartier Gauthier, Casablanca. <br />
          Un espace exclusif pour découvrir l'excellence automobile.
        </p>
        <button 
          onClick={() => window.open('https://maps.google.com?q=33.370330810546875,-7.540477275848389', '_blank')}
          style={{
            background: 'transparent',
            border: '1px solid var(--accent)',
            color: 'var(--accent)',
            padding: '12px 25px',
            fontSize: '0.65rem',
            fontWeight: 700,
            letterSpacing: '0.15em',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            transition: '0.3s'
          }}
          onMouseOver={(e) => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = '#fff'; }}
          onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--accent)'; }}
        >
          OBTENIR L'ITINÉRAIRE <Navigation size={14} />
        </button>
      </div>
    </motion.div>
  );
};

export default Map;
