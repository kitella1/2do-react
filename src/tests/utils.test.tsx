import { convertToKebabCase } from "../utils";

describe("utils.test.tsx", () => {
	describe("convertToKebabCase", () => {
		it("single word title", async () => {
			const bookTitle = "Dune";

			expect(convertToKebabCase(bookTitle)).toBe("dune");
		});
		it("two word title", async () => {
			const bookTitle = "Jurassic Park";

			expect(convertToKebabCase(bookTitle)).toBe("jurassic-park");
		});
		it("multiple word title", async () => {
			const bookTitle = "How to Train Your Dragon";

			expect(convertToKebabCase(bookTitle)).toBe("how-to-train-your-dragon");
		});
		it("end spaces", async () => {
			const bookTitle = "          How to Train Your Dragon  ";

			expect(convertToKebabCase(bookTitle)).toBe("how-to-train-your-dragon");
		});
		it("random casing", async () => {
			const bookTitle = "   hOw To TrAiN yOuR dRaGoN  ";

			expect(convertToKebabCase(bookTitle)).toBe("how-to-train-your-dragon");
		});
	});
});
