import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import astro from 'eslint-plugin-astro';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import unocss from '@unocss/eslint-config/flat';
import jsxA11y from 'eslint-plugin-jsx-a11y';

// Parsers
const tsParser = tseslint.parser;
const astroParser = astro.parser;

export default defineConfig([
	// Global configuration
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
	},

	// Base configs
	js.configs.recommended,
	tseslint.configs.strict,

	// Prettier config
	{
		plugins: {
			jsxA11y,
			prettier,
		},
		rules: {
			// Disable warnings, since prettier should format on save
			'prettier/prettier': 'error',
		},
	},

	// Astro setup with a11y
	astro.configs.recommended,
	astro.configs['jsx-a11y-strict'],
	{
		files: ['*.astro'],
		languageOptions: {
			parser: astroParser,
			parserOptions: {
				parser: tsParser,
				extraFileExtensions: ['.astro'],
				sourceType: 'module',
				ecmaVersion: 'latest',
				project: './tsconfig.json',
			},
		},
		rules: {
			'no-undef': 'off', // Disable "not defined" errors for specific Astro types that are globally available (ImageMetadata)
			'@typescript-eslint/no-explicit-any': 'off', // You may want this as it can get annoying
			'astro/jsx-a11y/alt-text': 'error',
			'astro/jsx-a11y/anchor-ambiguous-text': 'error',
			'astro/jsx-a11y/anchor-has-content': 'error',
			'astro/jsx-a11y/anchor-is-valid': 'error',
			'astro/jsx-a11y/aria-activedescendant-has-tabindex': 'error',
			'astro/jsx-a11y/aria-props': 'error',
			'astro/jsx-a11y/aria-proptypes': 'error',
			'astro/jsx-a11y/aria-role': 'error',
			'astro/jsx-a11y/aria-unsupported-elements': 'error',
			'astro/missing-client-only-directive-value': 'error',
			'astro/jsx-a11y/autocomplete-valid': 'error',
			'astro/jsx-a11y/click-events-have-key-events': 'error',
			'astro/jsx-a11y/control-has-associated-label': 'error',
			'astro/no-conflict-set-directives': 'error',
			'astro/jsx-a11y/heading-has-content': 'error',
			'astro/no-deprecated-astro-canonicalurl': 'error',
			'astro/no-deprecated-astro-fetchcontent': 'error',
			'astro/no-deprecated-astro-resolve': 'error',
			'astro/jsx-a11y/html-has-lang': 'error',
			'astro/jsx-a11y/iframe-has-title': 'error',
			'astro/no-deprecated-getentrybyslug': 'error',
			'astro/jsx-a11y/img-redundant-alt': 'error',
			'astro/jsx-a11y/interactive-supports-focus': 'error',
			'astro/jsx-a11y/label-has-associated-control': 'error',
			'astro/jsx-a11y/lang': 'error',
			'astro/jsx-a11y/media-has-caption': 'error',
			'astro/jsx-a11y/mouse-events-have-key-events': 'error',
			'astro/jsx-a11y/no-access-key': 'error',
			'astro/jsx-a11y/no-aria-hidden-on-focusable': 'error',
			'astro/jsx-a11y/no-autofocus': 'error',
			'astro/jsx-a11y/no-distracting-elements': 'error',
			'astro/no-exports-from-components': 'error',
			'astro/jsx-a11y/no-interactive-element-to-noninteractive-role': 'error',
			'astro/jsx-a11y/no-noninteractive-element-interactions': 'error',
			'astro/jsx-a11y/no-noninteractive-element-to-interactive-role': 'error',
			'astro/jsx-a11y/no-noninteractive-tabindex': 'error',
			'astro/no-prerender-export-outside-pages': 'error',
			'astro/jsx-a11y/no-redundant-roles': 'error',
			'astro/jsx-a11y/no-static-element-interactions': 'error',
			'astro/no-unused-define-vars-in-style': 'error',
			'astro/jsx-a11y/prefer-tag-over-role': 'error',
			'astro/jsx-a11y/role-has-required-aria-props': 'error',
			'astro/jsx-a11y/role-supports-aria-props': 'error',
			'astro/jsx-a11y/scope': 'error',
			'astro/jsx-a11y/tabindex-no-positive': 'error',
			'astro/valid-compile': 'error',
			'astro/no-set-html-directive': 'error',
			'astro/no-unsafe-inline-scripts': 'error',
			'astro/prefer-class-list-directive': 'error',
			'astro/prefer-object-class-list': 'error',
			'astro/prefer-split-class-list': 'error',
			'astro/sort-attributes': 'error',
			'astro/semi': ['error', 'always', { omitLastInOneLineBlock: true }],
		},
	},

	// Ignore patterns
	{
		ignores: ['dist/**', '**/*.d.ts', '.github/'],
	},
	unocss,
]);
