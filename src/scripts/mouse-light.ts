const light = document.querySelector('[data-mouse-light]');

if (light instanceof HTMLElement && globalThis.matchMedia('(min-width: 1024px)').matches) {
	let frameId: null | number = null;
	let lastX = -9999;
	let lastY = -9999;

	const update = (): void => {
		const lightSize = 400;
		light.style.transform = `translate(${lastX - lightSize}px, ${lastY - lightSize}px)`;
		frameId = null;
	};

	const handlePointerMove = (event: PointerEvent): void => {
		lastX = event.clientX;
		lastY = event.clientY;

		if (frameId !== null) return;

		frameId = globalThis.requestAnimationFrame(update);
	};

	globalThis.addEventListener(
		'pointermove',
		handlePointerMove,
		{
			passive: true
		}
	);
}
