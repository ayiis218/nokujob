import React from "react";
import { Container, Row, Col, Button, Card, Form, Navbar } from "react-bootstrap";
import { GeoAlt, Search } from "react-bootstrap-icons";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";
import avatar from "../../assets/img/profil.jpg";
import "../../Style/HomeStyles.css";
import ReactPaginate from "react-paginate";

import axios from "axios";

const Datacard = function () {
	const [data, setData] = React.useState([]);
	const [sort, setSort] = React.useState();
	const [page, setPage] = React.useState(1);
	const [pages, setPages] = React.useState(0);
	const [keyword, setKeyWord] = React.useState("");
	const [query, setQuery] = React.useState("");
	const token = Cookies.get("token");

	const config = {
		headers: { Authorization: `Bearer ${token}` },
	};
	const getData = async () => {
		await axios
			.get(
				`https://sokujobs-server-production.up.railway.app/jobseekers?search=${keyword}&sort=${sort}&size=&page=${page}`,
				config
			)
			.then((res) => {
				setPage(res?.data?.currentPage)
				setPages(res?.data?.totalPages);
				setData(res.data?.rows);
			})
			.catch((error) => console.log(error));
	};

	React.useEffect(() => {
		getData();
	}, [keyword, page]);

	const changePage = ({ selected }) => {
		console.log(selected);
		setPage(selected);
	};
	const searchData = (e) => {
		console.log(e);
		e.preventDefault();
		setPage(1);
		setKeyWord(query);
	};

	return (
		<>
			<div className="mb-5">
				<Col lg={9} className="mx-auto mb-5 bg-light">
					<Navbar bg="white shadow-lg" expand="lg" placeholder="Search">
						<Form className="col-9 border-0">
							<InputGroup>
								<Form.Control
									type="search"
									placeholder="Search by any skills"
									className="border-0 bg-transparent mx-3 d-inline searcbar position-relative "
									aria-label="Search"
									aria-describedby="basic-addon2"
									value={query}
									onChange={(e) => setQuery(e.target.value)}
								/>
								<InputGroup.Text id="basic-addon2" className="border-0 bg-icon">
									<Search />
								</InputGroup.Text>
							</InputGroup>
						</Form>
						<Navbar.Collapse className="justify-content-end">
							<div className="d-inline vr mx-3" />
							<Form.Select aria-label="Default select example" onChange={(e) => setSort(e.target.value)}>
								<option>Sort</option>
								<option value="name">Sortir berdasarkan nama</option>
								<option value="skill">Sortir berdasarkan Skill</option>
							</Form.Select>
							<Button variant="outline-primary button-masuk mx-3 d-inline clr" onClick={searchData}>
								Search
							</Button>
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
									<Row className="border mb-1">
										<Col lg={9}>
											<Row>
												<Col lg={3} className=" d-flex justify-content-center p-2">
													<Card.Img
														className="profilpict"
														src={item?.user_profile?.photo ? item?.user_profile?.photo : avatar}
														alt="image"
														height={150}
														width={120}
													/>
												</Col>
												<Col lg={9}>
													<h5 className="fw-semibold">{item?.name}</h5>
													<p className="job clr-g">{item?.user_profile?.position}</p>
													<Row className=" div-job">
														<span className=" ml clr-g">
															<GeoAlt className="d-inline" /> <p className="d-inline">{item?.user_profile?.domicile}</p>
														</span>
													</Row>
													<div className="p-1 ml">
														{item?.skills.map((e) => {
															return <Button variant="warning sm mx-2 btn-skill">{e?.name}</Button>;
														})}
													</div>
												</Col>
											</Row>
										</Col>
										<Col lg={2} className="justify-content-center mx-auto">
											<Row className="mb-3">
												<Link to={`/employed/${item?.id}`}>
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
			<div className="container mt-2 d-flex flex-rows justify-content-center">
				<Row>
					<ReactPaginate
						previousLabel="Previous"
						nextLabel="Next"
						pageCount={Math.min(10, pages)}
						onPageChange={changePage}
						containerClassName="pagination"
						pageLinkClassName="page-item page-link m-1 rounded clr-paginate "
						previousLinkClassName="page-item page-link m-1 rounded bg-paginate"
						nextLinkClassName="page-item page-link m-1 rounded bg-paginate" 
						activeLinkClassName="page-item  active bg-paginate"
						disabledLinkClassName="page-item  disabled"
					/>
				</Row>
			</div>
		</>
	);
};

export default Datacard;
