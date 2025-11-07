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

<!-- ------frontend qr scanning code -------------

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Scan Ticket QR - JoinNify</title>
  <style>
    body { font-family: Arial, sans-serif; text-align: center; margin-top: 40px; }
    video { width: 90%; max-width: 500px; border: 3px solid #4F46E5; border-radius: 10px; }
    #result { margin-top: 20px; font-weight: bold; }
    .success { color: green; }
    .error { color: red; }
  </style>
</head>
<body>
  <h2>🎫 Scan Ticket QR</h2>
  <video id="video" autoplay></video>
  <p id="result"></p>

  <script>
    const video = document.getElementById('video');
    const result = document.getElementById('result');

    // 1️⃣ Access camera
    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
      .then(stream => {
        video.srcObject = stream;
        scanQRCode();
      })
      .catch(err => {
        result.textContent = 'Camera access denied.';
      });

    // 2️⃣ Scan QR from video frames (no library)
    async function scanQRCode() {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

      setInterval(async () => {
        if (video.readyState === video.HAVE_ENOUGH_DATA) {
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          context.drawImage(video, 0, 0, canvas.width, canvas.height);

          // Convert frame to image data
          const imageData = context.getImageData(0, 0, canvas.width, canvas.height);

          // Decode QR using jsQR library logic (you can include jsQR via CDN)
          // 👉 include this in your <head>: <script src="https://cdn.jsdelivr.net/npm/jsqr/dist/jsQR.js"></script>
          if (window.jsQR) {
            const qrCode = jsQR(imageData.data, imageData.width, imageData.height);
            if (qrCode) {
              // Send QR data to backend
              verifyTicket(qrCode.data);
            }
          }
        }
      }, 1000);
    }

    // 3️⃣ Verify ticket
    async function verifyTicket(qrData) {
      try {
        const response = await fetch('/api/tickets/verify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ qrData })
        });
        const data = await response.json();

        if (data.success) {
          result.className = 'success';
          result.textContent = `✅ Verified: ${data.message}`;
        } else {
          result.className = 'error';
          result.textContent = `❌ ${data.message}`;
        }
      } catch (err) {
        result.className = 'error';
        result.textContent = 'Error verifying ticket.';
      }
    }
  </script>
  <script src="https://cdn.jsdelivr.net/npm/jsqr/dist/jsQR.js"></script>
</body>
</html>





 -->