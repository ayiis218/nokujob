import React from "react";
import { Button, Col, Container, Row, Image, Carousel } from "react-bootstrap";

import Navbar2 from "../components/organisms/Navbar2";
import Footer from "../components/organisms/Footer";
import Unit1 from "../components/organisms/Unit1";
import Unit2 from "../components/organisms/Unit2";
import Unit3 from "../components/organisms/Unit3";
import Comments from "../components/organisms/Comments";

import layer2 from "../assets/img/layer2.png";

function App() {
	return (
		<div className="LandingPage">
			<Container fluid>
				<Navbar2 />
				<br /> <br /> <br />
				<Row className="item mx-auto col-10 ">
					<Unit1 />
				</Row>
				<Row className="item  mx-auto col-10  ">
					<Unit2 />
				</Row>
				<Row className="item  mx-auto col-10  ">
					<Unit3 />
				</Row>
				<Row className="item-last  mx-auto col-10">
					<h2 className="text-center">Their Opinion About Peworld</h2>
					<Row className="mt-5 px-5 mb-5">
						<Carousel variant="dark">
							<Carousel.Item>
								<Comments className="px-5" />
							</Carousel.Item>
							<Carousel.Item>
								<Comments className="px-5" />
							</Carousel.Item>
							<Carousel.Item>
								<Comments className="px-5" />
							</Carousel.Item>
						</Carousel>
					</Row>
					<div className="unit5 mx">
						<Row className="mx-auto col-10 position-absolute text-light">
							<Col lg={9}>
								<h2>Lorem ipsum dolor sit amet</h2>
							</Col>
							<Col lg={3} className="mx-auto">
								<Button className="mx-auto " variant="light" size="lg">
									Mulai Dari Sekarang
								</Button>
							</Col>
						</Row>
						<Image className="layer2 navbar-brand mx-auto " src={layer2} alt="" height={227} />
					</div>
				</Row>
				<Footer />
			</Container>
		</div>
	);
}

export default App;
