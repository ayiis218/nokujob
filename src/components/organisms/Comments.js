import React from "react";
import { Card, Row, Col } from "react-bootstrap";

import profil from "../../assets/img/profil.jpg";

function Comments() {
	return (
		<Col lg={10} className="justify-content-center mx-auto">
			<Row xs={1} md={3} className="g-4">
				{Array.from({ length: 3 }).map(() => (
					<Col>
						<Card className="px-4 py-4">
							<Card.Img variant="top" src={profil} className="roundedCircle" height={200} />
							<Card.Body>
								<Card.Title className="mt-3 text-center">Nama</Card.Title>
								<Card.Subtitle className="mb-2 text-muted text-center">location</Card.Subtitle>
								<Card.Text>
									This is a longer card with supporting text below as a natural lead-in to additional content. This
									content is a little bit longer.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</Col>
	);
}

export default Comments;
