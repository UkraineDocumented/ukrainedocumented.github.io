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
			font-family: 'Cardo', serif;
			font-family: 'DM Sans', sans-serif;
			font-family: 'IBM Plex Mono', monospace;
			font-family: 'IBM Plex Sans', sans-serif;
	-->

	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Cardo:ital,wght@0,400;0,700;1,400&family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=IBM+Plex+Mono:ital,wght@0,400;0,700;1,400;1,700&family=IBM+Plex+Sans:ital,wght@0,200;0,400;0,600;0,700;1,200;1,400;1,600;1,700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<Slider />

<Title
	title="Ukraine's Lost Cities, Documented"
	byline="Christopher Giles and Elena Shao"
/>
<Content
	subtitle=""
	content="<p>Russia’s invasion of Ukraine has turned many areas to rubble and caused the deaths of thousands of people.</p> 
	<p>Since Russia’s large-scale invasion of its neighbor, open-source researchers have been documenting these events by collating and verifying social media posts that show attacks.</p>
	<p>According to this data collected by the Centre for Information Resilience, the destruction of civilian infrastructure is the most frequently recorded incident, accounting for over a third of events.</p>"
/>

<Timelapse />

<Map />
