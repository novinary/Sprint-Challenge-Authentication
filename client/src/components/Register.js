import React from "react";
import axios from "axios";

import { Button, FormGroup, Label, Input } from 'reactstrap';

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
				<FormGroup>  <Label> Username </Label> <Input type="text" name="username" onChange={this.handleChange} /> </FormGroup>
				<FormGroup>  <Label> Password </Label> <Input type="text" name="password" onChange={this.handleChange} /> </FormGroup>
				<Button className="btn-lg btn-dark btn-block" type="submit">Register</Button>
				</form>
			</div>
		);
	}
}

export default Register;