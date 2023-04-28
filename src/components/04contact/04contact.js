import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { page04 } from '../../features/counter/counterSlice';
import './04contact.css';

import emailjs from '@emailjs/browser';

function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm('service_fr1lhns', 'template_qku4pks',
    e.target,
    'lz3cUWX4ve311rPtk')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    })
}

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const page = useSelector((state) => state.counter.page);
  const dispatch = useDispatch();

  const change = (e) => {
    if (e.target.name === 'name') setName(e.target.value);
    if (e.target.name === 'email') setEmail(e.target.value);
    if (e.target.name === 'message') setMessage(e.target.value);
  }

  // console.log("{ name : ", name, ", email : ", email, ", text : ", message, " }")

  if (page === 0) {
    return (
      <>
        <div
          className='home_contact_container'
          onClick={() => dispatch(page04())}>
          <div className='home_contact_box'>
            <span className='contact_line01'></span>
            <span className='contact_line02'></span>
            <span className='contact_line03'></span>
            <span className='contact_line04'></span>
            <div className='home_contact_contents'>
              <div>04</div>
              <div className='home_contact_break_line' />
              <div className='home_contact_title'>CONTACT</div>
            </div>
          </div>
        </div>
      </>
    )
  }

  if (page === 4) {
    return (
      <>
        <div
          className='contact_container'
          onClick={() => dispatch(page04())}>
          <div className='contact_box'>
            <div className='contact_title'>#CONTACT</div>
            <form className='contact_form' onSubmit={sendEmail}>
              <input type='hidden' name='contact_number' />
              <div className='contact_name'>
                <label>• 성함 / Name</label>
                <input
                  type='text'
                  name='name'
                  className='contact_name_box'
                  value={name}
                  onChange={(e) => change(e)} />
              </div>
              <div className='contact_email'>
                <label>• 이메일 / Email</label>
                <input
                  type='email'
                  name='email'
                  className='contact_email_box'
                  value={email}
                  onChange={(e) => change(e)} />
              </div>
              <div className='contact_message'>
                <label>• 메세지 / Message</label>
                <textarea
                  type='text'
                  name='message'
                  className='contact_message_box'
                  value={message}
                  onChange={(e) => change(e)} />
              </div>
            </form>
            <button
              type='submit'
              className='contact_send_button'>
              Send
            </button>
          </div>
        </div>
      </>
    )
  }

  if (page !== 0 && page !== 4) {
    return (
      <>
        <div
          className='inactive_contact_container'
          onClick={() => dispatch(page04())}>
          <span className='inactive_contact_title'>04 Contact</span>
        </div>
      </>
    )
  }
}

export default Contact;