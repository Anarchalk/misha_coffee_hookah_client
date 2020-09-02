import React, { useState } from "react";
import { Route } from "react-router-dom";
import Header from "../src/Component/Header/Header";
import LandingPg from "./Component/LandingPg/LandingPg";
import Footer from "./Component/Footer/Footer.js";
import Coffees from './Component/Coffees/Coffees.js';

import config from "./config.js";
import "./App.css";

export default function App() {
  //   static contextType = AppContext;
  // const [a] = useState()

  return (
    //  <ErrorBoundary>
    //    <AppContext.Provider value={value}>
    <>
      <section className="App">
        <Route path='/' component={Header} />
        <main id="main">
          <Route path='/home' component={LandingPg} />
          <Route path='/coffees' component={Coffees} />
        </main>
        <Route path='/' component={Footer} />
      </section>
    </>

    //</AppContext.Provider>
    //</ErrorBoundary>
  );
}
