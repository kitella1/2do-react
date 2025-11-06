export function convertToKebabCase(str: string) {
	return str.trim().toLowerCase().replaceAll(" ", "-");
}

export function removeDuplicatesFromArray(arr1: string[], arr2: string[]) {
	return [...new Set(arr1.concat(arr2))];
}
