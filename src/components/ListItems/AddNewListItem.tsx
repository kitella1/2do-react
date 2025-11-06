import { useState } from "react";
import Button from "../Button";
import Dropdown from "../Dropdown";
import Input from "../Input";

export default function AddNewListItem() {
	const options = ["Chore", "DIY", "Wellness", "Hobby", "Other"];

	const [title, setTitle] = useState("");
	// const [category, setCategory] = useState("Chore");

	function submitForm() {
		console.log(title);
	}
	return (
		<div data-testid="list-item" className={``}>
			<h3>Add new list item</h3>
			<form>
				<Input label="Title" value={title} changeHandler={setTitle} />
				<Dropdown label="Category" options={options} />
				<Button
					text="Submit"
					role="submit"
					style="primary"
					clickHandler={submitForm}
				/>
			</form>
		</div>
	);
}
