import React, { useState } from "react";
import Navbar from "./Component/NavMenu/Navbar";
import Header from "../src/Component/Header/Header";
import LandingPg from "./Component/LandingPg/LandingPg";
import config from "./config.js";
import "./App.css";

export default function App() {
  //   static contextType = AppContext;
  // const [a] = useState()

  return (
    <>
      <Header/>
      <Navbar/>
      <main id="main">
        <LandingPg/>
      </main>
      <footer id="main-footer" class="grid">
        <article>

        <p>copyright 2020</p>
        </article>
      </footer>
    </>

    //       <ErrorBoundary>
    //         <AppContext.Provider value={value}>
    //         </AppContext.Provider>
    //       </ErrorBoundary>
  );
}
