import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaPencilAlt } from "react-icons/fa";
import { MdKeyboardBackspace } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Settings() {
	const xpence_token = window.localStorage.getItem("xpence_token");
	const token = "Bearer " + xpence_token;

	const [data, setData] = useState({});
	const [isLoading, setLoading] = useState(true);

	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get("https://xpence-django.herokuapp.com/api/user/data", {
				headers: {
					Authorization: token,
				},
			})
			.then(function (response) {
				// handle success
				setData(response.data);
				setLoading(false);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			});
	}, []);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<section className="d-flex justify-content-center">
			<div className="settings">
				<div className="nav-bar">
					{" "}
					<div className="p-2">
						<strong>
							<MdKeyboardBackspace onClick={() => navigate(-1)} />
						</strong>
					</div>
				</div>
				<ul className="nav nav-tabs mx-2" id="myTab" role="tablist">
					<li className="nav-item" role="presentation">
						<button
							className="nav-link active"
							id="home-tab"
							data-bs-toggle="tab"
							data-bs-target="#home"
							type="button"
							role="tab"
							aria-controls="home"
							aria-selected="true"
						>
							General
						</button>
					</li>
					<li className="nav-item" role="presentation">
						<button
							className="nav-link"
							id="profile-tab"
							data-bs-toggle="tab"
							data-bs-target="#profile"
							type="button"
							role="tab"
							aria-controls="profile"
							aria-selected="false"
						>
							Categories
						</button>
					</li>
				</ul>
				<div className="tab-content" id="myTabContent">
					<div
						className="tab-pane fade show active my-4 mx-3"
						id="home"
						role="tabpanel"
						aria-labelledby="home-tab"
					>
						<h4 className="pb-3 settings-title">Preferences</h4>

						<div className="mb-3 col-md-6">
							<label className="form-label settings-sub">
								<strong>Monthly Limit</strong>
							</label>
							<input
								type="number"
								className="form-control"
								placeholder="Set monthly limit"
							/>
						</div>
						<div className="mb-4 col-md-6">
							<label className="form-label">
								<strong>Default Currency</strong>
							</label>
							<select className="form-select">
								<option selected>Set Default Currency</option>
								<option value="1">One</option>
								<option value="2">Two</option>
								<option value="3">Three</option>
							</select>
						</div>
						<hr className="col-md-6" />
						<div className="mb-5 form-check">
							<input
								type="checkbox"
								className="form-check-input"
								id="exampleCheck1"
							/>
							<label className="form-check-label" for="exampleCheck1">
								<strong>Keep me logged in</strong>
							</label>
						</div>
						<button type="submit" className="btn btn-warning">
							Save
						</button>
					</div>
					<div
						className="tab-pane fade"
						id="profile"
						role="tabpanel"
						aria-labelledby="profile-tab"
					>
						<div className="d-flex bd-highlight">
							<div className="p-2 flex-grow-1 bd-highlight">
								{data.categories.length} Categories
							</div>
							<div className="p-2 bd-highlight">
								<button
									className="btn btn-warning"
									data-bs-toggle="modal"
									data-bs-target="#exampleModal"
								>
									ADD CATEGORY
								</button>
							</div>
						</div>
						<div className="responsive-table">
							<table className="table table-borderless">
								<tbody>
									{data.categories.map((cat) => {
										return (
											<tr>
												<td className="table-category">{cat.id}</td>
												<td className="table-category">{cat.name}</td>
												<td className="table-desc">{cat.type} category</td>
												<td>
													<button
														type="button"
														class="btn btn-outline-primary edit-btn"
													>
														<FaPencilAlt />
													</button>
													<button
														type="button"
														class="btn btn-outline-warning ms-2 delete-btn"
													>
														X
													</button>
												</td>
											</tr>
										);
									})}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Settings;
