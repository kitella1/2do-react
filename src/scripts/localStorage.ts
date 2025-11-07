import type {
	CategoriesInterface,
	ListItemInterface,
} from "../types/listItems";

export function updateListInLocalStorage(list: ListItemInterface[]) {
	localStorage.setItem("listItems", JSON.stringify(list));
}

export function getListFromLocalStorage() {
	const lsList = localStorage.getItem("listItems");
	return lsList === null ? [] : JSON.parse(lsList);
}

export function updateFiltersInLocalStorage(filters: CategoriesInterface[]) {
	localStorage.setItem("activeFilters", JSON.stringify(filters));
}

export function getFiltersFromLocalStorage() {
	const lsFilters = localStorage.getItem("activeFilters");
	return lsFilters === null ? [] : JSON.parse(lsFilters);
}
