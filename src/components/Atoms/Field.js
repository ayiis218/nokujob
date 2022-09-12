import React from "react";
import { Form } from "react-bootstrap";

function Field(props) {
	const {
		placeholder: Placeholder,
		label: Label,
		type: Type,
		id: Id,
		name: Name,
		value: Value,
		onChange: OnChange,
	} = props;

	return (
		<Form.Group className="mb-3">
			<Form.Label>{Label}</Form.Label>
			<Form.Control
				id={Id}
				name={Name}
				type={Type}
				placeholder={Placeholder}
				value={Value}
				onChange={OnChange}
				required
			/>
		</Form.Group>
	);
}

export default Field;
