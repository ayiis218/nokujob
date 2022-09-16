/* eslint-disable no-unused-expressions */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Image, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
import axios from "../helpers/axios";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";
import Loading from "react-content-loader";
import loc from "../assets/icons/locLogo.png"; //
import alert from "sweetalert2";

import Navbar1 from "../components/organisms/Navbar1";
import Footer from "../components/organisms/Footer";

export default function Hire() {
	const { id } = useParams();
	const Navigate = useNavigate();
	const token = Cookies.get("token");
	const fromUser = Cookies.get("id");
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [purpose, setPurpose] = useState("");
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [desc, setDesc] = useState("");
	const [fromUserId, setFromUserId] = useState(null);
	const [toUserId, setToUserId] = useState(null);

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
		setFromUserId(parseInt(fromUser, 10));
		setToUserId(parseInt(id, 10));
	}, []);

	const getUser = () => {
		setLoading(true);
		axios
			.get(`users/${id}`)
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

	const onSubmit = (e) => {
		e.preventDefault();
		const dataHire = { purpose, name: fullName, email, phoneNumber: phone, description: desc, fromUserId, toUserId };
		if (!purpose || !fullName || !email || !phone || !desc) {
			alert.fire({
				title: "Error!",
				text: "All field must be filled!",
				icon: "error",
			});
		} else {
			setLoading(true);
			axios
				.post("/notification", dataHire, { headers: { Authorization: `Bearer ${token}` } })
				.then(() => {
					alert.fire({
						title: "Success!",
						text: "Hire Success",
						icon: "success",
					});
					Navigate("/home");
				})
				.catch(() => {
					alert.fire({
						title: "Failed!",
						text: "Hire Failed!",
						icon: "error",
					});
				})
				.finally(() => setLoading(false));
		}
	};

	return (
		<>
			<Navbar1 />
			<div className="solidBGPage">
				<Container>
					<Row className="py-5">
						<Col sm={1} />
						{loading ? (
							<Loading />
						) : (
							<>
								{/* LEFT SIDE BAR */}
								<Col sm={3} className="me-3">
									<Row>
										<div className="whiteBg pt-4 pb-2 px-4">
											<Row>
												<Col />
												<Col xs={6} className="overflow-hidden ">
													<Image className="circleImage pb-4" src={data.photo} width={110} height={150} />
												</Col>
												<Col />
											</Row>
											<div className="h1SideBarProfile pb-1">{data.name}</div>

											<div className="deskCompJSeekProfile pb-3">{data.position}</div>

											<Row className="pSideBarProfile pb-3">
												<Image className="loc" src={loc} />
												{data.domicile}
											</Row>

											<div className="pSideBarProfile pb-1">{data.shortDesc}</div>

											<div className="h1SideBarProfile mb-2">Skill</div>
											<div className="mb-4 d-flex flex-wrap">
												<div className="theTag">javascript</div>
												<div className="theTag">python</div>
												<div className="theTag">java</div>
												<div className="theTag">C++</div>
												<div className="theTag">php</div>
												<div className="theTag">Golang</div>
											</div>
										</div>
									</Row>
								</Col>
							</>
						)}

						{/* RIGHT SIDE BAR checkBGCompJSeekProfile */}
						<Col sm={7} className="ps-5 pe-5">
							<div className="titleContactJseek mb-2">{data.name}</div>
							<div className="deskCompJSeekProfile mb-5">{data.shortDesc}</div>

							{/* Form for Company to hiring Jobseeker */}
							<Form onSubmit={onSubmit}>
								<Form.Group className="mb-3 pSideBarProfile" controlId="purpose">
									<Form.Label>Purpose of this message</Form.Label>
									<Form.Select
										size="md"
										aria-label="Default select example"
										style={{ color: "gray" }}
										value={purpose}
										onChange={(e) => setPurpose(e.target.value)}
									>
										<option>Project Select</option>
										<option style={{ color: "black" }} value="1">
											ProjectOne
										</option>
										<option style={{ color: "black" }} value="2">
											ProjectTwo
										</option>
										<option style={{ color: "black" }} value="3">
											ProjectThree
										</option>
									</Form.Select>
								</Form.Group>

								<Form.Group className="mb-4 pSideBarProfile" controlId="fullname">
									<Form.Label className="mb-1">Full name</Form.Label>
									<Form.Control
										size="md"
										type="text"
										placeholder="Input full name"
										value={fullName}
										onChange={(e) => setFullName(e.target.value)}
									/>
									{/* <Form.Text className="text-muted">
										We'll never share your email with anyone else.
									</Form.Text> */}
								</Form.Group>

								<Form.Group className="mb-4 pSideBarProfile" controlId="email">
									<Form.Label className="mb-1">email</Form.Label>
									<Form.Control
										size="md"
										type="text"
										placeholder="Input email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									/>
								</Form.Group>

								<Form.Group className="mb-4 pSideBarProfile" controlId="phone">
									<Form.Label className="mb-1">Handphone number</Form.Label>
									<Form.Control
										size="md"
										type="number"
										placeholder="Input handphone number"
										value={phone}
										onChange={(e) => setPhone(e.target.value)}
									/>
								</Form.Group>

								<Form.Group className="mb-4 pSideBarProfile" controlId="description">
									<Form.Label className="mb-1">Description</Form.Label>
									<Form.Control
										as="textarea"
										rows={6}
										size="md"
										placeholder="Description"
										value={desc}
										onChange={(e) => setDesc(e.target.value)}
									/>
								</Form.Group>

								{loading ? (
									<Button className="Button doit my-4" disabled>
										{" "}
										Loading..
										<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
									</Button>
								) : (
									<Button type="submit" className="Button doit my-4">
										Hire
									</Button>
								)}
							</Form>
						</Col>

						<Col sm={1} />
					</Row>
				</Container>
			</div>
			<Footer />
		</>
	);
}
