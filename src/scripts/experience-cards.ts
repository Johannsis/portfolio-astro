const cards = [...document.querySelectorAll('[data-experience-card]')];

if (cards.length > 0) {
	const observer = new IntersectionObserver(
		(entries): void => {
			for (const entry of entries) {
				if (!(entry.target instanceof HTMLElement)) return;

				if (entry.isIntersecting && entry.intersectionRatio >= 0.65) {
					entry.target.dataset.active = 'true';
				} else {
					delete entry.target.dataset.active;
				}
			}
		},
		{
			rootMargin: '-10% 0px -15% 0px',
			threshold: [0, 0.2, 0.4, 0.55, 0.7, 1],
		},
	);

	for (const card of cards) {
		observer.observe(card);
	}
}
