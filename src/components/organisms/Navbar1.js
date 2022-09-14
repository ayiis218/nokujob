import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, Popover, OverlayTrigger, Image } from "react-bootstrap";
import logo from "../../assets/img/logosk.png";
import profil from "../../assets/img/profil.jpg";
import { Bell, Envelope } from "react-bootstrap-icons";
import "../../Style/Navbar.css"

function Navbar1() {
	const users = Cookies.get("type");
	const [data, setData] = useState("");

	useEffect(() => {
		setData(users);
	}, []);
	return (
		<Navbar bg="white" expand="lg">
			<Container>
				<Link to="/home">
					<Image className="navbar-brand  lgo-img" src={logo} alt="" width={100} height={45} />
				</Link>
				<Navbar.Collapse id="navbarScroll">
					<Nav className="me-auto " style={{ maxHeight: "0px" }} navbarScroll />
					<OverlayTrigger
						trigger="click"
						key="bottom"
						placement="bottom"
						overlay={
							<Popover id="popover-positioned-bottom">
								<Popover.Body>
									<strong>You have new notification</strong>
								</Popover.Body>
							</Popover>
						}
					>
						<Bell className="me-3" />
					</OverlayTrigger>
					<Envelope className="me-3 justify-content-center" />
					{data === "recruiter" ? (
						<Link to="/company">
							<img
								className="navbar-profil justify-content-center ms-2 mt-0"
								src={profil}
								alt=""
								width={25}
								height={25}
							/>
						</Link>
					) : (
						<Link to="/employed">
							<img
								className="navbar-profil justify-content-center ms-2 mt-0"
								src={profil}
								alt=""
								width={25}
								height={25}
							/>
						</Link>
					)}
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Navbar1;
