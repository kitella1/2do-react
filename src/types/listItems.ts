export interface ListItemInterface {
	id: string;
	title: string;
	category: CategoriesInterface;
	isComplete: boolean;
}

export type CategoriesInterface =
	| "Chore"
	| "DIY"
	| "Wellness"
	| "Hobby"
	| "Other";
