import React from 'react';
import '../../App.css';
import './grid.css'
import Footer from '../Footer'
import emailjs from 'emailjs-com' 
export default function SignUp() {
	  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_2sw5pcy', 'template_sftej7r', e.target,'user_j7DBhn4Od86y8f00Vk84p')
      .then((result) => {
          console.log(result.text);
	  alert('email has been sent')
      }, (error) => {
          console.log(error.text);
	  alert('whoops! there was an error')
      });
  }

  return (
	  <div className='cnt'>
<div className='contact-form-container'>
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" />
	  <br/>
      <label>Email</label>
      <input type="email" name="user_email" />
	  <br/>
      <label>Message</label>
      <textarea name="message" />
	  <br/>
      <input type="submit" value="Send" />
    </form>
    </div>
    </div>
  );
}
