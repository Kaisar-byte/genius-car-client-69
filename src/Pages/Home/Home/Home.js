import React from "react";
import Banner from "../Banner";
import About from "./About/About";
import Services from "./About/Services/Services";

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<About></About>
			<Services></Services>
		</div>
	);
};

export default Home;
