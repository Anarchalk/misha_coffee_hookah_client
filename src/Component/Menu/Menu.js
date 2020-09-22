import React from "react";
import brown from "../../images/menu-images/boba.jpg";
import cheesecake from '../../images/menu-images/cheesecake2.jpg';
import cupcake from '../../images/menu-images/cupcake.jpg';
import chocolate from '../../images/menu-images/chocolate.jpg';

import "./menu.css";

const Menu = () => {
  return (
    <>
      Menu
      <section id="section-coffees" className="grid">
        <ul>
            <h3>BUBBLE TEA</h3>
          <li>
            <article className="card">
              <img className="small-pictures" src={brown} />
            </article>
            <article className="card-content">
              {/* <h3 className="card-title menu">BUBBLE TEA</h3> */}
              <p id="price-name">Brown Sugar</p>
              <p id="price">₮ 5900</p>
            </article>
          </li>
          <li>
            <article className="card">
              <img className="small-pictures" src={brown} />
              {/* <img className="small-pictures" src={} /> */}
            </article>
            <article className="card-content">
              {/* <h3 className="card-title menu">BUBBLE TEA</h3> */}
              <p id="price-name">Taro</p>
              <p id="price">₮ 5900</p>
            </article>
          </li>
          <li>
            <article className="card">
              <img className="small-pictures" src={brown} />
              {/* <img className="small-pictures" src={} /> */}
            </article>
            <article className="card-content">
              {/* <h3 className="card-title menu">BUBBLE TEA</h3> */}
              <p id="price-name">Strawberry</p>
              <p id="price">₮ 5900</p>
            </article>
          </li>
          <li>
            <article className="card">
              <img className="small-pictures" src={brown} />
              {/* <img className="small-pictures" src={} /> */}
            </article>
            <article className="card-content">
              {/* <h3 className="card-title menu">BUBBLE TEA</h3> */}
              <p id="price-name">Matcha</p>
              <p id="price">₮ 4000</p>
            </article>
          </li>
          <h3>DESSERTS</h3>
          <li>
            <article className="card">
              <img className="small-pictures" src={cheesecake} />
            </article>
            <article className="card-content">
              <h3 className="card-title menu">CHEESECAKE</h3>
              <p id="price">₮ 4900</p>
              <p id="price-name"></p>
            </article>
          </li>
          <li>
            <article className="card">
              <img className="small-pictures" src={cupcake} />
            </article>
            <article className="card-content">
              <h3 className="card-title menu">CUPCAKE</h3>
              <p id="price">₮ 4900</p>
              <p id="price-name"></p>
            </article>
          </li>
          <li>
            <article className="card">
              <img className="small-pictures" src={chocolate} />
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
