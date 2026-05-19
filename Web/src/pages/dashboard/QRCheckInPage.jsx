import React from 'react';

const QRCheckInPage = () => {
    return (
        <div className="container-fluid py-4">
            <div className="row g-4 justify-content-center">
                <div className="col-12 col-md-6 col-xl-5">
                    <div className="dashboard-card card border-0 shadow-sm rounded-4 p-4 text-center">
                        <h6 className="fw-bold text-dark mb-3">Live Video Scanning Gateway Core</h6>

                        {/* Simulation Interface Grid Viewport container frame */}
                        <div className="bg-dark rounded-4 position-relative mx-auto mb-4 overflow-hidden d-flex flex-column align-items-center justify-content-center shadow-inner" style={{ maxWidth: '360px', height: '360px' }}>
                            {/* Corner target framing overlays */}
                            <div className="position-absolute top-0 start-0 border-top border-start border-white border-3 m-4" style={{ width: '32px', height: '32px' }}></div>
                            <div className="position-absolute top-0 end-0 border-top border-end border-white border-3 m-4" style={{ width: '32px', height: '32px' }}></div>
                            <div className="position-absolute bottom-0 start-0 border-bottom border-start border-white border-3 m-4" style={{ width: '32px', height: '32px' }}></div>
                            <div className="position-absolute bottom-0 end-0 border-bottom border-end border-white border-3 m-4" style={{ width: '32px', height: '32px' }}></div>

                            {/* Scanning laser visual loop line tracker simulation */}
                            <div className="position-absolute w-100 bg-primary opacity-50" style={{ height: '2px', top: '50%', left: 0, boxShadow: '0 0 12px #4F46E5', animation: 'scanMove 3s infinite linear' }}></div>

                            <i className="bi bi-qr-code text-white opacity-25" style={{ fontSize: '120px' }}></i>
                            <span className="position-absolute bottom-0 text-white-50 small mb-5 tracking-wider text-uppercase fw-semibold" style={{ fontSize: '11px' }}>Awaiting valid scan target matrix...</span>
                        </div>

                        <div className="d-flex justify-content-center gap-2">
                            <button className="btn text-white px-4 py-2 rounded-3 fw-semibold border-0" style={{ backgroundColor: '#4F46E5' }}><i className="bi bi-camera-video"></i> Start Session</button>
                            <button className="btn btn-light bg-light border px-4 py-2 rounded-3 fw-semibold text-secondary">Toggle Input</button>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-xl-5">
                    <div className="dashboard-card card border-0 shadow-sm rounded-4 p-4 mb-4">
                        <h6 className="fw-bold text-dark mb-3">Validation Status Pipeline Stream</h6>
                        <div className="p-3 rounded-4 bg-success-subtle d-flex align-items-center gap-3 border border-success border-opacity-25" style={{ backgroundColor: '#EEF2FF' }}>
                            <div className="rounded-circle bg-success text-white p-2.5 d-flex align-items-center justify-content-center" style={{ width: '44px', height: '44px', backgroundColor: '#22C55E' }}>
                                <i className="bi bi-check-lg fs-4"></i>
                            </div>
                            <div>
                                <span className="fw-bold text-dark d-block small">Access Pass Ticket Verified Valid</span>
                                <span className="text-muted extra-small d-block" style={{ fontSize: '12px' }}>User Matrix ID: Sami Rahman | Order Token Variant: VIP Gold Level</span>
                            </div>
                        </div>
                    </div>

                    <div className="dashboard-card card border-0 shadow-sm rounded-4 p-4 text-center">
                        <span className="text-muted small fw-medium text-uppercase d-block mb-1">Session Cumulative Counter Metrics</span>
                        <h2 className="fw-bold text-dark mb-0">1,424 / 2,845 Attendees Check-In</h2>
                        <div className="progress mt-3 rounded-pill" style={{ height: '8px' }}>
                            <div className="progress-bar rounded-pill" role="progressbar" style={{ width: '50%', backgroundColor: '#4F46E5' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QRCheckInPage;