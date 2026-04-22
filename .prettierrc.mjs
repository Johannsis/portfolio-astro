/** @type {import("prettier").Config} */
export default {
	printWidth: 80,
	useTabs: true,
	tabWidth: 2,
	singleQuote: true,
	jsxSingleQuote: true,
	plugins: [
		'prettier-plugin-astro',
		'prettier-plugin-tailwindcss',
		'prettier-plugin-astro-organize-imports',
	],
	astroOrganizeImportsMode: 'All',
	overrides: [
		{
			files: ['*.astro'],
			options: {
				parser: 'astro',
			},
		},
	],
};
