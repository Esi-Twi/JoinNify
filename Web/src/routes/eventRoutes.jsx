import { Route } from 'react-router-dom'

import Events from '../pages/general/Events'
import EventDetails from '../pages/general/EventDetails'
import OrganizerDashboard from '../pages/dashboard/OrganizerDashboard'
import OrganizerDashboardLayout from '../layouts/OrganizerDashboardLayout'

export default function eventRoutes() {
    return (
        <Route path='/'>
            <Route path='' element={<Events />} />
            <Route path='event/:id' element={<EventDetails />} />
        </Route>
    )
}

