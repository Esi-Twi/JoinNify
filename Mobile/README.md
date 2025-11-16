Perfect — here is **the full mobile app version** of your Event Booking System.
This covers **what each page should have**, how users move through the mobile UI, and **what the public, attendees, organizers, and admin see**.

This is the **complete design guide** to help you build the UI in React Native (or any mobile framework).

---

# 📱 **MOBILE APP STRUCTURE (FULL SYSTEM)**

Below are the screens grouped by **User Type** + **Public Screens**.

---

# 🌍 **1. PUBLIC MOBILE SCREENS (No Login Required)**

These are what anyone using the app for the first time sees.

### **1.1 Onboarding Screens**

* Welcome intro (branding, slogan)
* Swipe screens describing:

  * Discover events
  * Book tickets
  * Scan QR at entry
* “Login” & “Create Account” buttons

### **1.2 Login Screen**

* Email
* Password
* “Forgot Password?”
* “Continue with Google” (optional)
* “Sign Up”

### **1.3 Signup Screen**

* Full name
* Email
* Password
* Confirm password
* Role selection:

  * Attendee
  * Organizer
* “Agree to Terms”
* “Verify Email” prompt after signup

### **1.4 Email Verification Screen**

* Enter verification code
* Resend code

### **1.5 Explore Events (Public)**

Users can already browse events without logging in:

* Search
* Categories filter
* Event cards with:

  * Title
  * Date + Time
  * Location
  * Price
  * “View Details”

### **1.6 Event Details (Public)**

* Event banner image
* Description
* Date & time
* Location (+ map link)
* Price
* Organizer info
* “Login to Book”

---

# 🧍‍♂️ **2. ATTENDEE MOBILE SCREENS**

### **2.1 Attendee Home**

* Recommended events
* Ongoing events
* Nearby events
* Categories list
* Your next event reminder banner (“Event starts in 1 day”)

### **2.2 Event Details (Logged-in)**

Everything from the public view +

* Ticket quantity selector
* Seat selection (optional)
* “Buy Ticket” button
* Refund/Cancellation policy
* Share event button

### **2.3 Ticket Purchase → Checkout**

* Ticket summary
* Quantity
* Price breakdown
* Total amount
* Payment methods (Card, Mobile Money, PayPal)
* “Confirm Payment”

### **2.4 Ticket Success Screen**

* “🎉 Ticket Purchased!”
* QR Code
* Button: “Download Ticket”
* Add to calendar
* “View My Tickets”

### **2.5 My Tickets**

Each ticket card shows:

* Event name
* Date & time
* QR thumbnail
* “View Ticket”

### **2.6 Ticket Details**

* Full ticket image (QR code included)
* Event info
* Cancel ticket button (if allowed)
* Share ticket

### **2.7 Notification Screen**

* “Your event starts in 24 hours”
* “Organizer updated event location”
* “Your refund was approved”
* “Your ticket purchase was successful”

### **2.8 Profile Settings**

* Update name, email
* Change password
* My purchases
* My refunds
* Log out

---

# 🗂️ **3. ORGANIZER MOBILE SCREENS**

## **3.1 Organizer Dashboard**

* Total events
* Total tickets sold
* Revenue chart (weekly/monthly)
* Upcoming events list
* Button: “Create Event”

## **3.2 Create Event Page**

### Event creation fields:

* Event title
* Event banner image upload
* Category
* Description
* Date picker
* Time picker
* Location
* Max number of tickets
* Ticket price
* Refund rules
* Publish/Save draft

Buttons:

* Save Draft
* Publish Event

## **3.3 Manage Events**

List of all events:

* Published
* Draft
* Completed
* Cancelled

Event card shows:

* Sold tickets
* Revenue
* “Manage”

## **3.4 Event Analytics**

* Total tickets
* Tickets sold
* Remaining tickets
* Revenue generated
* Top booking times
* Export report as PDF
* “Share event”

## **3.5 Attendee List**

Shows:

* Attendee name
* Email
* Ticket type
* Ticket status
* “View Ticket”

## **3.6 QR Scanner**

Organizer needs this to check-in attendees.

Screen includes:

* Camera QR scanner
* Successful scan animation
* Attendee name
* Valid/Invalid ticket
* Check-in time
* “Report Issue”

## **3.7 Notifications (Organizer)**

* “New ticket purchased by Sarah.”
* “Your event starts tomorrow.”
* “Sales summary available.”
* “Event was approved.”

## **3.8 Profile (Organizer)**

* Business/organization name
* Payment/account details
* Weekly sales report toggle
* Logout

---

# 🛡️ **4. ADMIN MOBILE SCREENS**

Admins control the system.
(Not always needed in mobile apps, but if you want it:)

### **4.1 Admin Dashboard**

* Total users
* Total organizers
* Total events
* Revenue summary
* Pending approvals

### **4.2 Manage Users**

* Search users
* Suspend/activate account

### **4.3 Manage Organizers**

* Approve organizer accounts
* View performance
* Ban/remove organizer

### **4.4 Manage Events**

* Approve events
* Remove inappropriate events
* View reports

### **4.5 Reports**

* Sales charts
* Top organizers
* Most popular categories

### **4.6 Notifications from system**

* “Event flagged for review”
* “New organizer registered”
* “Refund request pending”

---

# 🔄 **NAVIGATION FLOW (MOBILE)**

Here’s how the app flows:

### **Public → Attendee**

```
Onboarding → Login/Signup → Explore Events → Event Details → Checkout → Ticket → My Tickets
```

### **Public → Organizer**

```
Onboarding → Signup (Choose Organizer) → Verify Email → Dashboard → Create Event → Published
```

### **Admin**

```
Login → Dashboard → Manage Users/Events/Reports
```

---

# 🎨 **BONUS: RECOMMENDED UI COMPONENTS**

### Attendee-friendly UI:

* Gradient buttons
* Soft card shadows
* Large images
* Swipe navigation

### Organizer UI:

* Stats widgets
* Mini charts
* Floating “Create Event” button

### Admin UI:

* Clean tables
* Filters
* Toast notifications

---

# 🎉 Want me to generate:

✅ **Every UI screen in text prompt format** (for Midjourney or Google Stitch)
✅ **A full folder structure for React Native**
✅ **Navigation code (React Navigation)**
✅ **Reusable UI components**

Just say:
**“Generate full mobile UI prompts”**
or
**“Generate React Native folder structure”**
