interface ButtonProps {
	text: string;
	style: "primary" | "accent" | "warning";
	role: string;
	clickHandler?: () => unknown;
}

export default function Button({
	text,
	style,
	role = "button",
	clickHandler = undefined,
}: ButtonProps) {
	function buttonStyles() {
		switch (style) {
			case "warning":
				return "bg-primary-red";
			case "accent":
				return "bg-secondary-accent";
			default:
				return "bg-linear-to-r from-primary-blue to-secondary-blue";
		}
	}

	return (
		<button
			className={
				buttonStyles() +
				" p-2 py-2 rounded-sm max-w-max uppercase font-semibold text-xs md:text-base tracking-wide hover:scale-105 transition-all hover:brightness-110"
			}
			role={role}
			onClick={clickHandler}
			data-testid="button"
		>
			{text}
		</button>
	);
}
