import React, { useState } from 'react'

function Register() {
  const [showPassword, setShowPassword] = useState(false);


  return (
    <div className='center-div row' style={{marginTop: "5vh", marginBottom: "15vh"}}>
      <div className='col-lg-9 col-md-10 col-11 row auth-form align-items-start pt-md-5'>
        <div className='mx-md-0 my-md-0 my-5 pt-md-5'>
          <h1 className='auth-header'>Create Account</h1>

          <form className='auth-form-inner'>
            <div>
              <label>Email <span>*</span></label>
              <input type='text' />
            </div>

            <div>
              <label>Password <span>*</span></label>
              <aside>
                <input type={showPassword ? "text" : "password"} />
                <i className={`bi ${showPassword ? 'bi-eye' : 'bi-eye-slash'} w-5`} onClick={() => setShowPassword(!showPassword)} style={{ cursor: "pointer" }}></i>
              </aside>
            </div>

            <div >
              <label>Name <span>*</span></label>
              <input type='text' />
            </div>

            <div className='mb-5'>
              <label>Role <span>*</span></label>
              <select>
                <option value="Attendee">Attendee</option>
                <option value="Organizer">Organizer</option>
              </select>
            </div>


            <div className="mt-2 mb-4 agree-box">
              <input id="agree" type="checkbox" className="d-inline-block align-middle me-1" />
              <label htmlFor="agree" className="d-inline-block align-middle mb-0">
                I agree to all terms and Privacy Policy
              </label>
            </div>

            <div className='d-flex align-items-end justify-content-end mb-4'>
              <a href='/auth/forgot-password-email' className='highlight-link' >Forgot Password?</a>
            </div>

            <div className='center-div'>
              <button>Register</button>
            </div>
          </form>

          <p className='already'>Already registered for an account? <a href='/auth/login'>Login</a></p>
        </div>
      </div>
    </div>
  )
}

export default Register