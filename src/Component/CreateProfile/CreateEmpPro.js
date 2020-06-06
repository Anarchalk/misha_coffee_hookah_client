import React, { Component } from "react";
import AlgoliaPlaces from "algolia-places-react";
// import TokenService from "../../services/token-service";
// import AppContext from "../../Component/AppContext";
import "../../AlgoliaPlaces.css";
import config from "../../config";
import './create-emp-profile.css'

export default class CreateEmpPro extends Component {
  state = {
    company_name: "",
    about_us: "",
    logo: "",
    email: "",
    phone: "",
    location: "",
    fax: "",
    website: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${config.API_ENDPOINT}/empprofile`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        company_name: this.state.company_name,
        about_us: this.state.about_us,
        logo: this.state.logo,
        email: this.state.email,
        phone: this.state.phone,
        location: this.state.location,
        fax: this.state.fax,
        website: this.state.website,
        user_id: this.context.userInfo.user_id,
      }),
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
        return res.json();
      })
      .then((empPro) => {
        console.log(empPro);
        this.props.history.push("/emp-profile");
      });
  };

  handleAddress = (suggestion) => {
    const { name, city, administrative, postcode } = suggestion;
    this.setState({
      location: `${name}, ${city}, ${administrative} ${postcode}`,
    });
  };
  render() {
    return (
      <>
        <h1>CREATE EMPLOYER PROFILE</h1>
        <section className="create-emp-profile">

          <form onSubmit={this.handleSubmit}>
            <label className="label" htmlFor="name">
              Company name{" "}
            </label>
            <input
              onChange={this.handleChange}
              type="text"
              name="company_name"
              id="name"
              className="input"
              value={this.state.company_name}
              required
            />
            <br />
            <label className="label" htmlFor="phone">
              Phone:{" "}
            </label>
            <input
              onChange={this.handleChange}
              type="phone"
              name="phone"
              id="phone"
              className="input"
              value={this.state.tel}
              required
            />
            <br />
            <label className="label" htmlFor="fax">
              Fax:{" "}
            </label>
            <input
              onChange={this.handleChange}
              type="fax"
              name="fax"
              id="fax"
              className="input"
              value={this.state.fax}
              required
            />
            <br />
            <label className="label" htmlFor="website">
              Website:{" "}
            </label>
            <input
              onChange={this.handleChange}
              type="website"
              name="website"
              id="website"
              className="input"
              value={this.state.url}
              required
            />
            <br />
            <label className="label" htmlFor="email">
              Email:{" "}
            </label>
            <input
              onChange={this.handleChange}
              type="email"
              name="email"
              id="email"
              className="input"
              value={this.state.email}
              required
            />
            <br />
            <label className="label" htmlFor="location">
              Address:
            </label>
            <br />
            <AlgoliaPlaces
              id="location"
              placeholder="Write an address here"
              options={{
                appId: config.APPID,
                apiKey: config.SEARCH_KEY,
                language: "en",
                countries: ["us"],
                type: "address",
              }}
              onChange={({ query, rawAnswer, suggestion, suggestionIndex }) =>
                this.handleAddress(suggestion)
              }
            />
            <br />
            <label className="label" htmlFor="about_us">
              About us:{" "}
            </label>
            <textarea
              onChange={this.handleChange}
              name="about_us"
              id="about_us"
              className="input"
              value={this.state.about_us}
            />
            <br />
            {/* <label className="label" htmlFor="logo">Logo: </label>
          <input
            onChange={this.handleChange}
            type="logo"
            id="logo"
            multiple
            accept="image/*"
          /> */}
            {/* <button id="fileSelect">Select file</button>         */}
            <br />
            <input type="submit" value="create" />
          </form>
        </section>
      </>
    );
  }
}
