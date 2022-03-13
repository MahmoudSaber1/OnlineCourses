import React from "react";
import { newTitle } from "../../GeneralFunx";

const Login = () => {
	newTitle("Login");

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
									Log<span>in</span>
								</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg d-flex align-content-center justify-content-center">
							<div className="contact-form">
								<form action="/home">
									<div className="row">
										<div className="col-lg-12">
											<div className="form-group">
												<input
													type="text"
													placeholder="Username"
													className="form-control"
												/>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-lg-12">
											<div className="form-group">
												<input
													type="password"
													placeholder="Password"
													className="form-control"
												/>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-lg-12 d-flex justify-content-center">
											<button type="submit" className="btn btn-2">
												Login
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

export default Login;
