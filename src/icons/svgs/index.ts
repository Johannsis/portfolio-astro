import type { AstroIconComponent, IconProps } from '@jh/icons/constants/types';

export default {
	arrowRight: (): Promise<{ default: AstroIconComponent<IconProps> }> =>
		import('./arrowRight.astro'),
	github: (): Promise<{ default: AstroIconComponent<IconProps> }> =>
		import('./github.astro'),
	linkedin: (): Promise<{ default: AstroIconComponent<IconProps> }> =>
		import('./linkedin.astro'),
	mail: (): Promise<{ default: AstroIconComponent<IconProps> }> =>
		import('./mail.astro'),
};
