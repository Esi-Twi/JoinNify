import React from 'react';

const CreateEvent = () => {
    return (
        <div className="container-fluid py-4">
            <div className="dashboard-card card border-0 shadow-sm rounded-4 p-4 max-width-lg mx-auto" style={{ maxWidth: '960px' }}>
                <h5 className="fw-bold text-dark mb-4 pb-2 border-bottom">Deploy New Management Event Manifest</h5>

                <form onSubmit={(e) => e.preventDefault()} className="row g-4">
                    <div className="col-12 col-md-8">
                        <label className="form-label text-secondary small fw-semibold">Event Title / Branding Marker</label>
                        <input type="text" className="form-control rounded-3 p-2.5 border" placeholder="e.g. Skaimount Live Summit Corporate Group Package" required />
                    </div>

                    <div className="col-12 col-md-4">
                        <label className="form-label text-secondary small fw-semibold">Primary Theme Category</label>
                        <select className="form-select rounded-3 p-2.5 border">
                            <option>Technology & Infrastructures</option>
                            <option>Live Concert Entertainments</option>
                            <option>Corporate Strategy Gatherings</option>
                            <option>Art Exhibition Gallery Setup</option>
                        </select>
                    </div>

                    <div className="col-12">
                        <label className="form-label text-secondary small fw-semibold">Comprehensive Operational Description</label>
                        <textarea className="form-control rounded-3 p-2.5 border" rows="4" placeholder="Detail comprehensive agenda rules, attendee instructions, schedules metrics..."></textarea>
                    </div>

                    <div className="col-12 col-md-6">
                        <label className="form-label text-secondary small fw-semibold">Media Cover Showcase Asset</label>
                        <div className="border rounded-3 p-4 text-center bg-light position-relative" style={{ borderStyle: 'dashed' }}>
                            <i className="bi bi-cloud-arrow-up fs-2 text-muted mb-2 d-block"></i>
                            <span className="small text-dark fw-medium d-block mb-1">Click to stream asset or drag profile drop images</span>
                            <span className="text-muted extra-small d-block" style={{ fontSize: '11px' }}>PNG, JPG or WebP system assets up to 5MB capacity</span>
                            <input type="file" className="position-absolute opacity-0 top-0 start-0 w-100 h-100 cursor-pointer" />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="row g-3">
                            <div className="col-12">
                                <label className="form-label text-secondary small fw-semibold">Execution Venue Setup Type</label>
                                <div className="d-flex gap-3">
                                    <div className="form-check flex-grow-1 border p-2.5 rounded-3 bg-light d-flex align-items-center ps-4">
                                        <input className="form-check-input" type="radio" name="evtType" id="phys" defaultChecked />
                                        <label className="form-check-label text-dark fw-medium small ms-2" htmlFor="phys">Physical Venue</label>
                                    </div>
                                    <div className="form-check flex-grow-1 border p-2.5 rounded-3 bg-light d-flex align-items-center ps-4">
                                        <input className="form-check-input" type="radio" name="evtType" id="virt" />
                                        <label className="form-check-label text-dark fw-medium small ms-2" htmlFor="virt">Virtual Stream</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <label className="form-label text-secondary small fw-semibold">Geo-Location String / Stream Target Link</label>
                                <input type="text" className="form-control rounded-3 p-2.5 border" placeholder="Venue location coordinates or virtual pipeline token URL" />
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-4">
                        <label className="form-label text-secondary small fw-semibold">Target Operational Date</label>
                        <input type="date" className="form-control rounded-3 p-2.5 border" />
                    </div>
                    <div className="col-6 col-sm-4">
                        <label className="form-label text-secondary small fw-semibold">Window Start Interval</label>
                        <input type="time" className="form-control rounded-3 p-2.5 border" />
                    </div>
                    <div className="col-6 col-sm-4">
                        <label className="form-label text-secondary small fw-semibold">Window End Interval</label>
                        <input type="time" className="form-control rounded-3 p-2.5 border" />
                    </div>

                    <div className="col-12 col-md-6">
                        <label className="form-label text-secondary small fw-semibold">Ticket Price Parameters (USD)</label>
                        <div className="input-group">
                            <span className="input-group-text rounded-start-3 bg-light text-muted border-end-0">$</span>
                            <input type="number" className="form-control rounded-end-3 p-2.5 border" placeholder="0.00 for complementary accessibility setup" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <label className="form-label text-secondary small fw-semibold">Maximum Unit Capacity Bounds</label>
                        <input type="number" className="form-control rounded-3 p-2.5 border" placeholder="e.g. 500 max attendees" />
                    </div>

                    <div className="col-12 d-flex justify-content-end gap-3 mt-4 pt-3 border-top">
                        <button type="button" className="btn btn-light bg-light border px-4 py-2.5 rounded-3 fw-semibold text-secondary">Save Action Draft</button>
                        <button type="submit" className="btn text-white px-4 py-2.5 rounded-3 fw-semibold border-0" style={{ backgroundColor: '#4F46E5' }}>Publish Event Pipeline</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateEvent;