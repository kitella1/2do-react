import { render, screen } from "@testing-library/react";
import Dropdown from "../../components/Dropdown";

describe("Dropdown.test.tsx", () => {
	const props = {
		label: "Book title",
		defaultValue: "Jurassic Park",
		selectedOption: "Pride and Prejudice",
		options: [
			"Pride and Prejudice",
			"Jurassic Park",
			"Dune",
			"How to Train Your Dragon",
		],
	};

	it("renders select and label", () => {
		render(<Dropdown {...props} />);

		const label = screen.queryByTestId("label");
		const select = screen.queryByTestId("select");
		expect(label).toBeInTheDocument();
		expect(select).toBeInTheDocument();
	});

	it("renders label text", () => {
		render(<Dropdown {...props} />);

		const label = screen.queryByTestId("label");
		expect(label?.textContent).toContain(props.label);
	});

	it("renders the correct number of options", () => {
		const { container } = render(<Dropdown {...props} />);

		const options = container.querySelectorAll("option");
		expect(options.length).toBe(props.options.length);
	});
});
