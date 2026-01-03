import React from 'react';
import DashboardLayout from './components/DashboardLayout';
import SystemHealthBar from './components/SystemHealthBar';
import OmniSearch from './components/OmniSearch';
import GlobeVisualizer from './components/GlobeVisualizer';
import RealTimeLog from './components/RealTimeLog';
import NotificationHub from './components/NotificationHub';
import ActionableIntelligence from './components/ActionableIntelligence';
import CommandHistory from './components/CommandHistory';

function App() {
    return (
        <div className="app-container">
            <div className="neon-grid-background"></div>

            <div className="content-overlay">
                <DashboardLayout>
                    {/* Top Row: Left, Center (Search), Right (Health) - adjusted for layout */}

                    {/* GRID CONFIGURATION:
              Columns: 300px | 1fr | 350px
              Rows: 80px | 1fr | 200px
          */}

                    {/* Top Bar Area */}
                    <div style={{ gridColumn: '1 / 2', gridRow: '1 / 2' }}>
                        <SystemHealthBar />
                    </div>

                    <OmniSearch />

                    {/* Main Content Area */}
                    <div style={{ gridColumn: '1 / 2', gridRow: '2 / 3' }}>
                        <RealTimeLog />
                    </div>

                    <div style={{ gridColumn: '2 / 3', gridRow: '2 / 4' }}>
                        <GlobeVisualizer />
                    </div>

                    <div style={{ gridColumn: '3 / 4', gridRow: '2 / 3' }}>
                        <ActionableIntelligence />
                    </div>

                    {/* Bottom Area */}
                    <div style={{ gridColumn: '1 / 2', gridRow: '3 / 4' }}>
                        <CommandHistory />
                    </div>

                    <div style={{ gridColumn: '3 / 4', gridRow: '3 / 4' }}>
                        <NotificationHub />
                    </div>

                </DashboardLayout>
            </div>
        </div>
    );
}

export default App;
