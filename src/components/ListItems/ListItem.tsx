import { useContext, type ChangeEvent } from "react";
import { ListDispatchContext } from "../../reducers/context";
import type { CategoriesInterface } from "../../types/listItems";

interface ListItemProps {
	id: string;
	title: string;
	isChecked: boolean;
	category: CategoriesInterface;
}

export default function ListItem({
	id,
	title,
	category,
	isChecked,
}: ListItemProps) {
	const dispatch = useContext(ListDispatchContext);

	async function toggleListItem(e: ChangeEvent<HTMLInputElement>) {
		dispatch({
			type: "toggled",
			id,
			isComplete: e.target.checked,
		});
	}

	return (
		<div
			data-testid="list-item"
			className={`w-full  border rounded-lg p-4 flex flex-col gap-x-2 transition-all duration-200
			${
				isChecked
					? "bg-emerald-700/10 border-emerald-200/20"
					: "bg-gray-400/20 border-white/20"
			}
			`}
		>
			<span className="flex uppercase font-extrabold leading-3 tracking-wider text-[8px]">
				{category}
			</span>
			<span className="flex gap-2">
				<input
					data-testid="checkbox"
					role="checkbox"
					id={id}
					type="checkbox"
					checked={isChecked}
					onChange={toggleListItem}
				/>
				<label
					data-testid="label"
					htmlFor={id}
					className={isChecked ? "line-through" : "no-underline"}
				>
					{title}
				</label>
			</span>
		</div>
	);
}
