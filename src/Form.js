import React from "react";
import emailjs from "emailjs-com";
import DatePickers from "./Component/Datepicker/Datepickers";
import './form.css'

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cknq5rk",
        "template_hacurmn",
        e.target,
        "user_Kf1ygWvjFgsEFN43DT4IN"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      cancelCourse()
  }

  function cancelCourse() {
    document.getElementById("clear-form").reset();
  }
  
  return (
      <section>
           <label className="label" htmlFor="time">
          Event Date & Time:
        </label>
         <DatePickers />
    <form className="contact-form" id="clear-form" onSubmit={sendEmail}>
      <fieldset>
        <br />
        <label className="label" htmlFor="type">
          Event Type:
        </label>
        <input type="text" name="type" id="type" className="input" required />
      </fieldset>
      <fieldset>
        <br />
        <label className="label" htmlFor="duration">
          Duration:
        </label>
        <input
          type="text"
          name="duration"
          id="duration"
          className="input"
          required
        />
        <label className="label" htmlFor="guests">
          Number of guests:
        </label>
        <input
          type="text"
          name="guests"
          id="guests"
          className="input"
          required
        />
        <label className="label" htmlFor="fullname">
          Contact Fullname:
        </label>
        <input
          type="text"
          name="fullname"
          id="fullname"
          className="input"
          required
        />
        <label className="label" htmlFor="company">
          Company Name:
        </label>
        <input type="text" name="company" id="company" className="input" />
        <label className="label" htmlFor="phone">
          Phone Number:
        </label>
        <input type="text" name="phone" id="phone" className="input" required />
        <label className="label" htmlFor="email">
          Email:
        </label>
        <input type="text" name="email" id="email" className="input" required />
      </fieldset>
      <fieldset>
        <label className="label" htmlFor="comments">
          Comments:
        </label>
        <textarea
          type="text"
          name="comments"
          id="comments"
          className="textarea"
        />
      </fieldset>
      <input type="submit" value="SUBMIT" />
    </form>
    </section>
  );
}
