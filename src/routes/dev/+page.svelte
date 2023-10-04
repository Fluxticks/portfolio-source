<script>
	import { WaveVariant } from '$lib/waves';
	import Card from '../../components/card.svelte';
	import Hero from '../../components/hero.svelte';
	import Panel from '../../components/panel.svelte';
	import Scroll from '../../components/scroll.svelte';
	import Section from '../../components/section.svelte';
	import Wave from '../../components/wave.svelte';
</script>

<div class="hero-outer">
	<div class="hero-inner">
		<Hero />
		<Scroll />
	</div>
</div>

<Section staticOpacity={true}>
	<h1>Tech Stack Overview</h1>
	<p>
		Below is a quick overview of the frameworks and languages I know and have used across various
		projects
	</p>
	<div class="stackcontainer">
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
	</div>
</Section>

<Section wave={WaveVariant.Wave2}>
	<h1>Projects</h1>
	<div class="projects">
		<Panel
			projectTitle="Jutta Zilha's Website"
			projectURL="https://meine-kleine-manufaktur.de/"
			imageURL="/projects/jutta.webp"
			date="5 December 2022"
			languages="HTML / JS / CSS / React"
		>
			<p>
				This was my first Freelance Front-End project. I used this project to learn the basics of
				HTML, CSS, JS as well as React.
			</p>
			<p>
				The design process stretched over a period of 6 months. The client and I settled on an Agile
				design process, meeting often to iterate on the conceptual design. After which I started the
				implementation process, continuing an Agile interaction with the client until the product
				reached the clients expectations.
			</p>
		</Panel>
		<Panel
			projectTitle="UoY Esports/Fragsoc Discord Bot"
			projectURL="https://github.com/Fluxticks/esports-bot"
			imageURL="https://static-cdn.jtvnw.net/jtv_user_pictures/a7ebf400-ac96-4e76-a47e-0f2629440530-profile_banner-480.png"
			alternateSide={true}
			date="6 February 2022"
			languages="Python / AWS / Docker / Postgres"
		>
			<p>
				During my 3 years at University I was an active member of the Esports and Gaming society,
				primarily in the Esports sector. Once I became a committee member I was faced with issues
				due to the lack of any automation. Because of this I took on the existing <a
					href="https://discord.com/company">Discord</a
				> bot and contributed to the project to get a production-ready bot that is still in use today.
			</p>
			<p>
				Later after the release of <a
					href="https://support.discord.com/hc/en-us/articles/1500000368501-Slash-Commands-FAQ"
					>Discord's slash-commands</a
				>, I rewrote the bot from scratch to implement the new protocols as well as rework much of
				the logic to result in a much more consistent bot.
			</p>
		</Panel>
		<Panel
			projectTitle="TikTokDL"
			projectURL="https://github.com/Fluxticks/TikTokDL/"
			imageURL="https://img.rasset.ie/001d8231-800.jpg"
			date="27 May 2023"
			languages="Python / PyPI / Playwright"
		>
			<p>
				TikTok's official API is extremely limited and thus did not allow the accessing of videos
				while not logged in. Due to this I created a simple python package using Playwright to
				access TikTok and download a post's media content and metadata. While debugging I
				encountered multiple captchas, which get solved automatically using openCV and some basic
				image processing techniques included in openCV.
			</p>
			<p>
				This was also my first successful attempt at deploying a python package to <a
					href="https://pypi.org/project/tiktok-dlpy/">PyPI</a
				>.
			</p>
		</Panel>
		<Panel
			projectTitle="InstagramDL"
			projectURL="https://github.com/Fluxticks/InstagramDL/"
			imageURL="https://i0.wp.com/www.alphr.com/wp-content/uploads/2021/08/How-to-View-When-an-Instagram-Account-Was-Created.png?zoom=2&resize=738%2C320&ssl=1"
			alternateSide={true}
			date="18 June 2023"
			languages="Python / Playwright"
		>
			<p>
				Similar to my other project, TikTokDL, InstagramDL allows someone to download an Instagram
				post and the metadata without needing to login. This project makes use of capturing the HTTP
				requests that are sent to intercept the video for a given link.
			</p>
		</Panel>
	</div>
</Section>

<Section wave={WaveVariant.Wave3}>
	<h1>Contact Me</h1>
	<div class="contact">
		<p>
			If you liked any of my projects, are interested in any of them or want to ask about a
			potential project, feel free to get into contact with me by any of the methods below:
		</p>
		<ul>
			<li>Discord Tag: <a href="discord://-/users/244050529271939073">@fluxticks</a></li>
			<li>Email: <a href="mailto:dev.garmentbecky@gmail.com">dev.garmentbecky@gmail.com</a></li>
		</ul>
	</div>
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
		padding-bottom: 20vh;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.hero-outer {
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 90vh;
	}

	.stackcontainer {
		position: relative;
		width: 100%;
		height: 100%;
	}

	.techstack {
		position: relative;
		display: flex;
		flex-direction: row;
		gap: 2rem;
		padding: 0.5rem 2rem;
		overflow-x: scroll;
	}

	.stackcontainer::before,
	.stackcontainer::after {
		content: '';
		position: absolute;
		width: 2rem;
		height: 100%;
		background: var(--blue);
		bottom: 0;
		z-index: 1;
	}

	.stackcontainer::before {
		left: 0;
		background: linear-gradient(90deg, rgba(138, 150, 203, 1) 0%, rgba(138, 150, 203, 0) 100%);
	}

	.stackcontainer::after {
		right: 0;
		background: linear-gradient(90deg, rgba(138, 150, 203, 0) 0%, rgba(138, 150, 203, 1) 100%);
	}

	.projects {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
	}

	.contact {
		width: 80%;
		display: flex;
		flex-direction: column;
	}

	.contact > ul > li > a {
		color: var(--black);
	}

	.contact > ul > li > a:visited {
		color: var(--black);
	}
</style>
