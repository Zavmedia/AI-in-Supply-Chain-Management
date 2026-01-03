import React from 'react';
import HolographicCard from './HolographicCard';

const CommandHistory = () => {
    return (
        <HolographicCard title="Command History">
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '12px', color: 'var(--text-dim)' }}>
                <li style={{ marginBottom: '8px' }}>
                    <span style={{ color: 'var(--neon-cyan)' }}>◈</span> Route optimization loop started [User: ADMIN]
                </li>
                <li style={{ marginBottom: '8px' }}>
                    <span style={{ color: 'var(--neon-blue)' }}>◈</span> Fleet status update requested
                </li>
                <li style={{ marginBottom: '8px' }}>
                    <span style={{ color: 'var(--neon-cyan)' }}>◈</span> Data ingestion complete: Node 448
                </li>
            </ul>
        </HolographicCard>
    );
};

export default CommandHistory;
