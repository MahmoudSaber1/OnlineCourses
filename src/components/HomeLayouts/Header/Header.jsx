import React from "react";
import { Link } from "react-router-dom";
import Home from "../../../assits/home.png";

const Header = () => {
	return (
		<>
			<section
				className="home d-flex align-items-center"
				id="home"
				data-scroll-index="0"
			>
				<div className="effect-wrap">
					<i className="fas fa-plus effect effect-1"></i>
					<i className="fas fa-plus effect effect-2"></i>
					<i className="fas fa-circle-notch effect effect-3"></i>
				</div>
				<div className="container">
					<div className="row align-items-center">
						<div className="col-md-7 col-sm-12">
							<div className="home-text">
								<h1>Welcome To Full Media (Online Courses)</h1>
								<p>Pleased To Meet You, Will Make You Professional </p>
								<div className="home-btn">
									<Link to="/signup" data-scroll-goto="3" className="btn btn-1">
										Get Started
									</Link>
									{/* <button type="button" className="btn btn-1 video-play-btn">
										<i className="fas fa-play"></i>
									</button> */}
								</div>
							</div>
						</div>
						<div className="col-md-5 col-sm-12 text-center">
							<div className="home-img">
								<div className="circle"></div>
								<img src={Home} alt="1" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Header;
