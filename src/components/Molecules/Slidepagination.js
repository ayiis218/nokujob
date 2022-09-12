import React from "react";
import { Pagination } from "react-bootstrap";

function Slidepagination() {
	return (
		<div className="pagination justify-content-center mt-5 mb-5">
			<Pagination.Prev />
			<Pagination.Item className="pagination mx-1">1</Pagination.Item>
			<Pagination.Item className="pagination mx-1">2</Pagination.Item>
			<Pagination.Item className="pagination mx-1">3</Pagination.Item>
			<Pagination.Item className="pagination mx-1">4</Pagination.Item>
			<Pagination.Item className="pagination mx-1">5</Pagination.Item>
			<Pagination.Next />
		</div>
	);
}

export default Slidepagination;
