import React from "react";
import { Row, Col, Image, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import profil from "../assets/img/profil.jpg";

import loc from "../assets/icons/locLogo.png"; //
import edit from "../assets/icons/editLogo.png"; //
import mail from "../assets/icons/mailLogo.png"; //
import instagram from "../assets/icons/instagramLogo.png"; //
import phone from "../assets/icons/phoneLogo.png"; //
import linkedin from "../assets/icons/linkedinLogo.png"; //

import Navbar1 from "../components/organisms/Navbar1Adi";
import Footer from "../components/organisms/FooterAdi";

export default function ComProfile() {
	return (
		<>
			<Navbar1 />
			<div className="solidBGPage pb-5">
				<Container>
					<Row>
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
													<Image className="circleImage pb-3" src={profil} />
												</Col>
												<Col />
											</Row>
											<div className="titleComp">ex PT. Name Company</div>
											<div className="industry pb-2">ex Company Industry</div>

											<span className="inlineIconText">
												<Image src={loc} />
												<span className="p"> ex Company Location</span>
											</span>
										</div>
									</Col>
									<Col>
										<a className="compProfEditBG inlineIconText" href="#changeBackground">
											<Image src={edit} />
											<span> change backgorund</span>
										</a>
									</Col>
								</Row>

								{/* COMPANY DESCRIPTION (NEED MORE + GRID) */}
								<Row>
									<Col />
									<Col sm={6}>
										<div className="p pb-1">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
											labore et dolore magna aliqua. Ut enim ad minim veniam, quis
											{/* nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum */}
										</div>
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
															<a href="#1">Email</a>
														</Col>
													</Row>
													<Row className="pSideBarProfile mb-3">
														<Col sm={2}>
															<Image className="icon" src={instagram} />
														</Col>
														<Col>
															<a href="#2">Instagram</a>
														</Col>
													</Row>
													<Row className="pSideBarProfile mb-3">
														<Col sm={2}>
															<Image className="icon" src={phone} />
														</Col>
														<Col>
															<a href="#3">Github</a>
														</Col>
													</Row>
													<Row className="pSideBarProfile mb-5">
														<Col sm={2}>
															<Image className="icon" src={linkedin} />
														</Col>
														<Col>
															<a href="#4">Gitlab</a>
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
					</Row>
				</Container>
			</div>
			<Footer />
		</>
	);
}
