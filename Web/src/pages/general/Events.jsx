import React from 'react'
import { useAuthStore } from '../../store/useAuthStore'


function Events() {
  const { isLoggingOut, logout } = useAuthStore()


  const logOut = () => {
    logout()
  }


  return (
    <>
      {isLoggingOut ? (
        <div className='d-flex align-items-center justify-content-center w-100' style={{ height: "100vh" }}>
          <span class="loader"></span>
        </div>
      ): (
      <div>
        Events
{/* add structure gray boxes before page loads */ }

      <button onClick={logOut}>Logout</button>

    </div >)}
    
    
    
    </>
    

  )
}

export default Events