import twoDoLogo from "./assets/logo.png";
import AddNewListItem from "./components/ListItems/AddNewListItem";
import ListItem from "./components/ListItems/ListItem";
import { ShowListItems } from "./components/ListItems/ShowListItems";

function App() {
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
				<div className="w-full min-h-10 flex flex-col gap-6">
					<AddNewListItem />
				</div>
				<div className="w-full min-h-10 flex flex-col bg-amber-300">
					{/* Filter and sort buttons goes here */}
				</div>
				<div className="w-full min-h-10 flex flex-col">
					<ShowListItems />
				</div>
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
