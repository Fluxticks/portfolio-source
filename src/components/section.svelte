<script>
	import { WaveVariant } from '$lib/waves';
	import { onMount } from 'svelte';

	export let wave = WaveVariant.Wave1;

	/**
	 * @type {HTMLElement}
	 */
	let target;

	/**
	 * @param {Array.<IntersectionObserverEntry>} entries
	 */
	const intersectionCallback = (entries) => {
		const entry = entries[0];
		/**
		 * @type {HTMLElement}
		 */
		// @ts-ignore
		const target = entry.target;
		console.log(entry);
		if (!entry.isIntersecting) {
			target.style.setProperty('--bottom', '0');
			target.style.setProperty('--top', 'auto');
			target.style.setProperty('--position', 'fixed');
			target.style.setProperty('--opacity', '0.9');
		} else {
			target.style.setProperty('--bottom', 'auto');
			target.style.setProperty('--top', 'calc(var(--bg-height) * -1)');
			target.style.setProperty('--position', 'absolute');
			target.style.setProperty('--opacity', '1');
		}
	};

	onMount(() => {
		const options = {
			root: document,
			rootMargin: '0px',
			threshold: 0.01
		};

		let observer = new IntersectionObserver(intersectionCallback, options);
		observer.observe(target);

		return () => {
			observer.disconnect();
		};
	});
</script>

<div
	class="section-container"
	style={`background-color: ${wave.color}; --bg-url: url('/${wave.file}'); --bg-height: ${wave.absoluteHeight}; --bg-timing: ${wave.duration}s; --bottom: auto; --top: calc(var(--bg-height) * -1); --position: absolute; --opacity: 1;`}
	bind:this={target}
>
	<slot />
</div>

<style>
	:root {
		overflow: auto;
	}

	.section-container {
		margin-top: calc(var(--bg-height) / 2);
		padding-bottom: calc(var(--bg-height) / 2);
		color: var(--black);
		position: relative;
		width: 100vw;
	}

	.section-container::before {
		position: var(--position);
		top: var(--top);
		bottom: var(--bottom);
		left: 0;
		content: '';
		width: max(100vw, 1000px);
		height: var(--bg-height);
		opacity: var(--opacity);
		background-image: var(--bg-url);
		background-repeat: repeat-x;
		background-size: cover;
		animation-name: waveslide;
		animation-duration: var(--bg-timing);
		animation-iteration-count: infinite;
		animation-direction: alternate;
		animation-timing-function: cubic-bezier(0.45, 0, 0.45, 1.25);
		transition: opacity 0.2s ease-in;
		pointer-events: none;
	}

	@keyframes waveslide {
		from {
			background-position-x: 0;
		}

		to {
			background-position-x: 3773.81px;
		}
	}
</style>
