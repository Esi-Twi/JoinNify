import React from 'react';
import { Link, NavLink } from "react-router-dom"

const OrganizerSidebar = ({ activeTab, setActiveTab, isMobileOpen, setIsMobileOpen }) => {
    const menuItems = [
        { id: 'dashboard', path: '/dashboard/org', name: 'Dashboard', icon: 'bi-grid-1x2' },
        { id: 'my-events', path: '/dashboard/my-events', name: 'My Events', icon: 'bi-calendar-event' },
        { id: 'create-event', path: '/dashboard/create-event', name: 'Create Event', icon: 'bi-plus-circle' },
        { id: 'ticket-sales', path: '/dashboard/ticket-sales', name: 'Ticket Sales', icon: 'bi-ticket-perforated' },
        { id: 'attendees', path: '/dashboard/attendees', name: 'Attendees', icon: 'bi-people' },
        { id: 'qr-checkin', path: '/dashboard/qr-checkin', name: 'QR Check-In', icon: 'bi-qr-code-scan' },
        { id: 'analytics', path: '/dashboard/analytics', name: 'Analytics', icon: 'bi-graph-up-arrow' },
        { id: 'notifications', path: '/dashboard/notifications', name: 'Notifications', icon: 'bi-bell' },
        { id: 'settings', path: '/dashboard/settings', name: 'Settings', icon: 'bi-gear' },
    ];

    return (
        <div
            className={`organizer-sidebar bg-white border-end d-flex flex-column h-100 position-fixed start-0 top-0 vh-100 transition-all ${isMobileOpen ? 'translate-middle-x' : ''
                }`}
            style={{
                width: '260px',
                zIndex: 1040,
                transition: 'transform 0.3s ease',
                transform: window.innerWidth < 992 && !isMobileOpen ? 'translateX(-100%)' : 'translateX(0)'
            }}
        >
            {/* Navigation List */}
            <div className="flex-grow-1 overflow-y-auto p-3 mt-5">
                <ul className="nav nav-pills flex-column gap-1 pt-2">
                    {menuItems.map((item) => {
                        const isActive = activeTab === item.id;
                        return (
                            <li key={item.id} className="nav-item">
                                <NavLink
                                    to={item.path}
                                    onClick={() => setIsMobileOpen(false)}
                                    className="nav-link w-100 text-start d-flex align-items-center gap-3 px-3 py-2 rounded-3 border-0 transition-all"
                                    style={({ isActive }) => ({
                                        backgroundColor: isActive ? '#c11cea' : 'transparent',
                                        color: isActive ? '#FFFFFF' : '#6B7280',
                                        fontWeight: isActive ? '600' : '400'
                                    })}
                                >
                                    {({ isActive }) => (
                                        <>
                                            <i className={`bi ${item.icon} fs-5`} style={{ color: isActive ? '#FFFFFF' : '#c11cea' }}></i>
                                            <span>{item.name}</span>
                                        </>
                                    )}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default OrganizerSidebar;