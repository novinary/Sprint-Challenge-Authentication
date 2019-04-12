import React, { Component } from "react";
import { Route, NavLink, withRouter } from "react-router-dom";
import Login from "./components/Login";
import Jokes from './components/Jokes';
import Register from './components/Register';
import "./App.css";

import { Button } from 'reactstrap';

class App extends Component {
  logoutHandler = () => {
    localStorage.removeItem("jwt");
    this.props.history.push("/login");
  };

  render() {
    return (
      <>
      <div className="main-form">
      <h1><span className="font-weight-bold">Jokes App</span></h1>
        <nav>
          <NavLink className="p-2" to="/login"> Login </NavLink>
					<NavLink className="p-2" to="/jokes">Jokes</NavLink>
					<NavLink className="p-2" to="/register">Register</NavLink>
          <Button onClick={this.logoutHandler}> logout </Button>
        </nav>
        <main>
          <Route path="/login" component={Login} />
          <Route path="/jokes" component={Jokes} />
					<Route path="/register" component={Register} />
        </main>
        </div>
      </>
    );
  }
}

export default withRouter(App);