import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../store/useAuthStore'

// Mock Events Data (same as Events.jsx)
const MOCK_EVENTS = [
  {
    id: 1,
    title: "Tech Conference 2025",
    date: "2025-01-15",
    time: "09:00 AM",
    location: "San Francisco, CA",
    category: "Technology",
    price: "paid",
    ticketPrice: 99,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    description: "Join industry leaders for an exciting day of talks, workshops, and networking.",
    fullDescription: "This comprehensive tech conference brings together the brightest minds in the technology industry. Expect keynote speeches from CEOs, hands-on workshops covering emerging technologies, and ample networking opportunities. Whether you're a developer, designer, or tech enthusiast, there's something for everyone.",
    attendees: 250,
    rating: 4.8,
    highlights: [
      "10+ keynote speakers",
      "30+ workshops and sessions",
      "Networking lunch included",
      "Conference materials & swag",
      "Virtual attendance option"
    ]
  },
  {
    id: 2,
    title: "Summer Music Festival",
    date: "2025-02-20",
    time: "06:00 PM",
    location: "Los Angeles, CA",
    category: "Music",
    price: "paid",
    ticketPrice: 150,
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500&h=300&fit=crop",
    description: "Experience live performances from top artists. Three days of amazing music!",
    fullDescription: "Get ready for three days of incredible live music performances! This festival features multiple stages with artists spanning genres from rock to hip-hop, EDM to indie. Complete with food vendors, camping facilities, and camping shuttles.",
    attendees: 1200,
    rating: 4.9,
    highlights: [
      "3-day festival pass",
      "50+ artist performances",
      "Multiple stage areas",
      "Food & beverage vendors",
      "Free camping on-site"
    ]
  },
  {
    id: 3,
    title: "Community Yoga Session",
    date: "2025-01-10",
    time: "08:00 AM",
    location: "Central Park, NY",
    category: "Wellness",
    price: "free",
    ticketPrice: 0,
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&h=300&fit=crop",
    description: "Relaxing outdoor yoga session for all skill levels. Bring your mat!",
    fullDescription: "Join our community for a rejuvenating yoga session in the heart of Central Park. Suitable for all skill levels, from beginners to experienced yogis. A certified instructor will guide you through a 90-minute session followed by a meditation.",
    attendees: 45,
    rating: 4.6,
    highlights: [
      "All skill levels welcome",
      "Certified instructor",
      "90-minute session",
      "Guided meditation",
      "Bring your own mat"
    ]
  },
  {
    id: 4,
    title: "Startup Pitch Night",
    date: "2025-01-20",
    time: "07:00 PM",
    location: "New York, NY",
    category: "Business",
    price: "free",
    ticketPrice: 0,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    description: "Watch innovative startups pitch their ideas to investors.",
    fullDescription: "Join venture capitalists, angel investors, and startup enthusiasts for an evening of innovative pitches. Watch as 15 early-stage startups present their solutions to a panel of experienced investors. Great networking opportunity!",
    attendees: 300,
    rating: 4.7,
    highlights: [
      "15 startup pitches",
      "Q&A with investors",
      "Networking reception",
      "Light appetizers",
      "Free entry"
    ]
  },
  {
    id: 5,
    title: "Art Exhibition Opening",
    date: "2025-02-05",
    time: "05:00 PM",
    location: "Chicago, IL",
    category: "Art",
    price: "paid",
    ticketPrice: 35,
    image: "https://images.unsplash.com/photo-1561214115-6d2f1b0609fa?w=500&h=300&fit=crop",
    description: "Celebrate contemporary art with wine, cheese, and networking.",
    fullDescription: "Experience an exclusive opening night of contemporary art from emerging artists. Enjoy wine, artisanal cheese, and meet the artists as they discuss their latest works. A perfect evening for art lovers and collectors.",
    attendees: 120,
    rating: 4.5,
    highlights: [
      "20+ contemporary artworks",
      "Artist meet & greet",
      "Wine selection",
      "Gourmet cheese board",
      "Gallery exhibition"
    ]
  },
  {
    id: 6,
    title: "Food & Wine Tasting",
    date: "2025-02-15",
    time: "06:30 PM",
    location: "Napa Valley, CA",
    category: "Food",
    price: "paid",
    ticketPrice: 125,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561143?w=500&h=300&fit=crop",
    description: "Taste wines from award-winning vineyards paired with gourmet cuisine.",
    fullDescription: "An evening of gastronomic delight! Sample wines from five award-winning Napa Valley vineyards, each paired with a custom-designed course created by a Michelin-trained chef. Perfect for wine enthusiasts and food lovers.",
    attendees: 80,
    rating: 4.8,
    highlights: [
      "5 wine selections",
      "6-course gourmet meal",
      "Michelin-trained chef",
      "Vineyard tour included",
      "Swag bag with wines"
    ]
  },
  {
    id: 7,
    title: "Digital Marketing Workshop",
    date: "2025-01-25",
    time: "10:00 AM",
    location: "Seattle, WA",
    category: "Technology",
    price: "paid",
    ticketPrice: 79,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    description: "Learn latest digital marketing strategies from industry experts.",
    fullDescription: "Master the latest digital marketing strategies from industry veterans. This intensive workshop covers SEO, social media marketing, email marketing, and paid advertising. Includes practical exercises and actionable takeaways.",
    attendees: 180,
    rating: 4.6,
    highlights: [
      "6-hour intensive workshop",
      "Expert instructors",
      "Practical exercises",
      "Resource toolkit included",
      "Certificate of completion"
    ]
  },
  {
    id: 8,
    title: "Morning Meditation & Breakfast",
    date: "2025-01-12",
    time: "07:00 AM",
    location: "Boston, MA",
    category: "Wellness",
    price: "free",
    ticketPrice: 0,
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&h=300&fit=crop",
    description: "Start your day with guided meditation and healthy breakfast.",
    fullDescription: "Begin your morning with a guided 30-minute meditation session followed by a nutritious organic breakfast. Learn mindfulness techniques to manage stress and start your day with clarity and energy.",
    attendees: 65,
    rating: 4.7,
    highlights: [
      "30-minute meditation",
      "Organic breakfast",
      "Mindfulness workshop",
      "Take-home guide",
      "Relaxing environment"
    ]
  }
]



function EventDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { isLoggingOut } = useAuthStore()
  const [quantity, setQuantity] = useState(1)
  const [booked, setBooked] = useState(false)

  const event = MOCK_EVENTS.find(e => e.id === parseInt(id))

  if (isLoggingOut) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: "100vh" }}>
        <span className="loader"></span>
      </div>
    )
  }

  if (!event) {
    return (
      <div style={styles.container}>
        <div style={styles.notFoundContainer}>
          <h1 style={styles.notFoundTitle}>Event Not Found</h1>
          <p style={styles.notFoundText}>The event you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/events')}
            style={styles.primaryBtn}
          >
            Back to Events
          </button>
        </div>
      </div>
    )
  }

  const totalPrice = event.ticketPrice * quantity

  const handleBooking = () => {
    setBooked(true)
    setTimeout(() => {
      setBooked(false)
      navigate('/events')
    }, 2000)
  }

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value)
    if (value > 0) {
      setQuantity(value)
    }
  }

  return (
    <div style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>
      {/* Hero Section */}
      <div className="min-vh-100" style={{ backgroundColor: '#F8F9FA', overflowX: 'hidden' }}>
      <div className="container py-5 mt-4">
        <div className="row align-items-center">

          {/* Left Content */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="d-flex align-items-center mb-4">
              <div className="bg-white rounded-circle d-flex align-items-center justify-content-center shadow-sm" style={{ width: '40px', height: '40px' }}>
                <i className="bi bi-star-fill text-dark"></i>
              </div>
              <div className="ms-3">
                <span className="fw-bold d-block">5 Stars</span>
                <small className="text-muted">Read Our <span className="text-decoration-underline text-dark fw-bold" style={{ cursor: 'pointer' }}>Success Stories</span></small>
              </div>
            </div>

            <h1 className="display-2 fw-bold mb-4">Host Lovely<br />Events</h1>
            <p className="lead text-secondary mb-5" style={{ maxWidth: '400px' }}>
              Send Newsletters. Share Upcoming Events & Community Updates.
            </p>

            <div className="d-flex align-items-center gap-4">
              <button className="btn btn-yellow px-4 py-3">Get Started — It's Free</button>
              <a href="#" className="text-dark fw-bold text-decoration-none border-bottom border-dark border-2 pb-1">
                Watch Demo <i className="bi bi-arrow-up-right ms-1"></i>
              </a>
            </div>
          </div>

          {/* Right Image/Graphics */}
          <div className="col-lg-6">
            <div className="hero-shape-container">
              {/* Placeholder image simulating the organic crop */}
              <img
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1000"
                alt="Event"
                className="main-image-mask shadow"
              />

              {/* Location Badge */}
              <div className="location-badge d-flex align-items-center">
                <div className="me-3">
                  <small className="bg-warning px-2 rounded fw-bold" style={{ fontSize: '10px' }}>Location</small>
                  <div className="fw-bold">Park Avenue <i className="bi bi-check-circle-fill text-dark small"></i></div>
                </div>
                <div className="ms-auto bg-dark text-white rounded-pill px-2 py-1" style={{ fontSize: '12px' }}>
                  <i className="bi bi-star-fill me-1"></i>5.0
                </div>
              </div>

              {/* Glassmorphism Team Party Card */}
              <div className="glass-card party-card-pos">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="fw-bold">Online</span>
                  <span className="badge rounded-pill bg-white text-dark py-2 px-3 shadow-sm">VIP</span>
                </div>
                <h3 className="display-font h2 mb-3">Team Party</h3>

                <div className="d-flex align-items-center mb-4">
                  <img src="https://i.pravatar.cc/150?u=1" className="rounded-circle border border-white" width="30" alt="user" />
                  <img src="https://i.pravatar.cc/150?u=2" className="rounded-circle border border-white ms-n2" width="30" style={{ marginLeft: '-10px' }} alt="user" />
                  <div className="bg-warning rounded-circle d-flex align-items-center justify-content-center border border-white fw-bold" style={{ width: '30px', height: '30px', fontSize: '12px', marginLeft: '-10px' }}>+9</div>
                </div>

                <div className="small fw-bold mb-2">Invited Only • Private</div>
                <div className="d-flex justify-content-between text-muted small">
                  <span><i className="bi bi-clock me-1"></i> 4:00 PM</span>
                  <span><i className="bi bi-reception-4 me-1"></i> 1 Hr 45 Mins</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Bottom Features Section */}
      <section className="container py-5 mt-5">
        <div className="row pt-5 border-top border-light">
          <div className="col-md-4 mb-4 mb-md-0">
            <h2 className="display-5 fw-bold">Get Updates<br />Live</h2>
          </div>

          <div className="col-md-4 mb-4 mb-md-0">
            <hr className="w-25 mb-4 border-2 opacity-100" />
            <span className="text-uppercase fw-bold small d-block mb-3">Newsletter</span>
            <h4 className="display-font mb-3">Send<br />Newsletters</h4>
            <p className="text-muted small">Best Payment Gateway To Go Live Instantly.</p>
          </div>

          <div className="col-md-4">
            <hr className="w-25 mb-4 border-2 opacity-100" />
            <span className="text-uppercase fw-bold small d-block mb-3">Feedback</span>
            <h4 className="display-font mb-3">Get<br />Feedback</h4>
            <p className="text-muted small">Best Payment Gateway To Go Live Instantly.</p>
          </div>
        </div>
      </section>

      {/* Success Message */}
      {booked && (
        <div style={styles.successMessage}>
          <div style={styles.successContent}>
            <span style={styles.successIcon}>✓</span>
            <p style={styles.successText}>Booking confirmed! Redirecting...</p>
          </div>
        </div>
      )}

      {/* Hero Image */}
      <div style={styles.heroImageContainer}>
        <img
          src={event.image}
          alt={event.title}
          style={styles.heroImage}
        />
        <div style={styles.overlayInfo}>
          <span style={styles.categoryBadge}>{event.category}</span>
          <span style={styles.ratingBadge}>⭐ {event.rating}</span>
        </div>
      </div>

      {/* Main Content */}
      <div style={styles.contentWrapper}>
        <div style={styles.mainColumn}>
          {/* Title & Basic Info */}
          <div style={styles.titleSection}>
            <h1 style={styles.title}>{event.title}</h1>
            <div style={styles.basicInfo}>
              <div style={styles.infoItem}>
                <span style={styles.infoIcon}>📅</span>
                <div>
                  <p style={styles.infoLabel}>Date</p>
                  <p style={styles.infoValue}>
                    {new Date(event.date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>
              <div style={styles.infoItem}>
                <span style={styles.infoIcon}>🕐</span>
                <div>
                  <p style={styles.infoLabel}>Time</p>
                  <p style={styles.infoValue}>{event.time}</p>
                </div>
              </div>
              <div style={styles.infoItem}>
                <span style={styles.infoIcon}>📍</span>
                <div>
                  <p style={styles.infoLabel}>Location</p>
                  <p style={styles.infoValue}>{event.location}</p>
                </div>
              </div>
              <div style={styles.infoItem}>
                <span style={styles.infoIcon}>👥</span>
                <div>
                  <p style={styles.infoLabel}>Attendees</p>
                  <p style={styles.infoValue}>{event.attendees} people</p>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>About This Event</h2>
            <p style={styles.description}>{event.fullDescription}</p>
          </div>

          {/* Highlights */}
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>What's Included</h2>
            <ul style={styles.highlightsList}>
              {event.highlights.map((highlight, index) => (
                <li key={index} style={styles.highlightItem}>
                  <span style={styles.checkmark}>✓</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sidebar - Booking Card */}
        <div style={styles.sideColumn}>
          <div style={styles.bookingCard}>
            <h3 style={styles.bookingTitle}>Book Your Spot</h3>

            {/* Price */}
            <div style={styles.priceSection}>
              {event.price === "free" ? (
                <div>
                  <p style={styles.freeLabel}>FREE EVENT</p>
                </div>
              ) : (
                <div>
                  <p style={styles.priceLabel}>Per Ticket</p>
                  <p style={styles.price}>${event.ticketPrice}</p>
                </div>
              )}
            </div>

            {/* Quantity Selector */}
            {event.price !== "free" && (
              <div style={styles.quantitySection}>
                <label style={styles.quantityLabel}>Number of Tickets</label>
                <select
                  value={quantity}
                  onChange={handleQuantityChange}
                  style={styles.quantitySelect}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </div>
            )}

            {/* Total */}
            {event.price !== "free" && (
              <div style={styles.totalSection}>
                <p style={styles.totalLabel}>Total:</p>
                <p style={styles.totalPrice}>${totalPrice}</p>
              </div>
            )}

            {/* Booking Button */}
            <button
              onClick={handleBooking}
              style={styles.bookBtn}
              onMouseEnter={(e) => e.target.style.backgroundColor = "#4338CA"}
              onMouseLeave={(e) => e.target.style.backgroundColor = "#4F46E5"}
            >
              {event.price === "free" ? "Claim Your Spot" : "Book Now"}
            </button>

            {/* Additional Info */}
            <div style={styles.infoBox}>
              <p style={styles.infoBoxText}>
                <span style={styles.infoBoxIcon}>ℹ️</span>
                You'll receive a confirmation email with event details and tickets.
              </p>
            </div>

            {/* Event Details */}
            <div style={styles.detailsBox}>
              <div style={styles.detailItem}>
                <span>Category</span>
                <span style={styles.detailValue}>{event.category}</span>
              </div>
              <div style={styles.detailItem}>
                <span>Price</span>
                <span style={styles.detailValue}>
                  {event.price === "free" ? "Free" : `$${event.ticketPrice}`}
                </span>
              </div>
              <div style={styles.detailItem}>
                <span>Rating</span>
                <span style={styles.detailValue}>⭐ {event.rating}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <p style={styles.footerText}>© 2025 JoinNify. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

const styles = {
  header: {
    backgroundColor: "#FFFFFF",
    borderBottom: "1px solid #E5E7EB",
    padding: "1rem 0",
    position: "sticky",
    top: 0,
    zIndex: 100,
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)"
  },
  headerContent: {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "0 1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  backBtn: {
    backgroundColor: "transparent",
    color: "#4F46E5",
    border: "none",
    fontSize: "1rem",
    fontWeight: "500",
    cursor: "pointer",
    padding: "0.5rem",
    transition: "all 0.2s ease"
  },
  headerTitle: {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#4F46E5",
    margin: 0
  },
  successMessage: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000
  },
  successContent: {
    backgroundColor: "#FFFFFF",
    borderRadius: "0.75rem",
    padding: "2rem",
    textAlign: "center",
    boxShadow: "0 20px 25px rgba(0, 0, 0, 0.15)"
  },
  successIcon: {
    fontSize: "3rem",
    color: "#10B981",
    display: "block",
    marginBottom: "1rem"
  },
  successText: {
    fontSize: "1.125rem",
    color: "#111827",
    margin: 0
  },
  heroImageContainer: {
    position: "relative",
    width: "100%",
    height: "400px",
    overflow: "hidden",
    backgroundColor: "#F3F4F6"
  },
  heroImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  },
  overlayInfo: {
    position: "absolute",
    bottom: "1.5rem",
    left: "1.5rem",
    display: "flex",
    gap: "1rem"
  },
  categoryBadge: {
    backgroundColor: "#4F46E5",
    color: "#FFFFFF",
    padding: "0.5rem 1rem",
    borderRadius: "0.375rem",
    fontSize: "0.875rem",
    fontWeight: "600"
  },
  ratingBadge: {
    backgroundColor: "#FFFFFF",
    color: "#111827",
    padding: "0.5rem 1rem",
    borderRadius: "0.375rem",
    fontSize: "0.875rem",
    fontWeight: "600",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)"
  },
  contentWrapper: {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "3rem 1rem",
    display: "grid",
    gridTemplateColumns: "1fr 320px",
    gap: "2rem"
  },
  mainColumn: {},
  sideColumn: {},
  titleSection: {
    marginBottom: "3rem"
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "800",
    color: "#111827",
    margin: "0 0 2rem 0",
    lineHeight: "1.2"
  },
  basicInfo: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "2rem"
  },
  infoItem: {
    display: "flex",
    gap: "1rem",
    paddingBottom: "1rem",
    borderBottom: "1px solid #E5E7EB"
  },
  infoIcon: {
    fontSize: "2rem"
  },
  infoLabel: {
    fontSize: "0.875rem",
    color: "#6B7280",
    margin: "0",
    fontWeight: "500"
  },
  infoValue: {
    fontSize: "1rem",
    color: "#111827",
    margin: "0.25rem 0 0 0",
    fontWeight: "600"
  },
  section: {
    marginBottom: "3rem"
  },
  sectionTitle: {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#111827",
    margin: "0 0 1rem 0"
  },
  description: {
    fontSize: "1rem",
    color: "#6B7280",
    lineHeight: "1.6",
    margin: 0
  },
  highlightsList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  },
  highlightItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "0.75rem",
    color: "#111827",
    fontSize: "1rem",
    lineHeight: "1.5"
  },
  checkmark: {
    color: "#10B981",
    fontWeight: "bold",
    marginTop: "0.2rem",
    flexShrink: 0
  },
  bookingCard: {
    backgroundColor: "#EEF2FF",
    borderRadius: "0.75rem",
    padding: "1.5rem",
    border: "1px solid #E5E7EB",
    position: "sticky",
    top: "100px"
  },
  bookingTitle: {
    fontSize: "1.25rem",
    fontWeight: "700",
    color: "#111827",
    margin: "0 0 1.5rem 0"
  },
  priceSection: {
    marginBottom: "1.5rem",
    paddingBottom: "1.5rem",
    borderBottom: "1px solid #E5E7EB"
  },
  priceLabel: {
    fontSize: "0.875rem",
    color: "#6B7280",
    margin: "0",
    fontWeight: "500"
  },
  freeLabel: {
    fontSize: "1.25rem",
    fontWeight: "700",
    color: "#10B981",
    margin: 0
  },
  price: {
    fontSize: "2rem",
    fontWeight: "800",
    color: "#4F46E5",
    margin: "0.5rem 0 0 0"
  },
  quantitySection: {
    marginBottom: "1.5rem"
  },
  quantityLabel: {
    display: "block",
    fontSize: "0.875rem",
    fontWeight: "600",
    color: "#111827",
    marginBottom: "0.5rem"
  },
  quantitySelect: {
    width: "100%",
    padding: "0.625rem",
    borderRadius: "0.375rem",
    border: "1px solid #E5E7EB",
    fontSize: "1rem",
    color: "#111827",
    cursor: "pointer",
    backgroundColor: "#FFFFFF"
  },
  totalSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1.5rem",
    paddingBottom: "1.5rem",
    borderBottom: "1px solid #E5E7EB"
  },
  totalLabel: {
    fontSize: "0.875rem",
    color: "#6B7280",
    margin: 0,
    fontWeight: "500"
  },
  totalPrice: {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#4F46E5",
    margin: 0
  },
  bookBtn: {
    width: "100%",
    backgroundColor: "#4F46E5",
    color: "#FFFFFF",
    border: "none",
    padding: "0.875rem",
    borderRadius: "0.5rem",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.2s ease",
    marginBottom: "1.5rem"
  },
  infoBox: {
    backgroundColor: "#FFFFFF",
    borderRadius: "0.375rem",
    padding: "0.875rem",
    marginBottom: "1.5rem",
    border: "1px solid #E5E7EB"
  },
  infoBoxText: {
    fontSize: "0.75rem",
    color: "#6B7280",
    margin: 0,
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    lineHeight: "1.4"
  },
  infoBoxIcon: {
    fontSize: "1rem"
  },
  detailsBox: {
    backgroundColor: "#FFFFFF",
    borderRadius: "0.375rem",
    padding: "1rem",
    border: "1px solid #E5E7EB"
  },
  detailItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: "0.75rem",
    marginBottom: "0.75rem",
    fontSize: "0.875rem",
    color: "#6B7280"
  },
  detailValue: {
    color: "#111827",
    fontWeight: "600"
  },
  footer: {
    backgroundColor: "#F9FAFB",
    borderTop: "1px solid #E5E7EB",
    padding: "2rem 1rem",
    marginTop: "3rem"
  },
  footerContent: {
    maxWidth: "1400px",
    margin: "0 auto",
    textAlign: "center"
  },
  footerText: {
    color: "#6B7280",
    fontSize: "0.875rem",
    margin: 0
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "2rem 1rem"
  },
  notFoundContainer: {
    textAlign: "center",
    padding: "5rem 1rem"
  },
  notFoundTitle: {
    fontSize: "2rem",
    fontWeight: "700",
    color: "#111827",
    margin: "0 0 1rem 0"
  },
  notFoundText: {
    fontSize: "1rem",
    color: "#6B7280",
    margin: "0 0 2rem 0"
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
    transition: "all 0.3s ease"
  }
}

export default EventDetails

