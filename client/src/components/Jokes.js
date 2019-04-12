import React from "react";
import axios from "axios";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3300/api/jokes", {
        headers: {
          Authorization: localStorage.getItem("jwt")
        }
      })
      .then(res => {
        this.setState({ jokes: res.data });
      });
  }
  render() {
    return (
      <div>
        <h2>List of jokes</h2>
        <ul>
          {this.state.jokes.map(joke => (
            <li key={joke.id}>{joke.joke}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Login;
