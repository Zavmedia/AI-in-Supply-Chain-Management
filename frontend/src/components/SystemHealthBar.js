import React from 'react';
import HolographicCard from './HolographicCard';

const Gauge = ({ value, label, color }) => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 10px' }}>
        <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            border: `3px solid rgba(255,255,255,0.1)`,
            borderTop: `3px solid ${color}`,
            borderRight: `3px solid ${color}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: 'rotate(-45deg)',
            boxShadow: `0 0 10px ${color}`
        }}>
            <span style={{ transform: 'rotate(45deg)', color: 'white', fontWeight: 'bold' }}>{value}%</span>
        </div>
        <span style={{ marginTop: '5px', fontSize: '10px', color: 'var(--text-dim)', textTransform: 'uppercase' }}>{label}</span>
    </div>
);

const SystemHealthBar = () => {
    return (
        <HolographicCard title="System Health" className="health-bar" noPadding>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '100%', padding: '10px' }}>
                <Gauge value={98} label="Network" color="var(--neon-cyan)" />
                <Gauge value={85} label="Model Sts" color="var(--neon-blue)" />
                <Gauge value={100} label="Security" color="var(--neon-cyan)" />
            </div>
        </HolographicCard>
    );
};

export default SystemHealthBar;
