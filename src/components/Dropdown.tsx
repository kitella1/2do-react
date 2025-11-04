import { convertToKebabCase } from "../utils";

interface DropdownProps {
	label: string;
	defaultValue: string;
	// The key will be used as the value
	options: string[];
}

export default function Dropdown({
	label,
	defaultValue,
	options,
}: DropdownProps) {
	const selectItems = options.map((option) => (
		<option
			value={convertToKebabCase(option)}
			selected={defaultValue === option}
			className="bg-white text-gray-950"
		>
			{option}
		</option>
	));

	return (
		<label
			data-testid="label"
			className="flex flex-col uppercase text-xs md:text-base font-semibold tracking-wide gap-y-1 relative"
		>
			{label}
			<select className="w-full max-w-80 md:max-w-96 border rounded-xs md:rounded-sm border-white placeholder:text-sm placeholder:text-gray-950/40 placeholder:align-top font-normal p-1 bg-gray-50 text-gray-950">
				{selectItems}
			</select>
		</label>
	);
}
