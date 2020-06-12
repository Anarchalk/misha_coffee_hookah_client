import React, { Component } from "react";
import AuthApiService from "../../services/auth-api-service";
import AppContext from "../AppContext";
import TokenService from "../../services/token-service";
import "./login.css";

export default class Login extends Component {
  static contextType = AppContext;

  state = {
    username: "",
    password: "",
    error: null,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleLoginSuccess = () => {
    const { history } = this.props;
    const token = TokenService.hasAuthToken()
      ? TokenService.readJwtToken()
      : { user_id: "" };
    console.log(token);
    this.context.setUserId(token.user_id, token.employer);
    // const destination = (location.state || {}).from || "/";
    if (token.employer) {
      history.push("/e-dashboard");
    } else {
      history.push("/js-home");
    }
    // history.push(destination);
  };

  handleSubmitJwtAuth = (ev) => {
    ev.preventDefault();
    this.setState({ error: null });
    const { username, password } = this.state;

    AuthApiService.postLogin({
      username,
      password,
    })
      .then((res) => {
        this.setState({
          username: "",
          password: "",
        });
        //const token = TokenService.readJwtToken();
        //this.context.setUserId(token.user_id, token.fullname);
        this.handleLoginSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;

    return (
      <>
        <p id="demo">Employer Demo username: sam</p>
        <p id="demo">Employer Demo password: sam</p>
        <p id="demo">Job seeker Demo username: dunder</p>
        <p id="demo">Job seeker Demo password: password</p>
        <h2 id="log">Log in</h2>
        <form
          id="form"
          style={{ lineHeight: " 45px" }}
          onSubmit={this.handleSubmitJwtAuth}
        >
          <div role="alert">
            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>
          <label htmlFor='loginname' id="lgname" style={{ paddingRight: "6px" }}>
            Username{" "}
          </label>
          <input
            onChange={this.handleChange}
            type="text"
            name="username"
            id='loginname'
            placeholder="username"
            value={this.state.username}
            required
          />
          <br />
          <label htmlFor='login-pword' id="loginpass" style={{ paddingRight: "10px" }}>
            Password{" "}
          </label>
          <input
            onChange={this.handleChange}
            type="text"
            id='login-pword'
            name="password"
            placeholder="username"
            value={this.state.password}
            required
          />
          <br />
          <input
            type="submit"
            value="login"
          />{" "}
        </form>
      </>
    );
  }
}
