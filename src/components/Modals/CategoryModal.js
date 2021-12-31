import axios from "axios";
import React, { useState } from "react";
import jwtDecode from "jwt-decode";

function CategoryModal() {
	const [name, setName] = useState("");
	const [type, setType] = useState("");

	const handleNameChange = (event) => {
		const target = event.target;
		const value = target.value;

		setName(value);
	};
	const handleTypeChange = (event) => {
		const target = event.target;
		const value = target.value;

		setType(value);
	};

	const handleSubmit = () => {
		const xpence_token = window.localStorage.getItem("xpence_token");
		const token = "Bearer " + xpence_token;
		const decoded = jwtDecode(xpence_token);
		const data = {
			name: name,
			type: type,
			owner: decoded.user_id,
		};

		axios
			.post("https://xpence-django.herokuapp.com/api/category", data, {
				headers: {
					Authorization: token,
				},
			})
			.then((response) => window.location.reload())
			.catch((error) => console.log(error));
	};
	return (
		<div
			className="modal fade"
			id="exampleModal"
			tabindex="-1"
			aria-labelledby="exampleModalLabel"
			aria-hidden="true"
		>
			<div className="modal-dialog modal-dialog-centered">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" id="exampleModalLabel">
							New Category
						</h5>
						<button
							type="button"
							className="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
						></button>
					</div>
					<div className="modal-body">
						<div className="mb-3">
							<label classNameName="form-label">Category Name</label>
							<input
								type="text"
								className="form-control"
								placeholder="Category name"
								onChange={handleNameChange}
							/>
						</div>
						<div className="mb-4">
							<label className="form-label">Type</label>
							<select className="form-select" onChange={handleTypeChange}>
								<option selected>Choose Category</option>
								<option value="income">Income</option>
								<option value="expense">Expense</option>
							</select>
						</div>
					</div>
					<div className="modal-footer">
						<button
							type="button"
							className="btn btn-warning"
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

export default CategoryModal;
