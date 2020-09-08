import React from "react";
import DatePickers from "../Datepicker/Datepickers.js";
import { Link } from "react-router-dom";
import useForm from "./useForm";

const PrivateEvents = () => {
  const [values, handleChange] = useForm({
    type: "",
    time: "",
    duration: "",
    guests: "",
    fullname: "",
    company: "",
    phone: "",
    email: "",
    comments: "",
  });

   handleSubmit = (e) => {
       e.preventDefault();
       
   }

  return (
    <>
      <section>
        <h3>EVENT INFORMATION</h3>
        <label className="label" htmlFor="time">
          Event Date & Time:
        </label>
        <DatePickers />
        <form onSubmit={handleSubmit}>
          <fieldset>
            <br />
            <label className="label" htmlFor="type">
              Event Type:
            </label>
            <input
              onChange={handleChange}
              type="text"
              name="type"
              id="type"
              className="input"
              value={values.type}
              required
            />
          </fieldset>
          <fieldset>
            <br />

            <label className="label" htmlFor="duration">
              Duration:
            </label>
            <input
              onChange={handleChange}
              type="text"
              name="duration"
              id="duration"
              className="input"
              value={values.duration}
              required
            />
            <label className="label" htmlFor="guests">
              Number of guests:
            </label>
            <input
              onChange={handleChange}
              type="text"
              name="guests"
              id="guests"
              className="input"
              value={values.guests}
              required
            />
            <label className="label" htmlFor="fullname">
              Contact Fullname:
            </label>
            <input
              onChange={handleChange}
              type="text"
              name="fullname"
              id="fullname"
              className="input"
              value={values.fullname}
              required
            />
            <label className="label" htmlFor="company">
              Company Name:
            </label>
            <input
              onChange={handleChange}
              type="text"
              name="company"
              id="company"
              className="input"
              value={values.company}
              required
            />
            <label className="label" htmlFor="phone">
              Phone Number:
            </label>
            <input
              onChange={handleChange}
              type="text"
              name="phone"
              id="phone"
              className="input"
              value={values.phone}
              required
            />
            <label className="label" htmlFor="email">
              Email:
            </label>
            <input
              onChange={handleChange}
              type="text"
              name="email"
              id="email"
              className="input"
              value={values.email}
              required
            />
          </fieldset>
          <fieldset>
            <label className="label" htmlFor="comments">
              Comments:
            </label>
            <textarea
              onChange={handleChange}
              type="text"
              name="comments"
              id="comments"
              className="textarea"
              value={values.comments}
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
