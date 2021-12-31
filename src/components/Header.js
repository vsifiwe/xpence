import React from "react";
import { Link, useNavigate } from "react-router-dom";
import XPENCE from "./Images/XPENCE.svg";

function Header({ decoded }) {
	const navigate = useNavigate();
	const logout = () => {
		window.localStorage.clear();
		navigate("/login");
	};
	return (
		<header>
			<div class="d-flex bd-highlight">
				<div class="me-auto p-2 bd-highlight">
					<img src={XPENCE} alt="" />
				</div>
				<div class="dropdown text-end">
					<Link
						to="/"
						class="d-block link-dark text-decoration-none dropdown-toggle"
						id="dropdownUser1"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						<img
							src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
							alt="mdo"
							width="32"
							height="32"
							class="rounded-circle"
						/>
						{decoded.name}
					</Link>
					<ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1">
						<li>
							<Link class="dropdown-item" to="/">
								Export to PDF
							</Link>
						</li>
						<li>
							<div class="dropdown-item" onClick={logout}>
								Sign out
							</div>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
}

export default Header;
