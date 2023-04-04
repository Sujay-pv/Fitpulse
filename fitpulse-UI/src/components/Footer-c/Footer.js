import React, { Component } from "react";
import logo from "../Navbar-c/Images/final_logo.jpg";
/*import ReactDOM from "react-dom";*/
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaLocationArrow,
  FaEnvelope,
} from "react-icons/fa";
import "./footer.css";

export class Footer extends Component {
  render() {
    return (
      <>
        <h3 id="contact" /> {/*Linking Navigation*/}
        {/* /* <footer className="footer">
          <div className="container">
            <div className="row">

              <div className="footer-address">
                <h4>Our Address</h4>
                <ul>
                  <li><a href="#">
                      <address>
                        #36, Near Starbucks-<br />
                        Church Street,<br />
                        Shanthala Nagar, Bengaluru,<br />
                        Karnataka-560001<br />
                      </address>

                      <br></br>
                      &nbsp;&nbsp;
                      <email>fitpulse.fp@gmail.com</email></a></li>
                </ul>
              </div>

              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

              <div className="footer-nav">
                <h4>Navigation</h4>
                <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#services">Services</a></li>
                  <li><a href="#exercise">Exercise</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>

              <div className="footer-founders">
                <h4>Founders</h4>
                <ul>
                  <li><a href="#">Dhanush E <br /> 20191CSE0126</a></li>
                  <li><a href="#">Soma Sai Dhanush <br /> 20191CSE0781</a></li>
                  <li><a href="#">Thrupthi V <br />20191ISE0183</a></li>
                  <li><a href="#">Sujay P V <br />20191CSE0595</a></li>
                  <li><a href="#">Devaraja <br />20191CSE0124</a></li>
                </ul>
              </div> 
             

              <div className="footer-social">
                <h4>Follow Us</h4>
                    <a href = "https://www.instagram.com/fitpulse.fp/"><FaInstagram className='icon'/></a> &nbsp;
                    <a href = "https://www.facebook.com/profile.php?id=100091100448725&is_tour_completed=true"><FaFacebook className='icon'/></a> &nbsp;
                    <a href = "https://www.linkedin.com/in/fit-pulse-87a8a326b/"><FaLinkedin className='icon'/></a> &nbsp;
                    <a href = "https://www.youtube.com/channel/UCle81zpGRLADpIbUd4hfu2Q"><FaYoutube className='icon'/></a> &nbsp;
              </div>

              <div className="icons">
              <FaLocationArrow className='icon-address'/>
              <br></br>
              <FaEnvelope className='icon-envelope'/>
              </div>

            </div>
          </div>
        </footer> */}
        <footer>
          <div className="footercontainer">
            <img src={logo} alt="" />
            <div className="address">
              <h4>Our Address</h4>
              <p>
                #36, Near Starbucks, Church Street,
                <br /> Shanthala Nagar, Bengaluru, Karnataka-560001
              </p>
            </div>
            <div className="footer-social">
                <h4>Follow Us</h4>
                    <a href = "https://www.instagram.com/fitpulse.fp/"><FaInstagram className='icon'/></a> &nbsp;
                    <a href = "https://www.facebook.com/profile.php?id=100091100448725&is_tour_completed=true"><FaFacebook className='icon'/></a> &nbsp;
                    <a href = "https://www.linkedin.com/in/fit-pulse-87a8a326b/"><FaLinkedin className='icon'/></a> &nbsp;
                    <a href = "https://www.youtube.com/channel/UCle81zpGRLADpIbUd4hfu2Q"><FaYoutube className='icon'/></a> &nbsp;
              </div>

              <div className="icons">
              <FaLocationArrow className='icon-address'/>
              <br></br>
              <FaEnvelope className='icon-envelope'/>
              </div>
          </div>
        </footer>
      </>
    );
  }
}
