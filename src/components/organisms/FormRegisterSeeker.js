import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Alert from "sweetalert2";

import { registerRecruiter } from "../../Redux/actions/Auth";

import Picture from "../Molecules/PictureSlide";
import Field from "../Atoms/Field";
import style from "../../Style/Slide.module.css";

function FormRegister() {
	const Navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [password, setPassword] = useState("");
	const [rePassword, setRePassword] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		const field = !name || !email || !phone || !password || !rePassword;
		if (field) {
			Alert.fire({
				icon: "Error",
				text: "All field must be filled!",
			});
		} else if (password !== rePassword) {
			Alert.fire({
				icon: "error",
				tittle: "Incorrect!",
				text: "Incorrect Password",
			});
		} else {
			setLoading(true);
			registerRecruiter({ name, email, phone, password, rePassword })
				.then((res) => {
					Navigate("login");

					Alert.fire({
						icon: "success",
						text: `Register success ${res}`,
					});
				})
				.catch((err) => {
					Alert.fire({
						icon: "error",
						text: `Error! ${err}`,
					});
				})
				.finally(() => {
					setLoading(false);
				});
		}
	};

	return (
		<div className={style.section}>
			<Row>
				<Picture />
				<Col lg="6" className="d-flex justify-content-center">
					<div className="col-10 justify-content-center">
						<div className={style.register}>
							<div className="row">
								<div className="col-12">
									<h2>Halo, Pewpeople</h2>
									<span className="secondary-color description mb-4">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.
									</span>
									<hr className="separator w-100 mb-0 mt-1" />
								</div>
								<div className="col-12 mt-2">
									<Form className="w-100" method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
										<Field
											id="name"
											label="Name"
											placeholder="Masukan nama panjang"
											onChange={(e) => {
												setName(e.target.value);
											}}
										/>
										<Field
											id="email"
											label="Email"
											placeholder="Masukan alamat email"
											onChange={(e) => {
												setEmail(e.target.value);
											}}
										/>
										<Field
											id="phone"
											label="No handphone"
											placeholder="Masukan no hanphone"
											onChange={(e) => {
												setPhone(e.target.value);
											}}
										/>
										<Field
											type="password"
											name="password"
											label="Kata sandi"
											placeholder="Masukan kata sandi"
											autocomplete="new-password"
											onChange={(e) => {
												setPassword(e.target.value);
											}}
										/>
										<Field
											type="password"
											name="rePassword"
											label="Konfirmasi kata sandi"
											placeholder="Masukan konfirmasi kata sandi"
											autocomplete="new-password"
											onChange={(e) => {
												setRePassword(e.target.value);
											}}
										/>
										<Button
											type="submit"
											variant="warning"
											className="w-100 btn-main pt-3 pb-3 mt-3 mb-2"
											isloading={loading}
										>
											Daftar JobSeeker
										</Button>
									</Form>
									<div className="d-flex flex-column">
										<div className="w-100 d-flex justify-content-center align-items-center">
											<span className="alternative">
												Register?{" "}
												<Link to="/register" className="main-color clicked text-decoration-none">
													Masuk disini
												</Link>
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Col>
			</Row>
		</div>
	);
}

export default FormRegister;
