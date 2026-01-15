# JoinNify - Visual Structure & Component Layout

## Landing/Home Page Layout (`/events`)

```
┌─────────────────────────────────────────────────────────────────┐
│                          NAVBAR                                 │
│  JoinNify                                          [Logout Btn] │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                      HERO SECTION                              │
│                                                                 │
│      Discover and book amazing events around you              │
│      Short description of the platform                         │
│                                                                 │
│        [Explore Events]    [Create Event]                     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                    FILTER SECTION                              │
│                                                                 │
│  Category Filter:                                             │
│  [All] [Tech] [Music] [Wellness] [Business] [Art] [Food]     │
│                                                                 │
│  Price Filter:                                                │
│  ○ All Events    ○ Free Events    ○ Paid Events              │
│                                                                 │
│  Showing X events                                             │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                    EVENT GRID (Responsive)                     │
│                                                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │              │  │              │  │              │         │
│  │  [Image]     │  │  [Image]     │  │  [Image]     │         │
│  │  [Category]  │  │  [Category]  │  │  [Category]  │         │
│  │  [Price]     │  │  [Price]     │  │  [Price]     │         │
│  │              │  │              │  │              │         │
│  │ Event Title  │  │ Event Title  │  │ Event Title  │         │
│  │              │  │              │  │              │         │
│  │ 📅 Jan 15    │  │ 📅 Feb 20    │  │ 📅 Jan 10    │         │
│  │ 🕐 9:00 AM   │  │ 🕐 6:00 PM   │  │ 🕐 8:00 AM   │         │
│  │              │  │              │  │              │         │
│  │ 📍 SF, CA    │  │ 📍 LA, CA    │  │ 📍 NY, NY    │         │
│  │              │  │              │  │              │         │
│  │ 👥 250       │  │ 👥 1200      │  │ 👥 45        │         │
│  │ [View Details]│ │ [View Details]│ │ [View Details]│        │
│  └──────────────┘  └──────────────┘  └──────────────┘         │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │ ... More Cards (responsive grid)                 │         │
│  └──────────────┘  └──────────────┘  └──────────────┘         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                          FOOTER                                 │
│  © 2025 JoinNify. All rights reserved.                         │
└─────────────────────────────────────────────────────────────────┘
```

### On Hover (Event Card):
```
┌──────────────────────────┐
│ Card lifts up            │
│ Shadow increases         │
│ Transform: translateY(-8px)
│ Box-shadow: larger       │
└──────────────────────────┘
```

### On Hover (Button):
```
[Primary Button]
#4F46E5 → #4338CA (darker purple)
[Secondary Button]
#FFFFFF → #EEF2FF (light purple background)
```

---

## Event Details Page Layout (`/event/:id`)

```
┌─────────────────────────────────────────────────────────────────┐
│  [← Back to Events]      JoinNify                               │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                    [HERO IMAGE]                                │
│                                                                 │
│                [Technology Badge]    [⭐ 4.8]                 │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  ┌──────────────────────────────┐  ┌──────────────────┐       │
│  │                              │  │ BOOKING CARD     │       │
│  │  Tech Conference 2025        │  │                  │       │
│  │                              │  │ Book Your Spot   │       │
│  │  ┌────────────┬────────────┐ │  │                  │       │
│  │  │📅 Date     │🕐 Time     │ │  │ Per Ticket       │       │
│  │  │Jan 15, 2025│ 9:00 AM    │ │  │ $99              │       │
│  │  └────────────┴────────────┘ │  │                  │       │
│  │                              │  │ Number of Tickets│       │
│  │  ┌────────────┬────────────┐ │  │ [Dropdown ▼]     │       │
│  │  │📍 Location │👥 Attendees│ │  │                  │       │
│  │  │SF, CA      │ 250 people │ │  │ Total: $99       │       │
│  │  └────────────┴────────────┘ │  │                  │       │
│  │                              │  │ [Book Now]       │       │
│  │  About This Event            │  │                  │       │
│  │  ━━━━━━━━━━━━━━━━━━━━━━━━━  │  │ ℹ️ You'll receive│       │
│  │                              │  │ confirmation     │       │
│  │  Full description paragraph  │  │ with tickets.    │       │
│  │  describing the event in     │  │                  │       │
│  │  detail...                   │  │ ┌──────────────┐ │       │
│  │                              │  │ │ Category     │ │       │
│  │                              │  │ │ Technology   │ │       │
│  │  What's Included             │  │ │              │ │       │
│  │  ━━━━━━━━━━━━━━━━━━━━━━━━━  │  │ │ Price        │ │       │
│  │                              │  │ │ $99          │ │       │
│  │  ✓ 10+ keynote speakers      │  │ │              │ │       │
│  │  ✓ 30+ workshops             │  │ │ Rating       │ │       │
│  │  ✓ Networking lunch          │  │ │ ⭐ 4.8       │ │       │
│  │  ✓ Materials & swag          │  │ └──────────────┘ │       │
│  │  ✓ Virtual option            │  │                  │       │
│  │                              │  │                  │       │
│  └──────────────────────────────┘  └──────────────────┘       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                          FOOTER                                 │
│  © 2025 JoinNify. All rights reserved.                         │
└─────────────────────────────────────────────────────────────────┘
```

### Booking Success Modal:
```
┌──────────────────────────┐
│ Booking confirmed!       │
│ Redirecting...           │
│                          │
│ ✓ (Green checkmark)      │
└──────────────────────────┘
(Shows for 2 seconds, then redirects)
```

