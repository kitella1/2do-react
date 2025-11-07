import { useContext } from "react";
import { type ListItemInterface } from "../../types/listItems";
import ListItem from "./ListItem";
import { ListContext, FiltersContext } from "../../reducers/context";

export default function ShowListItems() {
	const list = useContext(ListContext);
	const filters = useContext(FiltersContext);

	const listItemsToDisplay = list.filter((item) => {
		return filters.some((activeFilter) => {
			return item.category.toLowerCase() === activeFilter.toLowerCase();
		});
	});

	const listItemCards = listItemsToDisplay.map((item: ListItemInterface) => (
		<ListItem
			key={item.id}
			id={item.id}
			text={item.content}
			category={item.category}
			isChecked={item.isComplete}
		/>
	));

	return (
		<section className="flex flex-col gap-y-2">
			<h2>Your 2Do List</h2>
			<hr />
			<div className="flex flex-col gap-y-1 overflow-y-scroll">
				{listItemCards}
			</div>
		</section>
	);
}
