import React from "react";

const ContactUS = () => {
	return (
		<>
			{" "}
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
									git in <span>touch</span>
								</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-4 col-md-5">
							<div className="contact-info">
								<h3>for any queries and support</h3>
								<div className="contact-info-item">
									<i className="fas fa-location-arrow"></i>
									<h4>company location</h4>
									<p>egypt, qalubya, shebin-elqnater</p>
								</div>
								<div className="contact-info-item">
									<i className="fas fa-envelope"></i>
									<h4>write to us at</h4>
									<p style={{ textTransform: "none" }}>ms5325749@gmail.com</p>
								</div>
								<div className="contact-info-item">
									<i className="fas fa-phone"></i>
									<h4>call us on</h4>
									<p>+20 103 084 3276</p>
								</div>
							</div>
						</div>
						<div className="col-lg-8 col-md-7">
							<div className="contact-form">
								<form action="contact.php" method="POST">
									<div className="row">
										<div className="col-lg-6">
											<div className="form-group">
												<input
													type="text"
													placeholder="Your Name"
													className="form-control"
												/>
											</div>
										</div>
										<div className="col-lg-6">
											<div className="form-group">
												<input
													type="email"
													placeholder="Your Email"
													className="form-control"
												/>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-lg-12">
											<div className="form-group">
												<input
													type="text"
													placeholder="Your Phone"
													className="form-control"
												/>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-lg-12">
											<div className="form-group">
												<input
													type="text"
													placeholder="Subject"
													className="form-control"
												/>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-lg-12">
											<div className="form-group">
												<textarea
													className="form-control"
													placeholder="Your Message"
												></textarea>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-lg-12">
											<button type="submit" className="btn btn-2">
												send message
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

export default ContactUS;
