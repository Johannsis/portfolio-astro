import js from '@eslint/js';
import unocss from '@unocss/eslint-config/flat';
import astro from 'eslint-plugin-astro';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import perfectionist from 'eslint-plugin-perfectionist';
import prettier from 'eslint-plugin-prettier';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
	{
		extends: [
			'js/recommended',
			tseslint.configs.recommended,
			unocss,
			astro.configs['flat/all'],
		],
		files: ['**/*.{js,jsx,mjs,ts,tsx,astro}'],
		ignores: ['dist/**', '.astro/**', '**/*.d.ts', '.github/'],
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
		plugins: {
			'@typescript-eslint': tseslint.plugin,
			astro,
			js,
			'jsx-a11y': jsxA11y,
			perfectionist,
			prettier,
			...unocss.plugins,
		},
		rules: {
			// TypeScript rules
			'@typescript-eslint/no-explicit-any': 'off',
			'no-undef': 'off',
			// Astro JSX A11y rules
			'astro/jsx-a11y/alt-text': 'error',
			'astro/jsx-a11y/anchor-ambiguous-text': 'error',
			'astro/jsx-a11y/anchor-has-content': 'error',
			'astro/jsx-a11y/anchor-is-valid': 'error',
			'astro/jsx-a11y/aria-activedescendant-has-tabindex': 'error',
			'astro/jsx-a11y/aria-props': 'error',
			'astro/jsx-a11y/aria-proptypes': 'error',
			'astro/jsx-a11y/aria-role': 'error',
			'astro/jsx-a11y/aria-unsupported-elements': 'error',
			'astro/jsx-a11y/autocomplete-valid': 'error',
			'astro/jsx-a11y/click-events-have-key-events': 'error',
			'astro/jsx-a11y/control-has-associated-label': 'error',
			'astro/jsx-a11y/heading-has-content': 'error',
			'astro/jsx-a11y/html-has-lang': 'error',
			'astro/jsx-a11y/iframe-has-title': 'error',
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
			'astro/jsx-a11y/no-interactive-element-to-noninteractive-role': 'error',
			'astro/jsx-a11y/no-noninteractive-element-interactions': 'error',
			'astro/jsx-a11y/no-noninteractive-element-to-interactive-role': 'error',
			'astro/jsx-a11y/no-noninteractive-tabindex': 'error',
			'astro/jsx-a11y/no-redundant-roles': 'error',
			'astro/jsx-a11y/no-static-element-interactions': 'error',
			'astro/jsx-a11y/prefer-tag-over-role': 'error',
			'astro/jsx-a11y/role-has-required-aria-props': 'error',
			'astro/jsx-a11y/role-supports-aria-props': 'error',
			'astro/jsx-a11y/scope': 'error',
			'astro/jsx-a11y/tabindex-no-positive': 'error',
			// Astro specific rules
			'astro/missing-client-only-directive-value': 'error',
			'astro/no-conflict-set-directives': 'error',
			'astro/no-deprecated-astro-canonicalurl': 'error',
			'astro/no-deprecated-astro-fetchcontent': 'error',
			'astro/no-deprecated-astro-resolve': 'error',
			'astro/no-deprecated-getentrybyslug': 'error',
			'astro/no-exports-from-components': 'error',
			'astro/no-prerender-export-outside-pages': 'error',
			'astro/no-set-html-directive': 'error',
			'astro/no-set-text-directive': 'off',
			'astro/no-unsafe-inline-scripts': 'error',
			'astro/no-unused-define-vars-in-style': 'error',
			'astro/prefer-class-list-directive': 'error',
			'astro/prefer-object-class-list': 'error',
			'astro/prefer-split-class-list': 'error',
			'astro/semi': ['error', 'always', { omitLastInOneLineBlock: true }],
			'astro/sort-attributes': 'error',
			'astro/valid-compile': 'error',
			// Sorting rules
			'perfectionist/sort-imports': [
				'error',
				{
					customGroups: [
						{
							elementNamePattern: ['^@jh(?:/.*)?$'],
							groupName: 'internal',
						},
						{
							elementNamePattern: ['^.$', '^./.+', '^../.+'],
							groupName: 'relative',
						},
					],
					fallbackSort: { type: 'unsorted' },
					groups: [
						'type-import',
						'value-external',
						'value-builtin',
						'internal',
						'relative',
						'value-side-effect',
						'value-side-effect-style',
						'unknown',
					],
					ignoreCase: true,
					internalPattern: ['^@jh/.+'],
					newlinesBetween: 1,
					newlinesInside: 0,
					order: 'asc',
					partitionByComment: false,
					partitionByNewLine: false,
					type: 'alphabetical',
					useExperimentalDependencyDetection: true,
				},
			],
			'perfectionist/sort-objects': [
				'error',
				{
					ignoreCase: true,
					newlinesBetween: 0,
					order: 'asc',
					partitionByComment: true,
					type: 'natural',
				},
			],
			// Prettier rules
			'prettier/prettier': [
				'error',
				{
					bracketSameLine: true,
					htmlWhitespaceSensitivity: 'strict',
					jsxSingleQuote: true,
					overrides: [
						{
							files: ['*.astro'],
							options: {
								parser: 'astro',
							},
						},
					],
					plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
					printWidth: 80,
					singleAttributePerLine: true,
					singleQuote: true,
					tabWidth: 2,
					useTabs: true,
				},
			],
			// UnoCSS rules
			'unocss/enforce-class-compile': 'error',
			'unocss/order': 'off',
			'unocss/order-attributify': 'error',
		},
	},
]);
