import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { removeDuplicatesFromArray } from "../../utils";
import {
	type ListItemInterface,
	type FilterInterface,
} from "../../types/listItems";

const counterSlice = createSlice({
	name: "list",
	initialState: {
		listItems: [
			{
				id: "item-1",
				content: "Walk the dog",
				category: "chore",
				isComplete: false,
			},
			{
				id: "item-2",
				content: "Feed the cat",
				category: "chore",
				isComplete: true,
			},
			{
				id: "item-3",
				content: "15 minute yoga",
				category: "wellness",
				isComplete: false,
			},
			{
				id: "item-4",
				content: "Paint bathroom wall",
				category: "DIY",
				isComplete: false,
			},
		] as ListItemInterface[],
		filters: [] as FilterInterface[],
	},
	reducers: {
		addListItem: (
			state,
			action: { type: string; payload: ListItemInterface }
		) => {
			state.listItems.unshift(action.payload);
		},
		changeListItemState: (
			state,
			action: PayloadAction<{ id: string; isComplete: boolean }>
		) => {
			const itemToComplete = state.listItems.findIndex(
				(item) => item.id === action.payload.id
			);
			state.listItems[itemToComplete].isComplete = action.payload.isComplete;
		},
		applyFilter: (
			state,
			action: { type: string; payload: FilterInterface }
		) => {
			const filterAlreadyActive = state.filters.findIndex(
				(item) => item.filterType === action.payload.filterType
			);
			// if already filtering by that filter type
			if (filterAlreadyActive) {
				const allFiltersForType = state.filters[
					filterAlreadyActive
				].values.concat(action.payload.values);
				state.filters[filterAlreadyActive].values =
					removeDuplicatesFromArray(allFiltersForType);
			} else {
				state.filters.push(action.payload);
			}
		},
	},
});

export const { addListItem, changeListItemState, applyFilter } =
	counterSlice.actions;
export default counterSlice.reducer;
