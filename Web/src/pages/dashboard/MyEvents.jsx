import React, { useEffect } from 'react';
import { useEventStore } from '../../store/useEventStore';

const MyEvents = () => {
    const { myEvents, isGettingEvent, getMyEvents } = useEventStore()

    useEffect(() => {
        getMyEvents()
        
    }, [])


   
    // const events = [
    //     { id: 1, title: 'Adventure Gear Show', category: 'Outdoor & Adventure', date: 'June 5, 2029 - 3:00 PM', location: 'Rocky Ridge Exhibition Hall, Denver, CO', progress: 65, price: 40 },
    //     { id: 2, title: 'Symphony Under the Stars', category: 'Music', date: 'Apr 20, 2029 - 7:00 PM', location: 'Sunset Park, Los Angeles, CA', progress: 75, price: 50 },
    //     { id: 3, title: 'Runway Revolution 2029', category: 'Fashion', date: 'May 1, 2029 - 6:00 PM', location: 'Vogue Hall, New York, NY', progress: 50, price: 100 },
    //     { id: 4, title: 'Global Wellness Summit', category: 'Health & Wellness', date: 'May 5, 2029 - 9:00 AM', location: 'Wellness Arena, Miami, FL', progress: 40, price: 75 },
    //     { id: 5, title: 'Adventure Gear Show', category: 'Outdoor & Adventure', date: 'June 5, 2029 - 3:00 PM', location: 'Rocky Ridge Exhibition Hall, Denver, CO', progress: 65, price: 40 },
    //     { id: 27, title: 'Symphony Under the Stars', category: 'Music', date: 'Apr 20, 2029 - 7:00 PM', location: 'Sunset Park, Los Angeles, CA', progress: 75, price: 50 },
    //     { id: 7, title: 'Runway Revolution 2029', category: 'Fashion', date: 'May 1, 2029 - 6:00 PM', location: 'Vogue Hall, New York, NY', progress: 50, price: 100 },
    //     { id: 8, title: 'Global Wellness Summit', category: 'Health & Wellness', date: 'May 5, 2029 - 9:00 AM', location: 'Wellness Arena, Miami, FL', progress: 40, price: 75 },
    // ];

    
   
    // const mockEvents = [
    //     { id: 1, title: 'Skaimount Tech Summit 2026', cat: 'Technology', date: 'Oct 12, 2026', sold: '420/500', status: 'Active', color: '#22C55E', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=300' },
    //     { id: 2, title: 'Premium Jazz & Underground Fest', cat: 'Live Music Concerts', date: 'Nov 05, 2026', sold: '1,200/1,500', status: 'Active', color: '#22C55E', img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=300' },
    //     { id: 3, title: 'Web3 & Decentralized Ledger Workshop', cat: 'Finance Ecosystems', date: 'Dec 19, 2026', sold: '0/150', status: 'Draft', color: '#6B7280', img: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=300' },
    //     { id: 4, title: 'Global Food Truck & Hospitality Expo', cat: 'Culinary Arts', date: 'Jan 22, 2027', sold: '98/300', status: 'Completed', color: '#4F46E5', img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=300' }
    // ];

    return (
        <div className="container-fluid py-4">
            <div className="border-0 shadow-sm rounded-4 p-4">
                {/* Filtration Header Row Toolbar Controls layout */}
                <div className="row g-3 justify-content-between align-items-center mb-4">
                    <div className="col-12 col-md-5 col-lg-4">
                        <div className="position-relative">
                            <i className="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"></i>
                            <input type="text" className="form-control ps-5 rounded-3 bg-light border-0 py-2" placeholder="Search operational event inventory..." />
                        </div>
                    </div>
                   
                </div>

                <div className="p-4">
                    {/* Top Filter Tabs */}
                    <div className="d-flex gap-2 mb-4">
                        {['Active (48)', 'Draft (22)', 'Past (12)'].map((tab, idx) => (
                            <button key={tab} className={`btn px-4 rounded-pill ${idx === 0 ? 'btn-primary' : 'btn-light'}`}>
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Events Grid */}
                    <div className="row g-4">
                        {myEvents.map((event) => (
                            <div key={event.id} className="col-12 col-md-6 col-lg-3">
                                <div className="card h-100 border-0 shadow-sm p-3 rounded-4">
                                    <img
                                        src={event.images?.[0]}
                                        alt={event.title}
                                        className="rounded-3 object-fit-cover"
                                        style={{height: '180px' }}
                                    />
                                    {/* <div className="bg-light rounded-3 mb-3" style={{ height: '150px' }}></div> */}
                                    <span className="badge bg-light text-dark mb-2 align-self-start">{event.category}</span>
                                    <h6 className="fw-bold">{event.title}</h6>
                                    <small className="text-muted d-block mb-1">{event.date}</small>
                                    <small className="text-muted d-block mb-3"><i className="bi bi-geo-alt"></i> {event.location}</small>

                                    <div className="d-flex align-items-center justify-content-between mt-auto">
                                        <div className="flex-grow-1 me-3">
                                            <div className="progress" style={{ height: '6px' }}>
                                                <div className="progress-bar" style={{ width: `${event.progress}%`, backgroundColor: '#D946EF' }}></div>
                                            </div>
                                        </div>
                                        <span className="fw-bold" style={{ color: '#D946EF' }}>${event.price}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Responsive Events Data View Table Layout component */}
                {/* <div className="table-responsive">
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
                            {myEvents?.map((ev) => (
                                <tr key={ev.id} className="transition-all">
                                    <td className="px-4 py-3">
                                        <div className="d-flex align-items-center gap-3">
                                            <img
                                                src={ev.images?.[0]}
                                                alt={ev.title}
                                                className="rounded-3 object-fit-cover"
                                                style={{ width: '56px', height: '42px' }}
                                            />
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
                </div> */}
            </div>
        </div>
    );
};



export default MyEvents;