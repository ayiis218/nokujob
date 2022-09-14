import React from "react";
import { Container, Row, Col, Image, Button, Tabs, Tab } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

import loc from "../../assets/icons/locLogo.png"; //
import mail from "../../assets/icons/mailLogo.png"; //
import instagram from "../../assets/icons/instagramLogo.png"; //
import github from "../../assets/icons/githubLogo.png"; //
import gitlab from "../../assets/icons/gitlabLogo.png"; //

// import avatar from "../assets/img/exAvatar.png"; // Photo Profile Example
import profil from "../../assets/img/profil.jpg";
import p1 from "../../assets/img/exPorto1.png";
import compImage from "../../assets/img/exCompLogo.png";
import axios from "axios";

// Azis code navbar and footer to Adi code
import Navbar1 from "../../components/organisms/Navbar1";
import Footer from "../../components/organisms/Footer";

export default function EmpProfile() {
	const { id } = useParams();
	const [data, setData] = React.useState([]);
	const [skills, setSkills] = React.useState([]);
	const [dataFolio, setPortofolio] = React.useState([]);
	const [dataExp, setExperience] = React.useState([]);
	const token =
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsIm5hbWUiOiJOYW5hbmcgVGFtcGFuIiwiZW1haWwiOiJuYW5hbmdAZ21haWwuY29tIiwidHlwZSI6ImNvbXBhbnkiLCJpYXQiOjE2NjMwNjY4MTQsImV4cCI6MTY2MzA4NDgxNH0.1IhHzUu6kpstlF95rTJmSH2dOvGCvhcW19E40wZr4ZU";
	React.useEffect(() => {
		const config = {
			headers: { Authorization: `Bearer ${token}` },
		};
		axios.get(`https://sokujobs-server-production.up.railway.app/users/${id}`, config).then((res) => {
			setData(res.data);
			setSkills(res.data.skills);
			setPortofolio(res.data.portfolios);
			setExperience(res.data.companies);
		});
	}, []);
	console.log(data.name);

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
										<Col xs={12} className="overflow-hidden text-center ">
											<Image
												className="circleImage pb-3"
												src={data?.user_profile?.photo ? data.user_profile.photo : profil}
												width={150}
												height={150}
											/>
										</Col>
									</Row>
									<div className="h1SideBarProfile pb-1">{data?.name}</div>
									<div className="h2SideBarProfile pb-2">{data?.user_profile?.position}</div>

									<Row className="pSideBarProfile pb-2">
										<Image className="loc" src={loc} />
										{data?.user_profile?.domicile}
									</Row>

									<div className="pSideBarProfile pb-3">{data?.type}</div>
									<div className="pSideBarProfile text pb-3">{data?.user_profile?.shortDesc}</div>

									<Link to="/hire">
										<Button renderAS="button" className="Button doit mt-3 mb-4">
											Hire
										</Button>
									</Link>

									<Link to="/employed/edit">
										<Button renderAS="button" className="Button doit mt-3 mb-4">
											Edit profile
										</Button>
									</Link>

									<div className="h1SideBarProfile mb-2">Skill</div>
									<div className="mb-4 d-flex flex-wrap">
										{skills.map((item) => (
											<div key={item.id} className="theTag">
												{item.name}
											</div>
										))}
									</div>

									<div className="pSideBarProfile">
										<Row className="pSideBarProfile mb-2">
											<Col sm={2}>
												<Image className="icon" src={mail} />
											</Col>
											<Col>
												<a href="#1">{data?.email}</a>
											</Col>
										</Row>
										<Row className="pSideBarProfile mb-2">
											<Col sm={2}>
												<Image className="icon" src={instagram} />
											</Col>
											<Col>
												<a href="#2">{data?.user_profile?.instagram}</a>
											</Col>
										</Row>
										<Row className="pSideBarProfile mb-2">
											<Col sm={2}>
												<Image className="icon" src={github} />
											</Col>
											<Col>
												<a href="#3">{data?.user_profile?.github}</a>
											</Col>
										</Row>
										<Row className="pSideBarProfile mb-2">
											<Col sm={2}>
												<Image className="icon" src={gitlab} />
											</Col>
											<Col>
												<a href="#3">{data?.user_profile?.linkedin}</a>
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
												{dataFolio?.map((item) => (
													<Col key={item.id} sm={4} className="mb-4 theTitle">
														<Image src={item?.photo ? item.photo : p1} />
														<div className="portoTitle">{item?.name}</div>
													</Col>
												))}
											</Row>
										</div>
									</Tab>

									{/* TAB JOB EXPERIENCES */}
									<Tab eventKey="tab2" title="Job Experiences">
										<div className="jobsExpPage">
											{dataExp.map((item) => (
												<Row key={item.id} className="mb-4">
													<Col sm={2}>
														<Image src={item?.photo ? item.photo : compImage} />
													</Col>
													<Col sm={10}>
														<div className="theTitle">{item?.work_experience.position}</div>
														<div className="theComp">{item?.name}</div>
														<div className="theDate mb-3">{item?.work_experience.startDate}</div>
														<div className="theDesc mb-1">{item?.work_experience.shortDesc}</div>
													</Col>
												</Row>
											))}
										</div>
									</Tab>
								</Tabs>
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
