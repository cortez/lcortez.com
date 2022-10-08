import React, { useRef, useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import useClickToCopy from "../hooks/useClickToCopy";
import { Copy } from "./svg/Copy";
import { Copied } from "./svg/Copied";

export function Form() {
  const text = "Send me a message!";
  const [buttonText, setButtonText] = useState(text);

  useEffect(()=> {
    const timer = setTimeout(()=> {
       setButtonText(text);
    }, 2500);
    return ()=> clearTimeout(timer);
  }, [buttonText])

  const [values, setValues] = useState({ message: "" });
  const [status, setStatus] = useState(undefined);
  const form = useRef();
  const validateAndSubmitForm = (e) => {
    e.preventDefault();
    if (values.message == "") {
      setStatus({ type: 'error' });
      setButtonText("Message cannot be blank.");
    } else {
      emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
      .then(() => {
          setStatus({ type: 'success' });
          document.getElementById("form").reset();
          setButtonText("Thank you! 🎃");
          values.message = "";
      });
    }
  };

  const setMessage = (e) => {
    setValues((values) => ({ ...values, message: e.target.value }));
  };
  const [copyStatus, copy] = useClickToCopy("joseph@lcortez.com");

  return (
    <>
      <h2>Contact</h2>
      <div className="before-form">
        <a href="mailto:joseph@lcortez.com" className="underline">joseph@lcortez.com</a>&nbsp;&nbsp;
        <span className="copy" onClick={copy}>
          {copyStatus ? <>{<Copied />} {"Copied!"}</> : <>{<Copy />} {"Copy"}</>}
        </span>
      </div>
      <form ref={form} onSubmit={validateAndSubmitForm} id="form">
        <div className="form-inputs">
          <textarea type="text" name="message" placeholder={buttonText} value={values.message} onChange={setMessage}/>
          <input type="submit" value="Send" className="submit" />
        </div>
      </form>
    </>
  );
}