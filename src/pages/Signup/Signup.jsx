import React from "react";
import { newTitle } from "../../GeneralFunx";

const Signup = () => {
	newTitle("Contact Us");

	return (
		<>
			<section
				className="contact section-padding"
				id="contact"
				data-scroll-index="6"
			>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-md-8">
							<div className="section-title">
								<h2>
									Sign<span>Up</span>
								</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg d-flex align-content-center justify-content-center">
							<div className="contact-form">
								<form action="/login">
									<div class="row">
										<div class="col-lg-6">
											<div class="form-group">
												<input
													type="text"
													placeholder="Your Name"
													class="form-control"
												/>
											</div>
										</div>
										<div class="col-lg-6">
											<div class="form-group">
												<input
													type="email"
													placeholder="Your Email"
													class="form-control"
												/>
											</div>
										</div>
									</div>
									<div class="row">
										<div class="col-lg-6">
											<div class="form-group">
												<input
													type="text"
													placeholder="Username"
													class="form-control"
												/>
											</div>
										</div>
										<div class="col-lg-6">
											<div class="form-group">
												<input
													type="password"
													placeholder="Password"
													class="form-control"
												/>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-lg-12">
											<div className="form-group">
												<div class="mb-3">
													<input
														className="form-control upload"
														type="file"
														id="formFile"
													/>
												</div>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-lg-12 d-flex justify-content-center">
											<button type="submit" className="btn btn-2">
												Signup
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Signup;
