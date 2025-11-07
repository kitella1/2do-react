import { useContext, useEffect, useRef, useState } from "react";
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
	const childInputRef = useRef<HTMLInputElement>(null);
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
			focusInput();
			clearForm();
		}
	}

	useEffect(() => {
		focusInput();
	}, []);

	function focusInput() {
		childInputRef.current?.focus();
	}

	function clearForm() {
		setTitle("");
	}
	return (
		<div data-testid="list-item">
			<h3>Add new list item</h3>
			<form className="flex flex-col gap-2 w-full md:flex-row md:justify-between md:items-end mt-3">
				<Input
					label="Title"
					value={title}
					changeHandler={setTitle}
					ref={childInputRef}
				/>
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
