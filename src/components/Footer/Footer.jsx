import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<>
			<footer className="footer">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 col-md-6">
							<div className="footer-col">
								<h3>about us</h3>
								<p>
									Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing Elit.
									Voluptatum, Labore.
								</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="footer-col">
								<h3>company</h3>
								<ul>
									<li>
										<Link to="#">privecy policy</Link>
									</li>
									<li>
										<Link to="#">terms & condition</Link>
									</li>
									<li>
										<Link to="#">latest blogs</Link>
									</li>
									<li>
										<Link to="#">app services</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="footer-col">
								<h3>quick links</h3>
								<ul>
									<li>
										<Link to="/home">home</Link>
									</li>
									<li>
										<Link to="/about">about</Link>
									</li>
									<li>
										<Link to="/courses">courses</Link>
									</li>
									<li>
										<Link to="/contact">contact</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="footer-col">
								<h3>social pages</h3>
								<ul>
									<li>
										<Link to="#">facebook</Link>
									</li>
									<li>
										<Link to="#">twitter</Link>
									</li>
									<li>
										<Link to="#">instagram</Link>
									</li>
									<li>
										<Link to="#">linkedin</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<p className="copyright-text">&copy;2020 @ Full Media</p>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
