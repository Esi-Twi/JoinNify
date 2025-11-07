### Key features
* Dark mode toggle
* **Progressive Web App (PWA)** — offline event browsing
* Google Maps integration for event location
* Email verification and password reset flow
* Mobile responsiveness and lazy loading
* CI/CD pipeline with GitHub Actions
* in creating event make sure the date is older than today
* event price can not be 0 


**As an organizer**, I want to **receive a weekly sales summary report** so that I can **review sales trends, performance, and insights about my events**.
### 📊 **Acceptance Criteria**
1. ✅ The system automatically generates a weekly report every **Sunday at midnight**.
2. 📩 The report is **emailed to the organizer**’s registered email address.
3. 📈 The report should include:
   * Total tickets sold (weekly + cumulative)
   * Total revenue generated
   * Top-performing events (by tickets or revenue)
   * Low-performing events (by tickets or revenue)
   * Average ticket price
   * New attendees vs returning attendees
   * Cancellations (count and %)
   * Payment breakdown (mobile money, card, cash)
4. 📎 The report should be downloadable as a **PDF** and **CSV** file.
5. 🧠 The email should have a **visual summary** (charts or tables) in the message body.
6. ⚙️ Organizers can choose to **opt out** or **change the report frequency** (weekly, biweekly, monthly) from their dashboard.
7. 🕒 Reports should display data **between Monday 12:00 AM – Sunday 11:59 PM** of the previous week.

### 🧩 **Data Points to Include in the Report**
| Section           | Data                  | Description                        |
| ----------------- | --------------------- | ---------------------------------- |
| Overview          | Total Events          | Number of events hosted this week  |
| Tickets           | Tickets Sold          | Total tickets sold during the week |
| Revenue           | Gross Revenue         | Total money earned                 |
| Top Event         | Event Name            | Highest revenue/tickets            |
| Cancellations     | Count + %             | Number of cancellations            |
| Payment Breakdown | By method             | Momo, Card, Cash, etc.             |
| Attendance        | Returning vs New      | Percentage comparison              |
| Growth            | Week-over-week growth | Trend analysis                     |

### 💡 **UI/UX Flow (Organizer Dashboard)**
1. **Dashboard → Reports → Weekly Sales Report**
   * Summary cards showing total sales, revenue, and growth percentage.
2. **Charts Section**
   * Bar chart for weekly ticket sales.
   * Pie chart for payment methods.
3. **Detailed Table**
   * Each event with its sales stats and revenue.
4. **Action Buttons**
   * `Download PDF`
   * `Download CSV`
   * `Email me next report`

### ✉️ **Email Example**
**Subject:** 📊 Weekly Sales Report — ${organizerName} (Week of Oct 13–19)
**Body:**
Hi ${organizerName},
Here’s your JoinNify Weekly Sales Summary Report for October 13–19, 2025.
Highlights:
- 🎟 240 tickets sold
- 💰 GHS 4,250 in total revenue
- 🏆 Top Event: TechFest Accra 2025 (GHS 2,100)
- ⚠️ 10 ticket cancellations
Download your full report:
[Download PDF] [Download CSV]
Keep growing your events with insights from JoinNify.

