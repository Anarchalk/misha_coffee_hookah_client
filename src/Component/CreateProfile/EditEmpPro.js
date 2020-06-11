import React, { Component } from "react";
import AlgoliaPlaces from "algolia-places-react";
import config from "../../config";
import AppContext from "../../Component/AppContext";
import "./create-emp-profile.css";
import "../../AlgoliaPlaces.css";

export default class EditEmpPro extends Component {
  static contextType = AppContext;

  state = {
    company_name: "",
    about_us: "",
    logo: "",
    email: "",
    phone: "",
    location: "",
    fax: "",
    website: "",
    id: null,
  };

  componentDidMount() {
    const empPros = this.props.location.state;

    this.setState(
      {
        company_name: empPros.company_name,
        about_us: empPros.about_us,
        // logo: this.state.logo,
        email: empPros.email,
        phone: empPros.phone,
        location: empPros.location,
        fax: empPros.fax,
        website: empPros.website,
        id: empPros.id,
      },
      () => {
        const location = document.querySelector("#location");
        console.log(location.innerHTML);
        console.log(this.state.location);
        location.value = this.state.location;
      }
    );
  }

  resetLocation = (e) => {
    e.preventDefault();
    const location = document.querySelector("#location");
    console.log(location);
    location.value = "Hello";
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleAddress = (suggestion) => {
    const { name, city, administrative, postcode } = suggestion;
    this.setState({
      location: `${name || ""}, ${city || ""}, ${administrative || ""} ${
        postcode || ""
      }`,
    });
  };

  handleSubmit = (e) => {
    // const token = TokenService.hasAuthToken()
    //   ? TokenService.readJwtToken()
    //   : { user_id: "" };
    e.preventDefault();
    fetch(`${config.API_ENDPOINT}/empprofile/${this.state.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        company_name: this.state.company_name,
        about_us: this.state.about_us,
        // logo: this.state.logo,
        email: this.state.email,
        phone: this.state.phone,
        location: this.state.location,
        fax: this.state.fax,
        website: this.state.website,
      }),
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
        return res.json();
      })
      .then((empPro) => {
        console.log(empPro);
        this.context.createEmpProfile(empPro);
        this.props.history.push("/empprofile");
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  render() {
    return (
      <>
        <h1>EDIT EMPLOYER PROFILE</h1>
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
              type="tel"
              name="phone"
              id="phone"
              className="input"
              value={this.state.phone}
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
              type="url"
              name="website"
              id="website"
              className="input"
              value={this.state.website}
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
            <input id='updatepro'
              type="submit"
              value="update"
            />
          </form>
        </section>
      </>
    );
  }
}
