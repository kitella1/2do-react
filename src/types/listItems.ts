export interface ListItemInterface {
	id: string;
	content: string;
	category: string;
	isComplete: boolean;
}

export interface FilterInterface {
	filterType: "category"; // Can be expanded as new filters are needed
	values: string[];
}
