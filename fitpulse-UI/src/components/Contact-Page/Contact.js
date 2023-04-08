import React, { Component } from "react";
import ReactDOM from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ik0nac8",
        "template_uzh87s8",
        form.current,
        "m5wH1caFIFaPVHcWA"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <div className="contact-page">
     
        <section>
          <div className="contact-container">
            <h1>Contact Us</h1>
            <div className="contact-elements">
              <div className="contact-form">
                <h3>Get in Touch!</h3>
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="--form-control --card
                    --flex-center --dir-column"
                >
                  <div className="heading"></div>
                  <input
                    type="text"
                    placeholder="Name"
                    name="user_name"
                    required
                  />

                  <div className="heading"></div>
                  <input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    required
                  />

                  <div className="heading"></div>
                  <input
                    type="email"
                    placeholder="Email"
                    name="user_email"
                    required
                  />

                  <div className="heading"></div>
                  <input
                    type="tel"
                    placeholder="Number"
                    name="user_number"
                    required
                  />

                  <div className="heading"></div>
                  <textarea
                    placeholder="Message"
                    name="message"
                    cols="20"
                    rows="10"
                  ></textarea>

                  <br></br>
                  <br></br>

                  <button type="submit" className="send">
                    Send Message
                  </button>

                  <br></br>
                </form>
              </div>
              
              <div className="contact-address">
                <h3>Location</h3>
                <div className="addr">
                  <div className="addr-head">
                    <h5>Address:</h5>
                    <p>
                      #36, Near Starbucks - <br />
                      Church Street,<br></br>
                      Shanthala Nagar,<br></br>
                      Bengaluru,<br></br>
                      Karnataka-560001
                      <br />
                    </p>
                  </div>
                  <div className="addr-phone">
                    <h5>Phone:</h5>
                    <p>(+91) 9681858791</p>
                  </div>
                  <div className="addr-email">
                    <h5>Email:</h5>
                    <p>fitpulse.fp@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="contact-map">
                {/*<h3>Map</h3>*/}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3887.9395923618845!2d77.6019397!3d12.9757155!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1768f48158a1%3A0x7d68117d65695f11!2sFit%20Pulse!5e0!3m2!1sen!2sin!4v1680952153511!5m2!1sen!2sin"
                  width="360"
                  height="250"
                  style={{ border:"0" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade">
                  </iframe>
              </div>
            </div>
          </div>
        </section>
        
      </div>
    </>
  );
};

export default Contact;
