export interface ListItemInterface {
	id: string;
	content: string;
	category: "Chore" | "DIY" | "Wellness" | "Hobby" | "Other";
	isComplete: boolean;
}

export interface FilterInterface {
	filterType: "category"; // Can be expanded as new filters are needed
	values: string[];
}
