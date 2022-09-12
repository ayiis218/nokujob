import React, { useState } from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import alert from "sweetalert2";
import { login } from "../../Redux/actions/Auth";
import style from "../../Style/Slide.module.css";
import Picture from "../Molecules/PictureSlide";
// import Field from "../Atoms/Field";

function FormLogin() {
	const Navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!email || !password) {
			alert.fire({
				title: "Error!",
				text: "All field must be filled!",
				icon: "error",
			});
		} else {
			setLoading(true);
			login({ email, password })
				.then((res) => {
					Cookies.set("token", res?.data?.token);
					const tkn = res?.data?.token;
					if (tkn === undefined) {
						alert.fire({
							title: "Failed!",
							text: `Cek Email`,
							icon: "error",
						});
					} else {
						alert.fire({
							title: "Success!",
							text: "Login Success",
							icon: "success",
						});
						Navigate("/home");
					}
				})
				.catch((err) => {
					alert.fire({
						title: "Failed!",
						text: `Cek password ${err.message}`,
						icon: "error",
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
						<div className={style.left}>
							<div className="row">
								<div className="col-12">
									<h2>Halo, Pewpeople</h2>
									<span className="secondary-color description mb-4">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.
									</span>
									<hr className="separator w-100 mb-0 mt-1" />
								</div>
								<div className="col-12 mt-5">
									<Form className="w-100" method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
										<FormGroup className="mb-3">
											<Label for="email" className="mb-2 label">
												E-mail
											</Label>
											<Input
												type="email"
												placeholder="examplexxx@gmail.com"
												id="email"
												className="form-control pt-3 pb-3 pl-3 pr-0 input-auth"
												onChange={(e) => setEmail(e.target.value)}
												required
											/>
										</FormGroup>
										<FormGroup className="mb-1">
											<Label for="password" className="mb-2 label">
												Password
											</Label>
											<Input
												type="password"
												placeholder="Password"
												id="password"
												className="form-control pt-3 pb-3 pl-3 pr-0 input-auth"
												onChange={(e) => setPassword(e.target.value)}
												required
											/>
										</FormGroup>
										<div className="w-100 d-flex justify-content-end mb-3">
											<Link to="/auth/forgot" className="forgot">
												Lupa kata sandi?
											</Link>
										</div>

										{loading ? (
											<Button className="w-100 btn-main pt-3 pb-3" disabled>
												{" "}
												Loading..
												<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
											</Button>
										) : (
											<Button type="submit" className="w-100 btn-main pt-3 pb-3">
												Login
											</Button>
										)}
									</Form>
									<div className="w-100 d-flex flex-column mt-2">
										<div className="w-100 d-flex justify-content-center align-items-center">
											<span className="alternative">
												Anda belum punya akun?
												<Link to="/register" className="main-color clicked text-decoration-none">
													Daftar disini
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

export default FormLogin;
