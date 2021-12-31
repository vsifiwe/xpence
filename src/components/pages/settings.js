import React from "react";
import Header from "../Header";
import Settings from "../Settings";
import CategoryModal from "../Modals/CategoryModal";
import jwtDecode from "jwt-decode";

function settings() {
	const xpence_token = window.localStorage.getItem("xpence_token");
	const decoded = jwtDecode(xpence_token);
	return (
		<div>
			<Header decoded={decoded} />
			<Settings />
			<CategoryModal />
		</div>
	);
}

export default settings;
