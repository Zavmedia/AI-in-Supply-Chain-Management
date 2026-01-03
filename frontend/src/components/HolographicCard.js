import React from 'react';
import '../index.css';

const HolographicCard = ({ title, children, className = '', noPadding = false }) => {
    return (
        <div className={`holo-card ${className}`} style={{
            background: 'var(--bg-panel)',
            border: 'var(--border-tech)',
            boxShadow: '0 0 15px rgba(0, 240, 255, 0.05)',
            backdropFilter: 'var(--glass-blur)',
            borderRadius: '8px',
            position: 'relative',
            overflow: 'hidden',
            padding: noPadding ? '0' : '20px',
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
        }}>
            {/* Decorative corners */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '20px', height: '20px', borderTop: '2px solid var(--neon-cyan)', borderLeft: '2px solid var(--neon-cyan)', borderTopLeftRadius: '8px' }}></div>
            <div style={{ position: 'absolute', top: 0, right: 0, width: '20px', height: '20px', borderTop: '2px solid var(--neon-cyan)', borderRight: '2px solid var(--neon-cyan)', borderTopRightRadius: '8px' }}></div>
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '20px', height: '20px', borderBottom: '2px solid var(--neon-cyan)', borderLeft: '2px solid var(--neon-cyan)', borderBottomLeftRadius: '8px' }}></div>
            <div style={{ position: 'absolute', bottom: 0, right: 0, width: '20px', height: '20px', borderBottom: '2px solid var(--neon-cyan)', borderRight: '2px solid var(--neon-cyan)', borderBottomRightRadius: '8px' }}></div>

            {title && (
                <div style={{
                    color: 'var(--neon-cyan)',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    fontSize: '14px',
                    marginBottom: '15px',
                    borderBottom: '1px solid rgba(0, 240, 255, 0.1)',
                    paddingBottom: '10px',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <span style={{ marginRight: '10px' }}>◈</span> {title}
                </div>
            )}

            <div style={{ flex: 1, overflow: 'auto' }}>
                {children}
            </div>
        </div>
    );
};

export default HolographicCard;
