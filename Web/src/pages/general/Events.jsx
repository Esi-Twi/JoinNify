import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../store/useAuthStore'

// Mock Events Data
const MOCK_EVENTS = [
  {
    id: 1,
    title: "Tech Conference 2025",
    date: "2025-01-15",
    time: "09:00 AM",
    location: "San Francisco, CA",
    category: "Technology",
    price: "paid",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    description: "Join industry leaders for an exciting day of talks, workshops, and networking.",
    attendees: 250,
    rating: 4.8
  },
  {
    id: 2,
    title: "Summer Music Festival",
    date: "2025-02-20",
    time: "06:00 PM",
    location: "Los Angeles, CA",
    category: "Music",
    price: "paid",
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500&h=300&fit=crop",
    description: "Experience live performances from top artists. Three days of amazing music!",
    attendees: 1200,
    rating: 4.9
  },
  {
    id: 3,
    title: "Community Yoga Session",
    date: "2025-01-10",
    time: "08:00 AM",
    location: "Central Park, NY",
    category: "Wellness",
    price: "free",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&h=300&fit=crop",
    description: "Relaxing outdoor yoga session for all skill levels. Bring your mat!",
    attendees: 45,
    rating: 4.6
  },
  {
    id: 4,
    title: "Startup Pitch Night",
    date: "2025-01-20",
    time: "07:00 PM",
    location: "New York, NY",
    category: "Business",
    price: "free",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    description: "Watch innovative startups pitch their ideas to investors.",
    attendees: 300,
    rating: 4.7
  },
  {
    id: 5,
    title: "Art Exhibition Opening",
    date: "2025-02-05",
    time: "05:00 PM",
    location: "Chicago, IL",
    category: "Art",
    price: "paid",
    image: "https://images.unsplash.com/photo-1561214115-6d2f1b0609fa?w=500&h=300&fit=crop",
    description: "Celebrate contemporary art with wine, cheese, and networking.",
    attendees: 120,
    rating: 4.5
  },
  {
    id: 6,
    title: "Food & Wine Tasting",
    date: "2025-02-15",
    time: "06:30 PM",
    location: "Napa Valley, CA",
    category: "Food",
    price: "paid",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561143?w=500&h=300&fit=crop",
    description: "Taste wines from award-winning vineyards paired with gourmet cuisine.",
    attendees: 80,
    rating: 4.8
  },
  {
    id: 7,
    title: "Digital Marketing Workshop",
    date: "2025-01-25",
    time: "10:00 AM",
    location: "Seattle, WA",
    category: "Technology",
    price: "paid",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    description: "Learn latest digital marketing strategies from industry experts.",
    attendees: 180,
    rating: 4.6
  },
  {
    id: 8,
    title: "Morning Meditation & Breakfast",
    date: "2025-01-12",
    time: "07:00 AM",
    location: "Boston, MA",
    category: "Wellness",
    price: "free",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&h=300&fit=crop",
    description: "Start your day with guided meditation and healthy breakfast.",
    attendees: 65,
    rating: 4.7
  }
]

const CATEGORIES = ["All", "Technology", "Music", "Wellness", "Business", "Art", "Food"]


function Events() {
  const { isLoggingOut, logout } = useAuthStore()
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [priceFilter, setPriceFilter] = useState("all")

  const logOut = () => {
    logout()
  }

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

  if (isLoggingOut) {
    return (
      <div className='d-flex align-items-center justify-content-center w-100' style={{ height: "100vh" }}>
        <span className="loader"></span>
      </div>
    )
  }

  return (
    <div style={{minHeight: "100vh" }}>

      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Discover and book amazing events around you</h1>
          <p style={styles.heroSubtitle}>
            Find the perfect event that matches your interests. From tech conferences to wellness sessions,
            JoinNify has it all.
          </p>
          <div style={styles.heroBtnContainer}>
            <button
              onClick={handleExploreEvents}
              style={styles.primaryBtn}
              onMouseEnter={(e) => e.target.style.backgroundColor = "#4338CA"}
              onMouseLeave={(e) => e.target.style.backgroundColor = "#4F46E5"}
            >
              Explore Events
            </button>
            <button
              style={styles.secondaryBtn}
              onMouseEnter={(e) => e.target.style.backgroundColor = "#E5E7EB"}
              onMouseLeave={(e) => e.target.style.backgroundColor = "#FFFFFF"}
            >
              Create Event
            </button>
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
      <section style={styles.eventsSection}>
        <div style={styles.container}>
          {filteredEvents.length > 0 ? (
            <div style={styles.eventsGrid}>
              {filteredEvents.map((event) => (
                <div
                  key={event.id}
                  style={styles.eventCard}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)"
                    e.currentTarget.style.boxShadow = "0 12px 24px rgba(79, 70, 229, 0.15)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)"
                    e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.08)"
                  }}
                >
                  {/* Event Image */}
                  <div style={styles.eventImageContainer}>
                    <img
                      src={event.image}
                      alt={event.title}
                      style={styles.eventImage}
                    />
                    <div style={styles.categoryBadge}>
                      {event.category}
                    </div>
                    <div style={styles.priceBadge}>
                      {event.price === "free" ? "Free" : "Paid"}
                    </div>
                  </div>

                  {/* Event Details */}
                  <div style={styles.eventCardBody}>
                    <h3 style={styles.eventTitle}>{event.title}</h3>

                    <div style={styles.eventMeta}>
                      <div style={styles.metaItem}>
                        <span style={styles.metaIcon}>📅</span>
                        <span style={styles.metaText}>
                          {new Date(event.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                      <div style={styles.metaItem}>
                        <span style={styles.metaIcon}>🕐</span>
                        <span style={styles.metaText}>{event.time}</span>
                      </div>
                    </div>

                    <div style={styles.eventMeta}>
                      <div style={styles.metaItem}>
                        <span style={styles.metaIcon}>📍</span>
                        <span style={styles.metaText}>{event.location}</span>
                      </div>
                    </div>

                    <div style={styles.eventFooter}>
                      <div style={styles.attendees}>
                        <span style={styles.attendeesIcon}>👥</span>
                        <span style={styles.attendeesText}>{event.attendees}</span>
                      </div>
                      <button
                        onClick={() => handleViewDetails(event.id)}
                        style={styles.viewDetailsBtn}
                        onMouseEnter={(e) => e.target.style.backgroundColor = "#4338CA"}
                        onMouseLeave={(e) => e.target.style.backgroundColor = "#4F46E5"}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={styles.noEventsContainer}>
              <p style={styles.noEventsText}>No events found. Try adjusting your filters!</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.container}>
          <p style={styles.footerText}>© 2025 JoinNify. All rights reserved.</p>
        </div>
      </footer>
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


