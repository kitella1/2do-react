export interface ListItemInterface {
	id: string;
	content: string;
	category: CategoriesInterface;
	isComplete: boolean;
}

// TODO: Update uses with this interfaces
export type CategoriesInterface =
	| "Chore"
	| "DIY"
	| "Wellness"
	| "Hobby"
	| "Other";
