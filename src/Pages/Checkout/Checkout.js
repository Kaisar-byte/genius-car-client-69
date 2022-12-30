import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Checkout = () => {
	const { _id, title, price } = useLoaderData();
	const { user } = useContext(AuthContext);
	// console.log(user);
	const handlePlaceOrder = (e) => {
		e.preventDefault();
		const form = e.target;
		const name = `${form.firstName.value} ${form.lastName.value}`;
		const email = user?.email || "unregistered";
		const phone = form.phone.value;
		const message = form.message.value;
		// console.log(email);
		const order = {
			service: _id,
			serviceName: title,
			price,
			customer: name,
			email,
			phone,
			message,
		};

		fetch(`http://localhost:5000/orders`, {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(order),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.acknowledged) {
					alert("Your order has been placed");
					form.reset();
				}
			})
			.catch((err) => console.error(err));
	};
	// console.log(user);
	return (
		<div>
			<form onSubmit={handlePlaceOrder}>
				<h2 className="text-4xl">You are about to order: {title}</h2>
				<h2 className="text-3xl">Price: {price}</h2>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
					<input
						type="text"
						placeholder="First Name "
						className="input input-bordered w-full"
						name="firstName"
					/>
					<input
						type="text"
						placeholder="Last Name "
						name="lastName"
						className="input input-bordered w-full"
					/>
					<input
						type="number"
						placeholder="Your Phone "
						name="phone"
						className="input input-bordered w-full"
						required
					/>
					<input
						type="email"
						placeholder="Your Email "
						name="email"
						className="input input-bordered w-full"
						defaultValue={user?.email}
						readOnly
					/>
				</div>
				<textarea
					className="textarea textarea-bordered mt-4 h-24 w-full"
					placeholder="Your message"
					name="message"
					required
				/>
				<button className="btn">Place Order</button>
			</form>
		</div>
	);
};

export default Checkout;
