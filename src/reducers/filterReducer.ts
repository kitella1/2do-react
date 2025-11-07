import { updateFiltersInLocalStorage } from "../scripts/localStorage";
import { removeDuplicatesFromArray } from "../scripts/utils";
import type { CategoriesInterface } from "../types/listItems";

export interface ActionsInterface {
	type: "selected" | "deselected";
	[key: string]: string;
}

export default function listReducer(
	activeFilters: CategoriesInterface[],
	action: ActionsInterface
) {
	switch (action.type) {
		case "selected": {
			const selectedFilters = removeDuplicatesFromArray([
				...activeFilters,
				action.filter,
			]) as CategoriesInterface[];
			updateFiltersInLocalStorage(selectedFilters);
			return selectedFilters;
		}
		case "deselected": {
			const removedFilter = removeDuplicatesFromArray(
				activeFilters.filter((f) => f !== action.filter)
			) as CategoriesInterface[];
			updateFiltersInLocalStorage(removedFilter);
			return removedFilter;
		}
		default: {
			new Error("No action found.");
		}
	}
}
