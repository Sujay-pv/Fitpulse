import React, { useState } from "react";
import "./css-files/Signup.css";
import { Link /*, redirect */ } from "react-router-dom";
import {
  Box,
  Avatar,
  TextField,
  Button,
  Typography,
  Link as Nv,
} from "@material-ui/core";
import axios from "axios";

function SignUp() {
  const BASE_URL = "http://localhost:3007";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showOTPField, setShowOTPField] = useState(false);
  const [otpResponse, setOtpResponse] = useState(false);
 
//test
  const [count,setCount] = useState(1);
//test

  const [otp, setOTP] = useState("");
  /*const [otpemail, setOTPemail] = useState("");*/

  const handleSubmit = (event) => {
    event.preventDefault();

    if (mobile && mobile.length === 10) {
      if (password.length >= 6) {
        if (password === confirmPassword) {
          //verifyemail
          axios({
            method: "post",
            url: `${BASE_URL}/verifydata`,
            data: {
              email: email,
              //mobileNumber: mobile,
            },
          }).then(
            (response) => {
              initiateOTP();
            },
            (erro) => {
              alert(erro?.response?.data?.mesg);
            }
          );
          //initiateOTP()
        } else {
          alert("Password did not match");
        }
      } else {
        alert("Password Must be atleast 6 characters");
      }
    } else {
      alert("Invalid Mobile No");
    }
    /*console.log(`Name: ${name}, Email: ${email}, Mobile: ${mobile}, Password: ${password}, Confirm Password: ${confirmPassword}, OTP: ${otp}`);*/
  };
  const [counter, setCounter] = React.useState(59);
  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  // const blockAccount = (event) => {
  //   // event.preventDefault();
  //   console.log("blocked account is called, ", email);
  //   axios({
  //     method: "post",
  //     url: `${BASE_URL}/blockUser`,
  //     data: {
  //       email: email,
  //     },
  //   }).then((response) => {
  //     alert("three consecutive failures, ID blocked!");
  //     window.location.replace("/");
  //   });
  // };








  
  const initiateOTP = (event) => {
    // event.preventDefault();
    axios({
      method: "post",
      url: `${BASE_URL}/sendotp`,
      data: {
        mobileNumber: mobile,
      },
    }).then((response) => {
      setShowOTPField(true);
      setOtpResponse(response?.data);
    });
  };

  const initiateCreateUser = () => {
    axios({
      method: "post",
      url: `${BASE_URL}/createUser`,
      data: {
        mobileNumber: mobile,
        name: name,
        email: email,
        password: password,
      },
    }).then((response) => {
      // setShowOTPField(true)
       alert(`Verified OTP Successfully and User ${name} Created `);
       window.location.replace('/Login') 
       //setOtpResponse(response)
     });
   };

const blockuser = (event) =>{
  axios({
    method: 'post',
    url: `${BASE_URL}/blockuser`,
    data: {
      email: email,
      //mobileNumber: mobile,
    }
  }).then(response=>{
    alert("The user is blocked")
    window.location.replace('/') 
  }, erro =>{
    alert(erro?.response?.data?.mesg)
  });
}




  const handleVerifyOTP = (event) => {
    event.preventDefault();
    axios({
      method: "post",
      url: `${BASE_URL}/verifyotp`,
      data: {
        otp: otp,
        id: otpResponse?.id,
      },
    }).then(
      (response) => {
        initiateCreateUser();
      },
      (erro) => {
        
        alert("Invalid otp");
      }
    );
    //console.log(`OTP: ${otp} verified`);
  };

  return (
    <div id="signup-body">
      <div className="signup-container">
        {!showOTPField && (
          <form onSubmit={handleSubmit} className="form-signup">
            <h2 id="heading">Sign Up</h2>
            <div className="form-groupsignup">
              <input
                className="input-sigup"
                type="text"
                id="name-signup"
                value={name}
                placeholder="Name"
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>
            <div className="form-groupsignup">
              <input
                className="input-sigup"
                type="email"
                id="email-signup"
                value={email}
                placeholder="Email id"
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>

            <div className="form-groupsignup">
              <input
                className="input-sigup"
                type="tel"
                id="mobile-signup"
                value={mobile}
                placeholder="Mobile no"
                onChange={(event) => setMobile(event.target.value)}
                required
              />
              {/* <button type="button" className="btn-verify" onClick={initiateOTP}>
            Send
          </button> */}
            </div>

            <div className="form-groupsignup">
              <input
                className="input-sigup"
                type="password"
                id="password-signup"
                value={password}
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <div className="form-groupsignup">
              <input
                className="input-sigup"
                type="password"
                id="confirmPassword-signup"
                value={confirmPassword}
                placeholder="Confirm Password"
                onChange={(event) => setConfirmPassword(event.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn-signup">
              Sign Up
            </button>
            <p id="loginlink-container">
              Already Registred ?{" "}
              <Link to="/Login" id="login-link">
                Login
              </Link>
            </p>
          </form>
        )}
        {showOTPField && (
          <form onSubmit={handleVerifyOTP} className="form-signup">
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
              <Box mt={3}>
                <Typography fontWeight={400} align="center" color="white">
                  {" "}
                  Resend OTP in{" "}
                  <span style={{ color: "green", fontWeight: "bold" }}>
                    {" "}
                    00:{counter}
                  </span>{" "}
                </Typography>
              </Box>
            </div>
            <button type="submit" className="btn-signup">
              Verify OTP
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default SignUp;
