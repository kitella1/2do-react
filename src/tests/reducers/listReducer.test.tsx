import listReducer from "../../reducers/listReducer";
import type { ListItemInterface } from "../../types/listItems";

describe("listReducer.test.tsx", () => {
	const initialListItems = [
		{
			id: "item-1",
			title: "Walk the dog",
			category: "Wellness",
			isComplete: false,
		},
		{
			id: "item-2",
			title: "Feed the cat",
			category: "Chore",
			isComplete: true,
		},
	] as ListItemInterface[];

	it("Add new list item", () => {
		const newListItem = {
			id: "item-78",
			category: "wellness",
			title: "45 minute weightlifting",
			isComplete: false,
		};

		const newList = listReducer(initialListItems, {
			type: "added",
			...newListItem,
		});

		expect(newList).toStrictEqual([newListItem, ...initialListItems]);
	});

	it("Add new list item", () => {
		const newList = listReducer(initialListItems, {
			type: "toggled",
			id: "item-1",
			isComplete: true,
		});

		expect(newList[0].isComplete).toBe(true);
	});
});
