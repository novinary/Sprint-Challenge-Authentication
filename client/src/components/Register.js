import React from "react";
import axios from "axios";

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
		};
	}

	handleSubmit = () => {
		axios
			.post("http://localhost:3300/api/register", {
				username: this.state.username,
				password: this.state.password
			})
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		return (
			<div className="register">
				<form onSubmit={this.handleSubmit}>
					<p>username</p> <input type="text" name="username" onChange={this.handleChange} />
					<p>password</p> <input type="text" name="password" onChange={this.handleChange} />
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

export default Register;