import React, { useEffect, useState } from 'react';
import HolographicCard from './HolographicCard';

const RealTimeLog = () => {
    const [logs, setLogs] = useState([
        "INITIALIZING_AI_CORE...",
        "CONNECTING_TO_SATELLITE_UPLINK... OK",
        "LOADING_PREDICTIVE_MODELS... [XGBOOST, PROPHET] OK",
        "SCANNING_GLOBAL_SUPPLY_NODES... 4502 NODES FOUND",
        "DETECTING_ANOMALIES... NONE",
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            const newLog = `LOG_ENTRY_${Math.floor(Math.random() * 10000)}: DATA_PACKET_RECEIVED [${new Date().toLocaleTimeString()}]`;
            setLogs(prev => [newLog, ...prev.slice(0, 15)]);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <HolographicCard title="Real-Time AI Logs">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', fontFamily: 'monospace', fontSize: '12px' }}>
                {logs.map((log, i) => (
                    <div key={i} style={{
                        color: i === 0 ? 'var(--neon-cyan)' : 'var(--text-dim)',
                        opacity: 1 - (i * 0.05),
                        textShadow: i === 0 ? '0 0 5px var(--neon-cyan)' : 'none'
                    }}>
            > {log}
                    </div>
                ))}
            </div>
        </HolographicCard>
    );
};

export default RealTimeLog;
