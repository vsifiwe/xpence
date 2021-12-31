import React from "react";
import Entries from "./Entries";
import {
	LineChart,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	Line,
	Pie,
	PieChart,
} from "recharts";

function Article({ transactions, categories, account }) {
	const data = [
		{
			name: "Jan",
			inc: 4000,
			exp: 2400,
			amt: 2400,
		},
		{
			name: "Feb",
			inc: 3000,
			exp: 1398,
			amt: 2210,
		},
		{
			name: "Mar",
			inc: 2000,
			exp: 9800,
			amt: 2290,
		},
		{
			name: "Apr",
			inc: 2780,
			exp: 3908,
			amt: 2000,
		},
		{
			name: "May",
			inc: 1890,
			exp: 4800,
			amt: 2181,
		},
	];
	const data01 = [
		{
			name: "Group A",
			value: 400,
			fill: "#ECAA11",
		},
		{
			name: "Group B",
			value: 300,
			fill: "#EEE4F8",
		},
		{
			name: "Group C",
			value: 300,
			fill: "#5E419A",
		},
		{
			name: "Group D",
			value: 200,
			fill: "#FFF5DF",
		},
	];

	return (
		<article>
			<div class="d-flex me-5 under">
				<div class="me-auto m-2 h4">{account.account_name}</div>
				<div class="py-2">
					<div class="row">
						<div class="col-sm-3">
							<input
								type="text"
								class="form-control"
								placeholder="From"
								onfocus="(this.type='date')"
								onblur="(this.type='text')"
							/>
						</div>
						<div class="col-sm-3">
							<input
								type="text"
								class="form-control"
								placeholder="To"
								onfocus="(this.type='date')"
								onblur="(this.type='text')"
							/>
						</div>
						<div class="col-sm-3">
							<button type="submit" className="btn btn-warning button">
								Filter
							</button>
						</div>
					</div>
				</div>
				<div class="py-2">
					<div class="row">
						<select
							class="form-select col-md-2"
							aria-label="Default select example"
						>
							<option selected>Yearly</option>
							<option value="1">Monthly</option>
							<option value="2">Weekly</option>
							<option value="3">Daily</option>
						</select>
					</div>
				</div>
			</div>
			{/* <hr /> */}

			<div class="section-1 text-center">
				<div class="card text-center mx-4 p-2 balance-card">
					<div class="card-body">
						<h5 class="card-title balance-amount">
							{new Intl.NumberFormat().format(account.balance)} Rwf
						</h5>
						<p class="card-text balance-date">14 Feb - Now</p>
					</div>
				</div>
				<br />
				<div class="btn-group">
					<button
						type="button"
						class="btn btn-warning button"
						data-bs-toggle="modal"
						data-bs-target="#ExpenseModal"
					>
						Expense
					</button>
					<button
						type="button"
						class="btn btn-warning button-income"
						data-bs-toggle="modal"
						data-bs-target="#incomeModal"
					>
						Income
					</button>
				</div>
				<br />
				<strong>Expenses vs Income</strong>
				<LineChart
					width={300}
					height={150}
					data={data}
					margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Line type="monotone" dataKey="exp" stroke="#ECAA11" />
					<Line type="monotone" dataKey="inc" stroke="#5E419A" />
				</LineChart>
				<strong>Expenses</strong>
				<PieChart width={300} height={150}>
					<Pie
						data={data01}
						dataKey="value"
						nameKey="name"
						cx="50%"
						cy="50%"
						innerRadius={40}
						outerRadius={60}
						label
					/>
				</PieChart>
			</div>
			<div class="section-2">
				<Entries transactions={transactions} categories={categories} />
			</div>
		</article>
	);
}

export default Article;
