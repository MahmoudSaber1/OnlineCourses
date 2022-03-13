import React from "react";
import { ContactUS, Footer, Navbar } from "../../components";
import { newTitle } from "../../GeneralFunx";

const Contact = () => {
	newTitle("Contact Us");

	return (
		<div>
			<Navbar />
			<ContactUS />
			<Footer />
		</div>
	);
};

export default Contact;
