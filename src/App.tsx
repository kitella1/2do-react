import twoDoLogo from "./assets/logo.png";
import AddNewListItem from "./components/ListItems/AddNewListItem";
import ApplyFilters from "./components/Filters/ApplyFilters";
import ShowListItems from "./components/ListItems/ShowListItems";
import { useReducer } from "react";
import listReducer from "./reducers/listReducer";
import filterReducer from "./reducers/filterReducer";
import type { ListItemInterface } from "./types/listItems";
import {
	FiltersContext,
	FiltersDispatchContext,
	ListContext,
	ListDispatchContext,
} from "./reducers/context";
import { getListFromLocalStorage } from "./scripts/localStorage";

function App() {
	//TODO: Fetch from localStorage on app load
	const initialListItems = getListFromLocalStorage() as ListItemInterface[];

	const [listItems, listDispatch] = useReducer(listReducer, initialListItems);
	const [activeFilters, filterDispatch] = useReducer(filterReducer, []);

	return (
		<>
			<header className="w-full flex flex-col gap-y-2 h-24 md:h-36 shrink-0">
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

			<main className="flex flex-col w-full gap-1 shrink h-full">
				<ListContext value={listItems}>
					<FiltersContext value={activeFilters}>
						<ListDispatchContext value={listDispatch}>
							<FiltersDispatchContext value={filterDispatch}>
								<AddNewListItem />
								<ApplyFilters />
								<ShowListItems />
							</FiltersDispatchContext>
						</ListDispatchContext>
					</FiltersContext>
				</ListContext>
			</main>
			<footer
				data-testid="footer"
				className="text-xs italic text-white/50 bottom-0 h-8 shrink-0 w-full text-center"
			>
				Developed by Katie Adams, 2025
			</footer>
		</>
	);
}

export default App;
