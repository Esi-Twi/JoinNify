import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { useAuthStore } from '../../store/useAuthStore';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { isLoggingIn, login } = useAuthStore()
  const { register, handleSubmit, formState: { errors } } = useForm()


  const onSubmit = (data) => {
    login(data)
  }


  // <div className='d-flex align-items-center justify-content-center w-100' style={{ height: "100vh" }}>
  //   <span class="loader"></span>
  // </div>
  return (
    <div className='center-div row auth-other'>
      <div className='col-lg-9 col-md-10 col-11 row auth-form align-items-start pt-md-5'>
        <div className='mx-md-0 my-md-0 my-5 pt-md-5'>
          <h1 className='auth-header mb-0'>Welcome Back</h1>
          <p className='mt-0 mb-md-5 mb-4 fs-md-5 '>Log into your account</p>

          <form onSubmit={handleSubmit(onSubmit)} className='auth-form-inner'>
            <div>
              <label>Email <span>*</span></label>
              <input type='text' {...register("email", { required: "Email is required" })} />
            </div>
            {errors.email && <p style={{ color: "red", marginTop: -12 }}>{errors.email.message}</p>}

            <div className='mt-4 password-input'>
              <label>Password <span>*</span></label>
              <aside>
                <input type={showPassword ? "text" : "password"}
                {...register("password", { required: "Password is required" })} />
                <i className={`bi ${showPassword ? 'bi-eye' : 'bi-eye-slash'} w-5 ms-2`} style={{ cursor: "pointer" }} onClick={() => setShowPassword(!showPassword)}></i>
              </aside>
            </div>
            {errors.password && <p style={{ color: "red", marginTop: -12 }}>{errors.password.message}</p>}


            <div className='d-flex align-items-end justify-content-end mt-5 mb-4'>
              <a href='/auth/forgot-password-email' className='highlight-link' >Forgot Password?</a>
            </div>

            <div className='center-div'>
              <button disabled={isLoggingIn}>
                {isLoggingIn ? 
                    "Logging In ..."
                   : "Log In"}
                </button>
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


