import { removeDuplicatesFromArray } from "../scripts/utils";

export interface ActionsInterface {
	type: "selected" | "deselected";
	[key: string]: any;
}

export default function listReducer(
	activeFilters: string[],
	action: ActionsInterface
) {
	switch (action.type) {
		case "selected": {
			return removeDuplicatesFromArray([...activeFilters, action.filter]);
		}
		case "deselected": {
			const removedFilter = activeFilters.filter((f) => f !== action.filter);
			return removeDuplicatesFromArray(removedFilter);
		}
		default: {
			new Error("No action found.");
		}
	}
}
