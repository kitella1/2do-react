import type { ChangeEvent } from "react";
import { convertToKebabCase } from "../scripts/utils";

interface DropdownProps {
	label: string;
	// The key will be used as the value
	options: string[];
	selectedOption: string;
	changeHandler: (value: any) => unknown;
}

export default function Dropdown({
	label,
	options,
	selectedOption,
	changeHandler,
}: DropdownProps) {
	const selectItems = options.map((option) => (
		<option
			key={convertToKebabCase(option)}
			data-testid={convertToKebabCase(option)}
			value={convertToKebabCase(option)}
			className="bg-white text-gray-950"
			selected={
				convertToKebabCase(selectedOption) === convertToKebabCase(option) ||
				undefined
			}
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
			className="flex flex-col uppercase text-xs md:text-base font-semibold tracking-wide gap-y-1 relative min-w-72 w-full"
		>
			{label}
			<select
				data-testid="select"
				className="max-w-80 md:max-w-96 border rounded-xs md:rounded-sm border-white placeholder:text-sm placeholder:text-gray-950/40 placeholder:align-top font-normal p-1 bg-gray-50 text-gray-950"
				onChange={(e) => getSelectedValue(e)}
			>
				{selectItems}
			</select>
		</label>
	);
}
