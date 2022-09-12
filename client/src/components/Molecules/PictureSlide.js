import React from "react";
import { Col } from "react-bootstrap";
// import { Link } from 'react-router-dom';
import styles from "../../Style/Slide.module.css";

import AuthStyles from "../../assets/styles/AuthStyles";

import background from "../../assets/icons/Authpict.png";
import peworld from "../../assets/icons/icon1.png";
import WaveLeft from "../../assets/icons/wave-left.svg";
import WaveRight from "../../assets/icons/wave-right.svg";

function Picture() {
	return (
		<>
			<AuthStyles />
			<Col lg="6" md="4" className="position-relative d-none d-md-block p-0">
				<div className={styles.img}>
					<img src={background} alt="background" />
				</div>
				<div className="mask h-100 w-100">
					<div className={styles.content}>
						<div className={styles.images}>
							<img src={peworld} alt="Peworld Hire" height={30} />
						</div>
						<div className={styles.banner}>
							<h1>Temukan developer berbakat & terbaik di berbagaibidang keahlian</h1>
						</div>
					</div>
					<div className={styles.left_wave}>
						<img src={WaveLeft} alt="Icon" className="img-cover" />
					</div>
					<div className={styles.right_wave}>
						<img src={WaveRight} alt="Icon" className="img-cover" />
					</div>
				</div>
			</Col>
		</>
	);
}

export default Picture;
