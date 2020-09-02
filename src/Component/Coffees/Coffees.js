import React from "react";
import latte from '../../images/menu-images/latte-white.jpg';
import cappucino from '../../images/menu-images/cappuccino.jpg';
import espresso from '../../images/menu-images/espresso2.jpg';


import './coffees.css';


const Coffees = () => {
  return (
    <>
      COFFEES
      {/* <hr
        style={{
          color: 'rgb(187 164 109)',
          backgroundColor: '#fff',
          padding:" 0 1em 0 2em",
        //   height: '0.2px',
        }}
      /> */}
        <section id="section-coffees" className="grid">
          <ul>
            <li>
              <article className="card">
                <img className="small-pictures" src={latte} />
              </article>
              <article className="card-content">
                <h3 className="card-title menu"> LATTE</h3>
                <p id='price-name'>Caramel, Vanilla & Matcha</p>
              <p id='price'>₮ 5900</p>
              </article>
            </li>
            <li>
              <article className="card">
                <img className="small-pictures" src={cappucino} />
              </article>
              <article className="card-content">
              <h3 className="card-title menu">CAPPUCINO</h3>
                <p id='price-name'>type</p>
              <p id='price'>₮ 5900</p>
              </article>
            </li>
            <li>
              <article className="card">
                <img className="small-pictures" src={espresso} />
              </article>
              <article className="card-content">
              <h3 className="card-title menu">Espresso</h3>
              <p id='price'>₮ 4900</p>
                <p id='price-name'></p>
              </article>
            </li>
          </ul>
        </section>
    </>
  );
};

export default Coffees;
