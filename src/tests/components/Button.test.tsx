import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../../components/Button";

describe("Button.test.tsx", () => {
	const props = {
		text: "Hello world",
		style: "primary",
		role: "button",
		clickHandler: () => {
			console.log("Bonjour");
		},
	} as const;

	it("renders button", () => {
		render(<Button {...props} />);

		const button = screen.queryByTestId("button");
		expect(button).toBeInTheDocument();
	});

	it("renders text", () => {
		render(<Button {...props} />);

		const button = screen.queryByTestId("button");
		expect(button?.textContent).toBe(props.text);
	});

	it("sets role", () => {
		render(<Button {...props} />);

		const button = screen.queryByTestId("button");
		expect(button?.getAttribute("role")).toBe(props.role);
	});

	it("sets primary styles", () => {
		render(<Button {...props} />);

		const button = screen.queryByTestId("button");
		expect(button?.getAttribute("class")).toContain(
			"bg-linear-to-r from-primary-blue to-secondary-blue"
		);
	});

	it("sets secondary styles", () => {
		render(<Button {...props} style="accent" />);

		const button = screen.queryByTestId("button");
		expect(button?.getAttribute("class")).toContain("bg-secondary-accent");
	});

	it("sets warning styles", () => {
		render(<Button {...props} style="warning" />);

		const button = screen.queryByTestId("button");
		expect(button?.getAttribute("class")).toContain("bg-primary-red");
	});

	it("calls parent function", () => {
		render(<Button {...props} />);
		const logSpy = vi.spyOn(console, "log");

		const button = screen.getByRole("button");
		fireEvent.click(button);

		expect(logSpy).toHaveBeenCalledWith("Bonjour");
	});
});
