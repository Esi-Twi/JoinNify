import React from 'react';

const StatsCard = ({ title, value, icon, trend, trendType }) => {
    return (
        <div className="dashboard-card card border-0 shadow-sm rounded-4 h-100">
            <div className="card-body p-4 d-flex align-items-center justify-content-between">
                <div>
                    <span className="text-muted small fw-medium text-uppercase d-block mb-1">{title}</span>
                    <h3 className="mb-2 fw-bold text-dark">{value}</h3>
                    {trend && (
                        <span className={`small fw-semibold d-flex align-items-center gap-1 ${trendType === 'up' ? 'text-success' : trendType === 'down' ? 'text-danger' : 'text-warning'
                            }`}>
                            <i className={`bi ${trendType === 'up' ? 'bi-arrow-up' : trendType === 'down' ? 'bi-arrow-down' : 'bi-dash'}`}></i>
                            {trend}
                        </span>
                    )}
                </div>
                <div
                    className="stats-box rounded-4 p-3 d-flex align-items-center justify-content-center"
                    style={{ backgroundColor: '#EEF2FF', width: '56px', height: '56px' }}
                >
                    <i className={`bi ${icon} fs-4`} style={{ color: '#4F46E5' }}></i>
                </div>
            </div>
        </div>
    );
};

export default StatsCard;