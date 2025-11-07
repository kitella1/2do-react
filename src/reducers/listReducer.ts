import { updateListInLocalStorage } from "../scripts/localStorage";
import type { ListItemInterface } from "../types/listItems";

export interface ActionsInterface {
	type: "added" | "toggled";
	[key: string]: any;
}

export default function listReducer(
	listItems: ListItemInterface[],
	action: ActionsInterface
) {
	switch (action.type) {
		case "added": {
			const newItem = {
				// TODO: Rename content to title
				// TODO: Rename isChecked to isComplete
				id: action.id,
				category: action.category,
				content: action.content,
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
			});
			updateListInLocalStorage(updatedList);
			return updatedList;
		}
		default: {
			new Error("No action found.");
		}
	}
}
