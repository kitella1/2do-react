export function convertToKebabCase(str: string) {
	return str.trim().toLowerCase().replaceAll(" ", "-");
}
