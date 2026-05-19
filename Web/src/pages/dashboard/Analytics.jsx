import React from 'react';

const Analytics = () => {
    return (
        <div className="container-fluid py-4">
            <div className="row g-4 mb-4">
                {[
                    { title: 'Gross Revenue Pipeline Generated', val: '$128,450.00', pct: '+14.2% vs baseline target' },
                    { title: 'Calculated Unit Valuation Average', val: '$45.14 per pass unit', pct: 'Stable variant distributions' },
                    { title: 'Visitor-To-Conversion Optimization Ratio', val: '22.84% Verified Conversion', pct: 'Top 5% category benchmark tier' }
                ].map((c, i) => (
                    <div key={i} className="col-12 col-md-4">
                        <div className="dashboard-card card border-0 shadow-sm rounded-4 p-4 h-100">
                            <span className="text-muted small fw-medium text-uppercase d-block mb-1">{c.title}</span>
                            <h3 className="fw-bold text-dark mb-2">{c.val}</h3>
                            <span className="small text-success fw-semibold d-flex align-items-center gap-1"><i className="bi bi-arrow-up-right"></i> {c.pct}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="row g-4">
                <div className="col-12 col-lg-6">
                    <div className="dashboard-card card border-0 shadow-sm rounded-4 p-4">
                        <h6 className="fw-bold text-dark mb-4">Traffic Demographics & Acquisition Optimization Channel Flow</h6>
                        <div className="bg-light rounded-4 d-flex flex-column align-items-center justify-content-center p-5 text-center" style={{ minHeight: '260px', border: '2px dashed #E5E7EB' }}>
                            <i className="bi bi-pie-chart fs-2 text-muted mb-3"></i>
                            <p className="text-dark fw-medium mb-1">Visualization Stream Matrix Pending Engine Deployment</p>
                            <p className="text-muted small">Channel pipeline metrics data feeds map analytics visualization rendering into this container canvas grid.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="dashboard-card card border-0 shadow-sm rounded-4 p-4">
                        <h6 className="fw-bold text-dark mb-4">Ticket Lifecycle Velocity Execution Tracking Line</h6>
                        <div className="bg-light rounded-4 d-flex flex-column align-items-center justify-content-center p-5 text-center" style={{ minHeight: '260px', border: '2px dashed #E5E7EB' }}>
                            <i className="bi bi-graph-down-flow fs-2 text-muted mb-3"></i>
                            <p className="text-dark fw-medium mb-1">Data Asset Arrays Streaming Matrix Engine Pending</p>
                            <p className="text-muted small">Time series ticket sales asset records structure structural logs natively into this reporting space container canvas.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Analytics;