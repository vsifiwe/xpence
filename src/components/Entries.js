import React from "react";
import { FaPencilAlt } from "react-icons/fa";

function Entries({ transactions, categories }) {
	return (
		<div className="responsive-table">
			<table class="table table-borderless">
				{transactions.map((transaction, index) => {
					if (transaction.type === "expense") {
						const category = categories.find(
							(el) => el.id === transaction.category
						);
						return (
							<tr>
								<td>
									<span class="circle">&#128308;</span>
								</td>
								<td className="table-expense">
									- {new Intl.NumberFormat().format(transaction.amount)} RWF
								</td>
								<td className="table-desc">{transaction.date}</td>
								<td className="table-category">{category.name}</td>
								<td className="table-desc">{transaction.description}</td>
								<td>
									<button
										type="button"
										className="btn btn-outline-primary edit-btn"
									>
										<FaPencilAlt />
									</button>
									<button
										type="button"
										className="btn btn-outline-warning ms-2 delete-btn"
									>
										X
									</button>
								</td>
							</tr>
						);
					}

					if (transaction.type === "income") {
						const category = categories.find(
							(el) => el.id === transaction.category
						);
						return (
							<tr>
								<td>
									<span class="circle">&#128995;</span>
								</td>
								<td className="table-income">
									+ {new Intl.NumberFormat().format(transaction.amount)} RWF
								</td>
								<td className="table-desc">{transaction.date}</td>
								<td className="table-category">{category.name}</td>
								<td className="table-desc">{transaction.description}</td>
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
					}
				})}
			</table>
		</div>
	);
}

export default Entries;
