import React, { useState } from 'react'

function Login() {
  const [showPassword, setShowPassword] = useState(false);


  return (
    <div className='center-div row auth-other'>
      <div className='col-lg-9 col-md-10 col-11 row auth-form align-items-start pt-md-5'>
        <div className='mx-md-0 my-md-0 my-5 pt-md-5'>
          <h1 className='auth-header mb-0'>Welcome Back</h1>
          <p className='mt-0 mb-md-5 mb-4 fs-md-5 '>Log into your account</p>

          <form className='auth-form-inner'>
            <div>
              <label>Email <span>*</span></label>
              <input type='text' />
            </div>

            <div className='mb-5 mt-4 password-input'>
              <label>Password <span>*</span></label>
              <aside>
                <input type={showPassword ? "text" : "password"} />
                <i className={`bi ${showPassword ? 'bi-eye' : 'bi-eye-slash'} w-5 ms-2`} style={{ cursor: "pointer" }} onClick={() => setShowPassword(!showPassword)}></i>
              </aside>
            </div>

            <div className='d-flex align-items-end justify-content-end mb-4'>
              <a href='/auth/forgot-password-email' className='highlight-link' >Forgot Password?</a>
            </div>

            <div className='center-div'>
              <button>Log In</button>
            </div>
          </form>

          <p className='already'>Already registered for an account?
            <a href='/auth/register' className='fw-bold ms-2'>Register</a></p>
        </div>
      </div >
    </div>
  )
}

export default Login


