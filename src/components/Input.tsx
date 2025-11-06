interface InputProps {
	label: string;
	placeholder?: string;
	value: string;
	changeHandler: (value: string) => unknown;
}

export default function Input({
	placeholder = "Enter text here...",
	label,
	value = "",
	changeHandler,
}: InputProps) {
	return (
		<label
			data-testid="label"
			className="flex flex-col uppercase text-xs md:text-base font-semibold tracking-wide gap-y-1 relative"
		>
			{label}
			<input
				data-testid="input"
				type="text"
				className="w-full max-w-80 md:max-w-96 border rounded-xs md:rounded-sm border-white placeholder:text-sm placeholder:text-gray-950/40 placeholder:align-top font-normal p-1 bg-gray-50 text-gray-950"
				placeholder={placeholder}
				value={value}
				onChange={(e) => changeHandler(e.target.value)}
			/>
		</label>
	);
}
