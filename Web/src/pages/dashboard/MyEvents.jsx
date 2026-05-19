import React from 'react';

const MyEvents = () => {
    const mockEvents = [
        { id: 1, title: 'Skaimount Tech Summit 2026', cat: 'Technology', date: 'Oct 12, 2026', sold: '420/500', status: 'Active', color: '#22C55E', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=300' },
        { id: 2, title: 'Premium Jazz & Underground Fest', cat: 'Live Music Concerts', date: 'Nov 05, 2026', sold: '1,200/1,500', status: 'Active', color: '#22C55E', img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=300' },
        { id: 3, title: 'Web3 & Decentralized Ledger Workshop', cat: 'Finance Ecosystems', date: 'Dec 19, 2026', sold: '0/150', status: 'Draft', color: '#6B7280', img: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=300' },
        { id: 4, title: 'Global Food Truck & Hospitality Expo', cat: 'Culinary Arts', date: 'Jan 22, 2027', sold: '98/300', status: 'Completed', color: '#4F46E5', img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=300' }
    ];

    return (
        <div className="container-fluid py-4">
            <div className="dashboard-card card border-0 shadow-sm rounded-4 p-4">
                {/* Filtration Header Row Toolbar Controls layout */}
                <div className="row g-3 justify-content-between align-items-center mb-4">
                    <div className="col-12 col-md-5 col-lg-4">
                        <div className="position-relative">
                            <i className="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"></i>
                            <input type="text" className="form-control ps-5 rounded-3 bg-light border-0 py-2" placeholder="Search operational event inventory..." />
                        </div>
                    </div>
                    <div className="col-12 col-md-7 col-lg-6 d-flex flex-wrap justify-content-md-end gap-2">
                        <button className="btn px-3 py-2 rounded-3 small fw-medium text-white border-0" style={{ backgroundColor: '#4F46E5', fontSize: '14px' }}>All Events</button>
                        <button className="btn btn-light bg-light px-3 py-2 rounded-3 small fw-medium text-secondary border-0" style={{ fontSize: '14px' }}>Active</button>
                        <button className="btn btn-light bg-light px-3 py-2 rounded-3 small fw-medium text-secondary border-0" style={{ fontSize: '14px' }}>Drafts</button>
                        <button className="btn btn-light bg-light px-3 py-2 rounded-3 small fw-medium text-secondary border-0" style={{ fontSize: '14px' }}>Completed</button>
                    </div>
                </div>

                {/* Responsive Events Data View Table Layout component */}
                <div className="table-responsive">
                    <table className="table table-hover align-middle mb-0">
                        <thead className="table-light text-muted uppercase small">
                            <tr>
                                <th className="border-0 px-4 py-3 rounded-start-3">Event Parameters</th>
                                <th className="border-0 py-3">Category Group</th>
                                <th className="border-0 py-3">Execution Date</th>
                                <th className="border-0 py-3">Tickets Log</th>
                                <th className="border-0 py-3">Status Badging</th>
                                <th className="border-0 px-4 py-3 text-end rounded-end-3">Administrative Operation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mockEvents.map((ev) => (
                                <tr key={ev.id} className="transition-all">
                                    <td className="px-4 py-3">
                                        <div className="d-flex align-items-center gap-3">
                                            <img src={ev.img} alt="" className="rounded-3 object-fit-cover" style={{ width: '56px', height: '42px' }} />
                                            <span className="fw-semibold text-dark small d-block" style={{ maxWidth: '240px' }}>{ev.title}</span>
                                        </div>
                                    </td>
                                    <td className="text-secondary small">{ev.cat}</td>
                                    <td className="text-secondary small">{ev.date}</td>
                                    <td>
                                        <div className="d-flex align-items-center gap-2">
                                            <span className="small fw-medium text-dark">{ev.sold}</span>
                                            <i className="bi bi-ticket text-muted extra-small"></i>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="badge rounded-pill px-2.5 py-1.5 fw-semibold border-0 text-white" style={{ backgroundColor: ev.color, fontSize: '12px' }}>
                                            {ev.status}
                                        </span>
                                    </td>
                                    <td className="px-4 text-end">
                                        <div className="d-inline-flex gap-1">
                                            <button className="btn btn-light btn-sm rounded-2 border p-1.5 px-2.5" title="View"><i className="bi bi-eye text-dark"></i></button>
                                            <button className="btn btn-light btn-sm rounded-2 border p-1.5 px-2.5" title="Edit"><i className="bi bi-pencil text-dark"></i></button>
                                            <button className="btn btn-light btn-sm rounded-2 border p-1.5 px-2.5 text-danger" title="Cancel/Delete"><i className="bi bi-trash3"></i></button>
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

export default MyEvents;