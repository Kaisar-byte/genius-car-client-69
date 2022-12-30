import React, { useContext } from "react";
import { Link } from "react-router-dom";
import login from "../../assets/images/login/login.svg";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Login = () => {
	const { LogIn } = useContext(AuthContext);
	// console.log(LogIn);

	const handleLogin = (event) => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;
		console.log(email, password);

		LogIn(email, password)
			.then((res) => {
				const user = res.user;
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
					<form onSubmit={handleLogin} className="card-body">
						<h1 className="text-5xl font-bold text-center">Login</h1>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								type="email"
								placeholder="email"
								name="email"
								className="input input-bordered"
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
							/>
							<label className="label">
								<Link href="#" className="label-text-alt link link-hover">
									Forgot password?
								</Link>
							</label>
						</div>
						<div className="form-control mt-6">
							<button className="btn btn-primary">Log In </button>
						</div>
					</form>
					<div className="flex justify-center items-center mt-0 py-5">
						<h2>
							New to genius car{" "}
							<Link to="/signup" className="text-orange-600">
								Sign Up
							</Link>
						</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
