import React from "react";
import "./contact.css";

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
           <h5 id='location'>
            3rd Floor, UNESCO Street, <br />
            Sukhbaatar District,
            <br /> Ulaanbaatar, Mongolia
            <br />
            Tel: + (976) 7711 - 6008
          </h5>
          <p>
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
          <ul className="social" id="holbogd">
            <li>
              <img src="img/html.png" class="tech" alt="html icon" />
            </li>
          </ul>
          <p>Email: mongolhookah@gmail.com</p>
          <p>
            Pne vivendo oporteat lucilius has. Ea imperdiet ullamcorper nam.
          </p>
        </article>
      </section>
    </>
  );
};

export default Contact;
