import React from 'react'

function Register() {
  return (
    <div className='row auth-form'>
      <div className='col-md-10 p-md-5'>
        <h1 className='auth-header'>Create Account</h1>

        <form className='auth-form-inner'>
          <div>
            <label>Name</label>
            <input type='text' />
          </div>

          <div>
            <label>Email <span>*</span></label>
            <input type='text' />
          </div>

          <div>
            <label>Password <span>*</span></label>
            <aside>
              <i className='bi bi-eye w-5'></i>
              <input type='password' />
            </aside>
          </div>

          <div>
            <label>Confirm Password <span>*</span></label>
            <aside>
              <i class='bi bi-eye w-5'></i>
              <input type='password' />
            </aside>
          </div>

          <div className='agree-box'>
            <input name='agree' type='checkbox' />
            <label htmlFor='agree'>I agree to all terms and Privacy Policy</label>
          </div>
          <button className='default-btn'>Register</button>
        </form>

        <p>Already registered for an account? <a>Login</a></p>
      </div>
    </div>
  )
}

export default Register