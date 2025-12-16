import { Route } from 'react-router-dom'

import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import ResetPassword from '../pages/auth/ResetPassword'
import EmailVerification from "../pages/auth/email-verification"
import ForgetPasswordEmail from '../pages/auth/ForgetPasswordEmail'
import ForgotPasswordToken from '../pages/auth/ForgotPasswordToken'

export default function authRoutes() {
  return (
    <Route path='/auth'>
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route path='forgot-password-email' element={<ForgetPasswordEmail />} />
      <Route path='forgot-password-token' element={<ForgotPasswordToken />} />
      <Route path='reset-password' element={<ResetPassword />} />
      <Route path='email-verification' element={<EmailVerification />} />
    </Route>
  )
}
