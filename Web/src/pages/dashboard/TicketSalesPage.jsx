import React from 'react';
import StatsCard from '../../components/StatsCard';

const TicketSalesPage = () => {
    return (
        <div className="container-fluid py-4">
            <div className="row g-4 mb-4">
                <div className="col-12 col-md-4">
                    <StatsCard title="Total Inventory Minted" value="4,500 Items" icon="bi-tags" trend="Global allocated assets pool" trendType="neutral" />
                </div>
                <div className="col-12 col-md-4">
                    <StatsCard title="Remaining Availability" value="1,655 Available" icon="bi-hourglass-split" trend="36.7% available pool depth" trendType="down" />
                </div>
                <div className="col-12 col-md-4">
                    <StatsCard title="Gross Captured Pipeline" value="$128,450.00" icon="bi-wallet2" trend="Processed settlement stream" trendType="up" />
                </div>
            </div>

            <div className="dashboard-card card border-0 shadow-sm rounded-4 p-4">
                <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-3">
                    <h6 className="fw-bold text-dark mb-0">Ticket Distribution Audit Manifest</h6>
                    <button className="btn btn-white bg-white border rounded-3 px-3 py-2 small fw-semibold text-dark d-flex align-items-center gap-2">
                        <i className="bi bi-download text-primary"></i> Export Distribution Ledger
                    </button>
                </div>

                <div className="table-responsive">
                    <table className="table align-middle table-hover mb-0">
                        <thead className="table-light text-muted small uppercase">
                            <tr>
                                <th className="border-0 px-4 py-3 rounded-start-3">Order Token</th>
                                <th className="border-0 py-3">Purchaser Reference</th>
                                <th className="border-0 py-3">Allocated Tier</th>
                                <th className="border-0 py-3">Settlement Total</th>
                                <th className="border-0 px-4 py-3 text-end rounded-end-3">System Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { tid: 'TXN-90284', name: 'James Carraway', email: 'j.carraway@outlook.com', tier: 'VIP Access Pass', amt: '$350.00', status: 'Settled', bg: '#22C55E' },
                                { tid: 'TXN-88241', name: 'Linda Montgomery', email: 'linda.m@gmail.com', tier: 'General Allocation', amt: '$85.00', status: 'Settled', bg: '#22C55E' },
                                { tid: 'TXN-71542', name: 'David Vance', email: 'vance@crypto.io', tier: 'VIP Access Pass', amt: '$350.00', status: 'Processing', bg: '#FBBF24' },
                                { tid: 'TXN-65219', name: 'Elena Rostova', email: 'elena.ros@corp.com', tier: 'Early Distribution Package', amt: '$65.00', status: 'Cancelled', bg: '#EF4444' },
                            ].map((t, idx) => (
                                <tr key={idx}>
                                    <td className="px-4 py-3 fw-mono small text-dark">{t.tid}</td>
                                    <td className="py-3">
                                        <span className="fw-semibold text-dark small d-block">{t.name}</span>
                                        <span className="text-muted extra-small d-block" style={{ fontSize: '11px' }}>{t.email}</span>
                                    </td>
                                    <td className="text-secondary small">{t.tier}</td>
                                    <td className="fw-bold text-dark small">{t.amt}</td>
                                    <td className="px-4 text-end">
                                        <span className="badge rounded-pill px-2.5 py-1.5 fw-semibold text-white border-0" style={{ backgroundColor: t.bg, fontSize: '12px' }}>
                                            {t.status}
                                        </span>
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

export default TicketSalesPage;