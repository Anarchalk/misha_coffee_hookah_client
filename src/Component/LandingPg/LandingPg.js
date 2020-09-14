import React, { Component } from "react";
import blue from "../../images/blue-cup.jpg";
import yellow from "../../images/yellow-cocktail.jpg";
import avocado from "../../images/avocado-mix.jpg";
import "./landing.css";
import Slideshow from "../Slideshow/Slideshow";
import slide1 from "../../images/slide1.jpg";
import slide2 from "../../images/slide2.jpg";
import slide3 from "../../images/slide3.jpg";
import slide4 from "../../images/slide4.jpg";
import slide5 from "../../images/slide5.jpg";
import Contact from '../Contact/Contact.js';

export default class LandingPg extends Component {
  render() {

    // SLIDES DATA
    const slides = [slide1, slide2, slide3, slide4, slide5];

    return (
      <>
       {/* section a */}
        <section id="section-a" className="grid">
          <article className="content-wrap">
            <article className="slides">
              <Slideshow slides={slides} />
            </article>

            <h2 id="misha" className="content-title">
              MISHA COFFEE
            </h2>
            <article className="content-text">
              <p>
                Lorem ipsum dolor sit amet, te mel euripidis expetendis, mea ne
                elit erat. Ad nulla erant vocibus mel. Ea veritus docendi eam,
                copiosae senserit vel ex. Est te inermis scriptorem, has commune
                honestatis ex, pro te illud expetenda. Vero vocibus ceteros nec
                at. Qui ubique ignota imperdiet ut, eros labore ad nam, ne
                vivendo oporteat lucilius has.
              </p>
            </article>
          </article>
        </section>

        {/* section b */}
        <section id="section-b" className="grid">
          <ul>
            <li>
              <article className="card">
                <img
                  className="small-pictures"
                  src={blue}
                  alt="blue coffee cup"
                />
              </article>
              <article className="card-content">
                <h3 className="card-title"> Sometitle 1</h3>
                <p>
                  Vero vocibus ceteros nec at. Qui ubique ignota imperdiet ut,
                  eros labore ad nam, ne vivendo oporteat lucilius has. Ea
                  imperdiet ullamcorper nam.
                </p>
              </article>
            </li>
            <li>
              <article className="card">
                <img
                  className="small-pictures"
                  src={yellow}
                  alt="mango smoothie"
                />
              </article>
              <article className="card-content">
                <h3 className="card-title"> Boba Time!</h3>
                <p>
                  Vero vocibus ceteros nec at. Qui ubique ignota imperdiet ut,
                  eros labore ad nam, ne vivendo oporteat lucilius has. Ea
                  imperdiet ullamcorper nam.
                </p>
              </article>
            </li>
            <li>
              <article className="card">
                <img
                  className="small-pictures"
                  src={avocado}
                  alt="kiwi smoothie"
                />
              </article>
              <article className="card-content">
                <h3 className="card-title"> Sometitle 3</h3>
                <p>
                  Vero vocibus ceteros nec at. Qui ubique ignota imperdiet ut,
                  eros labore ad nam, ne vivendo oporteat lucilius has. Ea
                  imperdiet ullamcorper nam.
                </p>
              </article>
            </li>
          </ul>
        </section>
        <section id="section-c" className="grid">
          <article className="content-wrap">
            <h2 className="content-title">What is new on the menu</h2>
            <p>
              Vero vocibus ceteros nec at. Qui ubique ignota imperdiet ut, eros
              labore ad nam, ne vivendo oporteat lucilius has. Ea imperdiet
              ullamcorper nam.
            </p>
          </article>
        </section>
        {/* section-d */}
        <Contact />
      </>
    );
  }
}
