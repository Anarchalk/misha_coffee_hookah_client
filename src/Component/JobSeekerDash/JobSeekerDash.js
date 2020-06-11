import React, { Component } from "react";
import AppContext from "../../Component/AppContext";
import studio from "../../images/studio.jpeg";
import "./dash.css";

export default class JobSeekerDash extends Component {
  static contextType = AppContext;

  render() {
    console.log(this.context);
    return (
      <section
        className="dashboard"
        style={{
          background: `url(${studio})`,
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1 id="pending">PENDING GIGS</h1>
        <ul className="dash">
          {this.context.appliedUser.map((user, idx) => (
            <li key={idx}>
              <h4 style={{textTransform:'uppercase'}}>{user.position}</h4>
              <p>{user.title}</p>
              <p>DESCRIPTION: {user.description}</p>
              <p>LOCATION: {user.location}</p>
              <p>TERM: {user.pay}</p>
              <p>DURATION: {user.duration}</p>
              <p>{user.unit}</p>
              <p>REQUIREMENTS: {user.requirements}</p>
              <p>Union/ Guild job: {user.member ? "Yes" : "No"}</p>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}
