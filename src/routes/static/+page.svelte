<script>
	import { WaveVariant } from '$lib/waves';
	import Hero from '../../components/hero.svelte';
	import Wave from '../../components/wave.svelte';
	import '../style.css';
</script>

<div class="outer">
	<div class="inner">
		<a href="https://github.com/Fluxticks"><Hero /></a>
	</div>
</div>

<Wave variant={WaveVariant.Wave1} />
<Wave variant={WaveVariant.Wave2} />
<Wave variant={WaveVariant.Wave3} />
<Wave variant={WaveVariant.Wave4} />
<Wave variant={WaveVariant.Wave5} />

<style>
	* {
		text-align: center;
	}

	a {
		color: var(--blue);
	}

	a:visited {
		color: var(--dark);
	}

	.inner {
		width: fit-content;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.outer {
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 80vh;
		padding-bottom: 20vh;
		overflow: hidden;
	}

	@media (max-width: 500px) {
		.outer {
			margin-top: 10vh;
			height: 50vh;
			align-items: start;
		}
	}
</style>
