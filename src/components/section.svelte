<script>
	import { minWaveOpacity, scale } from '$lib/util';
	import { WaveVariant } from '$lib/waves';
	import { onMount } from 'svelte';

	export let wave = WaveVariant.Wave1;
	export let staticOpacity = false;

	let maxHeight = 0;
	let minHeight = 0;

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
		const eventTarget = entry.target;

		if (entry.isIntersecting || entry.boundingClientRect.top < entry.boundingClientRect.height) {
			eventTarget.style.setProperty('--bottom', 'auto');
			eventTarget.style.setProperty('--top', 'calc(var(--bg-height) * -1)');
			eventTarget.style.setProperty('--position', 'absolute');
		} else {
			eventTarget.style.setProperty('--bottom', '0');
			eventTarget.style.setProperty('--top', 'auto');
			eventTarget.style.setProperty('--position', 'fixed');
		}
	};

	/**
	 *
	 * @param {Object} event
	 */
	const scrollListener = (event) => {
		if (staticOpacity) {
			target.style.opacity = '1';
			return;
		}

		const height = target.getBoundingClientRect().y - window.innerHeight;

		if (height > maxHeight) {
			target.style.opacity = `${minWaveOpacity}`;
			return;
		}

		if (height < minHeight) {
			target.style.opacity = '1';
			return;
		}

		const percentHeight = scale(height, minHeight, maxHeight, 0, 1 - minWaveOpacity);
		if (percentHeight === 100) {
			target.style.opacity = '1';
			return;
		}
		target.style.opacity = `${minWaveOpacity + percentHeight}`;
	};

	onMount(() => {
		const options = {
			root: document,
			rootMargin: '0px',
			threshold: 0.01
		};

		let observer = new IntersectionObserver(intersectionCallback, options);
		observer.observe(target);
		document.addEventListener('scroll', scrollListener);

		if (staticOpacity) {
			target.style.opacity = '1';
		} else {
			maxHeight = window.innerHeight / 2;
			minHeight = window.innerHeight / 16;
			const height = target.getBoundingClientRect().y - window.innerHeight;
			const percentHeight = scale(height, minHeight, maxHeight, 0, 1 - minWaveOpacity);
			target.style.opacity = `${minWaveOpacity}`;
		}

		return () => {
			observer.disconnect();
			document.removeEventListener('scroll', scrollListener);
		};
	});
</script>

<div
	class="section-container"
	style={`background-color: ${wave.color}; --bg-url: url('/${wave.file}'); --bg-height: ${wave.absoluteHeight}; --bg-timing: ${wave.duration}s; --bottom: auto; --top: calc(var(--bg-height) * -1); --position: absolute;`}
	bind:this={target}
>
	<div class="content">
		<slot />
	</div>
</div>

<style>
	.section-container {
		margin-top: calc(var(--bg-height) / 2);
		padding-bottom: calc(var(--bg-height) / 2);
		color: var(--black);
		position: relative;
		width: 100vw;
		overflow-x: clip;
	}

	.content {
		margin: 0 2rem;
	}

	.section-container::before {
		position: var(--position);
		top: var(--top);
		bottom: var(--bottom);
		left: 0;
		content: '';
		width: max(100vw, 1000px);
		height: var(--bg-height);
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
