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
			{/* TODO: Use justify-between here to ensure that overflow-scroll kicks in */}
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
					<FiltersContext value={activeFilters}>
						<ListDispatchContext value={listDispatch}>
							<FiltersDispatchContext value={filterDispatch}>
								<div className="w-full min-h-10 flex flex-col gap-6">
									<AddNewListItem />
								</div>
								<div className="w-full min-h-10 flex flex-col ">
									<ApplyFilters />
								</div>
								<div className="w-full min-h-10 flex flex-col">
									<ShowListItems />
								</div>
							</FiltersDispatchContext>
						</ListDispatchContext>
					</FiltersContext>
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
