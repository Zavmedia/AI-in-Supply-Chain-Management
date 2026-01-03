import React from 'react';
import HolographicCard from './HolographicCard';

const ActionButton = ({ text, type = 'primary' }) => (
    <button style={{
        background: 'transparent',
        border: `1px solid ${type === 'primary' ? 'var(--neon-cyan)' : 'var(--neon-red)'}`,
        color: type === 'primary' ? 'var(--neon-cyan)' : 'var(--neon-red)',
        padding: '5px 15px',
        borderRadius: '15px',
        cursor: 'pointer',
        fontFamily: 'var(--font-tech)',
        fontSize: '10px',
        textTransform: 'uppercase',
        marginLeft: '5px',
        boxShadow: `0 0 5px ${type === 'primary' ? 'var(--neon-cyan)' : 'var(--neon-red)'}`
    }}>
        {text}
    </button>
);

const IntelligenceItem = ({ title, desc }) => (
    <div style={{ marginBottom: '20px' }}>
        <h4 style={{ color: 'white', marginBottom: '5px', fontSize: '14px' }}>{title}</h4>
        <p style={{ color: 'var(--text-dim)', fontSize: '11px', marginBottom: '10px' }}>{desc}</p>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <ActionButton text="Reject" type="danger" />
            <ActionButton text="Confirm" type="primary" />
        </div>
    </div>
);

const ActionableIntelligence = () => {
    return (
        <HolographicCard title="Actionable Intelligence">
            <IntelligenceItem
                title="Optimize Route for freighter SV-303"
                desc="Impact: saves 4h transit time and 1200kg fuel. High confidence (98%)."
            />
            <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', margin: '15px 0' }}></div>
            <IntelligenceItem
                title="Reorder SKU-992 from Backup Supplier"
                desc="Primary supplier facing 3-day backlog. Risk of stockout detected."
            />
        </HolographicCard>
    );
};

export default ActionableIntelligence;
