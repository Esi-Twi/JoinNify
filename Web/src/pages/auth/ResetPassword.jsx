import React, { useState } from 'react';
import { useAuthStore } from '../../store/useAuthStore';
import { useNavigate, useSearchParams } from 'react-router-dom';

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [searchParams] = useSearchParams();
  const userId = searchParams.get('userId');
  const [errorMessage, setErrorMessage] = useState("");
  const { isResetingPassword, resetPassword, resetSuccess } = useAuthStore()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!password) {
      setErrorMessage("Password is required")
      return;
    }
    setErrorMessage("")

    resetPassword({ 
      userId: Number(userId), 
      password 
    })

    if(resetSuccess) return navigate("/auth/login")
  }

  return (
    <div className='center-div row auth-other'>
      <div className='col-lg-9 col-md-7 col-11 row auth-form align-items-start pt-md-5'>
        <div className='mx-md-0 my-md-0 my-5 pt-md-5'>
          <h1 className='auth-header mb-0'>Reset Password</h1>

          <>
            <p className='mt-0 mb-md-5 mb-4 fs-md-5'>
              Enter your new password.
            </p>

            <form className='auth-form-inner' onSubmit={handleSubmit}>
              <div className='mb-4'>
                <label>Password <span>*</span></label>
                <input
                  type='text'
                  className='mt-2'
                  placeholder="e.g. Password@2025"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                {errorMessage && <p style={{ color: "red", marginTop: -5 }}>{errorMessage}</p>}

              </div>

              <div className='center-div'>
                <button disabled={isResetingPassword}>
                  {isResetingPassword ? "Reseting Passwword...." : "Reset Password"}
                </button>
              </div>
            </form>
          </>

          <p className='already mt-5'>
            Remember your password? <a href='/auth/login'>Login here</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;