import React from "react";
import { Container, Row, Col, Image, Button, Tabs, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";

import loc from "../assets/icons/locLogo.png"; //
import mail from "../assets/icons/mailLogo.png"; //
import instagram from "../assets/icons/instagramLogo.png"; //
import github from "../assets/icons/githubLogo.png"; //
import gitlab from "../assets/icons/gitlabLogo.png"; //

// import avatar from "../assets/img/exAvatar.png"; // Photo Profile Example
import profil from "../assets/img/profil.jpg";
import p1 from "../assets/img/exPorto1.png";
import p2 from "../assets/img/exPorto2.png";
import p3 from "../assets/img/exPorto3.png";
import p4 from "../assets/img/exPorto4.png";
import compImage from "../assets/img/exCompLogo.png";

// Azis code navbar and footer to Adi code
import Navbar1 from "../components/organisms/Navbar1Adi";
import Footer from "../components/organisms/FooterAdi";

export default function EmpProfile() {
	return (
		<>
			<Navbar1 />
			<div className="gradientBGPage">
				<Container>
					<Row className="py-5">
						<Col sm={1} />

						{/* LEFT SIDE BAR */}
						<Col sm={3}>
							{/* PROFILE */}
							<Row>
								<div className="whiteBg pt-4 pb-5 px-4">
									<Row>
										<Col />
										<Col xs={6}>
											<Image className="circleImage pb-3" src={profil} />
										</Col>
										<Col />
									</Row>
									<div className="h1SideBarProfile pb-1">Louis Tomlinson</div>
									<div className="h2SideBarProfile pb-2">Web Developer</div>

									<Row className="pSideBarProfile pb-2">
										<Image className="loc" src={loc} />
										Purwokerto, Jawa Tengah
									</Row>

									<div className="pSideBarProfile pb-3">Freelancer</div>
									<div className="pSideBarProfile text pb-3">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
										et dolore magna aliqua. Ut enim ad minim veniam, quis
										{/* nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum */}
									</div>

									{/* BUTTON LINK */}
									{/* IF COMPANY */}
									<Link to="/hire">
										<Button renderAS="button" className="Button doit mt-3 mb-4">
											Hire
										</Button>
									</Link>
									{/* IF JOBSEEKERS */}
									<Link to="/employed/edit">
										<Button renderAS="button" className="Button doit mt-3 mb-4">
											Edit profile
										</Button>
									</Link>

									<div className="h1SideBarProfile mb-2">Skill</div>
									<div className="mb-4 d-flex flex-wrap">
										<div className="theTag">javascript</div>
										<div className="theTag">python</div>
										<div className="theTag">java</div>
										<div className="theTag">C++</div>
										<div className="theTag">php</div>
										<div className="theTag">Golang</div>
									</div>

									<div className="pSideBarProfile">
										<Row className="pSideBarProfile mb-2">
											<Col sm={2}>
												<Image className="icon" src={mail} />
											</Col>
											<Col>
												<a href="#1">Email</a>
											</Col>
										</Row>
										<Row className="pSideBarProfile mb-2">
											<Col sm={2}>
												<Image className="icon" src={instagram} />
											</Col>
											<Col>
												<a href="#2">Instagram</a>
											</Col>
										</Row>
										<Row className="pSideBarProfile mb-2">
											<Col sm={2}>
												<Image className="icon" src={github} />
											</Col>
											<Col>
												<a href="#3">Github</a>
											</Col>
										</Row>
										<Row className="pSideBarProfile mb-2">
											<Col sm={2}>
												<Image className="icon" src={gitlab} />
											</Col>
											<Col>
												<a href="#4">Gitlab</a>
											</Col>
										</Row>
									</div>
								</div>
							</Row>
						</Col>

						{/* RIGHT SIDE BAR */}
						{/* TABS PORTOFOLIO & JOB EXPERIENCES */}
						<Col sm={7}>
							<Container className="whiteBg ms-3 pt-3 pb-5 px-4">
								{/* TAB PORTOFOLIO */}
								<Tabs
									defaultActiveKey="tab1"
									// id="uncontrolled-tab-example"
									className="mb-3"
								>
									<Tab eventKey="tab1" title="Portofolio">
										<div className="portoPage">
											<Row>
												<Col sm={4} className="mb-4 theTitle">
													<Image src={p1} />
													<div className="portoTitle">Portofolio App</div>
												</Col>
												<Col sm={4} className="mb-4 theTitle">
													<Image src={p2} />
													<div className="portoTitle">Portofolio App</div>
												</Col>
												<Col sm={4} className="mb-4 theTitle">
													<Image src={p3} />
													<div className="portoTitle">Portofolio App</div>
												</Col>
												<Col sm={4} className="mb-4 theTitle">
													<Image src={p4} />
													<div className="portoTitle">Portofolio App</div>
												</Col>
											</Row>
										</div>
									</Tab>

									{/* TAB JOB EXPERIENCES */}
									<Tab eventKey="tab2" title="Job Experiences">
										<div className="jobsExpPage">
											<Row className="mb-4">
												<Col sm={2}>
													<Image src={compImage} />
												</Col>
												<Col sm={10}>
													<div className="theTitle">Engineer</div>
													<div className="theComp">Tokopedia</div>
													<div className="theDate mb-3">July 2019 - January 2020 6months</div>
													<div className="theDesc mb-1">
														Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
														labore et dolore magna aliqua. Ut enim ad minim veniam, quis
													</div>
												</Col>
											</Row>
											<Row>
												<Col sm={2}>
													<Image src={compImage} />
												</Col>
												<Col sm={10}>
													<div className="theTitle">Engineer 2</div>
													<div className="theComp">Tokopedia 2</div>
													<div className="theDate mb-3">July 2019 - January 2020 6months</div>
													<div className="theDesc mb-1">
														2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
														ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
													</div>
												</Col>
											</Row>
										</div>
									</Tab>
								</Tabs>

								{/* Nice sclicing Tabs, but broken, because didt code with using Linter */}
								{/* <div className="tabs">
								<input type="radio" className="tabs__radio" name="tabs-example" id="tab1" checked />
								<FloatingLabel for="tab1" className="tabs__label">
									Portofolio
								</FloatingLabel>
								<div className="tabs__content">
									<div className="portoPage">
										<Row>
											<Col sm={4} className="mb-4 theTitle">
												<Image src={p1} />
												<div className="portoTitle">Portofolio App</div>
											</Col>
											<Col sm={4} className="mb-4 theTitle">
												<Image src={p2} />
												<div className="portoTitle">Portofolio App</div>
											</Col>
											<Col sm={4} className="mb-4 theTitle">
												<Image src={p3} />
												<div className="portoTitle">Portofolio App</div>
											</Col>
											<Col sm={4} className="mb-4 theTitle">
												<Image src={p4} />
												<div className="portoTitle">Portofolio App</div>
											</Col>
										</Row>
									</div>
								</div>

								<input type="radio" className="tabs__radio" name="tabs-example" id="tab2" />
								<FloatingLabel for="tab2" className="tabs__label">
									Job Experiences
								</FloatingLabel>
								<div className="tabs__content">
									<div className="jobsExpPage">
										<Row className="mb-4">
											<Col sm={2}>
												<Image src={compImage} />
											</Col>
											<Col sm={10}>
												<div className="theTitle">Engineer</div>
												<div className="theComp">Tokopedia</div>
												<div className="theDate mb-3">July 2019 - January 2020 6months</div>
												<div className="theDesc mb-1">
													Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
													labore et dolore magna aliqua. Ut enim ad minim veniam, quis
												</div>
											</Col>
										</Row>
										<Row>
											<Col sm={2}>
												<Image src={compImage} />
											</Col>
											<Col sm={10}>
												<div className="theTitle">Engineer 2</div>
												<div className="theComp">Tokopedia 2</div>
												<div className="theDate mb-3">July 2019 - January 2020 6months</div>
												<div className="theDesc mb-1">
													2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
													labore et dolore magna aliqua. Ut enim ad minim veniam, quis
												</div>
											</Col>
										</Row>
									</div>
								</div>
							</div> */}
							</Container>
						</Col>

						<Col sm={1} />
					</Row>
				</Container>
			</div>
			<Footer />
		</>
	);
}
