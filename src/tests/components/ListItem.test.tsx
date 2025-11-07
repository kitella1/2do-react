import { fireEvent, render, screen } from "@testing-library/react";
import ListItem from "../../components/ListItems/ListItem";

describe("ListItem.test.tsx", () => {
	const props = {
		id: "item-123",
		text: "Hello world",
	} as const;

	it("renders listitem", () => {
		render(<ListItem {...props} />);

		const listItem = screen.queryByTestId("list-item");
		expect(listItem).toBeInTheDocument();
	});

	it("renders checkbox", () => {
		render(<ListItem {...props} />);

		const checkbox = screen.queryByTestId("checkbox");
		expect(checkbox).toBeInTheDocument();
	});

	it("renders text", () => {
		render(<ListItem {...props} />);

		const label = screen.queryByTestId("label");
		expect(label).toBeInTheDocument();
		expect(label?.textContent).toContain(props.text);
	});

	it("card is re-styled based on state", () => {
		render(<ListItem {...props} />);

		const listItem = screen.queryByTestId("list-item");
		const label = screen.queryByTestId("label");

		expect(listItem?.getAttribute("class")).toContain(
			"bg-gray-400/20 border-white/20"
		);
		expect(label?.getAttribute("class")).toContain("no-underline");

		const checkbox = screen.getByRole("checkbox");
		fireEvent.click(checkbox);
		expect(listItem?.getAttribute("class")).toContain(
			"bg-emerald-700/10 border-emerald-200/20"
		);
		expect(label?.getAttribute("class")).toContain("line-through");
	});
});
