import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import OrderRow from "./OrderRow";

const Orders = () => {
	const { user } = useContext(AuthContext);
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		fetch(`http://localhost:5000/orders?email=${user?.email}`)
			.then((res) => res.json())
			.then((data) => setOrders(data));
	}, [user?.email]);

	const handleDelete = (id) => {
		const proceedToDelete = window.confirm("Are you sure to cancel your order");
		if (proceedToDelete) {
			fetch(`http://localhost:5000/orders/${id}`, {
				method: "DELETE",
				headers: {
					"content-type": "application/json",
				},
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					if (data.deletedCount > 0) {
						alert("Order Deleted successfully");
						const remaining = orders.filter((odr) => odr._id !== id);
						setOrders(remaining);
					}
				});
		}
	};
	const handleStatusUpdate = (id) => {
		fetch(`http://localhost:5000/orders/${id}`, {
			method: "PATCH",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({ status: "Approved" }),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.modifiedCount > 0) {
					const remaining = orders.filter((odr) => odr._id !== id);
					const approved = orders.find((odr) => odr._id === id);
					approved.status = "Approved";
					const newOrders = [approved, ...remaining];
					setOrders(newOrders);
				}
			});
	};

	return (
		<div>
			<h2 className="text-4xl">You have orders {orders.length}</h2>
			<div className="overflow-x-auto w-full">
				<table className="table w-full">
					<thead>
						<tr>
							<th>
								<label>
									<input type="checkbox" className="checkbox" />
								</label>
							</th>
							<th>Name</th>
							<th>Job</th>
							<th>Favorite Color</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{orders.map((order) => (
							<OrderRow
								key={order._id}
								order={order}
								handleDelete={handleDelete}
								handleStatusUpdate={handleStatusUpdate}
							></OrderRow>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Orders;
