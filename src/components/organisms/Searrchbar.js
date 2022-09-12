import React from "react";
import { Container, Navbar, Col, Button, Form } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";

function Searchbar() {
	const sortOption = ["username", "skill", "location", "freelance", "fulltime"];
	// const [sortValue, setSortValue] = React.useState("");

	// const handleSort = () => {
	// 	const {value}= e.target.value;
	// 	setSortValue(value);

	// 	axios.get(`http://localhost:8000/jobseeker?username?_sort=${value}&_order=asc`).then((res) => {
	// 		setData(res.data);
	// 	});
	// };
	return (
		<Col lg={9} className="mx-auto  bg-white border-1">
			<Navbar className="mx-auto  bg-white border-1">
				<Container>
					<Form className="col-9 border-0">
						<Form.Control
							type="search"
							placeholder="Search by any skills"
							className="border-0 bg-transparent mx-3 d-inline searcbar position-relative "
							aria-label="Search"
						/>
					</Form>
					<Navbar.Toggle />
					<Navbar.Collapse className="justify-content-end">
						<div>
							<Search className="d-inline " />
						</div>
						<div className="d-inline vr mx-3" />
						<Form.Select
							aria-label="Sort"
							className="bg-transparrant border-0 d-inline "
							// onChange={handleSort}
							// value={sortValue}
						>
							{sortOption.map((item) => (
								<option value={item} key={item}>
									{item}
								</option>
							))}
						</Form.Select>
						<Button variant="outline-primary button-masuk mx-3 d-inline"

						>Search</Button>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Col>
	);
}

export default Searchbar;
