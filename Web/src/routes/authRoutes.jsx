import { Route } from 'react-router-dom'

import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'

export default function authRoutes() {
  return (
    <Route path='/auth'>
        <Route path='login' element={<Login />}/>
        <Route path='register' element={<Register />}/>
    </Route>
  )
}
