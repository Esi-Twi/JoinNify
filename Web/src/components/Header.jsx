import React from 'react'
import { useAuthStore } from '../store/useAuthStore'

function Header() {
  const { isLoggingOut, logout } = useAuthStore()
  // const navigate = useNavigate()


  const logOut = () => {
    logout()
  }

  return (
    <div>
      Header

      <a href='/'>Home</a>
      <a href='/user/profile'>Profile</a>


      <button onClick={logOut} >Logout</button>


    </div>
  )
}

export default Header