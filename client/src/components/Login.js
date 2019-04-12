import React from "react";
import axios from "axios";

import { Button, FormGroup, Label, Input } from 'reactstrap';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const endpoint = "http://localhost:3300/api/login";
    console.log(this.state);
    axios
      .post(endpoint, this.state)
      .then(res => {
        localStorage.setItem("jwt", res.data.token);
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label> Username </Label>
            <Input
              type="text"
              name="username"
              onChange={this.handleChange}
              value={this.state.username}
            />
          </FormGroup>
          <FormGroup>
            <Label> Password </Label>
            <Input
              type="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </FormGroup>
          <div>
            <Button className="btn-lg btn-dark btn-block" type="submit"> Login </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
