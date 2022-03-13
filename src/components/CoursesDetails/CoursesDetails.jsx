import React from "react";
import "./coursesDetails.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import vid1 from "../../assits/vid-1.mp4";
import vid2 from "../../assits/vid-2.mp4";
import vid3 from "../../assits/vid-3.mp4";
import vid4 from "../../assits/vid-4.mp4";
import vid5 from "../../assits/vid-5.mp4";
import vid6 from "../../assits/vid-6.mp4";
import vid7 from "../../assits/vid-7.mp4";
import vid8 from "../../assits/vid-8.mp4";
import vid9 from "../../assits/vid-9.mp4";

const CoursesDetails = () => {
	let videoList = document.querySelectorAll(".video-list-container .list");

	videoList.forEach((vid) => {
		vid.onclick = () => {
			videoList.forEach((remove) => {
				remove.classList.remove("active");
			});
			vid.classList.add("active");
			let src = vid.querySelector(".list-video").src;
			let title = vid.querySelector(".list-title").innerHTML;
			document.querySelector(".main-video-container .main-video").src = src;
			document.querySelector(".main-video-container .main-video").play();
			document.querySelector(
				".main-video-container .main-vid-title"
			).innerHTML = title;
		};
	});

	return (
		<>
			<Navbar />
			<section className="details section-padding">
				<div className="container">
					<div className="row justify-content-start">
						<div className="col-md-12">
							<div className="info rounded">
								<h2>Editing Mastery: How To Edit Writing To Perfection</h2>
								<p> The Deep Editing Secrets Of The World's Best Editors </p>
								<div className="stars">
									<i className="fa-solid fa-star"></i>
									<i className="fa-solid fa-star"></i>
									<i className="fa-solid fa-star"></i>
									<i className="fa-solid fa-star"></i>
									<i className="fa-solid fa-star-half-stroke"></i> 4.5
								</div>
								<div className="footerInfo">
									<span className="badge-danger bg-danger p-2 rounded">
										<i className="fa-solid fa-calendar-pen"></i> Latest Update
										3/2022
									</span>
									<span className="badge-success bg-success p-2 rounded">
										<i className="fa-solid fa-users"></i> 21 Students
									</span>
									<span className="badge-secondary bg-secondary p-2 rounded">
										<i className="fa-solid fa-clock-rotate-left me-1"></i>
										40Min
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="row justify-content-start">
						<div className="main-video-container">
							<video src={vid1} loop controls className="main-video"></video>
							<h3 className="main-vid-title">house flood animation</h3>
						</div>

						<div className="video-list-container">
							<div className="list active">
								<video src={vid1} className="list-video"></video>
								<h3 className="list-title">house flood animation</h3>
							</div>

							<div className="list">
								<video src={vid2} className="list-video"></video>
								<h3 className="list-title">zoombie walking animation</h3>
							</div>

							<div className="list">
								<video src={vid3} className="list-video"></video>
								<h3 className="list-title">emoji falling animation</h3>
							</div>

							<div className="list">
								<video src={vid4} className="list-video"></video>
								<h3 className="list-title">3D town animation</h3>
							</div>

							<div className="list">
								<video src={vid5} className="list-video"></video>
								<h3 className="list-title">man chasing carrot animation</h3>
							</div>

							<div className="list">
								<video src={vid6} className="list-video"></video>
								<h3 className="list-title">door hinge animation</h3>
							</div>

							<div className="list">
								<video src={vid7} className="list-video"></video>
								<h3 className="list-title">poeple walking in town animation</h3>
							</div>

							<div className="list">
								<video src={vid8} className="list-video"></video>
								<h3 className="list-title">knight chasing virus animation</h3>
							</div>

							<div className="list">
								<video src={vid9} className="list-video"></video>
								<h3 className="list-title">3D helicopter animation</h3>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default CoursesDetails;
