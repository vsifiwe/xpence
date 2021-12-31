import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import XPENCE from "../Images/XPENCE.svg";

function Register() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [phone, setPhone] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	const handleFirstNameChange = (event) => {
		const target = event.target;
		const value = target.value;

		setFirstName(value);
	};
	const handleLastNameChange = (event) => {
		const target = event.target;
		const value = target.value;

		setLastName(value);
	};
	const handleEmailChange = (event) => {
		const target = event.target;
		const value = target.value;

		setEmail(value);
	};
	const handleUsernameChange = (event) => {
		const target = event.target;
		const value = target.value;

		setUsername(value);
	};
	const handlePhoneChange = (event) => {
		const target = event.target;
		const value = target.value;

		setPhone(value);
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

	const handleSubmit = () => {
		const regex = /^7[238]\d{7}$/;
		if (!phone.match(regex)) {
			return alert("Phone is wrong. Start with 78, 72 or 73", "warning");
		}

		if (!firstName || !username || !email || !password || !lastName) {
			return alert("please fill all fields", "warning");
		}
		const emailRegex =
			/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
		if (!email.match(emailRegex)) {
			return alert("Enter a valid email", "warning");
		}

		const data = {
			username: username,
			email: email,
			password: password,
			phone: phone,
			first_name: firstName,
			last_name: lastName,
		};

		axios
			.post("http://127.0.0.1:8000/api/register", data)
			.then((response) => {
				navigate("/login");
			})
			.catch((err) => {
				alert("An error occured, Please try again");
				console.log(err);
			});
	};
	return (
		<div class="d-flex justify-content-center backg">
			<div>
				<h3 class="d-flex justify-content-center">
					<img src={XPENCE} alt="" />
				</h3>
				<div id="liveAlertPlaceholder"></div>
				<div class="card shadow p-3 mb-5 login-card">
					<div class="card-body">
						<h5 class="card-title">Register</h5>
						<p class="card-text">
							<div class="row">
								<div class="mb-3 col-md-6">
									<label class="form-label">First Name</label>
									<input
										type="text"
										class="form-control"
										placeholder="Enter First Name"
										onChange={handleFirstNameChange}
									/>
								</div>
								<div class="mb-3 col-md-6">
									<label class="form-label">Last Name</label>
									<input
										type="text"
										class="form-control"
										placeholder="Enter Last Name"
										onChange={handleLastNameChange}
									/>
								</div>
							</div>

							<div class="mb-3">
								<label class="form-label">Email</label>
								<input
									type="email"
									class="form-control"
									placeholder="Enter your Email"
									onChange={handleEmailChange}
								/>
							</div>
							<div class="mb-3">
								<label class="form-label">Username</label>
								<input
									type="text"
									class="form-control"
									placeholder="Enter your username"
									onChange={handleUsernameChange}
								/>
							</div>
							<div class="mb-3">
								<label class="form-label">Phone</label>
								<div class="input-group mb-3">
									<span class="input-group-text" id="basic-addon1">
										+250
									</span>
									<input
										type="number"
										class="form-control"
										placeholder="7********"
										onChange={handlePhoneChange}
									/>
								</div>
							</div>
							<div class="mb-3">
								<label class="form-label">Password</label>
								<input
									type="password"
									class="form-control"
									placeholder="Enter your Password"
									onChange={handlePasswordChange}
								/>
							</div>

							<p>
								Already have an account?{" "}
								<Link to="/login" style={{ color: "#ECAA11" }}>
									Login
								</Link>
							</p>
						</p>
						<button class="btn btn-warning" onClick={handleSubmit}>
							Register
						</button>
					</div>
				</div>
				<p class="d-flex justify-content-center">Taskforce 5.0</p>
			</div>
		</div>
	);
}

export default Register;
