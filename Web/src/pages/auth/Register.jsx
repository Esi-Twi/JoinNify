import React, { useState } from 'react'
import { set, useForm } from "react-hook-form"
import { useAuthStore } from '../../store/useAuthStore';



function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [hasAgreed, setHasAgreed] = useState(false);
  const [agreeWarning, setAgreeWarning] = useState("")
  const { isRegistering, registerUser } = useAuthStore()
  const { register, handleSubmit, formState: { errors } } = useForm()


  const onSubmit = (data) => {
    if(!hasAgreed) {
      return setAgreeWarning("Agree to all terms and privacy policy ")
    }

    registerUser(data);
    
  }


  return (
    <div className='center-div row' style={{ marginTop: "5vh", marginBottom: "5vh" }}>
      <div className='col-lg-9 col-md-10 col-11 row auth-form align-items-start pt-md-5'>
        <div className='mx-md-0 my-md-0 my-5 pt-md-5'>
          <h1 className='auth-header'>Create Account</h1>

          <form onSubmit={handleSubmit(onSubmit)} className='auth-form-inner'>
            <div>
              <label>Email <span>*</span></label>
              <input type='text' {...register("email", { required: "Email is required" })} />
            </div>
            {errors.email && <p style={{ color: "red", marginTop: -12 }}>{errors.email.message}</p>} 

            <div>
              <label>Password <span>*</span></label>
              <aside>
                <input type={showPassword ? "text" : "password"} 
                {...register("password", { required: "Password is required" })} />
                <i className={`bi ${showPassword ? 'bi-eye' : 'bi-eye-slash'} w-5`} onClick={() => setShowPassword(!showPassword)} style={{ cursor: "pointer" }}></i>
              </aside>
            </div>
            {errors.password && <p style={{ color: "red", marginTop: -12 }}>{errors.password.message}</p>} 

            <div className='mb-5'>
              <label>Role <span>*</span></label>
              <select {...register("role", { required: "Role is required" })} defaultValue="Attendee">
                <option value="Attendee">Attendee</option>
                <option value="Organizer">Organizer</option>
              </select>
            </div>


            <aside className="mt-2 mb-4 agree-box">
              <input id="agree" type="checkbox" className="d-inline-block align-middle me-1"
                checked={hasAgreed} onChange={(event) => {setHasAgreed(event.target.checked); setAgreeWarning("")}} />

              <label htmlFor="agree" className="d-inline-block align-middle mb-0 ms-2">
                I agree to all terms and Privacy Policy
              </label>
            </aside>
            {<p style={{ color: "red", marginTop: -22 , fontSize: "14"}}>{agreeWarning}</p>} 


            <div className='d-flex align-items-end justify-content-end mb-4'>
              <a href='/auth/forgot-password' className='highlight-link' >Forgot Password?</a>
            </div>

            <div className='center-div'>
              <button disabled={isRegistering}>
                {isRegistering ?
                  "Registering ..."
                  : "Register"}
              </button>
            </div>
          </form>

          <p className='already'>Already registered for an account? <a href='/auth/login'>Login</a></p>
        </div>
      </div>
    </div>
  )
}

export default Register