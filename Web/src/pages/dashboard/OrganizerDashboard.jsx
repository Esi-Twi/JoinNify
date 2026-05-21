import React from 'react';
import StatsCard from '../../components/StatsCard';
import { useNavigate } from 'react-router-dom';

const OrganizerDashboard = ({ setActiveTab }) => {
  const navigate = useNavigate()

  return (
    <div className="container-fluid py-4">
      {/* Quick Layout Actions Header banner */}
      <div className="row g-3 mb-4">
        <div className="col-12 d-flex flex-wrap justify-content-between align-items-center gap-3">
          <div>
            <h5 className="fw-bold mb-1">Welcome Back, Organizer</h5>
            <p className="text-muted small mb-0">Here is what is happening with your operations platform scope today.</p>
          </div>
          <div className="d-flex align-items-center gap-2 flex-wrap">
            <button onClick={() => navigate('/dashboard/create-event')} className="btn text-white px-3 py-2 rounded-3 fw-medium d-flex align-items-center gap-2 border-0" style={{ backgroundColor: '#4F46E5' }}>
              <i className="bi bi-plus-lg"></i> Create Event
            </button>
            <button onClick={() => navigate('/dashboard/checkin')} className="btn btn-white bg-white border px-3 py-2 rounded-3 fw-medium d-flex align-items-center gap-2 text-dark">
              <i className="bi bi-qr-code-scan" style={{ color: '#4F46E5' }}></i> Scan QR
            </button>
            <button onClick={() => navigate('/dashboard/analytics')} className="btn btn-white bg-white border px-3 py-2 rounded-3 fw-medium d-flex align-items-center gap-2 text-dark">
              <i className="bi bi-file-earmark-bar-graph" style={{ color: '#4F46E5' }}></i> View Reports
            </button>
          </div>
        </div>
      </div>

      {/* Dynamic Metric Blocks Grid Layout */}
      <div className="row g-4 mb-4">
        <div className="col-12 col-sm-6 col-lg-3">
          <StatsCard title="Total Events" value="14 Active" icon="bi-calendar2-week" trend="+2 items this month" trendType="up" />
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
          <StatsCard title="Tickets Sold" value="2,845 pcs" icon="bi-ticket-perforated" trend="84% of total supply" trendType="up" />
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
          <StatsCard title="Net Revenue" value="$48,920.00" icon="bi-currency-dollar" trend="+12.3% vs last week" trendType="up" />
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
          <StatsCard title="Pending Check-Ins" value="412 Attendees" icon="bi-person-check" trend="Awaiting scanning setup" trendType="neutral" />
        </div>
      </div>

      {/* Analytics Visualizers Placeholders and Activity Feed */}
      <div className="row g-4">
        <div className="col-12 col-xl-8">
          <div className="dashboard-card card border-0 shadow-sm rounded-4 p-4 h-100">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h6 className="fw-bold text-dark mb-0">Sales & Pipeline Performance Trend</h6>
              <span className="badge rounded-pill px-3 py-2 text-dark bg-light border">Last 30 Days</span>
            </div>
            <div className="bg-light rounded-4 d-flex flex-column align-items-center justify-content-center p-5 text-center" style={{ minHeight: '280px', border: '2px dashed #E5E7EB' }}>
              <div className="rounded-circle p-3 bg-white shadow-sm mb-3 text-primary"><i className="bi bi-graph-up fs-3"></i></div>
              <p className="text-dark fw-medium mb-1">Interactive Metric Analytics Stream Loading</p>
              <p className="text-muted small max-width-xs">Your system metrics stream will pipe visualization components directly into this block container.</p>
            </div>
          </div>
        </div>

        <div className="col-12 col-xl-4">
          <div className="dashboard-card card border-0 shadow-sm rounded-4 p-4 h-100">
            <h6 className="fw-bold text-dark mb-4">Recent Transacted Ledger Transactions</h6>
            <div className="d-flex flex-column gap-3">
              {[
                { user: 'Sami Rahman', detail: 'Purchased 2x VIP Gold Tier', time: '4 mins ago', price: '+$240.00', color: '#22C55E' },
                { user: 'Sarah Jenkins', detail: 'Cancelled Registration Refund', time: '1 hr ago', price: '-$75.00', color: '#EF4444' },
                { user: 'Alex Garrick', detail: 'Purchased 1x General Access Ticket', time: '3 hrs ago', price: '+$45.00', color: '#22C55E' },
                { user: 'Michael Chang', detail: 'Upgraded Standard package pass', time: '5 hrs ago', price: '+$110.00', color: '#22C55E' },
              ].map((item, idx) => (
                <div key={idx} className="d-flex justify-content-between align-items-center p-2 rounded-3 hover-bg-light transition-all">
                  <div className="d-flex align-items-center gap-3">
                    <div className="rounded-circle bg-light d-flex align-items-center justify-content-center fw-bold text-secondary" style={{ width: '40px', height: '40px', fontSize: '13px' }}>
                      {item.user.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <span className="text-dark fw-semibold d-block small">{item.user}</span>
                      <span className="text-muted extra-small d-block text-truncate" style={{ maxWidth: '160px', fontSize: '12px' }}>{item.detail}</span>
                    </div>
                  </div>
                  <div className="text-end">
                    <span className="fw-bold d-block small" style={{ color: item.color }}>{item.price}</span>
                    <span className="text-muted extra-small d-block" style={{ fontSize: '11px' }}>{item.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizerDashboard;