import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
	const [services, setServices] = useState([]);
	useEffect(() => {
		fetch("http://localhost:5000/services")
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);

	return (
		<div>
			<div className="text-center py-20  ">
				<p className="text-2xl text-orange-600 mb-3">Service</p>
				<h2 className="text-5xl font-semibold mb-5">Our Service Area</h2>
				<p className="w-2/3 mx-auto">
					the majority have suffered alteration in some form, by injected
					humour, or randomised words which don't look even slightly believable.{" "}
				</p>
			</div>
			<div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{services.map((service) => (
					<ServiceCard key={service._id} service={service}></ServiceCard>
				))}
			</div>
			<div className="flex justify-center items-center my-20 w-full mx-auto">
				<button className="btn btn-outline btn-secondary">More Services</button>
			</div>
			<div>
				<div></div>
			</div>
		</div>
	);
};

export default Services;
