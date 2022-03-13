import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../assits/Nav.png";
import "./Start.css";

const StartingPage = () => {
	return (
		<div className="container">
			<div className="box">
				<img src={Avatar} alt="Avatar" />
				<h4>@Full-Media</h4>
				<p>Pleased To Meet You, Will Make You Professional</p>
				<div className="Links w-100">
					<Link to="/courses">
						<button type="button" className="btn btn-dark w-100 mb-4 shadow-sm">
							Courses
						</button>
					</Link>
					<Link to="/login">
						<button type="button" className="btn btn-dark w-100 mb-4 shadow-sm">
							Login
						</button>
					</Link>
					<Link to="/signup">
						<button type="button" className="btn btn-dark w-100 shadow-sm">
							Signup
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default StartingPage;
