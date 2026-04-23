/** @type {import("prettier").Config} */
export default {
	jsxSingleQuote: true,
	overrides: [
		{
			files: ['*.astro'],
			options: {
				parser: 'astro',
			},
		},
	],
	plugins: ['prettier-plugin-astro'],
	printWidth: 80,
	singleQuote: true,
	tabWidth: 2,
	useTabs: true,
};
