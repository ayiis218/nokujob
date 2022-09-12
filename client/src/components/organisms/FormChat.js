import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import InputEmoji from "react-input-emoji";

import styles from "../../Style/ChatStyle.module.css";

import send from "../../assets/icons/send.png";
import user from "../../assets/icons/user.png";

function FormChat() {
	const [message, setMessage] = useState("");
	const empety = false;

	return (
		<section className={styles.chat}>
			<Container fluid>
				<Row>
					<Col lg="4" className="md-4 d-none d-md-block">
						<div className={styles.chat_left}>
							<div className={styles.chat_title}>
								<h5>Chat</h5>
							</div>

							<hr />
							{empety ? (
								<div
									className="d-flex flex-column justify-content-center align-items-center h-75"
									style={{ gap: "20px" }}
								>
									<img src={send} alt="No Chat" />
									<h5 className="fw-bold">Belum ada chat</h5>
								</div>
							) : (
								<div className="overflow-auto">
									<Row className="w-100 d-flex align-items-center">
										<Col lg="3" className="md-4">
											<div className="d-flex justify-content-center ms-1">
												<img src={user} className="img-cover rounded-circle" alt="Test" />
											</div>
										</Col>
										<Col lg="9" className="md-8 flex flex-column justify-content-center" style={{ textAlign: "left" }}>
											<p className={`${styles.sender} mb-0`}>Jonas adam</p>
											<small className="text-secondary"> Permisi kak, mau tanya...</small>
										</Col>
									</Row>
								</div>
							)}
						</div>
					</Col>

					<Col lg="8" className="md-8">
						<div className={styles.chat_right}>
							<div className={styles.chat_header}>
								{empety ? (
									<div>not message</div>
								) : (
									<div>
										<Row>
											<Col lg="4">
												<img src={user} width={40} height={40} alt="Test" />
											</Col>
											<Col lg="8">
												<h5>Jonas adam</h5>
											</Col>
										</Row>
									</div>
								)}
							</div>

							<hr />
							{empety ? (
								<div className="d-flex justify-content-center align-items-center h-75">
									<h5 className={styles.chat_nochat}>Please select a chat to start messaging</h5>
								</div>
							) : (
								<div className="overflow-auto" id="chats" style={{ height: "60vh" }}>
									<div className="me-1">
										<div className="d-flex justify-content-start align-items-start mt-4">
											<div className={`${styles.ballon_right} me-2`}>
												<p className="p-0 m-0">Permisi kak, mau tanya</p>
												<small className="text-secondary">07:00 am</small>
											</div>
										</div>
									</div>
								</div>
							)}
							<form action="">
								<div className="d-flex align-items-center justify-content-center p-5" style={{ gap: "10px" }}>
									<InputEmoji value={message} onChange={setMessage} placeholder="type message..." />
									<button type="submit" className={styles.button}>
										<img src={send} alt="Send Message" />
									</button>
								</div>
							</form>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
}

FormChat.layout = "mainLayout";

export default FormChat;
