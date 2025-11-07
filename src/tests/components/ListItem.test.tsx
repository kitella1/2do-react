import { render, screen } from "@testing-library/react";
import ListItem from "../../components/ListItems/ListItem";

describe("ListItem.test.tsx", () => {
	const props = {
		id: "item-123",
		title: "Hello world",
		category: "Chore",
		isComplete: false,
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
});
