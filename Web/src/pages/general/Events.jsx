import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from "../../store/useAuthStore"
import { MOCK_EVENTS } from '../../eventDummy'

// Mock Events Data


const CATEGORIES = ["All", "Technology", "Music", "Wellness", "Business", "Art", "Food"]

const items = [
  { id: 0, title: "Treasured ten: selections from the costume collection", time: "TODAY | 9:30 AM", location: "Chicago History Museum", img: "https://images.unsplash.com/photo-1539109132314-347596d6b508?auto=format&fit=crop&w=800&q=80" },
  { id: 1, title: "Modern Art Gala", time: "TOMORROW | 7:00 PM", location: "MOMA New York", img: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=800&q=80" },
  // Add more items here to fill the bottom row...
];

function Events() {
  const { authUser } = useAuthStore()

  console.log(authUser);





  const [selectedCategory, setSelectedCategory] = useState("All")
  const [priceFilter, setPriceFilter] = useState("all")
  const [activeIndex, setActiveIndex] = useState(0);

  const navigate = useNavigate();

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % items.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + items.length) % items.length);



  const filteredEvents = MOCK_EVENTS.filter(event => {
    const categoryMatch = selectedCategory === "All" || event.category === selectedCategory
    const priceMatch = priceFilter === "all" || event.price === priceFilter
    return categoryMatch && priceMatch
  })

  const handleExploreEvents = () => {
    setSelectedCategory("All")
    const eventsSection = document.getElementById("events-section")
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleViewDetails = (eventId) => {
    navigate(`/event/${eventId}`)
  }

  return (
    <div style={{ minHeight: "100vh" }}>
      {/* hero section */}
      <section className="hero-section d-flex align-items-center overflow-hidden position-relative">
        {/* Abstract Background Glow */}
        <div className="radial-glow"></div>

        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row align-items-center g-5">

            {/* Left Column: Content */}
            <div className="col-12 col-md-6 text-white">
              <p className="text-secondary mb-2 fw-medium opacity-75">
                All the fun starts here.
              </p>
              <h1 className="display-3 fw-bold mb-4">
                Book your <br />
                <span className="position-relative">
                  Tickets
                  <span className="heading-underline"></span>
                </span> for Event!
              </h1>

              <ul className="list-unstyled mb-5">
                <li className="d-flex align-items-center mb-3 opacity-90">
                  <i className="bi bi-circle-fill me-3 small-dot"></i>
                  <span>Safe, Secure, Reliable ticketing.</span>
                </li>
                <li className="d-flex align-items-center opacity-90">
                  <i className="bi bi-circle-fill me-3 small-dot"></i>
                  <span>Your ticket to live entertainment!</span>
                </li>
              </ul>

              <div className="mt-4">
                <a href='#' className="btn btn-light btn-lg px-4 py-2 rounded-0 fw-bold d-inline-flex align-items-center gap-2">
                  View More <i className="bi bi-arrow-down"></i>
                </a>
              </div>
            </div>

            {/* Right Column: Image Grid */}
            <div className="col-12 col-md-6 position-relative">
              {/* Decorative Zigzags and Corners */}
              <div className="decoration-zigzag top-right d-none d-lg-block"></div>
              <div className="decoration-zigzag bottom-left d-none d-lg-block"></div>
              <div className="frame-corner top-corner"></div>
              <div className="frame-corner bottom-corner"></div>

              <div className="row g-3 image-grid">
                <div className="col-6">
                  <div className="hero-img-wrapper img-tall">
                    <img src="../assets/images/recording.avif" alt="Concert" className="img-fluid" />
                  </div>
                </div>
                <div className="col-6 mt-5">
                  <div className="hero-img-wrapper img-square">
                    <img src="../assets/images/party.avif" alt="Artist" className="img-fluid" />
                  </div>
                </div>
                <div className="col-6 mt-n4">
                  <div className="hero-img-wrapper img-square">
                    <img src="../assets/images/dj.avif" alt="DJ" className="img-fluid" />
                  </div>
                </div>
                <div className="col-6">
                  <div className="hero-img-wrapper img-tall">
                    <img src="../assets/images/banner.png" alt="Singer" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* upcoming events section */}
      <section className="py-5 my-4" >
        <div className="container">
          <h2 className="text-center display-5 mb-5 fw-bold">Recommended for You</h2>

          {/* Added id "eventCarousel" to link controls */}
          <div id="eventCarousel" className="carousel slide position-relative" data-bs-ride="carousel">
            <button
              className="carousel-control-prev custom-nav-btn"
              type="button"
              data-bs-target="#eventCarousel"
              data-bs-slide="prev"
            >
              <i className="bi bi-chevron-left"></i>
            </button>

            <button
              className="carousel-control-next custom-nav-btn"
              type="button"
              data-bs-target="#eventCarousel"
              data-bs-slide="next"
            >
              <i className="bi bi-chevron-right"></i>
            </button>

            <div className="carousel-inner">
              {MOCK_EVENTS.map((event, index) => (
                <div key={event.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <div className="container row mx-auto position-relative p-0 d-flex align-items-center justify-content-center" style={{ minHeight: '550px' }}>

                    <div className="col-lg-10 p-0 position-relative">
                      <img
                        src={event.image}
                        className="rounded-3 shadow-lg w-100"
                        alt={event.title}
                        style={{ height: '480px', objectFit: 'cover', border: '1px solid #333' }}
                      />

                      <div className="glass-card position-absolute translate-middle-y top-50 end-0 me-lg-n5 p-4 rounded-4 shadow-2xl col-11 col-md-7 col-lg-6">

                        <div className="d-flex gap-3 mb-3">
                          {/* Date Component */}
                          <div className="date-box rounded-3 overflow-hidden text-center shadow">
                            <div className="bg-white text-dark fw-bold py-1 px-3 fs-4">17</div>
                            <div className="bg-white text-dark small pb-1">June, 2025</div>
                            <div className="bg-primary text-white x-small py-1" style={{ fontSize: '10px' }}>07:00 pm</div>
                          </div>

                          {/* Title Section */}
                          <div className="flex-grow-1 text-white">
                            <div className="d-flex justify-content-between align-items-center">
                              <span className="small opacity-75">{event.category} Party</span>
                              {/* <div className="d-flex gap-2">
                                <i className="bi bi-heart-fill glass-icon p-2 rounded-circle"></i>
                                <i className="bi bi-bookmark-fill glass-icon p-2 rounded-circle"></i>
                              </div> */}
                            </div>
                            <h3 className="h4 fw-bold">{event.title}</h3>
                          </div>
                        </div>

                        <p className="text-white small opacity-75 mb-4 pe-lg-4">
                          Join us for an exclusive Business Party filled with networking opportunities, engaging conversations, and a touch of celebration!
                        </p>

                        <div className="d-flex gap-3">
                          <button className="btn btn-outline-light border-secondary px-4 py-2 d-flex align-items-center gap-2">
                            <i className="bi bi-journal-text"></i> Get Ticket
                          </button>
                          <a href={`/event/${event.id}`} className="btn btn-outline-light border-secondary px-4 py-2">
                            More Details
                          </a>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* instruction section */}
      <section className="steps-section py-5 position-relative overflow-hidden">
        <div className="container py-5">

          {/* Step 1: Image Left, Text Right */}
          <div className="row mb-lg-5 align-items-center pb-5 g-5">
            <div className="col-12 col-md-6 position-relative">
              {/* The Image Frame */}
              <div className="image-frame-wrapper">
                <div className="decorative-frame"></div>
                <img
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800"
                  alt="Tunnel"
                  className="img-fluid rounded-1 position-relative z-1"
                />
                {/* Floating Icon Card */}
                <div className="floating-icon-card shadow-lg">
                  <i className="bi bi-layout-text-sidebar-reverse fs-1"></i>
                </div>
                {/* Loopy Line Decor */}
                <div className="loopy-decor top-0 start-100 translate-middle">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <path d="M10 50 C 20 10, 50 10, 50 40" stroke="white" strokeWidth="2" strokeDasharray="4 4" fill="transparent" opacity="0.4" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 text-white ps-md-5">
              <span className="text-secondary fw-bold d-block mb-2 h5">Step 1</span>
              <h2 className="display-5 fw-bold mb-4">Discover Events</h2>
              <p className="text-gray leading-relaxed">
                Browse concerts, workshops, conferences, and more. <br />
                Find events that match your interests and schedule.
              </p>
            </div>
          </div>

          {/* Connection Path (Dashed Line) - Hidden on Mobile */}
          <div className="connection-path d-none d-md-block">
            <svg width="200" height="150" viewBox="0 0 200 150" fill="none">
              <path d="M0 10 Q 100 150 200 10" stroke="white" strokeWidth="2" strokeDasharray="6 6" opacity="0.2" fill="none" />
            </svg>
          </div>

          {/* Step 2: Text Left, Image Right */}
          <div className="row my-lg-5 py-lg-5 align-items-center g-5 flex-column-reverse flex-md-row">
            <div className="col-12 col-md-6 text-white pe-md-5 text-md-start">
              <span className="text-secondary fw-bold d-block mb-2 h5">Step 2</span>
              <h2 className="display-5 fw-bold mb-4">Book Your Ticket</h2>
              <p className="text-gray leading-relaxed">
                Choose your event and reserve your spot in seconds. <br />
                Enjoy fast, secure, and seamless ticket booking.
              </p>
            </div>

            <div className="col-12 col-md-6 position-relative">
              <div className="image-frame-wrapper ms-auto">
                <div className="decorative-frame frame-right"></div>
                <img
                  src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800"
                  alt="Tickets"
                  className="img-fluid rounded-1 position-relative z-1"
                />
                {/* Floating Icon Card */}
                <div className="floating-icon-card card-left shadow-lg">
                  <i className="bi bi-play-btn fs-1"></i>
                </div>
                {/* Loopy Line Decor */}
                <div className="loopy-decor top-0 start-0 translate-middle">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" transform="scale(-1, 1)">
                    <path d="M10 50 C 20 10, 50 10, 50 40" stroke="white" strokeWidth="2" strokeDasharray="4 4" fill="transparent" opacity="0.4" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Connection Path (Dashed Line) - Hidden on Mobile */}
          <div className="connection-path d-none d-md-block">
            <svg width="200" height="150" viewBox="0 0 200 150" fill="none">
              <path d="M0 10 Q 100 150 200 10" stroke="white" strokeWidth="2" strokeDasharray="6 6" opacity="0.2" fill="none" />
            </svg>
          </div>

          {/* Step 3: Image Left, Text Right */}
          <div className="row pt-lg-5 align-items-center g-5">
            <div className="col-12 col-md-6 position-relative">
              {/* The Image Frame */}
              <div className="image-frame-wrapper">
                <div className="decorative-frame"></div>
                <img
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800"
                  alt="Tunnel"
                  className="img-fluid rounded-1 position-relative z-1"
                />
                {/* Floating Icon Card */}
                <div className="floating-icon-card shadow-lg">
                  <i className="bi bi-layout-text-sidebar-reverse fs-1"></i>
                </div>
                {/* Loopy Line Decor */}
                <div className="loopy-decor top-0 start-100 translate-middle">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <path d="M10 50 C 20 10, 50 10, 50 40" stroke="white" strokeWidth="2" strokeDasharray="4 4" fill="transparent" opacity="0.4" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 text-white ps-md-5">
              <span className="text-secondary fw-bold d-block mb-2 h5">Step 3</span>
              <h2 className="display-5 fw-bold mb-4">3. Attend & Enjoy</h2>
              <p className="text-gray leading-relaxed">
                Receive your digital ticket with instant QR check-in. <br />
                Show up, scan, and enjoy your event hassle-free.
              </p>
            </div>
          </div>


        </div>
      </section>



      {/* Filters Section */}
      <section id="events-section" style={styles.filterSection}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Browse Events</h2>

          {/* Category Filter */}
          <div style={styles.filterGroup}>
            <label style={styles.filterLabel}>Category</label>
            <div style={styles.categoryPills}>
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  style={{
                    ...styles.pill,
                    ...(selectedCategory === category
                      ? styles.pillActive
                      : styles.pillInactive)
                  }}
                  onMouseEnter={(e) => {
                    if (selectedCategory !== category) {
                      e.target.style.backgroundColor = "#F3F4F6"
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedCategory !== category) {
                      e.target.style.backgroundColor = "#FFFFFF"
                    }
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div style={styles.filterGroup}>
            <label style={styles.filterLabel}>Price</label>
            <div style={styles.priceFilters}>
              <label style={styles.checkboxLabel}>
                <input
                  type="radio"
                  name="price"
                  value="all"
                  checked={priceFilter === "all"}
                  onChange={(e) => setPriceFilter(e.target.value)}
                  style={styles.checkbox}
                />
                All Events
              </label>
              <label style={styles.checkboxLabel}>
                <input
                  type="radio"
                  name="price"
                  value="free"
                  checked={priceFilter === "free"}
                  onChange={(e) => setPriceFilter(e.target.value)}
                  style={styles.checkbox}
                />
                Free Events
              </label>
              <label style={styles.checkboxLabel}>
                <input
                  type="radio"
                  name="price"
                  value="paid"
                  checked={priceFilter === "paid"}
                  onChange={(e) => setPriceFilter(e.target.value)}
                  style={styles.checkbox}
                />
                Paid Events
              </label>
            </div>
          </div>

          {/* Events Count */}
          <p style={styles.eventCount}>
            Showing {filteredEvents.length} event{filteredEvents.length !== 1 ? 's' : ''}
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section id="events-section" className="py-5">
        <div className="container">
          {filteredEvents.length > 0 ? (
            <div className="row g-4">
              {filteredEvents.map((event) => (
                <div key={event.id} className="col-12 col-md-6 col-lg-4">
                  <div className="card shadow-sm h-100 overflow-hidden">
                    <div style={{ position: 'relative' }}>
                      <img src={event.image} className="card-img-top" alt={event.title} style={{ height: 220, objectFit: 'cover' }} />
                      <span className="badge bg-primary position-absolute" style={{ top: 12, left: 12 }}>{event.category}</span>
                      <span className={`badge position-absolute ${event.price === 'free' ? 'bg-success' : 'bg-warning text-dark'}`} style={{ top: 12, right: 12 }}>{event.price === 'free' ? 'Free' : 'Paid'}</span>
                    </div>

                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{event.title}</h5>

                      <div className="mb-2 small text-muted d-flex gap-3">
                        <div><i className="bi bi-calendar-event me-1"></i> {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</div>
                        <div><i className="bi bi-clock me-1"></i> {event.time}</div>
                      </div>

                      <p className="mb-3 small text-muted"><i className="bi bi-geo-alt me-1"></i> {event.location}</p>

                      <div className="mt-auto d-flex justify-content-between align-items-center">
                        <div className="small text-muted"><i className="bi bi-people-fill me-1"></i> {event.attendees}</div>
                        <button onClick={() => handleViewDetails(event.id)} className="btn btn-primary btn-sm">View Details</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-5">
              <p className="mb-0">No events found. Try adjusting your filters!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}







const styles = {
  navbar: {
    backgroundColor: "#FFFFFF",
    borderBottom: "1px solid #E5E7EB",
    padding: "1rem 0",
    position: "sticky",
    top: 0,
    zIndex: 100,
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)"
  },
  navContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#4F46E5",
    margin: 0
  },
  logoutBtn: {
    backgroundColor: "#FFFFFF",
    color: "#4F46E5",
    border: "1px solid #4F46E5",
    padding: "0.5rem 1rem",
    borderRadius: "0.5rem",
    cursor: "pointer",
    fontWeight: "500",
    transition: "all 0.3s ease",
    fontSize: "0.875rem"
  },
  heroSection: {
    backgroundColor: "#EEF2FF",
    padding: "5rem 1rem",
    textAlign: "center"
  },
  heroContent: {
    maxWidth: "800px",
    margin: "0 auto"
  },
  heroTitle: {
    fontSize: "3rem",
    fontWeight: "800",
    color: "#111827",
    margin: "0 0 1rem 0",
    lineHeight: "1.2"
  },
  heroSubtitle: {
    fontSize: "1.125rem",
    color: "#6B7280",
    margin: "0 0 2rem 0",
    lineHeight: "1.6"
  },
  heroBtnContainer: {
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  primaryBtn: {
    backgroundColor: "#4F46E5",
    color: "#FFFFFF",
    border: "none",
    padding: "0.875rem 2rem",
    borderRadius: "0.5rem",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 6px rgba(79, 70, 229, 0.3)"
  },
  secondaryBtn: {
    backgroundColor: "#FFFFFF",
    color: "#4F46E5",
    border: "2px solid #4F46E5",
    padding: "0.75rem 2rem",
    borderRadius: "0.5rem",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease"
  },
  filterSection: {
    backgroundColor: "#FFFFFF",
    padding: "2rem 1rem",
    borderBottom: "1px solid #E5E7EB"
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto"
  },
  sectionTitle: {
    fontSize: "2rem",
    fontWeight: "700",
    color: "#111827",
    margin: "0 0 2rem 0"
  },
  filterGroup: {
    marginBottom: "2rem"
  },
  filterLabel: {
    display: "block",
    fontSize: "0.875rem",
    fontWeight: "600",
    color: "#111827",
    marginBottom: "0.75rem"
  },
  categoryPills: {
    display: "flex",
    gap: "0.75rem",
    flexWrap: "wrap"
  },
  pill: {
    padding: "0.5rem 1rem",
    borderRadius: "9999px",
    border: "1px solid #E5E7EB",
    cursor: "pointer",
    fontSize: "0.875rem",
    fontWeight: "500",
    transition: "all 0.2s ease"
  },
  pillActive: {
    backgroundColor: "#4F46E5",
    color: "#FFFFFF",
    border: "1px solid #4F46E5"
  },
  pillInactive: {
    backgroundColor: "#FFFFFF",
    color: "#111827",
    border: "1px solid #E5E7EB"
  },
  priceFilters: {
    display: "flex",
    gap: "2rem",
    flexWrap: "wrap"
  },
  checkboxLabel: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    cursor: "pointer",
    fontSize: "0.875rem",
    color: "#111827"
  },
  checkbox: {
    cursor: "pointer",
    accentColor: "#4F46E5"
  },
  eventCount: {
    fontSize: "0.875rem",
    color: "#6B7280",
    margin: "0"
  },
  eventsSection: {
    backgroundColor: "#FFFFFF",
    padding: "3rem 1rem"
  },
  eventsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "2rem"
  },
  eventCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: "0.75rem",
    overflow: "hidden",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
    transition: "all 0.3s ease",
    border: "1px solid #E5E7EB"
  },
  eventImageContainer: {
    position: "relative",
    overflow: "hidden",
    height: "200px",
    backgroundColor: "#F3F4F6"
  },
  eventImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s ease"
  },
  categoryBadge: {
    position: "absolute",
    top: "0.75rem",
    left: "0.75rem",
    backgroundColor: "#4F46E5",
    color: "#FFFFFF",
    padding: "0.375rem 0.75rem",
    borderRadius: "0.375rem",
    fontSize: "0.75rem",
    fontWeight: "600"
  },
  priceBadge: {
    position: "absolute",
    top: "0.75rem",
    right: "0.75rem",
    backgroundColor: "#FFFFFF",
    color: "#4F46E5",
    padding: "0.375rem 0.75rem",
    borderRadius: "0.375rem",
    fontSize: "0.75rem",
    fontWeight: "600",
    border: "1px solid #4F46E5"
  },
  eventCardBody: {
    padding: "1.25rem"
  },
  eventTitle: {
    fontSize: "1.125rem",
    fontWeight: "700",
    color: "#111827",
    margin: "0 0 1rem 0",
    lineHeight: "1.4"
  },
  eventMeta: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    marginBottom: "1rem"
  },
  metaItem: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    fontSize: "0.875rem",
    color: "#6B7280"
  },
  metaIcon: {
    fontSize: "1rem"
  },
  metaText: {
    color: "#6B7280"
  },
  eventFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderTop: "1px solid #E5E7EB",
    paddingTop: "1rem",
    marginTop: "1rem"
  },
  attendees: {
    display: "flex",
    alignItems: "center",
    gap: "0.375rem",
    fontSize: "0.875rem",
    color: "#6B7280"
  },
  attendeesIcon: {
    fontSize: "1rem"
  },
  attendeesText: {
    color: "#6B7280"
  },
  viewDetailsBtn: {
    backgroundColor: "#4F46E5",
    color: "#FFFFFF",
    border: "none",
    padding: "0.5rem 1.25rem",
    borderRadius: "0.375rem",
    fontSize: "0.875rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.2s ease"
  },
  noEventsContainer: {
    textAlign: "center",
    padding: "3rem 1rem"
  },
  noEventsText: {
    fontSize: "1.125rem",
    color: "#6B7280",
    margin: 0
  },
  footer: {
    backgroundColor: "#F9FAFB",
    borderTop: "1px solid #E5E7EB",
    padding: "2rem 1rem",
    textAlign: "center"
  },
  footerText: {
    color: "#6B7280",
    fontSize: "0.875rem",
    margin: 0
  }
}

export default Events


