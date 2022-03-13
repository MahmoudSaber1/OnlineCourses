import React from "react";

import {
	Footer,
	Header,
	HowItWork,
	LatestCourses,
	Navbar,
	VideoPopup,
} from "../../components";
import { newTitle } from "../../GeneralFunx";

const Home = () => {
	newTitle("Full Media");

	return (
		<>
			<Navbar />
			<Header />
			<VideoPopup />
			<HowItWork />
			<section className="how-it-works">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-md-8">
							<div className="section-title">
								<h2>
									Latest <span>Courses</span>
								</h2>
							</div>
						</div>
					</div>
				</div>
			</section>
			<LatestCourses />
			<Footer />
		</>
	);
};

export default Home;
