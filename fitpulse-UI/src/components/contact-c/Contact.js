import React from 'react';
import './contact.css';

function Contact() {
  return (
      <div id="contact-body">
        <div id="contact-container">
        <form  id="contact-form">
          <h2 id="contact-heading">Contact Us</h2>
          <div className="form-group-contact">
          <input 
           className="input-contact"
          type="text" 
          id="name-contact"
          placeholder='Name'
          required
          
          />
          </div>
          <div className="form-group-contact">
          <input
              className="input-contact"
              type="email"
              id="email-contact"
              //value={email}
              placeholder="Email id"
              //onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div className="form-group-contact">
          <textarea className="input-contact" id="contct-message" placeholder='Your Message'></textarea>
          </div>
          <button type="submit" className="btn-contact">
            Send
          </button>
          </form>
        </div>
      </div>
  )
}

export default Contact;