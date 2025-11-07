import { render, screen, fireEvent } from "@testing-library/react";
import AddNewListLitem from "../../../components/ListItems/AddNewListItem";
import { ListContext } from "../../../reducers/context";
import type { ListItemInterface } from "../../../types/listItems";

const dispatchMock = vi.fn();

const initialListItems = [
	{
		id: "item-1",
		title: "Walk the dog",
		category: "Wellness",
		isComplete: false,
	},
	{
		id: "item-2",
		title: "Feed the cat",
		category: "Chore",
		isComplete: true,
	},
] as ListItemInterface[];

vi.mock(import("react"), async (importOriginal) => {
	const actual = await importOriginal();
	return {
		...actual,
		useContext: vi.fn().mockImplementation(() => dispatchMock),
	};
});

describe("AddNewListItem.test.tsx", () => {
	it("renders listitem", () => {
		render(<AddNewListLitem />);

		const listItem = screen.queryByTestId("list-item");
		expect(listItem).toBeInTheDocument();
	});

	it("add new listitem", () => {
		render(
			<ListContext value={initialListItems}>
				<AddNewListLitem />
			</ListContext>
		);

		const titleInput = screen.queryByTestId("input") as Element;
		const dropdown = screen.queryByTestId("select") as Element;
		const button = screen.queryByTestId("button") as Element;

		fireEvent.change(titleInput, { target: { value: "New list item" } });
		fireEvent.change(dropdown, { target: { value: "diy" } });
		fireEvent.click(button);

		expect(dispatchMock).toHaveBeenCalledWith({
			type: "added",
			id: expect.any(String),
			title: "New list item",
			category: "diy",
			isComplete: false,
		});
	});
});
