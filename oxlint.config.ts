import { defineConfig } from 'oxlint';

export default defineConfig({
	categories: {
		correctness: 'error',
		nursery: 'error',
		pedantic: 'error',
		perf: 'error',
		restriction: 'error',
		style: 'error',
		suspicious: 'error'
	},
	env: {
		browser: true,
		builtin: true,
		node: true
	},
	ignorePatterns: ['dist', '**/node_modules', 'node_modules', 'bun.lock'],
	jsPlugins: ['eslint-plugin-astro', 'eslint-plugin-perfectionist', '@stylistic/eslint-plugin', '@html-eslint/eslint-plugin'],
	plugins: ['eslint', 'import', 'jsx-a11y', 'oxc', 'promise', 'typescript', 'unicorn'],
	rules: {
		'@stylistic/array-bracket-newline': 'error',
		'@stylistic/array-bracket-spacing': 'error',
		'@stylistic/array-element-newline': [
			'error',
			{
				ArrayExpression: 'consistent'
			}
		],
		'@stylistic/arrow-parens': 'error',
		'@stylistic/arrow-spacing': 'error',
		'@stylistic/block-spacing': 'error',
		'@stylistic/brace-style': 'error',
		'@stylistic/comma-dangle': 'error',
		'@stylistic/comma-spacing': 'error',
		'@stylistic/comma-style': 'error',
		'@stylistic/computed-property-spacing': 'error',
		'@stylistic/curly-newline': 'error',
		'@stylistic/dot-location': 'error',
		'@stylistic/eol-last': ['error', 'always'],
		'@stylistic/function-call-argument-newline': 'error',
		'@stylistic/function-call-spacing': 'error',
		'@stylistic/function-paren-newline': 'error',
		'@stylistic/generator-star-spacing': 'error',
		'@stylistic/implicit-arrow-linebreak': 'error',
		'@stylistic/indent': ['error', 'tab'],
		'@stylistic/indent-binary-ops': ['error', 'tab'],
		'@stylistic/jsx-child-element-spacing': 'error',
		'@stylistic/jsx-closing-bracket-location': 'error',
		'@stylistic/jsx-closing-tag-location': 'error',
		'@stylistic/jsx-curly-brace-presence': 'error',
		'@stylistic/jsx-curly-newline': 'error',
		'@stylistic/jsx-curly-spacing': 'error',
		'@stylistic/jsx-equals-spacing': 'error',
		'@stylistic/jsx-first-prop-new-line': 'error',
		'@stylistic/jsx-function-call-newline': 'error',
		'@stylistic/jsx-indent-props': 'error',
		'@stylistic/jsx-max-props-per-line': 'error',
		'@stylistic/jsx-newline': [
			'error',
			{
				prevent: true
			}
		],
		'@stylistic/jsx-one-expression-per-line': 'error',
		'@stylistic/jsx-pascal-case': 'error',
		'@stylistic/jsx-quotes': ['error', 'prefer-single'],
		'@stylistic/jsx-self-closing-comp': 'error',
		'@stylistic/jsx-tag-spacing': 'error',
		'@stylistic/jsx-wrap-multilines': 'error',
		'@stylistic/key-spacing': 'error',
		'@stylistic/keyword-spacing': 'error',
		'@stylistic/line-comment-position': 'error',
		'@stylistic/linebreak-style': 'error',
		'@stylistic/lines-around-comment': 'error',
		'@stylistic/lines-between-class-members': 'error',
		'@stylistic/max-len': [
			'error',
			{
				code: 80,
				ignoreComments: true,
				ignoreRegExpLiterals: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
				ignoreTrailingComments: true
			}
		],
		'@stylistic/max-statements-per-line': 'error',
		'@stylistic/member-delimiter-style': 'error',
		'@stylistic/multiline-comment-style': 'error',
		'@stylistic/multiline-ternary': 'error',
		'@stylistic/new-parens': 'error',
		'@stylistic/newline-per-chained-call': 'error',
		'@stylistic/no-confusing-arrow': 'error',
		'@stylistic/no-extra-parens': 'error',
		'@stylistic/no-extra-semi': 'error',
		'@stylistic/no-floating-decimal': 'error',
		'@stylistic/no-mixed-operators': 'error',
		'@stylistic/no-mixed-spaces-and-tabs': 'error',
		'@stylistic/no-multi-spaces': 'error',
		'@stylistic/no-multiple-empty-lines': [
			'error',
			{
				max: 1,
				maxBOF: 1
			}
		],
		'@stylistic/no-tabs': [
			'error',
			{
				allowIndentationTabs: true
			}
		],
		'@stylistic/no-trailing-spaces': 'error',
		'@stylistic/no-whitespace-before-property': 'error',
		'@stylistic/nonblock-statement-body-position': 'error',
		'@stylistic/object-curly-newline': [
			'error',
			{
				consistent: true
			}
		],
		'@stylistic/object-curly-spacing': ['error', 'always'],
		'@stylistic/object-property-newline': 'error',
		'@stylistic/one-var-declaration-per-line': 'error',
		'@stylistic/operator-linebreak': 'error',
		'@stylistic/padded-blocks': ['error', 'never'],
		'@stylistic/padding-line-between-statements': [
			'error',
			{
				blankLine: 'always',
				next: '*',
				prev: ['if']
			},
			{
				blankLine: 'always',
				next: ['if'],
				prev: '*'
			}
		],
		'@stylistic/quote-props': ['error', 'as-needed'],
		'@stylistic/quotes': ['error', 'single'],
		'@stylistic/rest-spread-spacing': 'error',
		'@stylistic/semi': 'error',
		'@stylistic/semi-spacing': 'error',
		'@stylistic/semi-style': 'error',
		'@stylistic/space-before-blocks': 'error',
		'@stylistic/space-before-function-paren': 'error',
		'@stylistic/space-in-parens': 'error',
		'@stylistic/space-infix-ops': 'error',
		'@stylistic/space-unary-ops': 'error',
		'@stylistic/spaced-comment': 'error',
		'@stylistic/switch-colon-spacing': 'error',
		'@stylistic/template-curly-spacing': 'error',
		'@stylistic/template-tag-spacing': 'error',
		'@stylistic/type-annotation-spacing': 'error',
		'@stylistic/type-generic-spacing': 'error',
		'@stylistic/type-named-tuple-spacing': 'error',
		'@stylistic/wrap-iife': 'error',
		'@stylistic/wrap-regex': 'error',
		'@stylistic/yield-star-spacing': 'error',
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
		'astro/no-unused-css-selector': 'error',
		'astro/no-unused-define-vars-in-style': 'error',
		'astro/prefer-class-list-directive': 'error',
		'astro/prefer-object-class-list': 'error',
		'astro/prefer-split-class-list': 'error',
		'astro/semi': [
			'error',
			'always',
			{
				omitLastInOneLineBlock: true
			}
		],
		'astro/sort-attributes': 'error',
		'astro/valid-compile': 'error',
		'eslint/curly': 'off',
		'eslint/max-lines': 'off',
		'eslint/no-magic-numbers': 'off',
		'eslint/no-ternary': 'off',
		'eslint/no-undef': 'off',
		'eslint/sort-imports': 'off',
		'eslint/sort-keys': 'off',
		'import/group-exports': 'off',
		'import/no-anonymous-default-export': 'off',
		'import/no-default-export': 'off',
		'import/no-named-export': 'off',
		'import/no-unassigned-import': 'off',
		'import/unambiguous': 'off',
		'perfectionist/sort-array-includes': 'error',
		'perfectionist/sort-arrays': 'error',
		'perfectionist/sort-classes': 'error',
		'perfectionist/sort-decorators': 'error',
		'perfectionist/sort-enums': 'error',
		'perfectionist/sort-export-attributes': 'error',
		'perfectionist/sort-exports': 'error',
		'perfectionist/sort-heritage-clauses': 'error',
		'perfectionist/sort-import-attributes': 'error',
		'perfectionist/sort-imports': [
			'error',
			{
				customGroups: [
					{
						elementNamePattern: ['^@jh(?:/.*)?$'],
						groupName: 'internal'
					},
					{
						elementNamePattern: ['^.$', '^./.+', '^../.+'],
						groupName: 'relative'
					}
				],
				fallbackSort: {
					type: 'unsorted'
				},
				groups: [
					'type-import',
					'value-external',
					'value-builtin',
					'internal',
					'relative',
					'value-side-effect',
					'value-side-effect-style',
					'unknown'
				],
				ignoreCase: true,
				internalPattern: ['^@jh/.+'],
				newlinesBetween: 1,
				newlinesInside: 0,
				order: 'asc',
				partitionByComment: false,
				partitionByNewLine: false,
				type: 'alphabetical',
				useExperimentalDependencyDetection: true
			}
		],
		'perfectionist/sort-interfaces': 'error',
		'perfectionist/sort-intersection-types': 'error',
		'perfectionist/sort-jsx-props': 'error',
		'perfectionist/sort-maps': 'error',
		'perfectionist/sort-modules': 'error',
		'perfectionist/sort-named-exports': 'error',
		'perfectionist/sort-named-imports': 'error',
		'perfectionist/sort-object-types': 'error',
		'perfectionist/sort-objects': [
			'error',
			{
				ignoreCase: true,
				newlinesBetween: 0,
				order: 'asc',
				partitionByComment: true,
				type: 'natural'
			}
		],
		'perfectionist/sort-sets': 'error',
		'perfectionist/sort-switch-case': 'error',
		'perfectionist/sort-union-types': 'error',
		'perfectionist/sort-variable-declarations': 'error',
		'unicorn/filename-case': 'off',
		'unicorn/no-null': 'off'
	}
});
