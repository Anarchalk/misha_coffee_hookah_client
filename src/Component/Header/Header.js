import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from '../../images/logo.jpg';
import Navbar from "../NavMenu/Navbar";
import "./Header.css";

export default function Header () {

  return (
      <>
        <header id= "header" className='grid'>
          <article className="content-wrap">
            <Link to="/home"><img id='logo' src={logo} alt="logo of a bear holding a coffee"/></Link>
          <Navbar/>
          </article>
        </header>
      </>
    );
}
