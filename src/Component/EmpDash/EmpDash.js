import React, { Component } from "react";
import AppContext from "../AppContext";
//import { Link } from "react-router-dom";
import blue from "../../images/blue.jpg";
import config from "../../config";
import "./EmpDash.css";

export default class EmpDash extends Component {
  static contextType = AppContext;

  deletePost = (id) => {
    fetch(`${config.API_ENDPOINT}/jobs/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        this.context.deleteEmpJob(id);
      })
      .catch((error) => console.log(error));
  };

  render() {
    console.log(this.context.applicants);
    return (
      <div
        className="empdash"
        style={{
          background: `url(${blue})`,
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <section>
          <article>
            <h2 id="posts">MY POSTS</h2>
            <ul className="e-dash">
              {this.context.jobs.map((job, idx) => (
                <li key={idx}>
                  <button
                    className="delete"
                    onClick={(e) =>
                      window.confirm(
                        "Are you sure you want to delete this post?"
                      ) && this.deletePost(job.id)
                    }
                  >
                    Delete
                  </button>
                  <h3 style={{ color: "#29fe29", textTransform: "uppercase" }}>
                    {job.position}
                  </h3>
                  <p>{job.title}</p>
                  <p>REQUIREMENTS: {job.requirements}</p>
                  <p>DESCRIPTION: {job.description}</p>
                  <p>LOCATION: {job.location}</p>
                  <p>{job.pay}</p>
                  <p>DURATION: {job.duration}</p>
                  <p>{job.unit}</p>
                </li>
              ))}
            </ul>
          </article>
          <article>
            <h2 id="applicants">APPLICANTS</h2>
            <ul className="e-applicants">
              {this.context.applicants.map((applicant, idx) => (
                <li key={idx}>
                  <h3>{applicant.fullname}</h3>
                  <p>Position Applied: {applicant.position}</p>
                </li>
              ))}
            </ul>
          </article>
        </section>
      </div>
    );
  }
}
