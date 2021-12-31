import React from "react";
import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";

function ProfileModal() {
	const xpence_token = window.localStorage.getItem("xpence_token");
	const decoded = jwtDecode(xpence_token);
	console.log(decoded);

	return (
		<div
			class="modal fade"
			id="profilemodal"
			tabindex="-1"
			aria-labelledby="exampleModalLabel"
			aria-hidden="true"
		>
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-body">
						<div class="row">
							<div class="col">
								<img
									src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
									class="img-fluid"
									alt=""
								/>
								<Link to="#" style={{ fontSize: "0.90rem" }}>
									Edit profile picture
								</Link>
							</div>
							<div class="col-8">
								<h4>My Profile Info</h4>
								<form>
									<div class="mb-3">
										<label class="form-label">Name</label>
										<input
											type="text"
											class="form-control form-control-sm"
											value={decoded.name}
										/>
									</div>
									<div class="mb-3">
										<label class="form-label">Email</label>
										<input
											type="email"
											class="form-control form-control-sm"
											value={decoded.email}
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
												class="form-control form-control-sm"
												placeholder="788999999"
												value={decoded.phone}
											/>
										</div>
									</div>
									<h5>Edit password</h5>
									<div class="row">
										<div class="col">
											<label class="form-label" style={{ fontSize: "0.90rem" }}>
												Current password
											</label>
											<input
												type="password"
												class="form-control form-control-sm"
												placeholder="*******"
											/>
										</div>
										<div class="col">
											<label class="form-label" style={{ fontSize: "0.90rem" }}>
												New password
											</label>
											<input
												type="password"
												class="form-control form-control-sm"
												placeholder="*******"
											/>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-warning">
							Save Changes
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProfileModal;
