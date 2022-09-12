import React from "react";
import { Container, Row, Col, Button, Card, Form,  Navbar, } from "react-bootstrap";
// import profil from "../../assets/img/profil.jpg";
import { GeoAlt, Search } from "react-bootstrap-icons";
import userdata from "./userdummy";
import { Link } from "react-router-dom";

import axios from "axios";

// import axios from "axios";
const Datacard = function () {
	// const [listUsers, setListUsers] = React.useState([]);
	// const [filterValue, setFilterValue]=React.useState("");
	const [data, setData] = React.useState(userdata);
	// const [currentPage,setCurrentPage]=React.useState(1)
	// const [postperPage,setPostperPage]=React.useState(10)

	React.useEffect(() => {
		axios.get("http://localhost:8000/jobseeker").then((res) => {
			setData(res.data);
		});
	});

	const filterSearch = (skill) => {
		axios.get(`http://localhost:8000/jobseeker?search=${skill}`).then((res) => {
			setData(res.data);
		});
	};

	// const lastindexpost=currentPage*postperPage;
	// const firstpost=lastindexpost-postperPage;
	

	// const filterSearch = (category) => {
	// 	const result = userdata.filter((item) => {
	// 		return item.username.toLowerCase().includes(category);
	// 	});
	// 	setData(result);
	// };

	const sortOption = ["username", "skill", "location", "freelance", "fulltime"];
	const [sortValue, setSortValue] = React.useState("");

	const handleSort = (value) => {
		
		setSortValue(value);

		axios.get(`http://localhost:8000/jobseeker?username?_sort=${value}&_order=asc`).then((res) => {
			setData(res.data);
		});
	};

	return (
		<>
			<div className="mb-5">
				<Col lg={9} className="mx-auto mb-5 bg-light">
					<Navbar bg="white shadow-lg" expand="lg" placeholder="Search">
						<Form className="col-9 border-0">
							<Form.Control
								type="search"
								placeholder="Search by any skills"
								className="border-0 bg-transparent mx-3 d-inline searcbar position-relative "
								aria-label="Search"
								onChange={(e) => {
									filterSearch(e.target.value);
								}}
							/>
						</Form>
						<Navbar.Collapse className="justify-content-end">
						<div>
							<Search className="d-inline " />
						</div>
						<div className="d-inline vr mx-3" />
						<Form.Select
							aria-label="Sort"
							className="bg-transparrant border-0 d-inline "
							onChange={handleSort}
							value={sortValue}
						>
							{sortOption.map((item) => (
								<option value={item} key={item}>
									{item}
								</option>
							))}
						</Form.Select>
						<Button variant="outline-primary button-masuk mx-3 d-inline"

						>Search</Button>
					</Navbar.Collapse>
					</Navbar>
				</Col>
			</div>

			<div>
				<Col lg={9} className=" mx-auto shadow-lg ">
					<Card>
						<Card.Body>
							<Container>
								{data.map((item) => (
									<Row>
										<Col lg={9}>
											<Row>
												<Col lg={3}>
													<Card.Img className="profilpict" src={item?.profil} alt="" height={150} />
												</Col>
												<Col lg={9} className="">
													<h4>{item?.username}</h4>
													<p>{item?.job}</p>
													<Row className="mb-2">
														<span>
															<GeoAlt className="d-inline" />
															<p className="d-inline">{item?.lokasi}</p>
														</span>
													</Row>
													<div className="">
														{item?.skills.map((e) => {
															return <Button variant="warning sm mx-2">{e?.name}</Button>;
														})}
													</div>
												</Col>
											</Row>
										</Col>
										<Col lg={2} className="justify-content-center mx-auto">
											<Row className="mb-3">
												<Link to="/employed">
													<Button variant="btn button-profil mt-5 text-light">Lihat Profil</Button>
												</Link>
											</Row>
										</Col>
										<div className="hr mt-3 " />
									</Row>
								))}
							</Container>
						</Card.Body>
					</Card>
				</Col>
			</div>
		</>
	);
};

export default Datacard;
