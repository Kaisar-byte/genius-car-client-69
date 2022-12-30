import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
	const { _id, title, img, price } = service;
	return (
		<div className="card card-compact w-80 bg-base-100 shadow-xl">
			<figure>
				<img src={img} alt="" />
			</figure>
			<div className="card-body mt-4">
				<h2 className="text-xl font-bold">{title}</h2>
				<div className="card-actions justify-between flex">
					<p className="text-orange-600">price: {price}</p>
					<Link to={`/checkout/${_id}`}>
						<AiOutlineArrowRight
							className="text-orange-600"
							size={18}
						></AiOutlineArrowRight>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ServiceCard;
