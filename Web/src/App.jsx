import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'

import PublicRoute from "./context/PublicRoute"
import ProtectedRoute from "./context/ProtectedRoute"

import ErrorPage from './pages/general/ErrorPage'

import GeneralLayout from './layouts/GeneralLayout'
import AuthLayout from './layouts/authLayout'

import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import authRoutes from './routes/authRoutes'
import eventRoutes from './routes/eventRoutes'
import sharedRoutes from './routes/sharedRoutes'
import { Toaster } from "sonner"
import { useEffect, useState } from 'react'
import Loader from './components/Loader'
import OrganizerDashboardLayout from './layouts/OrganizerDashboardLayout'
import dashboardRoutes from './routes/dashboardRoutes'


function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // First load
  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 600); // fake load delay
    return () => clearTimeout(t);
  }, []);

  // On route change
  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(t);
  }, [location.pathname]);

  return (
    <>
      {loading && <Loader />}
      <Toaster position='top-right' richColors closeButton={true} toastOptions={{
        style: { fontSize: "15px" }
      }} />


      <Routes>
        <Route path='*' element={<ErrorPage />} />

        <Route element={<ProtectedRoute />}>
          <Route element={<GeneralLayout />}>
            {eventRoutes()}
            {sharedRoutes()}
          </Route>
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route element={<OrganizerDashboardLayout />}>
            {dashboardRoutes()}
          </Route>
        </Route>

        <Route element={<PublicRoute />}>
          <Route element={<AuthLayout />}>
            <Route path='/auth/login' element={<Login />} />
            <Route path='/auth/register' element={<Register />} />
          </Route>
        </Route>

        <Route element={<AuthLayout />}>
          {authRoutes()}
        </Route>

        <Route path='/auth/*' element={<ErrorPage />} />


      </Routes>
    </>
  )
}

export default App
