// @unocss-include
import type { PropertiesHyphen } from 'csstype';
import type { StaticRule } from 'unocss';

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
			'font-family': 'var(--font-montserrat)',
			'font-size': '0.75rem',
			'font-weight': '700',
			'line-height': '1.25rem',
		},
	],
	[
		'body-md',
		{
			'font-family': 'var(--font-montserrat)',
			'font-size': '1rem',
			'font-weight': '500',
			'line-height': '1.2',
		},
	],
	[
		'body-sm',
		{
			'font-family': 'var(--font-montserrat)',
			'font-size': '1rem',
			'font-weight': '400',
			'line-height': '1.5rem',
		},
	],
	[
		'body-xs',
		{
			'font-family': 'var(--font-montserrat)',
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
			'font-family': 'var(--font-montserrat)',
			'font-size': 'clamp(2.25rem, 1.82rem + 1.82vw, 3rem)',
			'font-weight': '800',
			'line-height': '1.1',
		},
	],
	[
		'titles-lg',
		{
			'font-family': 'var(--font-montserrat)',
			'font-size': '0.875rem',
			'font-weight': '400',
			'line-height': '1.25rem',
		},
	],
	[
		'titles-xl',
		{
			'font-family': 'var(--font-montserrat)',
			'font-size': 'clamp(1.125rem, 1.05rem + 0.3vw, 1.25rem)',
			'font-weight': '700',
			'line-height': '1.5rem',
		},
	],
] satisfies [string, PropertiesHyphen][];

export default defineConfig({
	layers: {
		default: 1,
		rules: 0,
	},
	presets: [presetWind4()],
	rules: customRules.map(
		([matcher, body]): StaticRule => [matcher, body, { layer: 'rules' }],
	),
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
			'mouse-inner-light': 'var(--mouse-light-gradient)',
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
