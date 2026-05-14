import { Route } from 'react-router-dom'

import Profile from '../pages/shared/Profile'


export default function authRoutes() {
    return (
        <Route path='/user'>
            <Route path='profile' element={<Profile />} />

        </Route>
    )
}




// ✅ Create user model(Admin, Organizer, Attendee roles)
//             *✅ Profile API(view / update)
//               *✅ Create “send email” service(Nodemailer)
