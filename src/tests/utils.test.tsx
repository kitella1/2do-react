import { convertToKebabCase, removeDuplicatesFromArray } from "../utils";

describe("utils.test.tsx", () => {
	describe("convertToKebabCase", () => {
		it("single word title", () => {
			const bookTitle = "Dune";

			expect(convertToKebabCase(bookTitle)).toBe("dune");
		});
		it("two word title", () => {
			const bookTitle = "Jurassic Park";

			expect(convertToKebabCase(bookTitle)).toBe("jurassic-park");
		});
		it("multiple word title", () => {
			const bookTitle = "How to Train Your Dragon";

			expect(convertToKebabCase(bookTitle)).toBe("how-to-train-your-dragon");
		});
		it("end spaces", () => {
			const bookTitle = "          How to Train Your Dragon  ";

			expect(convertToKebabCase(bookTitle)).toBe("how-to-train-your-dragon");
		});
		it("random casing", () => {
			const bookTitle = "   hOw To TrAiN yOuR dRaGoN  ";

			expect(convertToKebabCase(bookTitle)).toBe("how-to-train-your-dragon");
		});
	});
	describe("removeDuplicatesFromArray", () => {
		it("different arrays", () => {
			const arr1 = ["Hello", "world"];
			const arr2 = ["Goodbye", "friends"];

			expect(removeDuplicatesFromArray(arr1, arr2)).toStrictEqual([
				"Hello",
				"world",
				"Goodbye",
				"friends",
			]);
		});
		it("one matching element", () => {
			const arr1 = ["Hello", "world"];
			const arr2 = ["Goodbye", "world"];

			expect(removeDuplicatesFromArray(arr1, arr2)).toStrictEqual([
				"Hello",
				"world",
				"Goodbye",
			]);
		});
		it("multiple matching elements", () => {
			const arr1 = ["Hello", "sweet", "world"];
			const arr2 = ["Goodbye", "sweet", "world"];

			expect(removeDuplicatesFromArray(arr1, arr2)).toStrictEqual([
				"Hello",
				"sweet",
				"world",
				"Goodbye",
			]);
		});
		it("all matching elements", () => {
			const arr1 = ["Hello", "sweet", "world"];
			const arr2 = ["Hello", "sweet", "world"];

			expect(removeDuplicatesFromArray(arr1, arr2)).toStrictEqual([
				"Hello",
				"sweet",
				"world",
			]);
		});
	});
});
