import { Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './pages/general/Home'
import ErrorPage from './pages/general/ErrorPage'

import GeneralLayout from './layouts/GeneralLayout'
import AuthLayout from './layouts/authLayout'

import authRoutes from './routes/authRoutes'

function App() {
  return (
    <>
      <Routes>
        <Route path='*' element={<ErrorPage />}/>

        <Route element={<GeneralLayout />}>
          <Route path='/' element={<Home />} />
        </Route>

        <Route element={<AuthLayout />}>
          {authRoutes()}
        </Route>

      </Routes>
    </>
  )
}

export default App
