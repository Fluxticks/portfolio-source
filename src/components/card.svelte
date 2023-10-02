<script>
	/**
	 * @type {String}
	 */
	export let tagline;

	/**
	 * @type {String}
	 */
	export let title;
</script>

<div class="frame">
	<img class="image" alt="language icon" src={`/techstack/${title.toLowerCase()}.webp`} />
	<div class="text">
		<div class="title">{title}</div>
		<div class="tagline">{tagline}</div>
	</div>
</div>

<style>
	.frame {
		aspect-ratio: 3 / 4;
		width: 300px;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		background-color: #1e1e1e;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		border-radius: 10px;
		gap: 1rem;
		padding: 1.5rem;
	}

	.image {
		height: 50%;
	}

	.text {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.title {
		text-align: center;
		color: var(--blue);
		font-size: min(3rem, calc(2rem + 10%));
		font-weight: 700;
	}

	.tagline {
		text-align: center;
		color: var(--white);
		font-size: 1rem;
	}
</style>
