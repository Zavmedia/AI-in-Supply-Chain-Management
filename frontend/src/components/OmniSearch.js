import React, { useState } from 'react';

const OmniSearch = () => {
    const [query, setQuery] = useState('');

    return (
        <div style={{
            gridColumn: '2 / 3',
            alignSelf: 'center',
            position: 'relative',
            zIndex: 10
        }}>
            <div style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                background: 'rgba(0, 0, 0, 0.6)',
                border: '1px solid var(--neon-cyan)',
                borderRadius: '30px',
                padding: '10px 25px',
                boxShadow: '0 0 15px rgba(0, 240, 255, 0.2)'
            }}>
                <span style={{ color: 'var(--neon-cyan)', marginRight: '10px' }}>OMNI-SEARCH:</span>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Show me all shipments at risk of a 48h delay..."
                    style={{
                        background: 'transparent',
                        border: 'none',
                        color: 'white',
                        fontFamily: 'var(--font-tech)',
                        fontSize: '16px',
                        width: '100%',
                        outline: 'none'
                    }}
                />
                <div style={{
                    width: '10px',
                    height: '10px',
                    background: 'var(--neon-cyan)',
                    borderRadius: '50%',
                    boxShadow: '0 0 10px var(--neon-cyan)'
                }}></div>
            </div>
        </div>
    );
};

export default OmniSearch;
