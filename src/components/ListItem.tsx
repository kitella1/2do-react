import type { ChangeEvent } from "react";

interface ListItemProps {
	id: string;
	text: string;
}

export default function ListItem({ id, text }: ListItemProps) {
	function listItemChecked(e: ChangeEvent<HTMLInputElement>) {
		if (e.target.value) {
			console.log("Checked!", id);
		} else {
			console.log("Unchcked!", id);
		}
	}
	return (
		<div className="w-full bg-gray-400 rounded-lg p-4 block relative">
			<label className="flex items-center gap-x-2">
				<input
					type="checkbox"
					className="checked:line-through"
					onChange={listItemChecked}
				/>
				{text}
			</label>
		</div>
	);
}
