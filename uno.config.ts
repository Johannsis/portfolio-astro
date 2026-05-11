// @unocss-include
import type { PropertiesHyphen } from 'csstype';

import { defineConfig, presetWind4 } from 'unocss';

const customRules = [
	[
		'animate-blob',
		{
			animation: 'blob-drift 32s cubic-bezier(0.42, 0, 0.2, 1) infinite',
		},
	],
	[
		'animate-blob-orbit',
		{
			animation: 'blob-orbit 42s cubic-bezier(0.42, 0, 0.2, 1) infinite',
		},
	],
	[
		'animate-blob-orbit-slow',
		{
			animation: 'blob-orbit 58s cubic-bezier(0.42, 0, 0.2, 1) infinite',
		},
	],
	[
		'animate-blob-slow',
		{
			animation: 'blob-drift 48s cubic-bezier(0.42, 0, 0.2, 1) infinite',
		},
	],
	[
		'body-2xs',
		{
			'font-family': 'var(--font-sans)',
			'font-size': '0.75rem',
			'font-weight': '700',
			'line-height': '1.25rem',
		},
	],
	[
		'body-md',
		{
			'font-family': 'var(--font-sans)',
			'font-size': '1rem',
			'font-weight': '500',
			'line-height': '1.2',
		},
	],
	[
		'body-sm',
		{
			'font-family': 'var(--font-sans)',
			'font-size': '1rem',
			'font-weight': '400',
			'line-height': '1.5rem',
		},
	],
	[
		'body-xs',
		{
			'font-family': 'var(--font-sans)',
			'font-size': '0.875rem',
			'font-weight': '700',
			'line-height': '1.5rem',
		},
	],
	[
		'glassmorphism-background',
		{
			'backdrop-filter': 'blur(12px)',
			background: 'oklch(0.24 0.02 258 / 0.3)',
			border: '1px solid oklch(1 0 0 / 0.05)',
			'border-radius': '16px',
			'box-shadow':
				'0 8px 32px oklch(0.15 0.02 258 / 0.3), inset 0 1px 1px oklch(1 0 0 / 0.05)',
		},
	],
	[
		'titles-4xl',
		{
			'font-family': 'var(--font-sans)',
			'font-size': 'clamp(2.25rem, 1.82rem + 1.82vw, 3rem)',
			'font-weight': '300',
			'line-height': '1.1',
		},
	],
	[
		'titles-lg',
		{
			'font-family': 'var(--font-sans)',
			'font-size': '0.875rem',
			'font-weight': '400',
			'line-height': '1.25rem',
		},
	],
	[
		'titles-xl',
		{
			'font-family': 'var(--font-sans)',
			'font-size': 'clamp(1.125rem, 1.05rem + 0.3vw, 1.25rem)',
			'font-weight': '400',
			'line-height': '1.5rem',
		},
	],
] satisfies [string, PropertiesHyphen][];

