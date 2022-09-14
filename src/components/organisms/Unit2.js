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
					<h2>Kenapa harus mencari tallent di sokujobs</h2>
					<Row className="mb-2">
						<span>
							<CheckCircleFill className="checklist d-inline" /> <p className="d-inline">Sistem manajemen kandidat yang mudah digunakan</p>
						</span>
					</Row>
					<Row className="mb-2">
						<span>
							<CheckCircleFill className="checklist d-inline" /> <p className="d-inline">2x lebih banyak ruang iklan untuk menampilkan 3 proposisi nilai perusahaan teratas Anda</p>
						</span>
					</Row>
					<Row className="mb-2">
						<span>
							<CheckCircleFill className="checklist d-inline" /> <p className="d-inline">Jangkauan lebih luas ke kandidat</p>
						</span>
					</Row>
					<Row className="mb-2">
						<span>
							<CheckCircleFill className="checklist d-inline" /> <p className="d-inline">Sumber terintegrasi mulus yang memudahkan pencarian talenta terbaik.</p>
						</span>
					</Row>
				</Col>
			</Col>
		</>
	);
}

export default Unit2;
