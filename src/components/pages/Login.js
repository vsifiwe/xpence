import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import XPENCE from "../Images/XPENCE.svg";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleEmailChange = (event) => {
		const target = event.target;
		const value = target.value;

		setEmail(value);
	};

	const handlePasswordChange = (event) => {
		const target = event.target;
		const value = target.value;

		setPassword(value);
	};

	function alert(message, type) {
		var alertPlaceholder = document.getElementById("liveAlertPlaceholder");
		var wrapper = document.createElement("div");
		wrapper.innerHTML =
			'<div class="alert alert-' +
			type +
			' alert-dismissible" role="alert">' +
			message +
			'<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';

		alertPlaceholder.append(wrapper);
	}

	const onSubmit = () => {
		if (!email || !password) {
			return alert("Email and Password are required", "danger");
		}
		axios
			.post("https://xpence-django.herokuapp.com/api/token/", {
				username: email,
				password: password,
			})
			.then((response) => {
				console.log(response.data["access"]);
				if (response.status === 200) {
					window.localStorage.setItem("xpence_token", response.data.access);

					navigate("/dashboard");
				} else {
					alert("An error occured. Please try again", "danger");
				}
			})
			.catch((error) => {
				alert("Invalid credentials. Please try again", "danger");
				console.log(error);
			});
	};

	return (
		<div class="d-flex justify-content-center backg py-5">
			<div>
				<h3 class="d-flex justify-content-center">
					<img src={XPENCE} alt="" />
				</h3>
				<div id="liveAlertPlaceholder"></div>

				<div class="card shadow p-3 mb-5 login-card">
					<div class="card-body">
						<h5 class="card-title">Welcome To Xpence</h5>
						<p class="card-text">
							<p>Login to continue</p>
							<div class="mb-3">
								<label class="form-label">
									<strong>Username</strong>
								</label>
								<input
									type="text"
									class="form-control"
									placeholder="Enter Username"
									onChange={handleEmailChange}
								/>
							</div>
							<div class="mb-3">
								<label class="form-label">
									<strong>Password</strong>
								</label>
								<input
									type="password"
									class="form-control"
									placeholder="Enter your Password"
									onChange={handlePasswordChange}
								/>
							</div>
						</p>
						<button class="btn btn-warning" onClick={onSubmit}>
							Login
						</button>
						<br />
						<br />
						<p>
							New?{" "}
							<Link to="/register" style={{ color: "#ECAA11" }}>
								{" "}
								Create account
							</Link>
						</p>
						<Link to="/login" style={{ color: "#ECAA11" }}>
							Forgot password?
						</Link>
					</div>
				</div>
				<p class="d-flex justify-content-center">Taskforce 5.0</p>
			</div>
		</div>
	);
}

export default Login;
