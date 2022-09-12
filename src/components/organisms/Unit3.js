import React from "react";
import { Row, Col, Image } from "react-bootstrap";

import pict from "../../assets/img/pict-unit3.png";

import { CheckCircleFill } from "react-bootstrap-icons";

function Unit3() {
	return (
		<>
			<Col className="col-5 ">
				<Row>
					<h2>Skill Tallent</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
				</Row>
				<Row>
					<Col lg={5}>
						<Row className="mb-2">
							<span>
								<CheckCircleFill className="check d-inline" /> <p className="d-inline">Java</p>
							</span>
						</Row>
						<Row className="mb-2">
							<span>
								<CheckCircleFill className="check d-inline" /> <p className="d-inline">Kotlin</p>
							</span>
						</Row>
						<Row className="mb-2">
							<span>
								<CheckCircleFill className="check d-inline" /> <p className="d-inline">PHP</p>
							</span>
						</Row>
						<Row className="mb-2">
							<span>
								<CheckCircleFill className="check d-inline" /> <p className="d-inline">javaScript</p>
							</span>
						</Row>
					</Col>
					<Col lg={5}>
						<Row className="mb-2">
							<span>
								<CheckCircleFill className="check d-inline" /> <p className="d-inline">GoLang</p>
							</span>
						</Row>
						<Row className="mb-2">
							<span>
								<CheckCircleFill className="check d-inline" /> <p className="d-inline">C++</p>
							</span>
						</Row>
						<Row className="mb-2">
							<span>
								<CheckCircleFill className="check d-inline" /> <p className="d-inline">Ruby</p>
							</span>
						</Row>
						<Row className="mb-2">
							<span>
								<CheckCircleFill className="check d-inline" /> <p className="d-inline">+10 Bahasa Lainnya</p>
							</span>
						</Row>
					</Col>
				</Row>
			</Col>
			<Col lg={5} className="mx-auto ">
				<div className="">
					<div className="imagelayer1-3">
						<Image className="pict-unit3 navbar-brand mx-auto " src={pict} alt="" width={490} height={390} />
						<div className="imagelayer2-3" />
					</div>
				</div>
			</Col>
		</>
	);
}

export default Unit3;
