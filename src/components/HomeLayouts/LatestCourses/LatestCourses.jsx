import React from "react";
import { Link } from "react-router-dom";
import Editing from "../../../assits/Editing.jpeg";
import icon from "../../../assits/Nav.png";
import "./latestCourses.css";

const Cards = ({ courseName, hours, price, img, delPrice }) => {
	return (
		<div className="col-lg-4 col-md-6">
			<div className="card" style={{ width: "100%" }}>
				<Link to="/courses-details">
					<img src={img} className="card-img-top" alt="..." />
				</Link>
				<div className="card-body">
					<Link className="card-title" to="/courses-details">
						{courseName}
					</Link>
					<div className="infoCourse">
						<span className="hours">
							<i className="fa-solid fa-clock-rotate-left me-1"></i>
							{hours}
						</span>
						<span className="level badge bg-success fs-6">Beginner</span>
					</div>
					<div className="stars">
						<i className="fa-solid fa-star"></i>
						<i className="fa-solid fa-star"></i>
						<i className="fa-solid fa-star"></i>
						<i className="fa-solid fa-star"></i>
						<i className="fa-solid fa-star-half-stroke"></i>
					</div>
					<div className="price">
						<span className="badge bg-danger fs-6 mt-3">{price}</span>
						<span className="ms-2">
							<del>{delPrice}</del>
						</span>
					</div>
				</div>
				<div className="card-footer">
					<div className="row align-items-center g-0">
						<div className="col-auto image">
							<img src={icon} alt="icon" className="w-100 h-100" />
						</div>
						<div className="col nameS">
							<span>Full Media</span>
						</div>
						<div className="col-auto marks">
							<i className="fa-solid fa-bookmark"></i>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const LatestCourses = () => {
	return (
		<>
			<div className="latest">
				<div className="container">
					<div className="row mb-3">
						<Cards
							img={Editing}
							courseName="Editing"
							hours="40m"
							price="10$"
							delPrice="20$"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default LatestCourses;
