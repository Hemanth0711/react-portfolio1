import React from 'react'
import './contact.css'
import {FiMail} from 'react-icons/fi'
import {FaLinkedin} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
import { wait } from '@testing-library/user-event/dist/utils'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_azgr2ex', 'template_jg0iurh', form.current, 'O_sxK4RFBRnmejTC1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  };
  
  function func(){
    let a = document.querySelectorAll('input');
    let b = document.querySelector('textarea');
    let bt = document.querySelector('button');
    if(a[0].value.trim().length > 0 && a[1].value.trim().length > 0 && b.value.trim().length > 0){
      bt.innerHTML = 'done!'
      bt.style.background = 'var(--color-white)';
      setTimeout(function(){bt.innerHTML = 'Send Message'; bt.style.background = 'var(--color-primary)';},2000);
    }
  }
  return (
    <section id = 'contact'>
      <h5> Get in Touch</h5>
      <h2>Contact</h2>
      <div className = "container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <FiMail class = 'contact__option-icon'/>
            <h4>Email</h4>
            <h5>hemanthsai0711@gmail.com</h5>
            <a href='mailto:hemanthsai0711@gmail.com' target = '_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <FaLinkedin class = 'contact__option-icon'/>
            <h4>Linkedin</h4>
            <h5>G Hemanth Sai</h5>
            <a href='https://linkedin.com' target = '_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp class = 'contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91 9848586421</h5>
            <a href='https://wa.me/+919848586421' target = '_blank'>Send a message</a>
          </article>
        </div>
        <form ref = {form} onSubmit = {sendEmail}>
          <input type="text" name = 'name' placeholder='Full Name' required/>
          <input type='email' name='email' placeholder='Email' required />
          <textarea name = 'message' rows='7' placeholder='Message' required></textarea>
          <button type = "submit" className = 'btn btn-primary' onClick = {func}>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact