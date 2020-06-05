import React, { Component } from "react";
import AppContext from "../AppContext";
import config from "../../config";
import clapper from "../../images/clapper.jpg";
import "./jshome.css";

export default class JsHome extends Component {
  static contextType = AppContext;

  state = {
    show: [],
  };

  handleApply = (job_id) => {
    const { user_id } = this.context.userInfo;

    fetch(`${config.API_ENDPOINT}/applied`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        user_id,
        job_id,
        completed: false,
      }),
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
        return res.json();
      })
      .then((appliedJob) => {
        console.log(appliedJob);
      });
  };

  handleClick = (index) => {
    console.log(index);
    let show = this.state.show.slice();
    show[index] = !show[index];
    this.setState({ show });
  };
  render() {
    console.log(this.context);
    return (
      <section
        className="js-home"
        style={{
          background: `url(${clapper})`,
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1 id='open'>Open gigs</h1>
        <ul className ='gig'>
          {this.context.gigs.map((gig, idx) => (
            <li key={idx}>
              <div >
                <h3 id ='position'>{gig.position}</h3>
                <p>Duration: {gig.duration}</p>
                <p>Location: {gig.location}</p>
                <button onClick={() => this.handleClick(idx)}>details</button>
                <button className='glow-on'
                    onClick={() => this.handleApply(gig.id)}
                    disabled={gig.js_id}
                    >
                  apply now
                </button>
                {this.state.show[idx] && (
                  <section>
                    {/* <p>duration: {gig.duration}</p>
                    <p>location: {gig.location}</p> */}
                    <p>Project Details: {gig.description}</p>
                    <p>Term: {gig.term}</p>
                    <p>Pay: {gig.pay}</p>
                  </section>
                )}
              </div>
            </li>
          ))}
        </ul>
        </section>
    );
  }
}
