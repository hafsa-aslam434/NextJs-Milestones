import React from 'react'
import { TfiEmail } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";
import '../app/styles/contact.css';

const Contact = () => {
  return (
    <div id="contact" className='contact-container'>
      <div className="contact-grid md:grid-cols-2">
       <div className="contact-space">
          <h2 className="contact-heading"data-aos="zoom-in-up">Get in touch:</h2>
           <p className="contact-text"data-aos="zoom-in-up">
            Give me a call or drop a message by submitting this form 
            or you can contact me through e-mail.
           </p>
          <div className="contact-flex"data-aos="zoom-in-up">
            <TfiEmail size={30}/> hafsaaslam65@gmail.com
          </div>
          <div className="contact-flex"data-aos="zoom-in-up">
            <BsTelephone size={30}/> +923010301528
          </div>
       </div>
       <div className="contact-space">
         <div className="form"data-aos="zoom-in-up">
           <label htmlFor="name">Name:</label>
           <input type="text" 
           className="input-field"id='name'/>
        </div>

        <div className="form"data-aos="zoom-in-up">
           <label htmlFor="email">Email:</label>
           <input type="email" 
           className="input-field"id='email'/>
        </div>

        <div className="form"data-aos="zoom-in-up">
           <label htmlFor="message">Message:</label>
           <textarea className="textarea-field"id='message' rows={8}></textarea>
        </div>
        <button className="Button"data-aos="zoom-in-up">Send</button>
      </div>
     </div>
   </div>
  )
}

export default Contact
