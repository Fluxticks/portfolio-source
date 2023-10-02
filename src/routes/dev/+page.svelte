<script>
	import { WaveVariant } from '$lib/waves';
	import Card from '../../components/card.svelte';
	import Hero from '../../components/hero.svelte';
	import Section from '../../components/section.svelte';
	import Wave from '../../components/wave.svelte';
</script>

<div class="hero-outer">
	<div class="hero-inner">
		<Hero />
		<p><a href="/">Back home </a></p>
	</div>
</div>

<Section staticOpacity={true}>
	<h1>Tech Stack Overview</h1>
	<p>
		Below is a quick overview of the frameworks and languages I know and have used across various
		projects
	</p>
	<div class="techstack">
		<Card title="Python" tagline="Proficient•Most Active" />
		<Card title="Java" tagline="Proficient•First Language" />
		<Card title="JavaScript" tagline="Intermediate•Font-End" />
		<Card title="HTML" tagline="Intermediate•Font-End" />
		<Card title="Bash" tagline="Intermediate•Scripting" />
		<Card title="PyTorch" tagline="Beginner•AI" />
		<Card title="Svelte" tagline="Beginner•Font-End" />
		<Card title="Swift" tagline="Beginner•iOS" />
		<Card title="Tensorflow" tagline="Beginner•AI" />
	</div>
</Section>

<Section wave={WaveVariant.Wave2}>
	<h1>Projects</h1>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit magnam ab non similique
		odit voluptatibus eos? Ad recusandae quo odit praesentium sed dolor saepe dolore sunt minima
		excepturi laborum vitae iusto provident veritatis quam perspiciatis earum, porro eveniet modi
		nobis quidem minus sit. Ut neque velit nulla tenetur esse nam praesentium repellat saepe
		voluptate! Hic sequi provident error sed reprehenderit in adipisci corporis porro quo, aut
		ducimus? Tenetur ea rem, ad temporibus voluptates delectus error mollitia ipsum itaque? Fugit
		consequuntur facere eligendi quaerat! Totam, debitis! Nam, id, nostrum quis non quaerat rem
		labore similique, dolore delectus cum cupiditate dicta velit!
	</p>
</Section>

<Section wave={WaveVariant.Wave3}>
	<h1>Contact Me</h1>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit magnam ab non similique
		odit voluptatibus eos? Ad recusandae quo odit praesentium sed dolor saepe dolore sunt minima
		excepturi laborum vitae iusto provident veritatis quam perspiciatis earum, porro eveniet modi
		nobis quidem minus sit. Ut neque velit nulla tenetur esse nam praesentium repellat saepe
		voluptate! Hic sequi provident error sed reprehenderit in adipisci corporis porro quo, aut
		ducimus? Tenetur ea rem, ad temporibus voluptates delectus error mollitia ipsum itaque? Fugit
		consequuntur facere eligendi quaerat! Totam, debitis! Nam, id, nostrum quis non quaerat rem
		labore similique, dolore delectus cum cupiditate dicta velit!
	</p>
	<br />
</Section>

<Wave variant={WaveVariant.Wave4} />
<Wave variant={WaveVariant.Wave5} />

<style>
	.hero-inner {
		text-align: center;
	}

	h1 {
		font-weight: 700;
	}

	a {
		color: var(--blue);
	}

	a:visited {
		color: var(--dark);
	}

	.hero-inner {
		width: fit-content;
		height: 30vh;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.hero-outer {
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 100vh;
		animation: reduceHeight 2.5s ease-in-out forwards;
		animation-delay: 1.5s;
	}

	@keyframes reduceHeight {
		from {
			height: 100vh;
		}

		to {
			height: 70vh;
		}
	}

	.techstack {
		position: relative;
		display: flex;
		flex-direction: row;
		gap: 2rem;
		padding: 0.5rem 2rem;
		overflow-x: scroll;
	}

	.techstack::before,
	.techstack::after {
		content: '';
		position: fixed;
		width: 2rem;
		height: 100%;
		background: var(--blue);
		bottom: 0;
		z-index: 1;
	}

	.techstack::before {
		left: 0;
		background: linear-gradient(90deg, rgba(138, 150, 203, 1) 0%, rgba(138, 150, 203, 0) 100%);
	}

	.techstack::after {
		right: 0;
		background: linear-gradient(90deg, rgba(138, 150, 203, 0) 0%, rgba(138, 150, 203, 1) 100%);
	}
</style>
