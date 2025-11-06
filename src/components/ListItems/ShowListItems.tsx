import { useAppSelector } from "../../stores/hooks";
import { type ListItemInterface } from "../../types/listItems";
import ListItem from "./ListItem";

export const ShowListItems = () => {
	const list = useAppSelector(
		(state) => state.list.listItems
	) as ListItemInterface[];

	const listItemCards = list.map((item) => (
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
			<div className="flex flex-col gap-y-1">{listItemCards}</div>
		</section>
	);
};
