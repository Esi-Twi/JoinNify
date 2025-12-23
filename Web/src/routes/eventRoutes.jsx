import { Route } from 'react-router-dom'

import Events from '../pages/general/Events'

export default function eventRoutes() {
    return (
        <Route path='/'>
            <Route path='events' element={<Events />} />

        </Route>
    )
}

