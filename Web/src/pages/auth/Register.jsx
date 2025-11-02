import React, { useState } from 'react'

function Register() {
    const [showPassword, setShowPassword] = useState(false);


  return (
    <div className='row auth-form'>
      <div className='col-md-10 col-10 mx-md-0 mx-5 my-md-0 my-5'>
        <h1 className='auth-header'>Create Account</h1>

        <form className='auth-form-inner'>
          <div>
            <label>Email <span>*</span></label>
            <input type='text' />
          </div>

          <div>
            <label>Password <span>*</span></label>
            <aside>
              <i className={`bi ${showPassword? 'bi-eye': 'bi-eye-slash'} w-5`} onClick={() => setShowPassword(!showPassword)}></i>
              <input type={showPassword ? "text" : "password"} />
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


          <div className='agree-box mt-4'>
            <input id='agree' type='checkbox' />
            <label htmlFor='agree'>I agree to all terms and Privacy Policy</label>
          </div>
          <button>Register</button>
        </form>

        <p className='already'>Already registered for an account? <a href='/auth/login'>Login</a></p>
      </div>
    </div>
  )
}

export default Register