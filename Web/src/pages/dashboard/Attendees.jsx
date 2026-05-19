import React from 'react';

const Attendees = () => {
    return (
        <div className="container-fluid py-4">
            <div className="dashboard-card card border-0 shadow-sm rounded-4 p-4">
                <div className="row g-3 justify-content-between align-items-center mb-4">
                    <div className="col-12 col-md-5">
                        <div className="position-relative">
                            <i className="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"></i>
                            <input type="text" className="form-control ps-5 rounded-3 bg-light border-0 py-2" placeholder="Search verified attendee listing data..." />
                        </div>
                    </div>
                    <div className="col-12 col-md-4 text-md-end">
                        <span className="text-muted small fw-medium">Total Registered Registry Size: 2,845</span>
                    </div>
                </div>

                <div className="table-responsive">
                    <table className="table align-middle table-hover mb-0">
                        <thead className="table-light text-muted small uppercase">
                            <tr>
                                <th className="border-0 px-4 py-3 rounded-start-3">Attendee Profiling Identity</th>
                                <th className="border-0 py-3">Allocated Variant</th>
                                <th className="border-0 py-3">Check-In Event Logs</th>
                                <th className="border-0 px-4 py-3 text-end rounded-end-3">Actions Execution Panel</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { name: 'Marcus Sterling', email: 'm.sterling@techcorp.com', tier: 'VIP Platform Package', status: 'Checked In', icon: 'bi-check-circle-fill', color: '#22C55E' },
                                { name: 'Alicia Keys-Vance', email: 'alicia.v@mediahub.net', tier: 'General Allocation Tier', status: 'Awaiting Entry Scan', icon: 'bi-dash-circle-fill', color: '#FBBF24' },
                                { name: 'Roberto Chen', email: 'rchen@innovation.org', tier: 'VIP Platform Package', status: 'Checked In', icon: 'bi-check-circle-fill', color: '#22C55E' },
                                { name: 'Diana Prince', email: 'diana@themyscira.gov', tier: 'Speaker Pass Access Profile', status: 'Awaiting Entry Scan', icon: 'bi-dash-circle-fill', color: '#FBBF24' },
                            ].map((a, idx) => (
                                <tr key={idx}>
                                    <td className="px-4 py-3">
                                        <span className="fw-semibold text-dark small d-block">{a.name}</span>
                                        <span className="text-muted extra-small d-block" style={{ fontSize: '12px' }}>{a.email}</span>
                                    </td>
                                    <td className="text-secondary small">{a.tier}</td>
                                    <td>
                                        <span className="small fw-semibold d-inline-flex align-items-center gap-2" style={{ color: a.color }}>
                                            <i className={`bi ${a.icon}`}></i> {a.status}
                                        </span>
                                    </td>
                                    <td className="px-4 text-end">
                                        <div className="dropdown">
                                            <button className="btn btn-light btn-sm rounded-2 border p-1 px-2.5" data-bs-toggle="dropdown">
                                                <i className="bi bi-three-dots-vertical"></i>
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-end shadow-sm rounded-3 border-0 small">
                                                <li><button className="dropdown-item py-2 d-flex align-items-center gap-2"><i className="bi bi-send text-muted"></i> Resend Pass Voucher Token</button></li>
                                                <li><button className="dropdown-item py-2 d-flex align-items-center gap-2 text-danger"><i className="bi bi-arrow-counterclockwise"></i> Trigger Settlement Refund</button></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Attendees;