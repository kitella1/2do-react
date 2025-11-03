import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App.test.tsx", () => {
	it("renders welcome message", async () => {
		render(<App />);

		expect(screen.queryByTestId("title")).toBeInTheDocument();
		expect(await screen.findByText("Vite + React")).toBeVisible();
	});
});
