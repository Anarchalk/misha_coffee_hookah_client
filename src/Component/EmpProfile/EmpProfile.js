import React, { Component } from "react";
import AppContext from "../../Component/AppContext";
import {Link} from 'react-router-dom';
import './empprofile.css'


export default class EmpProfile extends Component {
  static contextType = AppContext;

  render() {
    console.log(this.context.empPros)
      const {empPros} = this.context
    return (
      <>
    
        <section className='profile'>
          <div id='empprofile'>
          <p>{empPros.company_name}</p>
          <p>{empPros.about_us}</p>
          <p>{empPros.email}</p>
          <p>{empPros.location}</p>
          <p>{empPros.website}</p>
          <p>{empPros.phone}</p><br/>
          </div>
          {empPros ?
            <Link to={{
              pathname : '/edit-e-profile', 
              state: empPros
            }}>
         <button id='editme'>Edit Profile</button>
         </Link>
        :
        <Link to="/crt-e-profile">
          <button id='editme'>Create Profile</button>
        </Link>
          }
          </section>
      
      </>
    );
  }
}
