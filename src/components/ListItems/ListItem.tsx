import { useState, type ChangeEvent } from "react";

interface ListItemProps {
	id: string;
	text: string;
}

export default function ListItem({ id, text }: ListItemProps) {
	const [isChecked, setIsChecked] = useState(false);

	function listItemChecked(e: ChangeEvent<HTMLInputElement>) {
		if (e.target.value) {
			console.log("Checked!", id);
		} else {
			console.log("Unchecked!", id);
		}
		setIsChecked(!isChecked);
	}

	return (
		<div
			data-testid="list-item"
			className={`w-full  border rounded-lg p-4 flex gap-x-2 transition-all duration-200
			${
				isChecked
					? "bg-emerald-700/10 border-emerald-200/20"
					: "bg-gray-400/20 border-white/20"
			}
			`}
		>
			<input
				data-testid="checkbox"
				role="checkbox"
				id={id}
				type="checkbox"
				onChange={listItemChecked}
			/>
			<label
				data-testid="label"
				htmlFor={id}
				className={`flex items-center gap-x-2 ${
					isChecked ? "line-through" : "no-underline"
				}`}
			>
				{text}
			</label>
		</div>
	);
}
