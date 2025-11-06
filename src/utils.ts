export function convertToKebabCase(str: string) {
	return str.trim().toLowerCase().replaceAll(" ", "-");
}

export function removeDuplicatesFromArray(arr: string[]) {
	return [...new Set(arr)];
}
