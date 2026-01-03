import React from 'react';
import HolographicCard from './HolographicCard';

const GlobeVisualizer = () => {
    return (
        <HolographicCard title="Global Supply Chain Vise" className="globe-container">
            <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'radial-gradient(circle at center, rgba(0, 240, 255, 0.1) 0%, transparent 70%)',
                position: 'relative'
            }}>
                {/* Placeholder for actual Globe - using a CSS sphere representation for now */}
                <div style={{
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    border: '1px solid rgba(0, 240, 255, 0.3)',
                    boxShadow: 'inset 0 0 50px rgba(0, 240, 255, 0.2)',
                    position: 'relative',
                    animation: 'spin 20s linear infinite'
                }}>
                    {/* Grid lines */}
                    <div style={{ position: 'absolute', top: '50%', left: 0, width: '100%', height: '1px', background: 'rgba(0, 240, 255, 0.2)' }}></div>
                    <div style={{ position: 'absolute', left: '50%', top: 0, height: '100%', width: '1px', background: 'rgba(0, 240, 255, 0.2)' }}></div>

                    <div style={{
                        position: 'absolute',
                        top: '40%',
                        left: '40%',
                        width: '10px',
                        height: '10px',
                        background: 'var(--neon-red)',
                        borderRadius: '50%',
                        boxShadow: '0 0 15px var(--neon-red)'
                    }}></div>
                </div>
            </div>
        </HolographicCard>
    );
};

export default GlobeVisualizer;
