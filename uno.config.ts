import { defineConfig, transformerDirectives } from 'unocss';

export default defineConfig({
	shortcuts: {
		'body-2xs': 'text-[0.75rem] leading-5 font-700',
		'body-md': 'text-[1rem] leading-[1.2] font-500',
		'body-sm': 'text-[1rem] leading-6 font-400',
		'body-xs': 'text-[0.875rem] leading-6 font-700',
		'titles-4xl':
			'text-[clamp(2.25rem,1.82rem+1.82vw,3rem)] leading-[1.1] font-300',
		'titles-lg': 'text-[0.875rem] leading-5 font-400',
		'titles-xl':
			'text-[clamp(1.125rem,1.05rem+0.3vw,1.25rem)] leading-6 font-400',
	},
	theme: {
		colors: {
			'primary-10': 'var(--color-primary-10)',
			'primary-100': 'var(--color-primary-100)',
			'primary-20': 'var(--color-primary-20)',
			'primary-30': 'var(--color-primary-30)',
			'primary-40': 'var(--color-primary-40)',
			'primary-50': 'var(--color-primary-50)',
			'primary-60': 'var(--color-primary-60)',
			'primary-70': 'var(--color-primary-70)',
			'primary-80': 'var(--color-primary-80)',
			'secondary-100': 'var(--color-secondary-100)',
			'secondary-110': 'var(--color-secondary-110)',
			'secondary-40': 'var(--color-secondary-40)',
			'secondary-50': 'var(--color-secondary-50)',
			'secondary-60': 'var(--color-secondary-60)',
			'secondary-70': 'var(--color-secondary-70)',
			'secondary-80': 'var(--color-secondary-80)',
			'secondary-90': 'var(--color-secondary-90)',
		},
	},
	transformers: [transformerDirectives()],
});
