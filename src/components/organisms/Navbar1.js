import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, Popover, OverlayTrigger, Image } from "react-bootstrap";
import logo from "../../assets/img/logosk.png";
import profil from "../../assets/img/profil.jpg";
import { Bell, Envelope } from "react-bootstrap-icons";
import "../../Style/Navbar.css";
import axios from "../../helpers/axios";

function Navbar1() {
	const users = Cookies.get("type");
	const id = Cookies.get("users");
	const token = Cookies.get("token");
	const [data, setData] = useState("");
	const [notification, setNotification] = useState(null);

	const getNotif = () => {
		axios.get("notification", { headers: { Authorization: `Bearer ${token}` } }).then((res) => {
			setNotification(res.data.results);
		});
	};

	useEffect(() => {
		setData(users);
		getNotif();
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
									{notification?.length > 0 ? (
										notification.map((el) => <strong>{el.purpose}</strong>)
									) : (
										<strong>You dont have notification</strong>
									)}
								</Popover.Body>
							</Popover>
						}
					>
						<Bell className="me-3" />
					</OverlayTrigger>
					<Envelope className="me-3 justify-content-center" />
					{data === "recruiter" ? (
						<Link to={`/company/${id}`}>
							<img
								className="navbar-profil justify-content-center ms-2 mt-0"
								src={profil}
								alt=""
								width={25}
								height={25}
							/>
						</Link>
					) : (
						<Link to={`/employed/${id}`}>
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
