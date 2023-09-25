<script>
	import { WaveVariant } from '$lib/waves';
	import Wave from '../components/wave.svelte';
	import './style.css';
</script>

<div class="outer">
	<div class="inner">
		<h1>Coming soon!</h1>
		<p>In the meantime, visit <a href="https://github.com/Fluxticks">my github profile</a></p>
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

	h1 {
		font-weight: 700;
	}

	p {
		margin: 0.5rem;
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
		height: 100vh;
	}
</style>
