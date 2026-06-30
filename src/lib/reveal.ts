/** Reveal-on-scroll action. Adds `in` class when element enters viewport. */
export function reveal(node: HTMLElement) {
	node.classList.add('reveal');
	const obs = new IntersectionObserver(
		(entries) => {
			for (const e of entries) {
				if (e.isIntersecting) {
					node.classList.add('in');
					obs.unobserve(node);
				}
			}
		},
		{ threshold: 0.12 }
	);
	obs.observe(node);
	return { destroy: () => obs.disconnect() };
}
