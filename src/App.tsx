import twoDoLogo from "./assets/logo.png";
import Button from "./components/Button";

function App() {
	function windowAlert() {
		window.alert("Hello world!");
	}

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
					{/* Form goes here with inputs */}
					<Button
						text="Hello World"
						style="primary"
						role="button"
						clickHandler={windowAlert}
					/>
					<Button text="Hello Again" style="accent" role="button" />
					<Button text="Warning" style="warning" role="button" />
				</div>
				<div className="w-full min-h-10 flex flex-col bg-amber-300">
					{/* Filter and sort buttons goes here */}
				</div>
				<div className="w-full min-h-10 flex flex-col bg-green-900">
					Cards go here
					{/* TODO: Make cardsContainer with overflow rules */}
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
