import { useContext, useState } from "react";
import Button from "../Button";
import Dropdown from "../Dropdown";
import Input from "../Input";
import type {
	CategoriesInterface,
	ListItemInterface,
} from "../../types/listItems";
import { ListDispatchContext } from "../../reducers/context";
import {
	getCategorySelectionFromLocalStorage,
	updateCategorySelectionInLocalStorage,
} from "../../scripts/localStorage";

export default function AddNewListItem() {
	const dispatch = useContext(ListDispatchContext);

	const [title, setTitle] = useState("");

	const options = ["Chore", "DIY", "Wellness", "Hobby", "Other"];

	// TODO: Store in localStorage
	// TODO: check for value on page load
	const [category, setCategory] = useState(
		getCategorySelectionFromLocalStorage()
	);

	function changeCategory(category: CategoriesInterface) {
		setCategory(category);
		updateCategorySelectionInLocalStorage(category);
	}

	function submitForm() {
		if (title.trim().length !== 0) {
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
					selectedOption={getCategorySelectionFromLocalStorage()}
					changeHandler={changeCategory}
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
