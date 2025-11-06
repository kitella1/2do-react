import type { ChangeEvent } from "react";
import { convertToKebabCase } from "../utils";

interface DropdownProps {
	label: string;
	// The key will be used as the value
	options: string[];
	changeHandler: (value: any) => unknown;
}

export default function Dropdown({
	label,
	options,
	changeHandler,
}: DropdownProps) {
	const selectItems = options.map((option) => (
		<option
			key={convertToKebabCase(option)}
			data-testid={convertToKebabCase(option)}
			value={convertToKebabCase(option)}
			className="bg-white text-gray-950"
		>
			{option}
		</option>
	));

	function getSelectedValue(event: ChangeEvent<HTMLSelectElement>) {
		const value = event.target.value;
		changeHandler(value);
	}

	return (
		<label
			data-testid="label"
			className="flex flex-col uppercase text-xs md:text-base font-semibold tracking-wide gap-y-1 relative"
		>
			{label}
			<select
				data-testid="select"
				className="w-full max-w-80 md:max-w-96 border rounded-xs md:rounded-sm border-white placeholder:text-sm placeholder:text-gray-950/40 placeholder:align-top font-normal p-1 bg-gray-50 text-gray-950"
				onChange={(e) => getSelectedValue(e)}
			>
				{selectItems}
			</select>
		</label>
	);
}
