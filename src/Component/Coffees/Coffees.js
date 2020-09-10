import React from "react";
import latte from "../../images/menu-images/pinklatte.jpg";
import cappucino from "../../images/menu-images/cappuccino.jpg";
import espresso from "../../images/menu-images/espresso2.jpg";
import matcha from "../../images/menu-images/matcha-small.jpg";
import americano from "../../images/menu-images/americano1.jpg";
import dalgona from "../../images/menu-images/dalgona.jpg";
import irish from "../../images/menu-images/irish-coffee.jpg";

import "./coffees.css";

const Coffees = () => {
  return (
    <>
      COFFEES
    
      <section id="section-coffees" className="grid">
        <ul>
          <li>
            <article className="card">
              <img className="small-pictures" src={latte} alt='latte' />
            </article>
            <article className="card-content">
              <h3 className="card-title menu"> LATTE</h3>
              <p id="price-name">Caramel & Vanilla </p>
              <p id="price">₮ 5900</p>
            </article>
          </li>
          <li>
            <article className="card">
              <img className="small-pictures" src={matcha} alt='latte matcha' />
            </article>
            <article className="card-content">
              <h3 className="card-title menu">MATCHA LATTE</h3>
              <p id="price">₮ 5900</p>
              <p id="price-name"></p>
            </article>
          </li>
          <li>
            <article className="card">
              <img className="small-pictures" src={cappucino} alt='cappucino' />
            </article>
            <article className="card-content">
              <h3 className="card-title menu">CAPPUCINO</h3>
              <p id="price-name">type</p>
              <p id="price">₮ 5900</p>
            </article>
          </li>
          <li>
            <article className="card">
              <img className="small-pictures" src={espresso} alt="espresso"/>
            </article>
            <article className="card-content">
              <h3 className="card-title menu">Espresso</h3>
              <p id="price">₮ 4000</p>
              <p id="price-name"></p>
            </article>
          </li>
          <li>
            <article className="card">
              <img className="small-pictures" src={americano} alt="americano"/>
            </article>
            <article className="card-content">
              <h3 className="card-title menu">AMERICANO</h3>
              <p id="price">₮ 4500</p>
              <p id="price-name"></p>
            </article>
          </li>
          <li>
            <article className="card">
              <img className="small-pictures" src={dalgona} alt="dalgona coffee" />
            </article>
            <article className="card-content">
              <h3 className="card-title menu">DALGONA COFFEE</h3>
              <p id="price">₮ 0</p>
              <p id="price-name"></p>
            </article>
          </li>
          <li>
            <article className="card">
              <img className="small-pictures" src={irish} alt="irish coffee"/>
            </article>
            <article className="card-content">
              <h3 className="card-title menu">IRISH COFFEE</h3>
              <p id="price">₮ 9500</p>
              <p id="price-name"></p>
            </article>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Coffees;
