<script>
	/**
	 * @type {import('$lib/waves').WaveVariant}
	 */
	export let variant;
	export let useAbsolute = true;
	let height = useAbsolute ? variant.absoluteHeight : variant.relativeHeight;
</script>

<div
	class="wave"
	style={`animation-duration: ${variant.duration}s; background-image: url('/${variant.file}'); height: ${height};`}
/>

<style>
	.wave {
		position: fixed;
		bottom: 0;
		left: 0;
		background-repeat: repeat-x;
		background-size: cover;
		width: max(100vw, 1000px);
		z-index: 1;
		opacity: 0.9;
		animation: waveslide infinite;
		animation-direction: alternate;
		animation-timing-function: cubic-bezier(0.45, 0, 0.45, 1.25);
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
