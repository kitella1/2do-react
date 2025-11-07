export interface ListItemInterface {
	id: string;
	content: string;
	category: CategoriesInterface;
	isComplete: boolean;
}

export type CategoriesInterface =
	| "Chore"
	| "DIY"
	| "Wellness"
	| "Hobby"
	| "Other";
