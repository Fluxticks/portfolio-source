<script>
	import { WaveVariant } from '$lib/waves';
	import Section from '../../components/section.svelte';
	import Wave from '../../components/wave.svelte';
</script>

<div class="hero-outer">
	<div class="hero-inner">
		<h1>Fluxticks</h1>
		<p><a href="/">Back home </a></p>
	</div>
</div>

<Section>
	<h1>Section 1</h1>
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

<Section wave={WaveVariant.Wave2}>
	<h1>Section 2</h1>
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
	<h1>Section 3</h1>
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
		margin-bottom: 10%;
	}
</style>
