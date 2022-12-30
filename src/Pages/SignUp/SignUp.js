import React, { useContext } from "react";
import { Link } from "react-router-dom";
import login from "../../assets/images/login/login.svg";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const SignUp = () => {
	const { register } = useContext(AuthContext);
	const handleSignUp = (event) => {
		event.preventDefault();
		const form = event.target;
		console.log(form);
		const name = form.name.value;
		const email = form.email.value;
		const password = form.password.value;
		console.log(name, email, password);

		register(email, password)
			.then((result) => {
				const user = result.user;
				console.log(user);
			})
			.catch((err) => console.log(err));
	};
	return (
		<div className="hero w-full my-20">
			<div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
				<div className="text-center lg:text-left">
					<img src={login} className="w-80" alt="" />
				</div>
				<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
					<form onSubmit={handleSignUp} className="card-body">
						<h1 className="text-5xl font-bold text-center">Sign Up</h1>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Your Name</span>
							</label>
							<input
								type="text"
								name="name"
								placeholder="name"
								className="input input-bordered"
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Your Email</span>
							</label>
							<input
								type="email"
								name="email"
								placeholder="email"
								className="input input-bordered"
								required
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Password</span>
							</label>
							<input
								type="password"
								name="password"
								placeholder="password"
								className="input input-bordered"
								required
							/>
						</div>
						<div className="form-control mt-6">
							<button className="btn btn-primary">Sign Up</button>
						</div>
					</form>
					<div className="flex justify-center items-center mt-0 py-5">
						<h2>
							Already have an account{" "}
							<Link to="/login" className="text-orange-600">
								Login
							</Link>
						</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
