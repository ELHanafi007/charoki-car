import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  centered?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, centered = true }) => (
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

export default SectionTitle;
