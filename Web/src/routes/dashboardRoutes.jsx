import { Route } from 'react-router-dom'

import OrganizerDashboard from '../pages/dashboard/OrganizerDashboard'
import OrganizerDashboardLayout from '../layouts/OrganizerDashboardLayout'
import MyEvents from '../pages/dashboard/MyEvents'
import CreateEvent from '../pages/dashboard/CreateEvent'
import TicketSalesPage from '../pages/dashboard/TicketSalesPage'
import Attendees from '../pages/dashboard/Attendees'
import QRCheckInPage from '../pages/dashboard/QRCheckInPage'
import Analytics from '../pages/dashboard/Analytics'
import Notifications from '../pages/dashboard/Notifications'
import Settings from '../pages/shared/Settings'

export default function dashboardRoutes() {
    return (
        <Route path='/dashboard'>
            <Route path='org' element={<OrganizerDashboard />} />

            <Route path='my-events' element={<MyEvents />} />
            <Route path='create-event' element={<CreateEvent />} />
            <Route path='ticket-sales' element={<TicketSalesPage />} />
            <Route path='attendees' element={<Attendees />} />
            <Route path='qr-checkin' element={<QRCheckInPage />} />
            <Route path='analytics' element={<Analytics />} />
            <Route path='notifications' element={<Notifications />} />
            <Route path='settings' element={<Settings />} />
        </Route>
    )
}

