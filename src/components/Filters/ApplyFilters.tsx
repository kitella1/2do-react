import { useContext, type ChangeEvent } from "react";
import { FiltersDispatchContext } from "../../reducers/context";
import { convertToKebabCase } from "../../scripts/utils";
// TODO: Check for commented out code

export default function ApplyFilters() {
	const dispatch = useContext(FiltersDispatchContext);

	const options = ["Chore", "DIY", "Wellness", "Hobby", "Other"];

	// TODO: Ensure all types/checks around category are all kebab-case outside of the display value

	function filtersChanged(e: ChangeEvent<HTMLInputElement>) {
		if (e.target.checked) {
			dispatch({
				type: "selected",
				filter: e.target.value,
			});
		} else {
			dispatch({
				type: "deselected",
				filter: e.target.value,
			});
		}
	}

	const checkboxes = options.map((option) => (
		<label
			key={convertToKebabCase(option)}
			className="text-xs md:text-lg md:tracking-wider flex items-center uppercase gap-x-1"
		>
			<input
				type="checkbox"
				value={convertToKebabCase(option)}
				onChange={filtersChanged}
			/>
			{option}
		</label>
	));

	return (
		<div data-testid="list-item" className="py-4">
			<h3 className="">Filters</h3>
			<form className="flex w-full md:flex-row justify-between md:justify-start md:gap-x-4 md:items-end mt-2">
				{checkboxes}
			</form>
		</div>
	);
}
