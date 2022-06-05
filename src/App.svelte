<!-- 
	UKRAINE, DOCUMENTED 
	By: Elena Shao and Christopher Giles

	COMM 277T: Building News Applications
	Spring, 2022 
	Instructor: Serdar Tumgoren

	--------------------------------------

	[App.svelte]
	This is the top-level Svelte component, which holds most of the text for this project.
-->
<script>
	/* importing sub-components */
	import Slider from "./Slider.svelte"; // hero slider image component
	import Timelapse from "./Timelapse.svelte"; // timelapse map component
	import Title from "./Title.svelte"; // title content component
	import Map from "./Map.svelte"; // scrolly map component
	import Content from "./Content.svelte"; // reusable text content component
	import Image from "./Image.svelte"; // reusable wide image component
	import Button from "./Button.svelte"; // reusable button component
	import Footer from "./Footer.svelte";
</script>

<svelte:head>
	<!-- importing Google Fonts -->
	<!-- 
		CSS rules to specify the families:
			font-family: 'IBM Plex Mono', monospace;
			font-family: 'Libre Baskerville', serif;
			font-family: 'Public Sans', sans-serif;
			font-family: 'Space Grotesk', sans-serif;
	-->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,700;1,400;1,700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Public+Sans:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<Slider beforeImg="images/before.jpg" afterImg="images/after.jpg">
	<span
		><p>
			Russia's attacks on civilian infrastructure in Ukraine have turned many
			areas to unrecognizable rubble. Ukranians have not only lost their friends
			and family members, but also their homes, hospitals, schools and religious
			buildings.
		</p>
		<p>
			This is the war in <span style="color:var(--yellow)"
				>Ukraine, documented</span
			> on social media by the people whose lives have been upturned by the attacks.
		</p></span
	></Slider
>

<Title>
	<span slot="hed">Ukraine, Documented</span>
	<span slot="byline"
		><a href="https://github.com/csgsf">Christopher Giles</a> and
		<a href="https://github.com/elenals">Elena Shao</a></span
	>
</Title>

<Content
	><span slot="content"
		><p>
			More than 3,600 civilians have been killed in the 12 weeks since Russia
			first began its invasion of Ukraine, including more than 240 children,
			according to the United Nations high commissioner for human rights.
		</p>
		<p>
			Over 1,500 civilian structures have been damaged or toppled, including
			hospitals, childcare centers, schools and shopping centers.
		</p>
		<p>
			<span><Button type="play-button">Play</Button></span> the animation on the
			map below to reveal a timelapse of just some of the recorded damage to civilian
			infrastructure in Ukraine since Russia's invasion began on February 24, 2022.
			Each entry from the data used in the map is an “event” — a verified video clip
			or image from a social media post.
		</p></span
	>
</Content>

<Timelapse />

<Content
	><span slot="content"
		><p>
			Ukrainian residents have been documenting and recording the attacks that
			have obliterated parts of their country, posting videos and images on
			social media sites like Twitter, Telegram and YouTube.
		</p>
		<p>
			After collecting and verifying many of the social media posts, open-source
			researchers at the <a
				href="https://www.info-res.org/post/eyes-on-russia-documenting-conflict-and-disinformation-in-the-kremlin-s-war-on-ukraine"
				>Centre for Information Resilience</a
			> found that destruction of civilian infrastructure was the most frequently
			recorded incident. Civilian targeted attacks account for over a third of over
			3,000 conflict-related events documented in Ukraine and Russia's borderland
			regions, so far.
		</p></span
	></Content
>

<Map />

<div class="spacer" />

<Image src="images/after.jpg" alt=""
	>An satellite image from Planet Labs taken on May 1, 2022. Much of the
	Azovstal Iron and Steel Works has been destroyed.
</Image>

<Content
	><span slot="content">
		<p>
			The Azovstal Iron and Steel Works, a huge metallurgical plant on the
			outskirts of Mariupol in Eastern Ukraine, has been largely left in ruins.
		</p>
		<p>
			The facilities were heavily attacked by the Russian military for weeks and
			were targeted by missiles and shelling. In March, Ukrainian MP Serhiy
			Taruta said that Russian forces had "practically destroyed the factory".
		</p>
		<p>
			Underneath the plant is a network of tunnels and bunkers where Ukrainian
			forces stayed and refused to surrender. The works were one of the last
			centers of Ukrainian resistance in Mariupol and the facility has its own
			access to the port. It is one of the largest facilities of its kind in
			Ukraine.
		</p>
		<p>
			And in late May, it was reported that surrendered Ukrainian fighters left
			the factory.
		</p>
	</span>
</Content>

<div class="spacer" />

<Image src="images/ukraine-geo.png" alt=""
	>Using this video, originally posted on Telegram on 9 March 2022, it’s
	possible to cross-reference the damage on the ground with satellite imagery
	provided by Planet Labs PBC.</Image
>

<Content
	><span slot="content">
		<p>
			In the nearby streets of Mariupol, debris scattered the roads and trees
			were fallen. There’s a cavernous hole stands in a large building that is
			part of one of the oldest universities in the area.
		</p>
		<p>
			Footage shows Pryazovskyi State Technical University, which trains
			thousands of students in technical skills to work in the nearby
			steelworks, heavily damaged.
		</p></span
	></Content
>

<div class="spacer" />

<Footer
	>To see learn more and see the documentation and all of the code for this
	project, head over to our <a
		href="https://github.com/UkraineDocumented/ukrainedocumented.github.io"
		>GitHub Page.</a
	></Footer
>

<div class="spacer" />

<div class="spacer" />

<style>
	:global(body) {
		margin: 0px;
		padding: 0px;
		background-color: #e0dae3;
	}

	/* color palette */
	:root {
		--whitish: #efeff0;
		--yellow: #f6bd60;
		--orange: #e76f51;
		--purple: #7c6c83;
		--lightpurple: #b29dbc;
		--lighterpurple: #d5cad6;
	}

	/* LINKS STYLING */

	a {
		display: inline-block;
		position: relative;
		color: var(--purple);
		text-decoration: none;
	}

	a:after {
		content: "";
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		height: 3px;
		left: 0;
		bottom: 0;
		background-color: var(--purple);
		transform-origin: bottom right;
		transition: transform 0.25s ease-out;
	}

	a:hover:after {
		transform: scaleX(1);
		transform-origin: bottom left;
	}

	.spacer {
		width: 100vw;
		height: 10vh;
	}
</style>
