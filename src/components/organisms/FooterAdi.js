import React from "react";
import { Container, Col, Row, Navbar, Image } from "react-bootstrap";
import logo2 from "../../assets/img/logo2.png";

function Footer() {
	return (
		<div className="bg ">
			<Container>
				<Row>
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
				</Row>
			</Container>
		</div>
	);
}

export default Footer;
