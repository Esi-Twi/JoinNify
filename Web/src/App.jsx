import { Routes, Route } from 'react-router-dom'
import './App.css'

import PublicRoute from "./context/PublicRoute"
import ProtectedRoute from "./context/ProtectedRoute"

import ErrorPage from './pages/general/ErrorPage'

import GeneralLayout from './layouts/GeneralLayout'
import AuthLayout from './layouts/authLayout'

import authRoutes from './routes/authRoutes'
import eventRoutes from './routes/eventRoutes'
import { Toaster } from "sonner"


function App() {

  return (
    <>
      <Toaster position='top-right' richColors closeButton={true} toastOptions={{
        style: { fontSize: "15px" }
      }} />


      <Routes>
        <Route path='*' element={<ErrorPage />} />
        {/* <Route path='/events' element={<Events />} /> */}

        <Route element={<ProtectedRoute />}>
          <Route element={<GeneralLayout />}>
            {eventRoutes()}
          </Route>
        </Route>

        <Route element={<PublicRoute />}>
          <Route element={<AuthLayout />}>
            {authRoutes()}
          </Route>
        </Route>

      </Routes>
    </>
  )
}

export default App
