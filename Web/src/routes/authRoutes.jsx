import { Route } from 'react-router-dom'

import ResetPassword from '../pages/auth/ResetPassword'
import EmailVerification from "../pages/auth/EmailVerification"
import ForgetPassword from '../pages/auth/ForgetPassword'
import VerifyToken from '../pages/auth/VerifyToken'

export default function authRoutes() {
  return (
    <Route path='/auth'>
  
      <Route path='forgot-password' element={<ForgetPassword />} />
      <Route path='verify-token' element={<VerifyToken />} />
      <Route path='reset-password' element={<ResetPassword />} />
      <Route path='verify-email' element={<EmailVerification />} />
    </Route>
  )
}
