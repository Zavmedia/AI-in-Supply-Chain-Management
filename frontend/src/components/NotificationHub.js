import React from 'react';
import HolographicCard from './HolographicCard';

const NotificationItem = ({ type, message, time }) => (
    <div style={{
        padding: '10px',
        borderLeft: `2px solid ${type === 'alert' ? 'var(--neon-red)' : 'var(--neon-cyan)'}`,
        background: 'rgba(0,0,0,0.3)',
        marginBottom: '10px'
    }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
            <span style={{ color: type === 'alert' ? 'var(--neon-red)' : 'var(--neon-cyan)', fontWeight: 'bold', fontSize: '12px' }}>
                {type === 'alert' ? 'WARNING' : 'INFO'}
            </span>
            <span style={{ color: 'var(--text-dim)', fontSize: '10px' }}>{time}</span>
        </div>
        <div style={{ fontSize: '12px', color: 'var(--text-main)' }}>{message}</div>
    </div>
);

const NotificationHub = () => {
    return (
        <HolographicCard title="Notification Hub">
            <NotificationItem type="alert" message="ETA Delay: Shipment #4892 (+12h)" time="10:42 AM" />
            <NotificationItem type="info" message="Route Optimisation Complete" time="10:30 AM" />
            <NotificationItem type="alert" message="Weather Alert: Typoon Sector 7" time="09:15 AM" />
            <NotificationItem type="info" message="Weekly Report Ready" time="08:00 AM" />
        </HolographicCard>
    );
};

export default NotificationHub;
