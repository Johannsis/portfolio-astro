export interface ExperienceEntry {
	companyName: string;
	description: string;
	period: string;
	position: string;
	stack: string[];
	url: string;
}

export interface ProjectEntry {
	description: string;
	name: string;
	stack: string[];
	url: string;
}

export interface SocialLink {
	ariaLabel: string;
	icon: 'github' | 'linkedin' | 'mail';
	name: string;
	url: string;
}

export const siteUrl = 'https://johannsis.github.io/portfolio';

export const pageSections = ['about', 'experience'] as const;

export type PageSection = (typeof pageSections)[number];

export const title = 'Johannes Hoersch | Senior Front-End Developer';

export const siteName = 'Johannes Hoersch Portfolio';

export const description =
	'Johannes Hoersch — Senior Front-End Developer based in Santo Domingo, DR. Building fast, accessible, and beautiful digital experiences with Next.js, React, and TypeScript.';

export const keywords = [
	'Software Engineer',
	'Front-End Developer',
	'React',
	'Next.js',
	'TypeScript',
	'Johannes Hoersch',
];

export const jsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Person',
	jobTitle: 'Senior Front-End Developer',
	name: 'Johannes Hoersch',
	sameAs: [
		'https://github.com/Johannsis',
		'https://www.linkedin.com/in/johanneshoersch/',
	],
	url: siteUrl,
	worksFor: {
		'@type': 'Organization',
		name: 'TelevisaUnivision',
	},
};

export const userData = {
	experience: [
		{
			companyName: 'TelevisaUnivision',
			description:
				'Optimized and implemented tools and technologies like Taboola, CivicScience, Google Tag Manager, OneTrust, and Next.js to boost ad revenue, enhance performance, ensure privacy compliance, improve security, and maintain SEO best practices.',
			period: '2022 - present',
			position: 'Senior Front-End Developer via BairesDev',
			stack: [
				'Next.js',
				'GraphQL',
				'Zustand',
				'Tailwind CSS',
				'React',
				'TypeScript',
			],
			url: 'https://corporate.televisaunivision.com/',
		},
		{
			companyName: 'Shutterstock',
			description:
				'Optimized source code for faster user experience, streamlined the CI/CD pipeline to reduce workflow time by 80%, and maintained code, analytics, and tests.',
			period: '2022 - 2022',
			position: 'Full-Stack Engineer via BairesDev',
			stack: [
				'Node.js',
				'Next.js',
				'JavaScript',
				'React',
				'Jenkins',
				'GitHub Actions',
			],
			url: 'https://www.shutterstock.com/',
		},
		{
			companyName: 'Tevolv',
			description:
				'Developed mobile apps for banks using the MVC pattern, created Java microservices for T24 Transact, and handled software maintenance, including updates, patches, and optimizations.',
			period: '2019 - 2022',
			position: 'Software Engineer',
			stack: [
				'Java',
				'JavaScript',
				'Kony Framework',
				'Mobile',
				'Android Studio',
				'T24 Backend',
			],
			url: 'https://www.tevolv.com/',
		},
	] as ExperienceEntry[],
	job: 'Senior Front-End Developer',
	location: 'Santo Domingo, DR',
	motto:
		'I build fast, maintainable, pretty and reliable digital experiences for the web.',
	name: 'Johannes Hoersch',
	projects: [] as ProjectEntry[],
	social: [
		{
			ariaLabel: 'Send an email to Johannes Hoersch',
			icon: 'mail',
			name: 'email',
			url: 'mailto:johanneshoersch@gmail.com',
		},
		{
			ariaLabel: 'Visit Johannes Hoersch on LinkedIn',
			icon: 'linkedin',
			name: 'linkedin',
			url: 'https://www.linkedin.com/in/johanneshoersch/',
		},
		{
			ariaLabel: 'Visit Johannes Hoersch on GitHub',
			icon: 'github',
			name: 'github',
			url: 'https://github.com/Johannsis',
		},
	] satisfies SocialLink[],
};
