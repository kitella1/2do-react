import { useState } from "react";
import { useAppDispatch } from "../../stores/hooks";
import { addListItem } from "../../stores/list/listSlice";
import Button from "../Button";
import Dropdown from "../Dropdown";
import Input from "../Input";

export default function AddNewListItem() {
	const dispatch = useAppDispatch();
	const options = ["Chore", "DIY", "Wellness", "Hobby", "Other"];

	const [title, setTitle] = useState("");
	const [category, setCategory] = useState(
		"Chore" as "Chore" | "DIY" | "Wellness" | "Hobby" | "Other"
	);

	function submitForm() {
		const newListItem = {
			id: `item-${Math.random()}`,
			content: title,
			category,
			isComplete: false,
		};
		dispatch(addListItem(newListItem));
		clearForm();
	}

	function clearForm() {
		setTitle("");
	}
	return (
		<div data-testid="list-item" className={``}>
			<h3>Add new list item</h3>
			<form className="flex flex-col gap-2 w-full md:flex-row md:justify-between md:items-end">
				<Input label="Title" value={title} changeHandler={setTitle} />
				<Dropdown
					label="Category"
					options={options}
					changeHandler={setCategory}
				/>
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
