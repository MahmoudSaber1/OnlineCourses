import React, { Component } from "react";
import { About, Contact, Courses, Home, Login, Signup } from "./pages";
import { CoursesDetails } from "./components";
import { Route } from "react-router-dom";
import $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";
const Modes = () => {
	return (
		<>
			<a href="#" className="scrollup" id="scroll-up">
				<i className="fas fa-long-arrow-alt-up scrollup__icon"></i>
			</a>
			{/* Toggle Them Start - light and Dark  */}
			<div className="toggle-them">
				<i className="fas"></i>
			</div>
			{/* Toggle Them End - light and Dark  */}
		</>
	);
};

class App extends Component {
	componentDidMount() {
		$(document).ready(function () {
			/* ------------- Preloadere ------------*/
			$(window).on("load", function () {
				$(".preloader").fadeOut("slow");
			});

			/* ------------ Navbar Shrink ---------*/
			$(window).on("scroll", function () {
				if ($(this).scrollTop() > 90) {
					$(".navbar").addClass("navbar-shrink");
				} else {
					$(".navbar").removeClass("navbar-shrink");
				}
			});

			/* ----------- Video Popup ---------- */
			const videoSrc = $("#player-1").attr("src");

			$(".video-play-btn, .video-popup").on("click", function () {
				if ($(".video-popup").hasClass("open")) {
					$(".video-popup").removeClass("open");

					$("#player-1").attr("src", "");
				} else {
					$(".video-popup").addClass("open");

					if ($("#player-1").attr("src") === "") {
						$("#player-1").attr("src", videoSrc);
					}
				}
			});

			/* --------- Navbar Collapse -------------- */
			$(".nav-link").on("click", function () {
				$(".navbar-collapse").collapse("hide");
			});

			/* ----------- Toggle Them - light and Dark ------------- */
			function toggleThem() {
				if (localStorage.getItem("Mahmoud-theme") !== null) {
					if (localStorage.getItem("Mahmoud-theme") === "dark") {
						$("body").addClass("dark");
					} else {
						$("body").removeClass("dark");
					}
				}
				updataIcon();
			}
			toggleThem();

			$(".toggle-them").on("click", function () {
				$("body").toggleClass("dark");
				if ($("body").hasClass("dark")) {
					localStorage.setItem("Mahmoud-theme", "dark");
				} else {
					localStorage.setItem("Mahmoud-theme", "light");
				}
				updataIcon();
			});

			function updataIcon() {
				if ($("body").hasClass("dark")) {
					$(".toggle-them i").removeClass("fa-moon");
					$(".toggle-them i").addClass("fa-sun");
				} else {
					$(".toggle-them i").removeClass("fa-sun");
					$(".toggle-them i").addClass("fa-moon");
				}
			}
		});

		/*==================== SHOW SCROLL UP ====================*/
		function scrollUp() {
			const scrollUp = document.getElementById("scroll-up");
			// When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
			if (this.scrollY >= 200) scrollUp.classList.add("show-scroll");
			else scrollUp.classList.remove("show-scroll");
		}
		window.addEventListener("scroll", scrollUp);
	}

	render() {
		return (
			<>
				<Modes />
				<Route path="/" component={Home} exact />
				<Route path="/home" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/courses" component={Courses} />
				<Route path="/courses-details" component={CoursesDetails} />
				<Route path="/contant" component={Contact} />
				<Route path="/login" component={Login} />
				<Route path="/signup" component={Signup} />
			</>
		);
	}
}

export default App;
