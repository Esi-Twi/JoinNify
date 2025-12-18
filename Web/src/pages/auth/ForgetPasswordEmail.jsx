import React, { useState } from 'react';

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Logic to send email to backend
    console.log("Sending password reset link to:", email);

    // Show success state
    setIsSubmitted(true);
  };

  return (
    <div className='center-div row auth-other'>
      <div className='col-lg-9 col-md-7 col-11 row auth-form align-items-start pt-md-5'>
        <div className='mx-md-0 my-md-0 my-5 pt-md-5'>
          <h1 className='auth-header mb-0'>Forgot Password?</h1>

          {!isSubmitted ? (
            <>
              <p className='mt-0 mb-md-5 mb-4 fs-md-5'>
                Enter your email address and we'll send you a link to reset your password.
              </p>

              <form className='auth-form-inner' onSubmit={handleSubmit}>
                <div className='mb-4'>
                  <label>Email Address <span>*</span></label>
                  <input
                    type='email'
                    required className='mt-2'
                    placeholder="e.g. name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className='center-div'>
                  <button>Send Reset Link</button>
                </div>
              </form>
            </>
          ) : (
            <div className="mt-4 p-4 border rounded bg-light">
              <h4 className="text-success">Check your inbox!</h4>
              <p>We have sent a password recovery link to <strong>{email}</strong>. Please check your spam folder if you don't see it.</p>
              <button
                className="btn btn-link p-0 mt-2"
                onClick={() => setIsSubmitted(false)}
              >
                Try another email
              </button>
            </div>
          )}

          <p className='already mt-5'>
            Remember your password? <a href='/auth/login'>Login here</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;