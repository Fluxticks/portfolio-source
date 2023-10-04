<script>
	/**
	 * @type {String}
	 */
	export let projectTitle;

	/**
	 * @type {String}
	 */
	export let projectURL;

	/**
	 * @type {String}
	 */
	export let imageURL;

	/**
	 * @type {String}
	 */
	export let date = '';

	export let alternateSide = false;

	const columns = alternateSide ? '2fr 1fr' : '1fr 2fr';
	const order = alternateSide ? 1 : -1;
	const angle = alternateSide ? '270deg' : '90deg';
	const marginLeft = alternateSide ? '20%' : 'auto';
	const marginRight = alternateSide ? 'auto' : '20%';
</script>

<div
	class="container"
	style={`--grid-cols: ${columns}; --margin-left: ${marginLeft}; --margin-right: ${marginRight}`}
>
	<div
		class="imagecontainer"
		style={`--bg-url: url('${imageURL}'); --order: ${order}; --angle: ${angle};`}
	/>
	<div class="textcontainer">
		<a href={projectURL}><h2>{projectTitle}</h2></a>
		<div class="projectdescription">
			<slot />
		</div>
		<div class="timestamp">
			<p>{date}</p>
		</div>
	</div>
</div>

<style>
	.container {
		position: relative;
		display: grid;
		grid-template-columns: auto;
		grid-template-rows: 1fr 5fr;
		width: 95%;
		background-color: var(--black);
		aspect-ratio: 5 / 8;
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
		border-radius: 10px;
		overflow: clip;
	}

	.imagecontainer {
		position: relative;
		background-color: var(--white);
		background-image: var(--bg-url);
		background-size: cover;
		background-repeat: no-repeat;
	}

	.imagecontainer::after {
		content: '';
		position: absolute;
		z-index: 1;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background-color: var(--black);
		background: linear-gradient(var(--angle), rgba(30, 30, 30, 0) 0%, rgba(30, 30, 30, 1) 100%);
	}

	@media (min-width: 600px) {
		.container {
			width: 75%;
			grid-template-columns: var(--grid-cols);
			grid-template-rows: auto;
			max-height: 600px;
			aspect-ratio: 5 / 4;
			margin-left: var(--margin-left);
			margin-right: var(--margin-right);
		}

		.imagecontainer {
			order: var(--order);
		}
	}

	.textcontainer {
		position: relative;
		display: flex;
		flex-direction: column;
		margin: 1rem;
	}

	a {
		text-decoration-color: #ab98c9;
	}

	h2 {
		color: #ab98c9;
		font-weight: 700;
	}

	.projectdescription {
		color: var(--white);
		font-weight: 400;
	}

	.timestamp {
		position: absolute;
		color: var(--white);
		bottom: 0;
		right: 2rem;
	}
</style>
