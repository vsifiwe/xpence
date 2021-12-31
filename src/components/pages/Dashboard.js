import React, { useEffect } from "react";
import axios from "axios";
import Article from "../Article";
import Header from "../Header";
import Nav from "../Nav";
import ProfileModal from "../Modals/ProfileModal";
import IncomeModal from "../Modals/IncomeModal";
import ExpenseModal from "../Modals/ExpenseModal";
import { useState } from "react/cjs/react.development";
import AccountModal from "../Modals/AccountModal";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

function Dashboard() {
	const navigate = useNavigate();
	const xpence_token = window.localStorage.getItem("xpence_token");
	let decoded = {};
	const token = "Bearer " + xpence_token;

	const [data, setData] = useState({});
	const [isLoading, setLoading] = useState(true);
	const [account, setAccount] = useState({
		balance: 0,
		account_name: "All accounts",
	});

	if (xpence_token) {
		decoded = jwtDecode(xpence_token);
	}

	useEffect(() => {
		if (!xpence_token) {
			return navigate("/login");
		}

		axios
			.get("https://xpence-django.herokuapp.com/api/user/data", {
				headers: {
					Authorization: token,
				},
			})
			.then(function (response) {
				setData(response.data);
				let balance = 0;
				response.data.accounts.map((account) => (balance += account.balance));

				setAccount({ balance: balance, account_name: "All accounts" });
				setLoading(false);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	const changeAccount = (account_id) => {
		if (account_id == "all") {
			let balance = 0;
			data.accounts.map((acc) => (balance += acc.balance));
			return setAccount({ balance: balance, account_name: "All accounts" });
		}
		const details = data.accounts.find((el) => el.id == account_id);
		setAccount(details);
	};

	return (
		<div>
			<Header decoded={decoded} />
			<Nav
				accounts={data.accounts}
				changeAccount={changeAccount}
				transactions={data.transactions}
			/>
			<Article
				transactions={data.transactions}
				categories={data.categories}
				account={account}
			/>
			<ProfileModal />
			<IncomeModal categories={data.categories} accounts={data.accounts} />
			<ExpenseModal categories={data.categories} accounts={data.accounts} />
			<AccountModal />
			{/* <button onClick={() => console.log(data)}>Yes</button> */}
		</div>
	);
}

export default Dashboard;
