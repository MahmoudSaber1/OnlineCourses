import React from "react";
import { AboutUS, Footer, Navbar } from "../../components";
import { newTitle } from "../../GeneralFunx";

const About = () => {
	newTitle("About");

	return (
		<>
			<Navbar />
			<AboutUS />
			<Footer />
		</>
	);
};

export default About;
