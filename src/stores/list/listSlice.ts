import { createSlice } from "@reduxjs/toolkit";
import { removeDuplicatesFromArray } from "../../utils";

interface ListItem {
	id: string;
	content: string;
	category: string;
	isComplete: boolean;
}

interface Filter {
	filterType: "category"; // Can be expanded as new filters are needed
	values: string[];
}

const counterSlice = createSlice({
	name: "list",
	initialState: {
		list: [
			{ id: "item-1", content: "Walk the dog", isComplete: false },
		] as ListItem[],
		filters: [] as Filter[],
	},
	reducers: {
		addListItem: (state, action: { type: string; payload: ListItem }) => {
			state.list.unshift(action.payload);
		},
		completeListItem: (state, action: { type: string; payload: string }) => {
			const itemToComplete = state.list.findIndex(
				(item) => item.id === action.payload
			);
			state.list[itemToComplete].isComplete = true;
		},
		applyFilter: (state, action: { type: string; payload: Filter }) => {
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

export const { addListItem, completeListItem, applyFilter } =
	counterSlice.actions;
export default counterSlice.reducer;
