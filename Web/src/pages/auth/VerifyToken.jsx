import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';

function VerifyToken() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get('token');
  const userId = searchParams.get('userId');
  const { verifyToken, verifyingTokenStatus } = useAuthStore()


  useEffect(() => {
    verifyToken({
      userId: Number(userId),
      token: Number(token)
    })

    if (verifyingTokenStatus === "success") {
      navigate(`/auth/reset-password?userId=${userId}`)
    }
  }, [verifyingTokenStatus]);


  return (
    <div className='row auth-form align-items-start pt-md-5'>
      <div className='col-md-10 col-10 mx-md-0 mx-5 my-md-0 my-5 pt-md-5 text-center text-md-start'>

        {verifyingTokenStatus === 'verifying' && (
          <div className="verification-loader mx-5 mx-lg-0">
            <h1 className='auth-header mb-2'>Verifying Your Token</h1>
            <p className='mb-5 fs-md-5'>Please wait while we secure your profile...</p>

            {/* The Moving Animation */}
            <div className="d-flex justify-content-center w-100">
              <div className="spinner-container">
                <div className="pulse-ring"></div>
                <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {verifyingTokenStatus === 'success' && (
          <div className="verification-success mx-5 mx-lg-0">
            <h1 className='auth-header mb-2 text-success'>Success!</h1>
            <p className='fs-md-5'>Your token has been verified. Redirecting you to reset password...</p>
            <div className="display-1 text-success mt-4">
              <i className="bi bi-patch-check-fill"></i>
            </div>
          </div>
        )}

        {verifyingTokenStatus === 'error' && (
          <div className="verification-error mx-5 mx-lg-0">
            <h1 className='auth-header mb-2 text-danger'>Verification Failed</h1>
            <p className='fs-md-5'>The token is invalid or has expired.</p>
            <button
              className="mt-4 button"
              onClick={() => navigate('/auth/forgot-password')}
            >
              Back to Forgot Password Page
            </button>
          </div>
        )}

      </div>

      <style>{`
        .spinner-container {
          position: relative;
          display: inline-block;
        }
        .pulse-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 3rem;
          height: 3rem;
          background-color: #0d6efd;
          border-radius: 50%;
          opacity: 0.4;
          animation: pulse 1.5s infinite ease-in-out;
        }
        @keyframes pulse {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 0.4; }
          100% { transform: translate(-50%, -50%) scale(2.5); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

export default VerifyToken;


