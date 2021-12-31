import React, { useState } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";

function AccountModal() {
	const [name, setName] = useState("");
	const [currency, setCurrency] = useState("");

	const handleNameChange = (event) => {
		const target = event.target;
		const value = target.value;
		setName(value);
	};

	const handleCurrencyChange = (event) => {
		const target = event.target;
		const value = target.value;
		setCurrency(value);
	};

	const handleSubmit = () => {
		const xpence_token = window.localStorage.getItem("xpence_token");
		const token = "Bearer " + xpence_token;
		const decoded = jwtDecode(xpence_token);
		const data = {
			account_name: name,
			currency: currency,
			balance: 0,
			owner: decoded.user_id,
		};

		axios
			.post("https://xpence-django.herokuapp.com/api/account", data, {
				headers: {
					Authorization: token,
				},
			})
			.then((response) => window.location.reload())
			.catch((error) => console.log(error));
	};
	return (
		<div class="modal fade" id="accountModal" tabindex="-1">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title settings-title" id="exampleModalLabel">
							New Account
						</h5>
						<button
							type="button"
							class="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
						></button>
					</div>
					<div class="modal-body">
						<p class="copy-text">
							Create an income/expense account to start recording. You can
							create up to 5 accounts
						</p>
						<div className="mb-3">
							<label classNameName="form-label">
								<strong>Name</strong>
							</label>
							<input
								type="text"
								className="form-control"
								placeholder="Account name"
								onChange={handleNameChange}
							/>
						</div>
						<div className="mb-4">
							<label className="form-label">
								<strong>Currency</strong>
							</label>
							<select className="form-select" onChange={handleCurrencyChange}>
								<option selected>Choose Currency</option>
								<option value="Rwf">RWF</option>
								<option value="USD">USD</option>
								<option value="EUR">EURO</option>
							</select>
						</div>
					</div>
					<div class="modal-footer">
						<button
							type="button"
							class="btn btn-primary"
							onClick={handleSubmit}
						>
							Save changes
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AccountModal;