---

## Mobile Responsive Layout (< 768px)

### Home Page:
```
┌────────────────────────┐
│ JoinNify    [Logout]   │
└────────────────────────┘

┌────────────────────────┐
│  Hero Section          │
│  (smaller height)      │
│                        │
│  [Explore Events]      │
│  [Create Event]        │
└────────────────────────┘

┌────────────────────────┐
│  Filters               │
│  (stacked)             │
│  [All][Tech][Music]... │
│  ○ All ○ Free ○ Paid  │
└────────────────────────┘

┌────────────────────────┐
│ EVENT GRID (1 column)  │
│                        │
│  ┌──────────────────┐  │
│  │    [Image]       │  │
│  │    [Details]     │  │
│  │  [View Details]  │  │
│  └──────────────────┘  │
│                        │
│  ┌──────────────────┐  │
│  │    [Image]       │  │
│  │    [Details]     │  │
│  │  [View Details]  │  │
│  └──────────────────┘  │
│                        │
└────────────────────────┘

┌────────────────────────┐
│      Footer            │
└────────────────────────┘
```

### Event Details Page (Mobile):
```
┌────────────────────────┐
│ [←] JoinNify           │
└────────────────────────┘

┌────────────────────────┐
│     [Hero Image]       │
│  [Tech] [⭐ 4.8]      │
└────────────────────────┘

┌────────────────────────┐
│ Event Title            │
│                        │
│ 📅 Jan 15, 2025       │
│ 🕐 9:00 AM            │
│ 📍 SF, CA             │
│ 👥 250 people         │
│                        │
│ About This Event       │
│ ────────────────       │
│ Description...         │
│                        │
│ What's Included        │
│ ────────────────       │
│ ✓ Feature 1            │
│ ✓ Feature 2            │
│                        │
│ BOOKING CARD           │
│ ────────────────       │
│ Book Your Spot         │
│                        │
│ Per Ticket: $99        │
│                        │
│ Number of Tickets:     │
│ [Dropdown]             │
│                        │
│ Total: $99             │
│                        │
│ [Book Now]             │
│                        │
│ ℹ️ Info text...        │
│                        │
│ Category: Technology   │
│ Price: $99             │
│ Rating: ⭐ 4.8         │
└────────────────────────┘

┌────────────────────────┐
│      Footer            │
└────────────────────────┘
```

---

## Color Usage Throughout

### Primary Color (#4F46E5)
- Primary buttons
- Category badges
- Links and highlights
- Active filter pills
- Hero text accents

### Secondary Color (#EEF2FF)
- Hero section background
- Booking card background
- Section backgrounds
- Hover states on secondary buttons

### Dark Text (#111827)
- Main headings
- Body text
- Card titles
- Primary labels

### Muted Text (#6B7280)
- Secondary text
- Descriptions
- Meta information
- Captions

### Borders (#E5E7EB)
- Card borders
- Divider lines
- Section separators
- Input borders

### White (#FFFFFF)
- Card backgrounds
- Button backgrounds (secondary)
- Section backgrounds
- Navbar background

### Success Green (#10B981)
- Checkmarks in highlight lists
- Success modal icon
- Free event indicators (optional)

---

## Interactive Elements

### Buttons
```
Primary Button:
Resting:     #4F46E5 background, white text
Hover:       #4338CA background (darker)
Cursor:      pointer

Secondary Button:
Resting:     #FFFFFF background, purple border, purple text
Hover:       #EEF2FF background
Cursor:      pointer

Small Button:
Resting:     #4F46E5 background, white text
Hover:       #4338CA background
Size:        0.875rem font, smaller padding
```

### Cards
```
Resting:
- White background
- Light gray border (1px)
- Subtle shadow
- Image at top (200px height)

Hover:
- Lift effect (translateY -8px)
- Enhanced shadow
- Smooth transition (0.3s)
- Cursor: pointer
```

### Filter Pills
```
Active:      #4F46E5 bg, white text
Inactive:    #FFFFFF bg, gray border, dark text
Hover:       #F3F4F6 bg (if not active)
Cursor:      pointer
```

---

## Animations & Transitions

- **Card Hover:** 0.3s ease transition, translateY(-8px), enhanced shadow
- **Button Hover:** Immediate color change or smooth 0.2s transition
- **Page Navigation:** Smooth scroll on "Explore Events" button
- **Success Modal:** Fade in/out with backdrop
- **All Transitions:** Smooth and responsive, no jarring movements

---

## Spacing Grid

```
xs:  0.5rem  (8px)    - Small gaps, padding
sm:  0.75rem (12px)   - Compact spacing
md:  1rem    (16px)   - Standard spacing
lg:  1.5rem  (24px)   - Section spacing
xl:  2rem    (32px)   - Large section gaps
2xl: 3rem    (48px)   - Hero padding, large gaps
```

---

## Typography Hierarchy

```
H1 (Hero Title):       3rem, 800 weight, dark text
H2 (Section Title):    2rem or 1.5rem, 700 weight
H3 (Card Title):       1.125rem, 700 weight
Body Text:             1rem, 400 weight, muted text
Small Text:            0.875rem, 400 weight
Labels:                0.875rem, 600 weight
Captions:              0.75rem, 400 weight, muted
```

---

*This visual structure maintains consistency across all pages and adapts smoothly to different screen sizes.*
