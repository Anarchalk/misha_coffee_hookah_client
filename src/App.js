import React from "react";
import { Route } from "react-router-dom";
import Header from "../src/Component/Header/Header";
import LandingPg from "./Component/LandingPg/LandingPg";
import Footer from "./Component/Footer/Footer.js";
import Coffees from "./Component/Coffees/Coffees.js";
import Menu from "./Component/Menu/Menu.js";
import Hookah from './Component/Hookah/Hookah.js';
// import PrivateEvents from './Component/PrivateEvents/PrivateEvents.js';
import Form from './Form';

// import config from "./config.js";
import "./App.css";

export default function App() {
  //   static contextType = AppContext;
  // const [a] = useState()

  return (
    //  <ErrorBoundary>
    //    <AppContext.Provider value={value}>
    <>
      <section className="App">
        <Route path="/" component={Header} />
        <main id="main">
          <Route path="/home" component={LandingPg} />
          <Route path="/coffees" component={Coffees} />
          <Route path="/menu" component={Menu} />
          <Route path='/hookah' component={Hookah} />
          {/* <Route path='/private-events' component={PrivateEvents} /> */}
          <Route path='/private-events' component={Form} />
        </main>
        <Route path="/" component={Footer} />
      </section>
    </>

    //</AppContext.Provider>
    //</ErrorBoundary>
  );
}
