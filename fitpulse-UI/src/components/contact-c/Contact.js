import React, { /*useRef, */useState } from 'react';
import './contact.css';
import emailjs from "@emailjs/browser";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message,setMessage] = useState("");

 //const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();

   emailjs.sendForm(
       'service_oqq0osq', 'template_mbrxdan', event.target, 'xTN8RKQjVHyzK0wxG'
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Your Message has been Sent");
          window.location.replace("/");
        },
        (error) => {
          console.log(error.text);
        }
      );
    event.target.reset();

  };

  return (
      <div id="contact-body">
        <div id="contact-container">
        <form id="contact-form" onSubmit={sendEmail}>
          <h2 id="contact-heading">Contact Us</h2>
          <div className="form-group-contact">
          <input 
           className="input-contact"
          type="text" 
          id="name-contact"
          placeholder='Name'
          value={name}
          name="user_contact_name"
          onChange={(event) => setName(event.target.value)}
          required
          
          />
          </div>
          <div className="form-group-contact">
          <input
              className="input-contact"
              type="email"
              id="email-contact"
              value={email}
              placeholder="Email id"
              name="user_contact_email"
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div className="form-group-contact">
          <textarea className="input-contact" id="contct-message" name ="user_contact_message" value={message} placeholder='Your Message' onChange={(event) => setMessage(event.target.value)}></textarea>
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