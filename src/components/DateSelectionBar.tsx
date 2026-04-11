import React from 'react';
import { Calendar } from 'lucide-react';

interface DateSelectionBarProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const DateSelectionBar: React.FC<DateSelectionBarProps> = ({ label, value, onChange }) => {
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <label style={{ 
        display: 'block', 
        fontSize: '0.65rem', 
        fontWeight: 800, 
        letterSpacing: '0.15em', 
        marginBottom: '12px',
        color: 'var(--text-secondary)'
      }}>
        {label.toUpperCase()}
      </label>
      <div style={{ 
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        background: 'var(--bg-secondary)',
        border: '1px solid var(--border)',
        padding: '18px 25px',
        transition: '0.3s ease',
      }}
      onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--accent)'}
      onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
      >
        <Calendar size={18} style={{ marginRight: '15px', color: 'var(--accent)' }} />
        <input 
          type="date" 
          value={value} 
          onChange={(e) => onChange(e.target.value)}
          style={{ 
            background: 'transparent',
            border: 'none',
            outline: 'none',
            fontSize: '0.95rem',
            fontWeight: 600,
            width: '100%',
            color: 'var(--text-primary)',
            fontFamily: 'inherit'
          }}
        />
      </div>
    </div>
  );
};

export default DateSelectionBar;
