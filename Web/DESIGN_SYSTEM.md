# JoinNify Design System - Quick Reference

## 🎨 Colors
```
Primary:      #4F46E5 (Indigo/Purple)
Secondary:    #EEF2FF (Light Purple)
Text Dark:    #111827 (Near Black)
Text Muted:   #6B7280 (Gray)
Borders:      #E5E7EB (Light Gray)
White:        #FFFFFF
Success:      #10B981 (Green)
```

## 📐 Spacing
```
xs: 0.5rem    (8px)
sm: 0.75rem   (12px)
md: 1rem      (16px)
lg: 1.5rem    (24px)
xl: 2rem      (32px)
2xl: 3rem     (48px)
```

## 🔤 Typography
```
Headings:  font-weight: 700-800, line-height: 1.2
Body:      font-weight: 400-500, line-height: 1.6
Small:     font-size: 0.875rem
Base:      font-size: 1rem
Large:     font-size: 1.125rem
XL:        font-size: 1.5rem
2XL:       font-size: 2rem
3XL:       font-size: 2.5rem
4XL:       font-size: 3rem
```

## 🔘 Buttons
```
Primary Button:
  - Background: #4F46E5
  - Text: #FFFFFF
  - Hover: #4338CA (darker)
  - Padding: 0.875rem 2rem
  - Border Radius: 0.5rem

Secondary Button:
  - Background: #FFFFFF
  - Border: 2px solid #4F46E5
  - Text: #4F46E5
  - Hover: #EEF2FF
  - Padding: 0.75rem 2rem

Small Button:
  - Padding: 0.5rem 1.25rem
  - Font Size: 0.875rem
```

## 📦 Components
```
Cards:
  - Background: #FFFFFF
  - Border: 1px solid #E5E7EB
  - Padding: 1.25rem
  - Border Radius: 0.75rem
  - Box Shadow: 0 2px 8px rgba(0, 0, 0, 0.08)
  - Hover Shadow: 0 12px 24px rgba(79, 70, 229, 0.15)
  - Hover Transform: translateY(-8px)

Badges:
  - Category: #4F46E5 bg, #FFFFFF text
  - Price: #FFFFFF bg, #4F46E5 border
  - Padding: 0.375rem 0.75rem
  - Font Size: 0.75rem
  - Border Radius: 0.375rem

Input Fields:
  - Border: 1px solid #E5E7EB
  - Padding: 0.625rem
  - Border Radius: 0.375rem
  - Focus: (can be added)
```

## 📱 Responsive Breakpoints
```
Mobile:    < 768px   (1 column)
Tablet:    768-1199px (2 columns)
Desktop:   1200px+   (3 columns)
Large:     1400px+   (fixed max width)
```

## 🎯 Common Patterns

### Hover State
```javascript
onMouseEnter={(e) => e.target.style.backgroundColor = "#4338CA"}
onMouseLeave={(e) => e.target.style.backgroundColor = "#4F46E5"}
```

### Card Hover
```javascript
onMouseEnter={(e) => {
  e.currentTarget.style.transform = "translateY(-8px)"
  e.currentTarget.style.boxShadow = "0 12px 24px rgba(79, 70, 229, 0.15)"
}}
onMouseLeave={(e) => {
  e.currentTarget.style.transform = "translateY(0)"
  e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.08)"
}}
```

### Grid Layouts
```javascript
// 3 column responsive grid
gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))"

// 2 column with sidebar
gridTemplateColumns: "1fr 320px"

// 2 column basic
gridTemplateColumns: "repeat(2, 1fr)"
```

## 🎨 Section Backgrounds
```
Primary Sections: #FFFFFF
Secondary/Filter: #F9FAFB
Accent/Hero:      #EEF2FF
Card Hover:       Light shadow effect
```

## ✅ Best Practices

1. Always use the color palette above
2. Maintain consistent spacing with rem units
3. Add hover states to all interactive elements
4. Use CSS Grid for responsive layouts
5. Keep font sizes relative to base size (1rem = 16px)
6. Test on mobile, tablet, and desktop
7. Ensure proper contrast for readability
8. Use semantic HTML elements
9. Keep transitions smooth (0.2s-0.3s)
10. Avoid inline styles in new components (use style objects)

---

*Last Updated: December 2025*
*Version: 1.0*
