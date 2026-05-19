import React from 'react';

const Notifications = () => {
    return (
        <div className="container-fluid py-4">
            <div className="dashboard-card card border-0 shadow-sm rounded-4 p-4 max-width-md mx-auto" style={{ maxWidth: '800px' }}>
                <div className="d-flex justify-content-between align-items-center mb-4 pb-2 border-bottom">
                    <h6 className="fw-bold text-dark mb-0">System Action Notifications Hub</h6>
                    <button className="btn p-0 text-primary small border-0 bg-transparent fw-medium" style={{ color: '#4F46E5' }}>Mark operational queue clean</button>
                </div>

                <div className="d-flex flex-column gap-3">
                    {[
                        { title: 'New Registration Ticket Transaction Completed', body: 'Sami Rahman locked down 2x VIP Gold Tier slots via primary stripe settlement engine clearance.', time: '3 mins ago', active: true, color: '#4F46E5', icon: 'bi-ticket-perforated' },
                        { title: 'Platform Payout Structural Clearance Settled', body: 'Financial settlement cycle batch operations processing completed routing funds matrix balance to verified bank vault infrastructure.', time: '2 hours ago', active: false, color: '#22C55E', icon: 'bi-bank' },
                        { title: 'Operational Safety Ticket Event Alert Warning', body: 'The allocation capacity parameters for Premium Jazz Fest variant boundaries hit 90% space velocity layout metrics.', time: '1 day ago', active: false, color: '#FBBF24', icon: 'bi-exclamation-triangle' }
                    ].map((n, idx) => (
                        <div key={idx} className={`p-3 rounded-4 d-flex gap-3 align-items-start transition-all border ${n.active ? 'bg-light border-opacity-75' : 'bg-white border-light'}`}>
                            <div className="rounded-3 p-2.5 text-white d-flex align-items-center justify-content-center flex-shrink-0" style={{ backgroundColor: n.color, width: '40px', height: '40px' }}>
                                <i className={`bi ${n.icon} fs-5`}></i>
                            </div>
                            <div className="flex-grow-1">
                                <div className="d-flex align-items-center justify-content-between gap-2 mb-1">
                                    <span className={`small d-block ${n.active ? 'fw-bold text-dark' : 'fw-semibold text-secondary'}`}>{n.title}</span>
                                    <span className="text-muted extra-small flex-shrink-0" style={{ fontSize: '11px' }}>{n.time}</span>
                                </div>
                                <p className="text-muted small mb-0 opacity-90 leading-normal">{n.body}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Notifications;