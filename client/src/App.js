import React, { Component } from "react";
import { Route, NavLink, withRouter } from "react-router-dom";
import Login from "./components/Login";
import Jokes from './components/Jokes';
import Register from './components/Register';
import "./App.css";

class App extends Component {
  logoutHandler = () => {
    localStorage.removeItem("jwt");
    this.props.history.push("/login");
  };

  render() {
    return (
      <>
        <nav>
          <NavLink to="/login"> login </NavLink>
					<NavLink to="/jokes">Jokes</NavLink>
					<NavLink to="/register">Register</NavLink>
          <button onClick={this.logoutHandler}> logout </button>
        </nav>
        <main>
          <Route path="/login" component={Login} />
          <Route path="/jokes" component={Jokes} />
					<Route path="/register" component={Register} />
        </main>
      </>
    );
  }
}

export default withRouter(App);