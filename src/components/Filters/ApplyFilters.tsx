import { useContext, useState, type ChangeEvent } from "react";
import { ListDispatchContext } from "../../reducers/context";
import { removeDuplicatesFromArray } from "../../utils";

export default function ApplyFilters() {
	// const dispatch = useContext(ListDispatchContext);

	const options = ["Chore", "DIY", "Wellness", "Hobby", "Other"];
	const [filters, setFilters] = useState([] as string[]);

	// TODO: Store in localStorage
	// TODO: check for value on page load
	// TODO: Ensure all types/checks around category are all kebab-case outside of the display value

	function filtersChanged(e: ChangeEvent<HTMLInputElement>) {
		if (e.target.checked) {
			const currentFilters = filters;
			currentFilters.push(e.target.value);
			setFilters(removeDuplicatesFromArray(currentFilters));
		} else {
			const removedFilter = filters.filter((f) => f !== e.target.value);
			setFilters(removeDuplicatesFromArray(removedFilter));
		}
	}

	const checkboxes = options.map((option) => (
		<label key={option} className="text-xs flex items-center uppercase gap-x-1">
			<input type="checkbox" value={option} onChange={filtersChanged} />
			{option}
		</label>
	));

	return (
		<div data-testid="list-item" className="py-4">
			<h3 className="">Filters</h3>
			<form className="flex w-full md:flex-row justify-between md:items-end mt-2">
				{checkboxes}
			</form>
		</div>
	);
}
