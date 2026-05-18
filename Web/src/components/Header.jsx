import { useEffect, useState } from 'react'
import { useAuthStore } from '../store/useAuthStore'

function Header() {
  const { isLoggingOut, logout, userAuth } = useAuthStore()
  const user = userAuth?.user


  const logOut = () => {
    logout()
  }


  return (
    <nav className="sticky-top shadow-sm py-2" style={headerStyles.stickyHeader}>
      <div className="container-fluid px-lg-5">
        <div className="row align-items-center justify-content-between g-2">

          {/* LEFT: Branding */}
          <a href='/' className="text-decoration-none text-indigo col-auto d-flex align-items-center">
            <div
              className="rounded-circle me-2 d-flex align-items-center justify-content-center"
              style={{ width: '40px', height: '40px', background: 'var(--join-gradient)' }}
            >
              <i className="bi bi-qr-code-scan text-white fs-5"></i>
            </div>
            <span className="h4 mb-0 fw-bold d-none d-sm-block text-join-primary">
              JoinNify
            </span>
          </a>

          {/* CENTER: Quick Search (Hidden on Mobile, Visible on Tablet+) */}
          <div className="col d-none d-md-flex justify-content-center px-4">
            <div className="position-relative" style={headerStyles.searchContainer}>
              <i className="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"></i>
              <input
                type="text"
                className="form-control"
                style={headerStyles.searchInput}
                placeholder="Search events..."
              />
            </div>
          </div>

          {/* RIGHT: Actions & Profile */}
          <div className="col-auto d-flex align-items-center gap-2 gap-lg-3">

            {/* Create Event CTA */}
            <button className="btn d-flex align-items-center gap-2 shadow-sm" style={headerStyles.createBtn}>
              <i className="bi bi-plus-lg"></i>
              <span className="d-none d-lg-inline">Create Event</span>
            </button>

            {/* Notifications */}
            <div className="position-relative">
              <button className="btn btn-light rounded-circle p-2" style={{ width: '42px', height: '42px' }}>
                <i className="bi bi-bell fs-5 text-join-secondary"></i>
              </button>
              <span className="position-absolute translate-middle badge rounded-pill bg-danger border border-light" style={headerStyles.badge}>
                3
              </span>
            </div>

            {/* Profile Dropdown */}
            <div className="dropdown">
              <button
                className="btn d-flex align-items-center gap-2 p-1 pe-2 rounded-pill bg-light border"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100"
                  alt="Profile"
                  className="rounded-circle"
                  style={{ width: '32px', height: '32px', objectFit: 'cover' }}
                />
                <i className="bi bi-chevron-down text-muted small d-none d-sm-block"></i>
              </button>

              <ul className="dropdown-menu dropdown-menu-end shadow-lg border-0 rounded-4 mt-2 py-2" style={{ minWidth: '220px' }}>
                <li className="px-3 py-2 border-bottom mb-2">
                  <p className="mb-0 fw-bold small text-join-primary">{user?.name || "User"}</p>
                  <p className="mb-0 text-muted extra-small" style={{ fontSize: '11px' }}>
                    {user?.role || "Attendee"}</p>
                </li>
                <li>
                  <a href='/user/profile' className="dropdown-item py-2 d-flex align-items-center gap-2" >
                    <i className="bi bi-person"></i> My Profile
                  </a>
                </li>
                <li>
                  <a href='/org/dashboard' className="dropdown-item py-2 d-flex align-items-center gap-2" ><i className="bi bi-buildings">
                  </i> My Dashboard
                  </a>
                </li>

                <li><a className="dropdown-item py-2 d-flex align-items-center gap-2" href="#"><i className="bi bi-credit-card"></i> Billing / Subscription</a></li>
                <li><hr className="dropdown-divider opacity-50" /></li>

                <li>
                  <button onClick={logOut} className="dropdown-item py-2 d-flex align-items-center gap-2 text-danger" href="#">
                    <i className="bi bi-box-arrow-right"></i> Logout
                  </button>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </nav>
  );
};


export default Header




const headerStyles = {
  stickyHeader: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid #E5E7EB',
    zIndex: 1050,
  },
  searchContainer: {
    maxWidth: '500px',
    width: '100%',
  },
  searchInput: {
    backgroundColor: '#F3F4F6',
    border: 'none',
    borderRadius: '12px',
    paddingLeft: '40px',
  },
  createBtn: {
    background: 'var(--join-gradient, linear-gradient(135deg, #c11cea, #EC4899))',
    border: 'none',
    borderRadius: '10px',
    fontWeight: '600',
    padding: '8px 20px',
    color: '#fff'
  },
  badge: {
    top: '5px',
    right: '5px',
    padding: '4px 6px',
    fontSize: '10px'
  }
};