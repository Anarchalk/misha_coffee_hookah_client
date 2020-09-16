import React from "react";
import "./contact.css";
import insta from "../../images/social/005-instagram-1.png";
import facebook from '../../images/social/003-logo.png';
import email from '../../images/social/001-mail.png';


const Contact = (props) => {
  return (
    <>
      {/* section-d */}
      <section id="section-d" className="grid">
        <article className="box">
          <h2 className="content-title" style={{ color: "#f5f5f5" }}>
            Locations
          </h2>
          <h3 className="contact">Olympic Residence</h3>
          <article id="locations">
            <h5 id="location">
              3rd Floor, UNESCO Street, <br />
              Sukhbaatar District,
              <br /> Ulaanbaatar, Mongolia
              <br />
              Tel: + (976) 7711 - 6008
            </h5>
            <p >
              <span>Opening Hours</span>
              <br />
              Mon - Fri 9:00 am - 12:00 am
              <br />
              Sat - Sun 11:00 am - 12:00 am
            </p>
          </article>
        </article>
        <article className="box">
          <h2 className="content-title">Contact us</h2>
          <p>Let's connect on social media </p>
          <ul className="social" id="holbogd">
            <li>
              <a href="https://www.instagram.com/misha_coffee_ub/" target="_blank"><img className="contact-icon" src={insta} alt="instagram" /></a>
            </li>
            <li>
              <a href="https://www.facebook.com/misha_coffee_ub-108078303885092" target="_blank"><img className="contact-icon" src={facebook} alt="facebook" /></a>
            </li>
             <li>
              <a href="mailto: misha.coffee.hookah@gmail.com" target="_blank"><img className="contact-icon" src={email} alt="envelope" /></a>
            </li>
          </ul>
        </article>
      </section>
    </>
  );
};

export default Contact;
