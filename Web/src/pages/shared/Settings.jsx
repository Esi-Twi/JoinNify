import React from 'react';

const Settings = () => {
    return (
        <div className="container-fluid py-4">
            <div className="dashboard-card card border-0 shadow-sm rounded-4 p-4 max-width-md mx-auto" style={{ maxWidth: '840px' }}>
                <h6 className="fw-bold text-dark mb-4 pb-2 border-bottom">Administrative Platform Configuration Parameters System Controls</h6>

                <div className="d-flex flex-column gap-4">
                    <div>
                        <span className="text-dark fw-bold d-block small mb-2">Security Parameter Update Protocol Block</span>
                        <div className="row g-3">
                            <div className="col-12 col-sm-6">
                                <input type="password" className="form-control rounded-3 p-2.5 border" placeholder="Current Authentication Token Secret" />
                            </div>
                            <div className="col-12 col-sm-6">
                                <input type="password" className="form-control rounded-3 p-2.5 border" placeholder="New Target Password Allocation String" />
                            </div>
                        </div>
                    </div>

                    <hr className="my-2 opacity-25" />

                    <div>
                        <span className="text-dark fw-bold d-block small mb-3">System Processing Routing Hooks Preferences Matrix</span>
                        <div className="d-flex flex-column gap-2.5">
                            {[
                                { id: 'settle', title: 'Automated Payout Processing Operations Settlement Engine Routing', desc: 'Auto-route processed clearance vault updates directly to secondary bank hooks instantly upon target block confirmation values.', check: true },
                                { id: 'notif', title: 'Webhook Real-time Alert Systems Operations Dispatch Line', desc: 'Dispatch instant alerts downstream upon new booking creation transactions entries log structures.', check: true },
                                { id: 'mfa', title: 'Enforce Secondary Cryptographic Token MFA Requirements Policy', desc: 'Secure high-risk system parameters adjustments behind authentication sequence layers verification checks.', check: false }
                            ].map((s) => (
                                <div key={s.id} className="form-check form-switch p-3 border rounded-3 bg-light d-flex align-items-center justify-content-between ps-4 mb-2">
                                    <div className="me-3">
                                        <label className="form-check-label text-dark fw-semibold small d-block mb-0.5" htmlFor={s.id}>{s.title}</label>
                                        <span className="text-muted d-block tracking-normal extra-small" style={{ fontSize: '12px', lineHeight: '1.4' }}>{s.desc}</span>
                                    </div>
                                    <input className="form-check-input flex-shrink-0" type="checkbox" role="switch" id={s.id} defaultChecked={s.check} style={{ width: '40px', height: '20px' }} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="d-flex justify-content-end gap-2 mt-2 pt-2 border-top">
                        <button className="btn text-white px-4 py-2 rounded-3 fw-semibold border-0" style={{ backgroundColor: '#4F46E5' }}>Apply Operation Matrices Configurations</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;