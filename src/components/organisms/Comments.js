import React from "react";
import { Card, Row, Col } from "react-bootstrap";

import profil from "../../assets/img/ilham.jpg";
import kevin from "../../assets/img/kevin.jpg";
import aldo from "../../assets/img/aldo.jpg";

function Comments() {
	return (
		<Col lg={10} className="justify-content-center mx-auto">
			<Row xs={1} md={3} className="g-4">
				
					<Col>
						<Card className="px-4 py-4">
							<Card.Img variant="top" src={profil} className="roundedCircle" height={200} />
							<Card.Body>
								<Card.Title className="mt-3 text-center">Ilham Yusuf Alghani</Card.Title>
								<Card.Subtitle className="mb-2 text-muted text-center">Yogyakarta</Card.Subtitle>
								<Card.Text><blockquote>&quot;SokuJobs memudahkan perusahaan kami untuk merekrut karyawan&ldquo;,</blockquote>
								</Card.Text>
								<p className="fw-bold">-Recipenation-</p>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card className="px-4 py-4">
							<Card.Img variant="top" src={kevin} className="roundedCircle" height={200} />
							<Card.Body>
								<Card.Title className="mt-3 text-center">Michael Kevin L</Card.Title>
								<Card.Subtitle className="mb-2 text-muted text-center">Cimahi</Card.Subtitle>
								<Card.Text><blockquote>&quot;Bukan sekedar membantu mencari kandidat untuk perusahaan tapi pelayanan yang diberikan melebihi expetasi kami&ldquo;,</blockquote>
								</Card.Text>
								<p className="fw-bold">-Lets Cooking App-</p>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card className="px-4 py-4">
							<Card.Img variant="top" src={aldo} className="roundedCircle" height={200} />
							<Card.Body>
								<Card.Title className="mt-3 text-center">Alfredo Bangun</Card.Title>
								<Card.Subtitle className="mb-2 text-muted text-center">Kupang</Card.Subtitle>
								<Card.Text><blockquote>&quot; Dengan sokujobs kami menghemat banyak biaya dan waktu untuk merekrut kandidat pekerja &ldquo;,</blockquote> 
								</Card.Text>
								<p className="fw-bold">Next Food Paradise-</p>
							</Card.Body>
						</Card>
					</Col>
				
			</Row>
		</Col>
	);
}

export default Comments;
