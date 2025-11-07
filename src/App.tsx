import twoDoLogo from "./assets/logo.png";
import AddNewListItem from "./components/ListItems/AddNewListItem";
import { ShowListItems } from "./components/ListItems/ShowListItems";
import { useReducer } from "react";
import listReducer from "./reducers/listReducer";
import type { ListItemInterface } from "./types/listItems";
import { ListContext, ListDispatchContext } from "./reducers/context";
import ApplyFilters from "./components/Filters/ApplyFilters";

function App() {
	//TODO: Fetch from localStorage on app load
	const initialListItems = [
		{
			id: "item-1",
			content: "Walk the dog",
			category: "chore",
			isComplete: false,
		},
		{
			id: "item-2",
			content: "Feed the cat",
			category: "chore",
			isComplete: true,
		},
		{
			id: "item-3",
			content: "15 minute yoga",
			category: "wellness",
			isComplete: false,
		},
		{
			id: "item-4",
			content: "Paint bathroom wall",
			category: "DIY",
			isComplete: false,
		},
	] as ListItemInterface[];

	const [listItems, dispatch] = useReducer(listReducer, initialListItems);

	return (
		<>
			<header className="w-full flex flex-col gap-y-2">
				<img
					data-testid="logo"
					src={twoDoLogo}
					id="logo"
					alt="the 2Do app logo, pronounced phonetically as To Do"
					className="max-w-32 md:max-w-40 lg:max-w-64 transition-transform ease-out duration-200 hover:scale-105"
				/>
				<h1 data-testid="title" id="title">
					Organize your day...
				</h1>
			</header>

			<main className="flex flex-col w-full gap-1">
				<ListContext value={listItems}>
					<ListDispatchContext value={dispatch}>
						<div className="w-full min-h-10 flex flex-col gap-6">
							<AddNewListItem />
						</div>
						<div className="w-full min-h-10 flex flex-col ">
							<ApplyFilters />
						</div>
						<div className="w-full min-h-10 flex flex-col">
							<ShowListItems />
						</div>
					</ListDispatchContext>
				</ListContext>
			</main>
			<footer
				data-testid="footer"
				className="text-xs italic fixed text-white/50 bottom-0 min-h-16"
			>
				Developed by Katie Adams, 2025
			</footer>
		</>
	);
}

export default App;
