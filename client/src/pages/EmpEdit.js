import React from "react";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import edit from "../assets/icons/editGray.png";
import loc from "../assets/icons/locLogo.png";
import profil from "../assets/img/profil.jpg";

import Navbar1 from "../components/organisms/Navbar1Adi";
import Footer from "../components/organisms/FooterAdi";

export default function EmpEdit() {
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
								<div className="whiteBg py-4 px-4">
									<Row>
										<Col />
										<Col xs={6}>
											<Image className="circleImage pb-3" src={profil} />
											<Row className="pb-4">
												<Link to="/#editAvatarCompanyURL" className="logoEdit inlineIconText">
													<Image src={edit} />
													<span>Edit</span>
												</Link>
											</Row>
										</Col>
										<Col />
									</Row>
									<div className="h1SideBarProfile pb-1">Louis Tomlinson</div>
									<div className="h2SideBarProfile pb-2">Web Developer</div>

									<Row className="pSideBarProfile pb-2">
										<Image className="loc" src={loc} />
										Purwokerto, Jawa Tengah
									</Row>

									<div className="pSideBarProfile">Freelancer</div>
								</div>
							</Row>

							{/* BUTTON FOR SAVE & CANCEL OF EDITING */}
							<div className="profilSaveCancel">
								<Row>
									<Link to="/employed">
										<Button className="Button doit mt-3 mb-2">Save</Button>
									</Link>
									<Link to="/employed">
										<Button className="Button cancel mb-2">Cancel</Button>
									</Link>
								</Row>
							</div>
						</Col>

						{/* RIGHT SIDE BAR */}
						<Col sm={7}>
							{/* JOBSEEKER EDIT PROFILE FORM 1 */}
							<div className="whiteBg ms-3 mb-3 pb-4">
								<Container className="ps-4 pe-4">
									<div className="titleEditProfile pt-4">Profile</div>
								</Container>
								<hr />
								<Container className="ps-4 pe-4">
									<Form>
										<Form.Group className="mb-4 pSideBarProfile" controlId="fullname">
											<Form.Label className="mb-1">Full name</Form.Label>
											<Form.Control size="md" type="email" placeholder="Enter full name" />
											{/* <Form.Text className="text-muted">
												We'll never share your email with anyone else.
											</Form.Text> */}
										</Form.Group>

										<Form.Group className="mb-4 pSideBarProfile" controlId="jobdesk">
											<Form.Label className="mb-1">Job desk</Form.Label>
											<Form.Control size="md" type="text" placeholder="Enter job desk" />
										</Form.Group>

										<Form.Group className="mb-4 pSideBarProfile" controlId="domicile">
											<Form.Label className="mb-1">Domicile</Form.Label>
											<Form.Control size="md" type="text" placeholder="Enter domicile" />
										</Form.Group>

										<Form.Group className="mb-4 pSideBarProfile" controlId="workplace">
											<Form.Label className="mb-1">Work Place</Form.Label>
											<Form.Control size="md" type="text" placeholder="Work place" />
										</Form.Group>

										<Form.Group className="mb-4 pSideBarProfile" controlId="description">
											<Form.Label className="mb-1">Description</Form.Label>
											<Form.Control as="textarea" rows={5} size="md" placeholder="Enter description" />
										</Form.Group>
									</Form>
								</Container>
							</div>

							{/* JOBSEEKER EDIT PROFILE FORM 2 */}
							<div className="whiteBg ms-3 mb-3 pb-4">
								<Container className="ps-4 pe-4">
									<div className="titleEditProfile pt-4">Skills</div>
								</Container>
								<hr />
								<Container className="ps-4 pe-4">
									<Form>
										<Row>
											<Col sm={10}>
												<Form.Group className="mb-3 pSideBarProfile" controlId="skill">
													<Form.Control size="lg" type="text" placeholder="Enter skill" />
												</Form.Group>
											</Col>
											<Col sm={2}>
												<Button className="Button skillbutton" variant="primary" type="submit">
													Save
												</Button>
											</Col>
										</Row>
									</Form>
								</Container>
							</div>

							{/* JOBSEEKER EDIT PROFILE FORM 3 */}
							<div className="whiteBg ms-3 mb-3 pb-4">
								<Container className="ps-4 pe-4">
									<div className="titleEditProfile pt-4">Job Experiences</div>
								</Container>
								<hr />
								<Container className="ps-4 pe-4">
									<Form>
										<Form.Group className="mb-4 pSideBarProfile" controlId="position">
											<Form.Label className="mb-1">Position</Form.Label>
											<Form.Control size="md" type="text" placeholder="Web developer, Mobile app developer" />
										</Form.Group>

										<Row>
											<Col>
												<Form.Group className="mb-4 pSideBarProfile" controlId="company">
													<Form.Label className="mb-1">Company name</Form.Label>
													<Form.Control size="md" type="text" placeholder="PT. Company Corp" />
												</Form.Group>
											</Col>
											<Col>
												<Form.Group className="mb-4 pSideBarProfile" controlId="domicile">
													<Form.Label className="mb-1">Month/Year</Form.Label>
													<Form.Control size="md" type="text" placeholder="July 2022" />
												</Form.Group>
											</Col>
										</Row>

										<Form.Group className="mb-4 pSideBarProfile" controlId="workplace">
											<Form.Label className="mb-1">Description</Form.Label>
											<Form.Control as="textarea" rows={4} size="md" placeholder="Description your jobs" />
										</Form.Group>

										<Button
											className="Button skillbutton"
											variant="primary"
											// type="submit"
											// onClick={()}
										>
											Add Job Experiences
										</Button>
									</Form>
								</Container>
							</div>

							{/* JOBSEEKER EDIT PROFILE FORM 4 */}
							<div className="whiteBg ms-3 mb-3 pb-4">
								<Container className="ps-4 pe-4">
									<div className="titleEditProfile pt-4">Portofolio</div>
								</Container>
								<hr />
								<Container className="ps-4 pe-4">
									<Form>
										<Form.Group className="mb-3 pSideBarProfile" controlId="appsname">
											<Form.Label>Apps name</Form.Label>
											<Form.Control size="md" type="text" placeholder="Enter apps" />
										</Form.Group>

										<Form.Group className="mb-3 pSideBarProfile" controlId="linkrepository">
											<Form.Label>Link repository</Form.Label>
											<Form.Control size="md" type="text" placeholder="Enter link repository" />
										</Form.Group>

										<Form.Group className="mb-3 pSideBarProfile" controlId="domicile">
											{["radio"].map((type) => (
												<div key={`inline-${type}`} className="mb-3">
													<Form.Check inline label="Mobile Apps" name="group1" type={type} id={`inline-${type}-1`} />
													<Form.Check inline label="Mobile Apps" name="group1" type={type} id={`inline-${type}-2`} />
												</div>
											))}
										</Form.Group>

										<Form.Group className="mb-3 pSideBarProfile" controlId="fileImage">
											<Form.Label>Upload image</Form.Label>
											<Form.Control size="md" type="file" />
										</Form.Group>

										<Button
											className="Button skillbutton"
											variant="primary"
											// type="submit"
											// onClick={()}
										>
											Add Portofolio
										</Button>
									</Form>
								</Container>
							</div>
						</Col>

						<Col sm={1} />
					</Row>

					{/* <Row className="bg ">
					<Col lg={10} className="mx-auto mt-5">
						<Image src={logo2} height={50} className="mt-3 mb-3" />
						<p className="mb-5">With supporting text below as a natural lead-in to additional content.</p>
						<hr />
						<Row>
							<Navbar>
								<p>2020 Pewworld. All right reserved</p>
								<Navbar.Collapse className="footerlink justify-content-end">
									<p className="mx-5">Telepon</p>
									<p>Email</p>
								</Navbar.Collapse>
							</Navbar>
						</Row>
					</Col>
				</Row> */}
				</Container>
			</div>
			<Footer />
		</>
	);
}
