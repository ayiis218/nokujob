/* eslint-disable no-unused-expressions */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Loading from "react-content-loader";
import axios from "../helpers/axios";

import edit from "../assets/icons/editGray.png";
import loc from "../assets/icons/locLogo.png";

import Navbar1 from "../components/organisms/Navbar1";
import Footer from "../components/organisms/Footer";

export default function CompEdit() {
	const Navigate = useNavigate();
	const token = Cookies.get("token");
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	// console.log(data);

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
			.get(`profile`)
			.then((res) => {
				setData(res?.data?.user_profile);
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
			<div className="gradientBGPage">
				<Container>
					<Row className="py-5">
						<Col sm={1} />
						{loading ? (
							<Loading />
						) : (
							<Col sm={3}>
								{/* PROFILE */}
								<div className="whiteBg pt-4 pb-4 px-4">
									<Row>
										<Col />
										<Col xs={6}>
											<Image className="circleImage pb-3" src={data.photo} />
											<Row className="pb-4">
												<Link to="/#editAvatarCompanyURL" className="logoEdit inlineIconText">
													<Image src={edit} />
													<span>Edit</span>
												</Link>
											</Row>
										</Col>
										<Col />
									</Row>
									<h5 className="h1SideBarProfile">{data.companyName}</h5>
									<h6 className="h2SideBarProfile text-secondary">{data.position}</h6>

									<span className="mt-2 inlineIconText">
										<Image src={loc} />
										<span className="ms-2 text-secondary">{data.domicile}</span>
									</span>
								</div>

								{/* BUTTON FOR SAVE & CANCEL OF EDITING */}
								<div className="profilSaveCancel">
									<Row>
										<Link to="/company">
											<Button className="Button doit mt-3 mb-2">Save</Button>
										</Link>
										<Link to="/company">
											<Button className="Button cancel mb-2">Cancel</Button>
										</Link>
									</Row>
								</div>
							</Col>
						)}
						{/* LEFT SIDE BAR */}

						{/* RIGHT SIDE BAR */}
						<Col sm={7}>
							{/* JSeek edit profile form 1 */}
							<div className="whiteBg ms-3 mb-3 pb-4">
								<Container className="ps-4 pe-4">
									<div className="titleEditProfile pt-4">Company Profile</div>
								</Container>
								<hr />
								<Container className="ps-4 pe-4">
									<Form>
										<Form.Group className="mb-4 pSideBarProfile" controlId="companyName">
											<Form.Label className="mb-1">Company name</Form.Label>
											<Form.Control size="md" type="text" placeholder="Input company name" />
											{/* <Form.Text className="text-muted">
												We'll never share your email with anyone else.
											</Form.Text> */}
										</Form.Group>

										<Form.Group className="mb-4 pSideBarProfile" controlId="industry">
											<Form.Label className="mb-1">Industry</Form.Label>
											<Form.Control size="md" type="text" placeholder="Input industry od company ex: Financial" />
										</Form.Group>

										<Form.Group className="mb-4 pSideBarProfile" controlId="domicile">
											<Form.Label className="mb-1">City</Form.Label>
											<Form.Control size="md" type="text" placeholder="Input city" />
										</Form.Group>

										<Form.Group className="mb-4 pSideBarProfile" controlId="description">
											<Form.Label className="mb-1">Description</Form.Label>
											<Form.Control as="textarea" rows={5} size="md" placeholder="Enter description" />
										</Form.Group>

										<Form.Group className="mb-4 pSideBarProfile" controlId="workplace">
											<Form.Label className="mb-1">Email</Form.Label>
											<Form.Control size="md" type="email" placeholder="Input email" />
										</Form.Group>

										<Form.Group className="mb-4 pSideBarProfile" controlId="instagram">
											<Form.Label className="mb-1">Instagram</Form.Label>
											<Form.Control size="md" type="text" placeholder="Input instagram" />
										</Form.Group>

										<Form.Group className="mb-4 pSideBarProfile" controlId="phonenumber">
											<Form.Label className="mb-1">Phone number</Form.Label>
											<Form.Control size="md" type="text" placeholder="Input phone number" />
										</Form.Group>

										<Form.Group className="mb-4 pSideBarProfile" controlId="linkedin">
											<Form.Label className="mb-1">Linkedin</Form.Label>
											<Form.Control size="md" type="text" placeholder="Input linkedin" />
										</Form.Group>
									</Form>
								</Container>
							</div>
						</Col>

						<Col sm={1} />
					</Row>
				</Container>
			</div>
			<Footer />
		</>
	);
}
