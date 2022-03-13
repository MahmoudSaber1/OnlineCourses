import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<>
			{/* <!-- Start Navbar --> */}
			<nav className="navbar navbar-expand-lg fixed-top">
				<div className="container">
					{/* <!-- Brand --> */}
					<Link className="navbar-brand" to="/home">
						full media
					</Link>
					{/* <!-- Toggler/Collapsibe Button --> */}
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#NavSlider"
						aria-controls="NavSlider"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<i className="fas fa-bars"></i>
					</button>
					{/* <!-- Navbar Links --> */}
					<div className="collapse navbar-collapse" id="NavSlider">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link className="nav-link" data-scroll-nav="0" to="/home">
									home
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" data-scroll-nav="1" to="/about">
									About
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" data-scroll-nav="2" to="/courses">
									Courses
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" data-scroll-nav="4" to="/contant">
									Contact
								</Link>
							</li>
						</ul>
						<div className="d-flex">
							<li className="nav-item">
								<Link
									className="nav-link pt-1 pb-1 pe-3 ps-3 btn btn-success"
									data-scroll-nav="5"
									to="/login"
								>
									Login
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link pt-1 pb-1 pe-3 ps-3 btn btn-secondary"
									data-scroll-nav="6"
									to="/signup"
								>
									Sign Up
								</Link>
							</li>
						</div>
					</div>
				</div>
			</nav>
			{/* <!-- End Navbar --> */}
		</>
	);
};

export default Navbar;
