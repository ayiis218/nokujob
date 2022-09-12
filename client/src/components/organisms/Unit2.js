import React from "react";
import { Col, Row, Image } from "react-bootstrap";

import pict from "../../assets/img/pict-unit2.png";
import layer from "../../assets/img/layer.png";

import { CheckCircleFill } from "react-bootstrap-icons";

function Unit2() {
	return (
		<>
			<Col lg={6} className=" ">
				<div className="mx-auto">
					<div className="imagelayer1-2">
						<Image className="pict-unit2 navbar-brand mx-auto " src={pict} alt="" width={490} height={390} />
						<div className="imagelayer2-2" />
						<Image className="layer-2 navbar-brand mx-auto " src={layer} alt="" width={120} height={90} />
						<div className="imagelayer3-2" />
					</div>
				</div>
			</Col>
			<Col lg={6} className="">
				<Col>
					<h2>Kenapa harus mencari tallent di peworld</h2>
					<Row className="mb-2">
						<span>
							<CheckCircleFill className="checklist d-inline" /> <p className="d-inline">Lorem ipsum dolor sit amet.</p>
						</span>
					</Row>
					<Row className="mb-2">
						<span>
							<CheckCircleFill className="checklist d-inline" /> <p className="d-inline">Lorem ipsum dolor sit amet.</p>
						</span>
					</Row>
					<Row className="mb-2">
						<span>
							<CheckCircleFill className="checklist d-inline" /> <p className="d-inline">Lorem ipsum dolor sit amet.</p>
						</span>
					</Row>
					<Row className="mb-2">
						<span>
							<CheckCircleFill className="checklist d-inline" /> <p className="d-inline">Lorem ipsum dolor sit amet.</p>
						</span>
					</Row>
				</Col>
			</Col>
		</>
	);
}

export default Unit2;
