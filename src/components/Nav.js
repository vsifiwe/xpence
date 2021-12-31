import React from "react";
import { Link } from "react-router-dom";
import {
	MdKeyboardArrowRight,
	MdSettings,
	MdPerson,
	MdLogout,
	MdAdd,
} from "react-icons/md";
import { VscFilePdf } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

function Nav({ accounts, changeAccount, transactions }) {
	const navigate = useNavigate();
	const onTrigger = (event) => {
		const target = event.target;
		const value = target.id;
		changeAccount(value);
	};
	const logout = () => {
		window.localStorage.clear();
		navigate("/login");
	};
	return (
		<nav>
			<div class="d-flex flex-column flex-shrink-0 p-3 bg-light navo">
				<div class="d-flex bd-highlight">
					<div class="p-2 flex-grow-1 bd-highlight h5">MY ACCOUNTS</div>
					<div class="p-2 bd-highlight">
						<div data-bs-toggle="modal" data-bs-target="#accountModal">
							<MdAdd className="plus-sign" />
						</div>
					</div>
				</div>
				<br />
				<div class="d-flex align-items-start mb-auto">
					<div
						class="nav flex-column nav-pills me-3"
						id="v-pills-tab"
						role="tablist"
						aria-orientation="vertical"
					>
						<button
							className="nav-link active"
							id="all"
							data-bs-toggle="pill"
							data-bs-target="#v-pills-home"
							type="button"
							role="tab"
							onClick={onTrigger}
						>
							Home
						</button>
						{accounts.map((account, index) => {
							return (
								<button
									class="nav-link"
									id={account.id}
									data-bs-toggle="pill"
									// data-bs-target="#v-pills-profile"
									type="button"
									role="tab"
									onClick={onTrigger}
								>
									{account.account_name}
								</button>
							);
						})}
					</div>
				</div>
				{/* <ul class="nav nav-pills flex-column mb-auto">
					<li class="nav-item">
						<button
							class="nav-link active"
							aria-current="page"
							id="all"
							onClick={onTrigger}
						>
							All Accounts
						</button>
					</li>
					{accounts.map((account, index) => {
						return (
							<li class="nav-item">
								<button
									class="nav-link link-dark"
									id={account.id}
									onClick={onTrigger}
								>
									{account.account_name}
								</button>
							</li>
						);
					})}
				</ul> */}
				<hr />
				<ul>
					<li>
						<Link
							to="/settings"
							className="link-dark
								text-decoration-none"
						>
							<div class="d-flex bd-highlight">
								<div class="p-2 bd-highlight">
									<MdSettings />
								</div>
								<div class="p-2 flex-grow-1 bd-highlight">Preferences</div>
								<div class="p-2 bd-highlight">
									<MdKeyboardArrowRight />
								</div>
							</div>
						</Link>
					</li>
					<li>
						<div
							// type="button"
							data-bs-toggle="modal"
							data-bs-target="#profilemodal"
						>
							<div class="d-flex bd-highlight">
								<div class="p-2 bd-highlight">
									<MdPerson />
								</div>
								<div class="p-2 flex-grow-1 bd-highlight">My Profile</div>
								<div class="p-2 bd-highlight">
									<MdKeyboardArrowRight />
								</div>
							</div>
						</div>
					</li>
				</ul>
				<hr />
				<div class="d-flex bd-highlight" onClick={logout}>
					<div class="p-2 flex-grow-1 bd-highlight">Logout</div>
					<div class="p-2 bd-highlight">
						<MdLogout />
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Nav;
