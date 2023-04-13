import React, { useState } from "react";
import "./css-files/Login.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const BASE_URL = "http://localhost:3007";
  const [showOTPField, setShowOTPField] = useState(false);
  const [otpResponse, setOtpResponse] = useState(false);

  const [otp, setOTP] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        "http://localhost:3007/login",
        { email: email, password: password },
        { withCredentials: true }
      )
      // axios({
      //   method: 'post',
      //   url: `${BASE_URL}/login`,

      //   data: {
      //     email: email,
      //     password: password,
      //   }
      // })
      .then(
        (response) => {
          console.log(response);
          initiateOTP();
        },
        (error) => {
          alert("Invalid details");
        }
      );
  };
 

  const initiateOTP = (event) => {
    // event.preventDefault();
   
     axios({
       method: 'post',
       url: `${BASE_URL}/sendotplogin`,
       data: {
         emailuser:email,
       }
     }).then(response=>{
       setShowOTPField(true)
       setOtpResponse(response?.data)
     });
   };
 

  const handleVerifyOTP = (event) => {
    event.preventDefault();
    axios({
      method: 'post',
      url: `${BASE_URL}/verifyotplogin`,
      data: {
        otp: otp,
        id : otpResponse?.id
      }
    }).then(response=>{
      window.location.replace("/");
    }, erro =>{
      alert("Invalid otp")
    });
    //console.log(`OTP: ${otp} verified`);
  };


  return (
    <div id="login-body">
      <div className="login-container">
      {!showOTPField && <form onSubmit={handleSubmit} id="login-form">
          <h2 id="loginheading">Login</h2>
          <div className="form-group-login">
            <input
              className="input-login"
              type="email"
              id="email-login"
              value={email}
              placeholder="Email id"
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div className="form-group-login">
            <input
              className="input-login"
              type="password"
              id="password-login"
              value={password}
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          <p id="login_forgot_password"><Link id="login_forgot_password_link">Forgot Password ?</Link></p>
          <button type="submit" className="btn-login">
            Login
          </button>
          <p id="signuplink-container">
            Don't have an account ?{" "}
            <Link to="/Signup" id="signuplink">
              Signup
            </Link>{" "}
          </p>
        </form>}
        {showOTPField &&<form onSubmit={handleVerifyOTP} className="form-signup">
      
          <div className="form-groupsignup">
            <input
            className="input-sigup"
              type="text"
              id="otp-signup"
              value={otp}
              placeholder="OTP"
              onChange={(event) => setOTP(event.target.value)}
              required
            />
            
          </div>
          <button type="submit" className="btn-signup">
            Verify OTP
          </button>
        </form>}
      </div>
    </div>
  );
}

export default Login;
