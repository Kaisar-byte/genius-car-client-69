import React from "react";
import "./BannerItem.css";

const BannerItem = ({ slide }) => {
	const { image, id, prev, next } = slide;

	return (
		<div id={`slide${id}`} className="carousel-item relative w-full">
			<div className="carousel-img">
				<img src={image} className="w-full rounded-xl" alt="" />
			</div>
			<div className="absolute flex justify-between transform -translate-y-1/2 ml-24 top-1/4">
				<h1 className="text-5xl text-white font-bold">
					Affordable <br />
					Price For Car <br />
					Servicing
				</h1>
			</div>
			<div className="absolute flex justify-between transform -translate-y-1/2 ml-24 top-1/2 w-1/2">
				<p className="text-xl text-white w-5/7">
					There are many variations of passages of available, but the majority
					have suffered alteration in some form
				</p>
			</div>
			<div className="absolute flex justify-start transform -translate-y-1/2 ml-24 top-3/4 w-1/2">
				<button className="btn btn-warning mr-5">Warning</button>
				<button className="btn btn-outline btn-warning">Warning</button>
			</div>

			<div className="absolute flex justify-between transform -translate-y-1/2  right-5 bottom-0">
				<a href={`#slide${prev}`} className="btn btn-circle mr-5">
					❮
				</a>
				<a href={`#slide${next}`} className="btn btn-circle">
					❯
				</a>
			</div>
		</div>
	);
};

export default BannerItem;
