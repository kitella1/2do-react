import type { ListItemInterface } from "../types/listItems";

interface ActionsInterface {
	type: "added" | "toggled";
	[key: string]: any;
}

export default function listReducer(
	listItems: any[],
	action: ActionsInterface
) {
	switch (action.type) {
		case "added": {
			const newItem = {
				id: action.id,
				category: action.category,
				content: action.content,
				isComplete: false,
			} as ListItemInterface;
			console.log(listItems, " & ", newItem);
			return listItems.unshift(newItem);
		}
		case "toggled": {
			const itemToComplete = listItems.findIndex(
				(item) => item.id === action.id
			);
			return (listItems[itemToComplete].isComplete = action.isComplete);
		}
		default: {
			throw Error("Unknown action: " + action.type);
		}
	}
}
