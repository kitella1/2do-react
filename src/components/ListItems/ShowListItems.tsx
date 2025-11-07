import { useContext } from "react";
import { type ListItemInterface } from "../../types/listItems";
import ListItem from "./ListItem";
import { ListContext } from "../../reducers/context";

export const ShowListItems = () => {
	const list = useContext(ListContext);
	// const listItemCards = list.map((item: ListItemInterface) => (
	// 	<ListItem
	// 		key={item.id}
	// 		id={item.id}
	// 		text={item.content}
	// 		category={item.category}
	// 		isChecked={item.isComplete}
	// 	/>
	// ));

	return (
		<section className="flex flex-col gap-y-2">
			<h2>Your 2Do List</h2>
			<hr />

			{list?.map((item: ListItemInterface) => (
				<ListItem
					key={item.id}
					id={item.id}
					text={item.content}
					category={item.category}
					isChecked={item.isComplete}
				/>
			))}
			{/* <div className="flex flex-col gap-y-1">{listItemCards}</div> */}
		</section>
	);
};
