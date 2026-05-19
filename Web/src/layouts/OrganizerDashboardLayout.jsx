import React, { useState } from 'react';
import Sidebar from '../components/OrganizerSidebar';

// Dashboard View Components Import Map Routing Layout Indexing List
import OrganizerDashboard from '../pages/dashboard/OrganizerDashboard';
import MyEvents from '../pages/dashboard/MyEvents';
import CreateEvent from '../pages/dashboard/CreateEvent';
import TicketSalesPage from '../pages/dashboard/TicketSalesPage';
import Attendees from '../pages/dashboard/Attendees';
import QRCheckInPage from '../pages/dashboard/QRCheckInPage';
import Analytics from '../pages/dashboard/Analytics';
import Notifications from '../pages/dashboard/Notifications';
// import Profile from '../pages/dashboard/Profile';
import Settings from '../pages/shared/Settings';
import Header from '../components/Header';

const OrganizerDashboardLayout = () => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    // Dynamic Content Context Map Orchestration Engine Function block
    const renderContent = () => {
        switch (activeTab) {
            case 'dashboard': return <OrganizerDashboard setActiveTab={setActiveTab} />;
            case 'my-events': return <MyEvents />;
            case 'create-event': return <CreateEvent />;
            case 'ticket-sales': return <TicketSalesPage />;
            case 'attendees': return <Attendees />;
            case 'qr-checkin': return <QRCheckInPage />;
            case 'analytics': return <Analytics />;
            case 'notifications': return <Notifications />;
            // case 'profile': return <Profile />;
            case 'settings': return <Settings />;
            default: return <OrganizerDashboard setActiveTab={setActiveTab} />;
        }
    };

    return (
        <>

        <Header />
        
        <div className="container-fluid p-0 overflow-x-hidden min-vh-100 position-relative bg-light-subtle" style={{ backgroundColor: '#F9FAFB' }}>


            {/* Sidebar Navigation Component Element block placement */}
            <Sidebar
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                isMobileOpen={isMobileOpen}
                setIsMobileOpen={setIsMobileOpen}
            />

            {/* Backdrop overlay filter cover for mobile active view states drawer triggers */}
            {isMobileOpen && (
                <div
                    className="position-fixed top-0 start-0 w-100 h-100 bg-dark opacity-50 d-lg-none"
                    style={{ zIndex: 1030 }}
                    onClick={() => setIsMobileOpen(false)}
                ></div>
            )}

            {/* Main Structural Layout Content Wrapper Container Box */}
            <div
                className="main-layout-wrapper pb-5 pt-2 d-flex flex-column min-vh-100 transition-all"
                style={{ paddingLeft: window.innerWidth >= 992 ? '260px' : '0', transition: 'padding 0.3s ease' }}
            >
                <main className="flex-grow-1" style={{ position: 'relative' }}>
                    {renderContent()}
                </main>
            </div>
        </div>
        </>
    );
};

export default OrganizerDashboardLayout;