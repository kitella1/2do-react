import { render, screen } from "@testing-library/react";
import Input from "../../components/Input";

describe("Input.test.tsx", () => {
	const props = {
		label: "Input label",
		placeholder: "Placeholder text",
	} as const;

	it("renders input and label", () => {
		render(<Input {...props} />);

		const label = screen.queryByTestId("label");
		const input = screen.queryByTestId("input");
		expect(label).toBeInTheDocument();
		expect(input).toBeInTheDocument();
	});

	it("renders label text", () => {
		render(<Input {...props} />);

		const label = screen.queryByTestId("label");
		expect(label?.textContent).toBe(props.label);
	});

	it("renders placeholder text", () => {
		render(<Input {...props} />);

		const input = screen.queryByTestId("input");
		expect(input?.getAttribute("placeholder")).toBe(props.placeholder);
	});
});
