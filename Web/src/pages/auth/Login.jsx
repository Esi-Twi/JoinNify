import React, { useState } from 'react'

function Login() {
  const [showPassword, setShowPassword] = useState(false);


  return (
    <div className='row auth-form align-items-start pt-md-5'>
      <div className='col-md-10 col-10 mx-md-0 mx-5 my-md-0 my-5 pt-md-5'>
        <h1 className='auth-header mb-0'>Welcome Back</h1>
        <p className='mt-0 mb-md-5 mb-4 fs-md-5 '>Log into your account</p>

        <form className='auth-form-inner'>

          <div>
            <label>Email <span>*</span></label>
            <input type='text' />
          </div>

          <div className='mb-5'>
            <label>Password <span>*</span></label>
            <aside>
              <i className={`bi ${showPassword ? 'bi-eye' : 'bi-eye-slash'} w-5`} onClick={() => setShowPassword(!showPassword)}></i>
              <input type={showPassword ? "text" : "password"} />
            </aside>
          </div>


          <button>Register</button>
        </form>

        <p className='already'>Already registered for an account? <a href='/auth/register'>Register</a></p>
      </div>
    </div>
  )
}

export default Login