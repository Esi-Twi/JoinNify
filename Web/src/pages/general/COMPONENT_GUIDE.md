# JoinNify Events Components Guide

## Overview
This guide documents the Events and EventDetails components for the JoinNify event booking platform.

---

## Color Theme (Consistent Across App)

```css
Primary Purple:     #4F46E5  (buttons, CTAs, links, highlights)
Secondary Purple:   #EEF2FF  (section backgrounds, cards)
Dark Text:          #111827  (main headings, body text)
Muted Text:         #6B7280  (secondary text, descriptions)
Border/Divider:     #E5E7EB  (lines, borders)
White:              #FFFFFF  (backgrounds, card surfaces)
Success Green:      #10B981  (confirmation, checkmarks)
```

---

## Components Structure

### 1. Events.jsx (Landing/Home Page)
**Location:** `src/pages/general/Events.jsx`

#### Purpose
Main landing/home page displaying:
- Hero section with app branding
- Event listing grid with filtering
- Category and price filters
- Logout functionality

#### Key Features
- **Hero Section:** App name, tagline, and CTA buttons
- **Event Grid:** Responsive grid layout (auto-fill, min 300px)
- **Filters:** Category pills + Price radio buttons
- **Event Cards:** Image, title, date/time, location, category badge, price badge
- **Hover States:** Card lift effect, button color changes
- **Mobile Responsive:** Flexible grid and touch-friendly buttons

#### Data Structure
```javascript
{
  id: number,
  title: string,
  date: "YYYY-MM-DD",
  time: "HH:MM AM/PM",
  location: string,
  category: string,
  price: "free" | "paid",
  image: url,
  description: string,
  attendees: number,
  rating: number
}
```

#### Key Functions
- `handleExploreEvents()` - Smooth scroll to events section
- `handleViewDetails(eventId)` - Navigate to event details page
- `filteredEvents` - Computed filtered list based on category & price

#### Styling
- Uses inline styles object for maintainability
- Responsive breakpoints via CSS Grid
- Smooth transitions on all interactive elements
- Consistent spacing using rem units

---

### 2. EventDetails.jsx (Event Details Page)
**Location:** `src/pages/general/EventDetails.jsx`

#### Purpose
Detailed view of a single event with:
- Large hero image
- Complete event information
- Booking card with ticket selection
- Event highlights/features
- Back navigation

#### Key Features
- **Hero Image:** Full-width event image with overlays
- **Event Info:** Date, time, location, attendees in grid layout
- **Booking Card:** Sticky sidebar with booking functionality
- **Price Display:** Different UI for free vs paid events
- **Quantity Selector:** Dropdown for ticket quantity (1-10)
- **Booking Success:** Modal confirmation before redirect
- **Highlights:** List of included features with checkmarks

#### Component Flow
1. Get event ID from URL params
2. Find event in mock data
3. Display 404 if event not found
4. Show event details with booking options
5. Handle booking → show success → redirect to events

#### Key Functions
- `handleBooking()` - Simulate booking and show confirmation
- `handleQuantityChange()` - Update ticket quantity
- Price calculation: `totalPrice = ticketPrice * quantity`

#### Responsive Design
- **Desktop:** 2-column layout (content + sticky sidebar)
- **Tablet:** Sidebar adjusts width
- **Mobile:** Converts to single column (sidebar below content)

---

## Mock Data

The app uses 8 sample events covering different categories:
- **Technology:** Tech Conference, Digital Marketing Workshop
- **Music:** Summer Music Festival
- **Wellness:** Yoga Session, Morning Meditation
- **Business:** Startup Pitch Night
- **Art:** Art Exhibition Opening
- **Food:** Food & Wine Tasting

Each event includes:
- Basic details (title, date, time, location)
- Pricing (free or paid with ticket price)
- Full description & highlights
- Attendee count & rating

---

## Navigation & Routing

### Route Structure
```
/events               → Landing/Home page (Events.jsx)
/event/:id           → Event details page (EventDetails.jsx)
```

### Navigation Methods
1. **Events Page → Details:** Click "View Details" button on event card
2. **Details → Events:** Click "← Back to Events" button

---

## Extending & Customizing

### Adding New Event Categories
1. Update `CATEGORIES` array in `Events.jsx`
2. Add events with matching category to `MOCK_EVENTS`

### Customizing Colors
1. Find color definitions at top of each component
2. Update hex values in `styles` object
3. Colors are consistently used across both pages

### Modifying Filters
1. Add new filter state: `const [newFilter, setNewFilter] = useState()`
2. Add UI for filter input
3. Update `filteredEvents` logic to include new condition

### Adding Features
- **Search:** Add search input + filter logic
- **Sorting:** Add sort dropdown (by date, rating, price)
- **Favorites:** Add heart icon + localStorage
- **Reviews:** Add reviews section on details page
- **Map:** Add location map integration

---

## Best Practices Used

✅ **Clean Code**
- Clear, descriptive variable names
- Organized inline styles object
- Logical component structure

✅ **Performance**
- Efficient filtering with computed values
- No unnecessary re-renders
- Minimal external dependencies

✅ **User Experience**
- Hover states on all interactive elements
- Smooth transitions & animations
- Loading states for async operations
- Success feedback on actions

✅ **Accessibility**
- Semantic HTML (header, footer, nav, article, section)
- Readable font sizes and colors
- Proper button styling
- Focus states (can be enhanced)

✅ **Maintainability**
- No external CSS files (inline styles for simplicity)
- Single source of truth for mock data
- Easy to extend with new features

---

## Common Tasks

### Change Button Colors
```javascript
// Find in styles object
primaryBtn: {
  backgroundColor: "#4F46E5",  // Change this
  ...
}
```

### Adjust Grid Columns
```javascript
eventsGrid: {
  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
  // Change 300px to desired minimum card width
}
```

### Add Card Spacing
```javascript
eventsGrid: {
  gap: "2rem",  // Change this value
}
```

### Modify Hero Section Height
```javascript
heroSection: {
  padding: "5rem 1rem",  // Adjust vertical padding
}
```

---

## Dependencies
- `react-router-dom` - Navigation between pages
- `useAuthStore` - Authentication state (logout)
- `useParams` - Get URL parameters
- `useNavigate` - Programmatic navigation

---

## Future Enhancements

1. **Backend Integration**
   - Replace MOCK_EVENTS with API calls
   - Implement actual booking system
   - User authentication & profiles

2. **Features**
   - Event creation/editing
   - Search functionality
   - Advanced filtering
   - User reviews & ratings
   - Saved favorites
   - Booking history

3. **Performance**
   - Pagination for large event lists
   - Image lazy loading
   - Code splitting
   - Caching strategies

4. **UI/UX**
   - Loading skeletons
   - Toast notifications
   - Dark mode
   - Accessibility enhancements
   - Mobile-first refinements

---

## Support & Troubleshooting

**Events not showing:**
- Check MOCK_EVENTS array is populated
- Verify filteredEvents logic
- Check browser console for errors

**Navigation not working:**
- Ensure routes are registered in eventRoutes.jsx
- Check useNavigate hook is imported
- Verify route paths match exactly

**Styling issues:**
- Check color hex codes are correct
- Verify responsive breakpoints
- Test on different screen sizes

