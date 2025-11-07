import { useContext, useState } from "react";
import Button from "../Button";
import Dropdown from "../Dropdown";
import Input from "../Input";
import type { ListItemInterface } from "../../types/listItems";
import { ListDispatchContext } from "../../reducers/context";

export default function AddNewListItem() {
	const dispatch = useContext(ListDispatchContext);

	const [title, setTitle] = useState("");

	const options = ["Chore", "DIY", "Wellness", "Hobby", "Other"];
	const [category, setCategory] = useState(
		"Chore" as "Chore" | "DIY" | "Wellness" | "Hobby" | "Other"
	);

	// TODO: Store in localStorage
	// TODO: check for value on page load

	function submitForm() {
		const newListItem = {
			id: `item-${Math.random() + 1}`,
			content: title,
			category,
			isComplete: false,
		} as ListItemInterface;
		dispatch({
			type: "added",
			...newListItem,
		});
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
