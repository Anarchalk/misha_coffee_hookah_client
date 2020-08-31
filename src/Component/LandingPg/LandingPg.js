import React, { Component } from "react";
import { Link } from "react-router-dom";
import blue from "../../images/blue-cup.jpg";
import boba from "../../images/boba.jpg";
import avocado from "../../images/avocado-mix.jpg";
import "./landing.css";
import Slideshow from "../Slideshow.js";
import slide1 from "../../images/slide1.jpg";
import slide2 from "../../images/slide2.jpg";
import slide3 from "../../images/slide3.jpg";
import slide4 from "../../images/slide4.jpg";
import slide5 from "../../images/slide5.jpg";


export default class LandingPg extends Component {
  render() {
      // CREATE STYLES OBJECT
    //   const s = {
    //   container: "screenW screenH dGray col",
    //   header: "flex1 fCenter fSize2",
    //   main: "flex8 white",
    //   footer: "flex1 fCenter",
    // };

      // SLIDES DATA
      const slides = [slide1, slide2, slide3, slide4, slide5];

    return (
      <>
        {/* showcase */}
        {/* <section id="showcase" className="grid">
          <article className="bg-image">
          </article>
        </section> */}
        {/* section a */}
        <section id="section-a" className="grid">
          <article className="content-wrap">
          <Slideshow slides={slides} />
            <h1 className="content-title">Misha Coffee</h1>
            <article className="content-text">
              <p>
                Lorem ipsum dolor sit amet, te mel euripidis expetendis, mea ne
                elit erat. Ad nulla erant vocibus mel. Ea veritus docendi eam,
                copiosae senserit vel ex. Est te inermis scriptorem, has commune
                honestatis ex, pro te illud expetenda. Vero vocibus ceteros nec
                at. Qui ubique ignota imperdiet ut, eros labore ad nam, ne
                vivendo oporteat lucilius has. Ea imperdiet ullamcorper nam,
                meis propriae intellegebat ea vim. Et reque nonumy verear mea.
              </p>
            </article>
          </article>
        </section>
        {/* section b */}
        <section id="section-b" className="grid">
          <ul>
            <li>
              <article className="card">
                <img className="small-pictures" src={blue} />
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
                <img className="small-pictures" src={boba} />
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
                <img className="small-pictures" src={avocado} />
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
        <section id="section-d" className="grid">
          <article className="box">
            <h2 className="content-title">Contact us</h2>
            <p>Tel: 8887-5917</p>
            <p>Email Address: mishacoffee@gmail.com</p>
          </article>
          <article className="box">
            <h2 className="content-title">Some other title</h2>
            <p>
              Pne vivendo oporteat lucilius has. Ea imperdiet ullamcorper nam.
            </p>
          </article>
        </section>
      </>
    );
  }
}
