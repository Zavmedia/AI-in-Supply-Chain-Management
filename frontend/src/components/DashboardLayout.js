import React from 'react';

const DashboardLayout = ({ children }) => {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: '300px 1fr 350px',
            gridTemplateRows: '80px 1fr 200px',
            gap: '20px',
            padding: '20px',
            height: '100vh',
            maxWidth: '100vw'
        }}>
            {children}
        </div>
    );
};

export default DashboardLayout;
