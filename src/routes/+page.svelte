<script>
	import './style.css';
	import '@fontsource-variable/victor-mono';
</script>

<div class="outer">
	<div class="inner">
		<h1>Coming soon!</h1>
		<p>In the meantime, visit <a href="https://github.com/Fluxticks">my github profile</a></p>
	</div>
</div>
<div
	class="waves"
	style="animation-duration: 30s; background-image: url('./wave1.svg'); height: 100%;"
/>
<div
	class="waves"
	style="animation-duration: 25s; background-image: url('./wave2.svg'); height: 80%;"
/>
<div
	class="waves"
	style="animation-duration: 20s; background-image: url('./wave3.svg'); height: 60%;"
/>
<div
	class="waves"
	style="animation-duration: 15s; background-image: url('./wave4.svg'); height: 60%;"
/>
<div
	class="waves"
	style="animation-duration: 10s; background-image: url('./wave5.svg'); height: 60%;"
/>

<style>
	* {
		font-family: 'Victor Mono Variable', sans-serif;
		text-align: center;
	}

	h1 {
		font-weight: 700;
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

	.waves {
		position: absolute;
		bottom: 0;
		left: 0;
		background-repeat: repeat-x;
		background-size: cover;
		width: 100vw;
		height: 80%;
		z-index: -1;
		opacity: 0.8;
		animation: waveslide infinite;
		animation-direction: alternate;
		animation-timing-function: cubic-bezier(0.45, 0, 0.45, 1.25);
	}

	@keyframes waveslide {
		from {
			background-position-x: 0;
		}

		to {
			background-position-x: 3773.81px;
		}
	}

	a {
		color: var(--blue);
	}

	a:visited {
		color: var(--dark);
	}
</style>
