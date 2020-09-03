import React from "react";
import "./hookah.css";

const Hookah = () => {
  return (
    <>
      <section id="section-a" className="grid">
        <article className="content-wrap">
          <h1 id="misha" className="content-title">
            HOOKAH ROOM
          </h1>
          <article className="content-text">
            <p>
              Lorem ipsum dolor sit amet, te mel euripidis expetendis, mea ne
              elit erat. Ad nulla erant vocibus mel. Ea veritus docendi eam,
              copiosae senserit vel ex.{" "}
            </p>
          </article>
        </article>
      </section>
      <section id="section-hookah" className="grid">
        <ul>
          <li>
            <article className="card">
              {/* <img className="small-pictures" src={brown} /> */}
            </article>
            <article className="card-content">
              <h3 className="card-title menu">SHISHA</h3>
              <p id="price-name"></p>
              <p id="price">₮ 40,0</p>
            </article>
          </li>
          <li>
            <article className="card"></article>
            <article className="card-content">
              <h3 className="card-title menu">BEER</h3>
              <ul>
                <li>
                  <p id="price-name">
                    Heineken <span>₮ 5,0</span>{" "}
                  </p>
                </li>
                <li>
                  <p id="price-name">
                    Kirin Ichiban <span>₮ 5,5</span>{" "}
                  </p>
                </li>
                <li>
                  <p id="price-name">
                    Kaltenberg <span>₮ 5,5</span>{" "}
                  </p>
                </li>
                <li>
                  <p id="price-name">
                    Senguur <span>₮ 5,0</span>{" "}
                  </p>
                </li>
                <li>
                  <p id="price-name">
                    Golden Gobi <span>₮ 5,0</span>{" "}
                  </p>
                </li>
                <li>
                  <p id="price-name">
                    Craft 6 <span>₮ 6,0</span>{" "}
                  </p>
                </li>
                <li>
                  <p id="price-name">
                    Guinness <span>₮ 9,5</span>{" "}
                  </p>
                </li>
              </ul>
            </article>
          </li>
          <li>
            <article className="card"></article>
            <article className="card-content">
              <h3 className="card-title menu">DRAFT BEER</h3>
              <p id="price-name">
                Sengur <span>₮ 4,5</span>
              </p>
            </article>
          </li>
          <li>
            <article className="card"></article>
            <section className="card-content">
              <h3 className="card-title menu">SHOTS</h3>
              <article className="content-wrap">
                <article id="shots" className="grid">
                  <ul>
                    <li>
                      <p id="price-name">Tequila </p>
                    </li>
                    <li>
                      <p id="price-name">Gin </p>
                    </li>
                    <li>
                      <p id="price-name">Absinth </p>
                    </li>
                    <li>
                      <p id="price-name">Mint Tu </p>
                    </li>
                    <li>
                      <p id="price-name">JagerMeister </p>
                    </li>
                    <li>
                      <p id="price-name">JagerBomb </p>
                    </li>
                    <li>
                      <p id="price-name">Double JagerBomb </p>
                    </li>
                  </ul>
                </article>
                <article id="shots" className="grid">
                  <ul>
                    <li>
                      <p id="price-name">₮ 9,0</p>
                    </li>
                    <li>
                      <p id="price-name">₮ 8,0</p>
                    </li>
                    <li>
                      <p id="price-name">₮ 8,0</p>
                    </li>
                    <li>
                      <p id="price-name">₮ 6,5</p>
                    </li>
                    <li>
                      <p id="price-name">₮ 9,0</p>
                    </li>
                    <li>
                      <p id="price-name">₮ 12,0</p>
                    </li>
                    <li>
                      <p id="price-name">₮ 20,0</p>
                    </li>
                  </ul>
                </article>
              </article>
            </section>
          </li>
          {/* <h3>DESSERTS</h3> */}
          <li>
            <article className="card"></article>
            <article className="card-content">
              <h3 className="card-title menu">VODKA Bottle 100 500</h3>
              <li>
                <p id="price-name">
                  Grey Goose, France <span>₮ 190,0</span>{" "}
                </p>
              </li>
              <li>
                <p id="price-name">
                  Eden <span>₮ 50,0</span>{" "}
                </p>
              </li>
              <li>
                <p id="price-name">
                  Evok <span>₮ 60,0</span>{" "}
                </p>
              </li>
              <li>
                <p id="price-name">
                  Velvet<span>₮ 60,0</span>{" "}
                </p>
              </li>
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
      {/* section-d */}
      <section id="section-d" className="grid">
        <article className="box">
          <h2 className="content-title">Social Media</h2>
          <p>Email: mongolhookah@gmail.com</p>
          <p>
            Pne vivendo oporteat lucilius has. Ea imperdiet ullamcorper nam.
          </p>
        </article>
      </section>
    </>
  );
};

export default Hookah;
