import React from 'react';
import { FaInstagram } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import { FaSquareWhatsapp } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
    <div className='container'>
    <div className="contact-container">
      <div className="contact-form p-5">
        <h2 className='welcome-font'>Visit Our Virtual Store.</h2>
        <form>
          <div className="form-group">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <input type="tel" placeholder="Phone Number" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Message" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Submit Now</button>
        </form>
      </div>
      
      
    </div>

    </div>
    </>
  );
};

export default Contact;
