/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from "react";
import { Row, Col, Image, Button, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Loading from "react-content-loader";
import axios from "../helpers/axios";

import loc from "../assets/icons/locLogo.png"; //
import edit from "../assets/icons/editLogo.png"; //
import mail from "../assets/icons/mailLogo.png"; //
import instagram from "../assets/icons/instagramLogo.png"; //
import phone from "../assets/icons/phoneLogo.png"; //
import linkedin from "../assets/icons/linkedinLogo.png"; //

import Navbar1 from "../components/organisms/Navbar1";
import Footer from "../components/organisms/Footer";

export default function ComProfile() {
	const Navigate = useNavigate();
	const token = Cookies.get("token");
	const id = Cookies.get("users");
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (!token) {
			alert.fire({
				title: "Failed",
				text: "Please login",
				icon: "Error",
			});
			Navigate("/auth/login");
		}
	}, [token]);

	useEffect(() => {
		getUser();
	}, []);

	const getUser = () => {
		setLoading(true);
		axios
			.get(`users/${id}`)
			.then((res) => {
				setData(res?.data.user_profile);
				setLoading(false);
			})
			.catch((err) => {
				err?.response;
				console.log(err?.response?.data?.message);
				setLoading(false);
			});
	};

	return (
		<>
			<Navbar1 />
			<div className="solidBGPage pb-5">
				<Container>
					<Row>
						{loading ? (
							<Loading />
						) : (
							<>
								<Col />
								<Col sm={10} className="compProfile">
									<Container className="gradientBGPageCompProfile compProfile my-5 pb-5">
										{/* COMPANY PROFILE - BEFORE DESCRIPTION */}
										<Row>
											<Col />
											<Col sm={4}>
												<div className="pt-4 pb-4">
													<Row>
														<Col />
														<Col xs={6}>
															<Image className="circleImage pb-3" src={data.photo} />
														</Col>
														<Col />
													</Row>
													<div className="titleComp">{data.companyName}</div>
													<div className="industry pb-2">{data.position}</div>

													<span className="inlineIconText">
														<Image src={loc} />
														<span className="ms-2">{data.domicile}</span>
													</span>
												</div>
											</Col>
											<Col>
												<a className="compProfEditBG inlineIconText" href="changeBackground">
													<Image src={edit} />
													<span> change backgorund</span>
												</a>
											</Col>
										</Row>

										{/* COMPANY DESCRIPTION (NEED MORE + GRID) */}
										<Row>
											<Col />
											<Col sm={6}>
												<div className="p pb-1">{data.shortDesc}</div>
											</Col>
											<Col />
										</Row>

										<Row>
											<Col />
											<Col sm={4}>
												{/* AFTER DESCRIPTION - BUTTON TO EDIT PROFILE COMPANY */}
												<Link to="/company/edit">
													<Button className="Button doit mt-3 mb-4"> Edit profile </Button>
												</Link>

												{/* COMPANY CONTACT */}
												<Row>
													<Col />
													<Col sm={9} className="mb-5">
														<div className="p">
															<Row className="pSideBarProfile mb-3">
																<Col sm={2}>
																	<Image className="icon" src={mail} />
																</Col>
																<Col>
																	<a href="#1">{data.email}</a>
																</Col>
															</Row>
															<Row className="pSideBarProfile mb-3">
																<Col sm={2}>
																	<Image className="icon" src={instagram} />
																</Col>
																<Col>
																	<a href="#2">{data.instagram}</a>
																</Col>
															</Row>
															<Row className="pSideBarProfile mb-3">
																<Col sm={2}>
																	<Image className="icon" src={phone} />
																</Col>
																<Col>
																	<a href="#4">{data.phoneNumber}</a>
																</Col>
															</Row>
															<Row className="pSideBarProfile mb-5">
																<Col sm={2}>
																	<Image className="icon" src={linkedin} />
																</Col>
																<Col>
																	<a href="#3">{data.linkedin}</a>
																</Col>
															</Row>
														</div>
													</Col>
													<Col />
												</Row>
											</Col>
											<Col />
										</Row>
									</Container>
								</Col>
								<Col />
							</>
						)}
					</Row>
				</Container>
			</div>
			<Footer />
		</>
	);
}
