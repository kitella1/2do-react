import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App.test.tsx", () => {
	it("renders title", async () => {
		render(<App />);

		const title = screen.queryByTestId("title");
		expect(title).toBeInTheDocument();
		expect(title?.textContent).toContain("Organize your day");
	});

	it("renders logo", async () => {
		render(<App />);

		const logo = screen.queryByTestId("logo");
		expect(logo).toBeInTheDocument();
		expect(logo?.getAttribute("src")).toBe("/src/assets/logo.png");
	});

	it("renders footer", async () => {
		render(<App />);

		const footer = screen.queryByTestId("footer");
		expect(footer).toBeInTheDocument();
		expect(footer?.textContent).toContain("Developed by Katie Adams, 2025");
	});
});
