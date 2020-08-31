import React, { useState } from "react";
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
     
      <main id="main">
        <LandingPg/>
      </main>
      <footer id="main-footer" class="grid">
        <article>
          <small>&copy; 2020 Misha Coffee & Hookah</small>
        </article>
      </footer>
    </>

    //       <ErrorBoundary>
    //         <AppContext.Provider value={value}>
    //         </AppContext.Provider>
    //       </ErrorBoundary>
  );
}
