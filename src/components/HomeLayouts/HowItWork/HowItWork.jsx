import React from "react";

const HowItWork = () => {
	return (
		<>
			<section className="how-it-works section-padding">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-md-8">
							<div className="section-title">
								<h2>
									how it <span>work</span>
								</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-3 col-md-6">
							<div className="how-it-works-item line-right">
								<div className="step">1</div>
								<h3>Demo Site</h3>
								<p>Take a look at the site, see all its features .</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="how-it-works-item line-right">
								<div className="step">2</div>
								<h3>creat profile</h3>
								<p>
									Make my account so that you can see courses and everything new
									on the site.
								</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="how-it-works-item line-right">
								<div className="step">3</div>
								<h3>search course</h3>
								<p>You can search for everything you like on the site .</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="how-it-works-item">
								<div className="step">4</div>
								<h3>Buy it</h3>
								<p>You can pay in more than one way on the site .</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default HowItWork;
