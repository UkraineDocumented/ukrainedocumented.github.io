<script>
	import Slider from "./Slider.svelte"; // hero slider image component
	import Timelapse from "./Timelapse.svelte"; // timelapse map component
	import Content from "./Content.svelte"; // reusable text content component
	import Title from "./Title.svelte"; // title content component
	import Map from "./Map.svelte"; // scrolly map component
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
	intro="<p>Russia’s attacks on civilian infrastructure in Ukraine has turned many areas to unrecognizable rubble. Ukranians have not only lost their friends and family members, but also their homes, hospitals, schools and religious buildings.</p> 
	<p>This is the war in Ukraine, documented on social media by the people whose lives have been upturned by the attacks.</p>"
/>

<Title title="Ukraine, Documented" byline="Christopher Giles and Elena Shao" />

<Content
	subtitle=""
	content="<p>More than 3,600 civilians have been killed in the 12 weeks since Russia first began its invasion of Ukraine, including more than 240 children, according to the  United Nations high commissioner for human rights. Over 1,500 civilian structures have been damaged or toppled, including hospitals, childcare centers, schools and shopping centers.</p> 
	<p>Ukrainian residents have been documenting and recording the attacks that have obliterated parts of their country, posting videos and images on social media sites like Twitter, Telegram and YouTube.</p>
	<p>After collecting and verifying many of the social media posts, open-source researchers at the Centre for Information Resilience found that destruction of civilian infrastructure was the most frequently recorded incident. Civilian targeted attacks account for over a third of over 3,000 conflict-related events documented in Ukraine and Russia’s borderland regions, so far.</p>"
/>

<Timelapse />

<Map />
