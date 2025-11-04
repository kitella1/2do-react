import twoDoLogo from "./assets/logo.png";
import "./App.css";

function App() {
	return (
		<>
			<header>
				<img
					data-testid="logo"
					src={twoDoLogo}
					id="logo"
					alt="the 2Do app logo, pronounced phonetically as To Do"
				/>
				<h1 data-testid="title" id="title">
					Organize your day...
				</h1>
			</header>

			<main>
				<div className="flexBox ">{/* Form goes here with inputs */}</div>
				<div className="flexBox">{/* Filter and sort buttons goes here */}</div>
				<div className="flexBox">
					Cards go here
					{/* TODO: Make cardsContainer with overflow rules */}
				</div>
			</main>
			<footer data-testid="footer">Developed by Katie Adams, 2025</footer>
		</>
	);
}

export default App;
