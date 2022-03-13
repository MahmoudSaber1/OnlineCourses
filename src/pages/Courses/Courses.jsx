import React from "react";
import { CoursesAll, Footer, LatestCourses, Navbar } from "../../components";
import { newTitle } from "../../GeneralFunx";

const Courses = () => {
	newTitle("Courses");

	return (
		<>
			<Navbar />
			<CoursesAll />
			<LatestCourses />
			<Footer />
		</>
	);
};

export default Courses;
