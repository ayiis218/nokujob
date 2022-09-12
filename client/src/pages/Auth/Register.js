import React from "react";
import { Row, Col, Form, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import Picture from "../../components/Molecules/PictureSlide";
import style from "../../Style/Slide.module.css";

function register() {
	const navigate = useNavigate();

	return (
		<div className={style.section}>
			<Row>
				<Picture />
				<Col lg="6" className="d-flex justify-content-center">
					<div className="col-10 justify-content-center">
						<div className={style.left}>
							<div className="row">
								<div className="col-12">
									<h2>Halo, Pewpeople</h2>
									<span className="secondary-color description mb-4">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.
									</span>
									<hr className="separator w-100 mb-0 mt-1" />
								</div>
								<div className="col-12 mt-5">
									<Form className="w-100" method="post" encType="multipart/form-data">
										<Button type="submit" className="w-100 btn-main pt-3 pb-3" onClick={() => navigate("Seeker")}>
											JobSeeker
											{/* <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" /> */}
										</Button>
										<Button type="submit" className="w-100 btn-main mt-4 mb-2" onClick={() => navigate("Recruiter")}>
											Recruiter
										</Button>
									</Form>
								</div>
							</div>
						</div>

						<div className="w-100 d-flex flex-column">
							<div className="w-100 d-flex justify-content-center align-items-center">
								<span className="alternative">
									Anda sudah punya akun?{" "}
									<Link to="/login" className="main-color clicked text-decoration-none">
										Masuk disini
									</Link>
								</span>
							</div>
						</div>
					</div>
				</Col>
			</Row>
		</div>
	);
}

export default register;
