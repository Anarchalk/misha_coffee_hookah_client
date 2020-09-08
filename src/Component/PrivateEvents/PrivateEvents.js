import React from "react";
//import React, {useState} from 'react';
import DatePickers from "../Datepicker/Datepickers.js";
import { Link } from "react-router-dom";

const PrivateEvents = () => {
    // const [values, setValues] = useState('')

    // handleChange = () => {

    // }


  return (
    <>
      <section>
        <h3>EVENT INFORMATION</h3>
        <form >
          <fieldset>
            <br />
            <label className="label" htmlFor="type">
              Event Type:
            </label>
            <input type="text" name="type" id="type" className="input" required />
          </fieldset>
          <fieldset>
            <br />
            
            <label className="label" htmlFor="time">
              Event Date & Time:
            </label>
            <DatePickers />
            <label className="label" htmlFor="duration" >
              Duration:
            </label>
            <input type="text" name="duration" id="duration" className="input" required/>
            <label className="label" htmlFor="guests">
              Number of guests:
            </label>
            <input type="text" name="guests" id="guests" className="input" required/>
            <label className="label" htmlFor="fullname">
              Contact Full Name:
            </label>
            <input type="text" name="fullname" id="fullname" className="input" required/>
            <label className="label" htmlFor="company">
              Company Name:
            </label>
            <input type="text" name="company" id="company" className="input" />
            <label className="label" htmlFor="phone">
              Phone Number:
            </label>
            <input type="text" name="phone" id="phone" className="input" required/>
            <label className="label" htmlFor="email">
              Email:
            </label>
            <input type="text" name="email" id="email" className="input" required/>
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
        <br />
        <Link to="/e-dashboard">
          <button id="cancel">Cancel</button>
        </Link>
      </section>
      <br />
    </>
  );
};

export default PrivateEvents;
