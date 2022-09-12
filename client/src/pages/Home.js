import React from "react";
import { Row, Col,  } from "react-bootstrap";

// import userdata from "../components/organisms/userdummy";
import Datacard from "../components/organisms/UserData";

import Navbar1 from "../components/organisms/Navbar1";
// import Searchbar from "../components/organisms/Searrchbar";
import Footer from "../components/organisms/Footer";
import Slidepagination from "../components/Molecules/Slidepagination";
// import { Search } from "react-bootstrap-icons";
// import userdata from "../components/organisms/userdummy";

function App() {
	// const [searchData, setSearchData] = React.useState("");
	// const search = (data) => {
	// 	return data.filter((item) => item.username.toLowerCase().includes(searchData));
	// };

	return (
		<div className="App">
			<Navbar1 />
			<Row className="background px-3 txt-light">
				<Col lg={10} className="mx-auto text-light py-2">
					<h3 className="">Top Jobs</h3>
				</Col>
			</Row>
			<br /> <br />
			{/* <Col lg={9} className="mx-auto  bg-light">
				<Navbar bg="white shadow-lg" expand="lg" placeholder="Search">
					<Form className=" outline-none">
						<Form.Control
							type="search"
							placeholder="Search"
							className="bg-transparent border-0 mx-3"
							aria-label="Search"
							// onChange={(e) => setSearchData(e.target.value)}
							// onChange={(e)=>{setSearchSkill(e.target.value)}}
						/>
					</Form>
					<Navbar.Collapse id="navbarScroll">
						<Nav className="mx-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll />
						<Search className="mx-3" />
						<NavDropdown title="Sort" id="nav-dropdown" className="mx-2">
							<NavDropdown.Item eventKey="4.1">filter</NavDropdown.Item>
							<NavDropdown.Item eventKey="4.2">filter</NavDropdown.Item>
							<NavDropdown.Item eventKey="4.3">filter</NavDropdown.Item>
						</NavDropdown>
						<Button variant="outline-primary button-masuk mx-2">Search</Button>
					</Navbar.Collapse>
				</Navbar>
			</Col> */}
			<br />
			<Datacard />
			{/* <Datacard data={search(userData)} className="mb-5 " /> */}
			<Slidepagination />
			<Footer />
		</div>
	);
}

export default App;
