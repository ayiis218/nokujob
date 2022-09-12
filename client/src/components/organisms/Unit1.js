import React from "react";
import { Col, Button, Image } from "react-bootstrap";

import pict from "../../assets/img/pict-unit1.png";
import layer from "../../assets/img/layer.png";

function Unit1() {
	return (
		<>
			<Col lg={5} className="flex-center-vertical">
				<h2 className="">Talenta terbaik negri untuk perubahan revolusi 4.0</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
				<Button variant="outline-primary ">Start Now</Button>
			</Col>
			<Col lg={5} className=" mx-auto">
				<div className="mx-auto">
					<div className="imagelayer1">
						<Image className="pict-unit1 navbar-brand mx-auto " src={pict} alt="" width={500} height={500} />
						<div className="imagelayer2" />
						<Image className="layer navbar-brand mx-auto " src={layer} alt="" width={80} height={126} />
						<div className="imagelayer3" />
					</div>
				</div>
			</Col>
		</>
	);
}

export default Unit1;
