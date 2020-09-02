import React from "react";
import brown from '../../images/boba.jpg';

const Menu = () => {
  return (
    <>
      Menu
      <section id="section-coffees" className="grid">
        <ul>
          <li>
            <article className="card">
              {/* <img className="small-pictures" src={brown} /> */}
            </article>
            <article className="card-content">
              <h3 className="card-title menu">BUBBLE TEA</h3>
              <p id="price-name">Brown Sugar</p>
              <p id="price">₮ 5900</p>
            </article>
          </li>
          <li>
            <article className="card">
              {/* <img className="small-pictures" src={} /> */}
            </article>
            <article className="card-content">
              <h3 className="card-title menu">BUBBLE TEA</h3>
              <p id="price-name">Taro</p>
              <p id="price">₮ 5900</p>
            </article>
          </li>
          <li>
            <article className="card">
              {/* <img className="small-pictures" src={} /> */}
            </article>
            <article className="card-content">
              <h3 className="card-title menu">BUBBLE TEA</h3>
              <p id="price-name">Strawberry</p>
              <p id="price">₮ 5900</p>
            </article>
          </li>
          <li>
            <article className="card">
              {/* <img className="small-pictures" src={} /> */}
            </article>
            <article className="card-content">
              <h3 className="card-title menu">BUBBLE TEA</h3>
              <p id="price-name">Matcha</p>
              <p id="price">₮ 4000</p>
            </article>
          </li>
          <h3>DESSERTS</h3>
          <li>
            <article className="card">
              {/* <img className="small-pictures" src={} /> */}
            </article>
            <article className="card-content">
              <h3 className="card-title menu">CHEESECAKE</h3>
              <p id="price">₮ 4900</p>
              <p id="price-name"></p>
            </article>
          </li>
          <li>
            <article className="card">
              {/* <img className="small-pictures" src={} /> */}
            </article>
            <article className="card-content">
              <h3 className="card-title menu">CUPCAKE</h3>
              <p id="price">₮ 4900</p>
              <p id="price-name"></p>
            </article>
          </li>
          <li>
            <article className="card">
              {/* <img className="small-pictures" src={} /> */}
            </article>
            <article className="card-content">
              <h3 className="card-title menu">HANDMADE CHOCO</h3>
              <p id="price">₮ 4900</p>
              <p id="price-name"></p>
            </article>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Menu;
