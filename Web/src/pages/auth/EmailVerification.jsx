import React, { useState, useRef, useEffect } from 'react';

function EmailVerification() {
  const [token, setToken] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false; 

    const newToken = [...token];
    newToken[index] = element.value;
    setToken(newToken);

    // Move to next input if value is entered
    if (element.value !== "" && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // Move to previous input on backspace if current field is empty
    if (e.key === "Backspace" && !token[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalToken = token.join("");
    console.log("Submitted Token:", finalToken);

    if (finalToken.length < 6) {
      alert("Please enter the full 6-digit code.");
    } else {
      // Add your API call logic here
      alert(`Verifying token: ${finalToken}`);
    }
  };

  return (
    <div className='center-div row auth-other'>
      <div className='col-lg-9 col-md-7 col-11 row auth-form align-items-start pt-md-5'>
        <div className='mx-md-0 my-md-0 my-5 pt-md-5'>
        <h1 className='auth-header mb-0'>Verify Email</h1>
        <p className='mt-0 mb-md-5 mb-4 fs-md-5'>
          Enter the 6-digit code sent to your email.
        </p>

        <form className='auth-form-inner' onSubmit={handleSubmit}>
          <div className="d-flex gap-3 mb-4 justify-content-center" style={{flexDirection: "row"}}>
            {token.map((data, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                className="form-control inline text-center fw-bold fs-4"
                style={{ width: '55px', height: '55px', border: '1px solid #ced4da' }}
                value={data}
                ref={(el) => (inputRefs.current[index] = el)}
                onChange={(e) => handleChange(e.target, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            ))}
          </div>

          <div className='center-div'>
            <button>Verify Account</button>
          </div>
        </form>

        <p className='already mt-4'>
          Didn't receive a code? <a role='button' className='text-indigo' >Resend Code</a>
        </p>
      </div>
    </div>
    </div >
  );
}

export default EmailVerification;