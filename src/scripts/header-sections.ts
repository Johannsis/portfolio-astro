const sectionLinks = Array.from(
	document.querySelectorAll('[data-section-link]'),
);

if (sectionLinks.length > 0) {
	const observer = new IntersectionObserver(
		(entries): void => {
			for (const entry of entries) {
				const id = entry.target.getAttribute('id');

				if (!id) continue;

				const link = document.querySelector(`[data-section-link="${id}"]`);

				if (!(link instanceof HTMLElement)) continue;

				const isActive =
					entry.isIntersecting && entry.intersectionRatio >= 0.35;
				link.classList.toggle('is-active', isActive);
			}
		},
		{
			rootMargin: '-10% 0px -45% 0px',
			threshold: [0, 0.2, 0.35, 0.5, 0.7, 1],
		},
	);

	for (const link of sectionLinks) {
		const sectionId = link.getAttribute('data-section-link');
		const section = sectionId ? document.getElementById(sectionId) : null;

		if (section) observer.observe(section);
	}
}
