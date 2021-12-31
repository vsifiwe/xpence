import React, { useState } from "react";
import axios from "axios";

function IncomeModal({ categories, accounts, refresh }) {
	const [amount, setAmount] = useState(0);
	const [category, setCategory] = useState(0);
	const [account, setAccount] = useState(0);
	const [desc, setDesc] = useState("");

	const incomeCategories = categories.filter((cat) => cat.type === "income");

	const getCurrentDate = () => {
		const t = new Date();
		const date = ("0" + t.getDate()).slice(-2);
		const month = ("0" + (t.getMonth() + 1)).slice(-2);
		const year = t.getFullYear();
		return `${year}-${month}-${date}`;
	};

	const handleSubmit = () => {
		const data = {
			type: "income",
			amount: amount,
			date: getCurrentDate(),
			description: desc,
			account: account,
			category: category,
		};

		const xpence_token = window.localStorage.getItem("xpence_token");
		const token = "Bearer " + xpence_token;
		const config = {
			headers: {
				Authorization: token,
			},
		};

		axios
			.post("http://127.0.0.1:8000/api/transaction/create", data, config)
			.then((response) => window.location.reload())
			.catch((error) => console.log(error));
	};

	const handleAmountChange = (event) => {
		const target = event.target;
		const value = target.value;

		setAmount(value);
	};

	const handleCategoryChange = (event) => {
		const target = event.target;
		const value = target.value;

		setCategory(value);
	};

	const handleAccountChange = (event) => {
		const target = event.target;
		const value = target.value;

		setAccount(value);
	};

	const handleDescChange = (event) => {
		const target = event.target;
		const value = target.value;

		setDesc(value);
	};

	return (
		<div
			class="modal fade"
			id="incomeModal"
			tabindex="-1"
			aria-labelledby="exampleModalLabel"
			aria-hidden="true"
		>
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLabel">
							New Income
						</h5>
						<button
							type="button"
							class="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
						></button>
					</div>
					<div class="modal-body">
						<div class="mb-3">
							<label class="form-label">Amount</label>
							<input
								type="number"
								class="form-control"
								placeholder="Enter the amount"
								onChange={handleAmountChange}
							/>
						</div>
						<div class="mb-3">
							<label class="form-label">Category</label>
							<select class="form-select mb-3" onChange={handleCategoryChange}>
								<option selected>Choose Category</option>
								{incomeCategories.map((category, index) => {
									return <option value={category.id}>{category.name}</option>;
								})}
							</select>
						</div>
						<div class="mb-3">
							<label class="form-label">Account</label>
							<select class="form-select mb-3" onChange={handleAccountChange}>
								<option selected>Choose Account</option>
								{accounts.map((account, index) => {
									return (
										<option key={index} value={account.id}>
											{account.account_name}
										</option>
									);
								})}
							</select>
						</div>
						<div class="mb-3">
							<label class="form-label">Description</label>
							<textarea
								class="form-control"
								id="exampleFormControlTextarea1"
								rows="3"
								placeholder="Tell us more"
								onChange={handleDescChange}
							></textarea>
						</div>
					</div>
					<div class="modal-footer">
						<button
							type="button"
							class="btn btn-primary"
							onClick={handleSubmit}
						>
							Add Income
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default IncomeModal;
