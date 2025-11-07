import { updateListInLocalStorage } from "../scripts/localStorage";
import type { ListItemInterface } from "../types/listItems";

export interface ActionsInterface {
	type: "added" | "toggled";
	[key: string]: unknown;
}

export default function listReducer(
	listItems: ListItemInterface[],
	action: ActionsInterface
) {
	switch (action.type) {
		case "added": {
			const newItem = {
				// TODO: Rename isChecked to isComplete
				id: action.id,
				category: action.category,
				title: action.title,
				isComplete: false,
			} as ListItemInterface;
			const updatedList = [{ ...newItem }, ...listItems];

			updateListInLocalStorage(updatedList);
			return updatedList;
		}
		case "toggled": {
			const updatedList = listItems.map((item) => {
				if (item.id === action.id) {
					return {
						...item,
						isComplete: action.isComplete,
					};
				} else {
					return item;
				}
			}) as ListItemInterface[];
			const sortedList = sortListByIncomplete(updatedList);
			updateListInLocalStorage(sortedList);
			return sortedList;
		}
		default: {
			new Error("No action found.");
		}
	}
}

function sortListByIncomplete(list: ListItemInterface[]) {
	return list.sort((a, b) => {
		if (a.isComplete && !b.isComplete) {
			return 1;
		} else if (!a.isComplete && b.isComplete) {
			return -1;
		} else {
			return 0;
		}
	});
}
