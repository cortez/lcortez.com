import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const isEmail = (email) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

export function Form() {
  const [values, setValues] = useState({ email: "" });
  const [status, setStatus] = useState(undefined);
  const form = useRef();
  const validateAndSubmitForm = (e) => {
    e.preventDefault();
    if (!isEmail(values.email)) {
      setStatus({ type: 'error' });
    } else {
      emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
      .then(() => {
          setStatus({ type: 'success' });
          document.getElementById("form").reset();
          values.email = ""; 
      });
    }
  };
 
  const setEmail = (e) => {
    setValues((values) => ({ ...values, email: e.target.value }));
  };

  return (
    <form ref={form} onSubmit={validateAndSubmitForm} id="form">
      <h2>Contact</h2>
      <div className="formInputs">
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="email" placeholder="Email" value={values.email} onChange={setEmail}/>
        <textarea name="message" placeholder="Message" />
        <input type="submit" value="Send" className="submit" />
      </div>
      <>
        {status?.type === 'success' && <span>Thank you! I'll get back to you soon. 🎃</span>}
        {status?.type === 'error' && ( <span>Please enter a valid email.</span>)}
      </>
    </form>
  );
}