export default defineConfig({
	preflights: [
		{
			// oxlint-disable-next-line max-lines-per-function
			getCSS: (): string => `
				:root {
					--color-primary-10: oklch(0.1 0.02 258);
					--color-primary-20: oklch(0.2 0.02 258);
					--color-primary-30: oklch(0.3 0.02 258);
					--color-primary-40: oklch(0.4 0.02 258);
					--color-primary-50: oklch(0.5 0.02 258);
					--color-primary-60: oklch(0.6 0.02 258);
					--color-primary-70: oklch(0.7 0.02 258);
					--color-primary-80: oklch(0.8 0.02 258);
					--color-primary-90: oklch(0.9 0.02 258);
					--color-primary-100: oklch(0.95 0.02 258);

					--color-secondary-30: oklch(0.46 0.18 245);
					--color-secondary-40: oklch(0.58 0.2 262);
					--color-secondary-50: oklch(0.68 0.2 188);
					--color-secondary-60: oklch(0.72 0.18 205);
					--color-secondary-70: oklch(0.8 0.14 220);
					--color-secondary-80: oklch(0.72 0.16 20);
					--color-secondary-90: oklch(0.8 0.15 78);
					--color-secondary-100: oklch(0.62 0.2 299);
					--color-secondary-110: oklch(0.66 0.22 332);

					--aurora-glacier: color-mix(
						in oklab,
						var(--color-secondary-60) 34%,
						var(--color-primary-10)
					);
					--aurora-lagoon: color-mix(
						in oklab,
						var(--color-secondary-50) 30%,
						var(--color-primary-10)
					);
					--aurora-cyan: color-mix(
						in oklab,
						var(--color-secondary-70) 26%,
						var(--color-primary-10)
					);
					--aurora-indigo: color-mix(
						in oklab,
						var(--color-secondary-40) 32%,
						var(--color-primary-10)
					);
					--aurora-violet: color-mix(
						in oklab,
						var(--color-secondary-100) 28%,
						var(--color-primary-10)
					);
					--aurora-orchid: color-mix(
						in oklab,
						var(--color-secondary-110) 28%,
						var(--color-primary-10)
					);
					--aurora-rose: color-mix(
						in oklab,
						var(--color-secondary-80) 26%,
						var(--color-primary-10)
					);
					--aurora-amber: color-mix(
						in oklab,
						var(--color-secondary-90) 24%,
						var(--color-primary-10)
					);

					--mouse-light-gradient: color-mix(
						in oklab,
						var(--color-secondary-100) 0.01%,
						var(--color-primary-10)
					);

					--title-radial-gradient: linear-gradient(
						to top in oklab,
						var(--color-secondary-50) 0%,
						var(--color-primary-100) 60%,
						var(--color-primary-100) 100%
					);

					--font-sans: var(--font-montserrat), sans-serif;
				}

				html,
				body {
					min-height: 100dvh;
				}

				@keyframes blob-drift {
					0% {
						transform: translate3d(-65vw, -52vh, 0) scale(0.9);
					}
					20% {
						transform: translate3d(52vw, -44vh, 0) scale(1.02);
					}
					45% {
						transform: translate3d(60vw, 42vh, 0) scale(1.1);
					}
					70% {
						transform: translate3d(-48vw, 54vh, 0) scale(0.96);
					}
					100% {
						transform: translate3d(-65vw, -52vh, 0) scale(0.9);
					}
				}

				@keyframes blob-orbit {
					0% {
						transform: translate3d(-46vw, -42vh, 0) scale(0.92);
					}
					25% {
						transform: translate3d(50vw, -50vh, 0) scale(1.03);
					}
					50% {
						transform: translate3d(64vw, 16vh, 0) scale(1.08);
					}
					75% {
						transform: translate3d(-42vw, 50vh, 0) scale(0.98);
					}
					100% {
						transform: translate3d(-46vw, -42vh, 0) scale(0.92);
					}
				}
			`,
		},
	],
	presets: [presetWind4()],
	rules: customRules,
	theme: {
		colors: {
			'aurora-amber': 'var(--aurora-amber)',
			'aurora-cyan': 'var(--aurora-cyan)',
			'aurora-glacier': 'var(--aurora-glacier)',
			'aurora-indigo': 'var(--aurora-indigo)',
			'aurora-lagoon': 'var(--aurora-lagoon)',
			'aurora-orchid': 'var(--aurora-orchid)',
			'aurora-rose': 'var(--aurora-rose)',
			'aurora-violet': 'var(--aurora-violet)',
			'primary-10': 'var(--color-primary-10)',
			'primary-20': 'var(--color-primary-20)',
			'primary-30': 'var(--color-primary-30)',
			'primary-40': 'var(--color-primary-40)',
			'primary-50': 'var(--color-primary-50)',
			'primary-60': 'var(--color-primary-60)',
			'primary-70': 'var(--color-primary-70)',
			'primary-80': 'var(--color-primary-80)',
			'primary-90': 'var(--color-primary-90)',
			'primary-100': 'var(--color-primary-100)',
			'secondary-30': 'var(--color-secondary-30)',
			'secondary-40': 'var(--color-secondary-40)',
			'secondary-50': 'var(--color-secondary-50)',
			'secondary-60': 'var(--color-secondary-60)',
			'secondary-70': 'var(--color-secondary-70)',
			'secondary-80': 'var(--color-secondary-80)',
			'secondary-90': 'var(--color-secondary-90)',
			'secondary-100': 'var(--color-secondary-100)',
			'secondary-110': 'var(--color-secondary-110)',
		},
	},
});
