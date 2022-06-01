<script>
	import Slider from "./Slider.svelte"; // hero slider image component
	import Timelapse from "./Timelapse.svelte"; // timelapse map component
	import Content from "./Content.svelte"; // reusable text content component
	import Title from "./Title.svelte"; // title content component
	import Map from "./Map.svelte"; // scrolly map component
	import Image from "./Image.svelte";

	import { tooltip } from "./tooltip";
</script>

<svelte:head>
	<!-- IMPORT GOOGLE FONTS -->
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

<Slider
	beforeImg="images/before.jpg"
	afterImg="images/after.jpg"
	intro="<p>Russia’s attacks on civilian infrastructure in Ukraine has turned many areas to unrecognizable rubble. Ukranians have not only lost their friends and family members, but also their homes, hospitals, schools and religious buildings.</p> 
	<p>This is the war in Ukraine, documented on social media by the people whose lives have been upturned by the attacks.</p>"
/>

<Title title="Ukraine, Documented" byline="Christopher Giles and Elena Shao" />

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
			Each entry from the data used in the map below is an “event” — a verified
			video clip or image from a social media post that shows damage to civilian
			infrastructure. The destruction can vary from destruction to one part of a
			structure or destruction to multiple locations in one area.
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
				href="’https://www.info-res.org/post/eyes-on-russia-documenting-conflict-and-disinformation-in-the-kremlin-s-war-on-ukraine’"
				>Centre for Information Resilience</a
			> found that destruction of civilian infrastructure was the most frequently
			recorded incident. Civilian targeted attacks account for over a third of over
			3,000 conflict-related events documented in Ukraine and Russia’s borderland
			regions, so far.
		</p></span
	></Content
>

<Map />

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
	</span>
</Content>

<Image src="images/ukraine-geo.png" alt="" />

<Content
	><span slot="content"
		><p>
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

<style>
	:global(body) {
		margin: 0px;
		padding: 0px;
		background-color: white;
	}
	:global(a) {
		color: #7c6c83;
		text-decoration: none;
		transition: 300;
	}

	:global(a:hover) {
		color: white;
		text-decoration: none;
		background-color: #f6bd60;
	}
</style>
