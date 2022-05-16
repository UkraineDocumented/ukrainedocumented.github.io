<script>
	/***************/
	/*** IMPORTS ***/
	/***************/

	/* import sub-components */
	import Scrolly from "./Scrolly.svelte"; // Russell Goldenberg's Scrolly component

	/* import dependencies */
	import { tweened } from "svelte/motion";
	import { onMount } from "svelte";
	import * as d3 from "d3"; // D3.js
	import * as topojson from "topojson"; // TopoJSON

	/* import data */
	import topoData from "./assets/ukraine-regions.json";
	import citiesData from "./assets/ukraine-cities.json";
	import ukraineData from "./assets/ukraine-data.json";

	/**************/
	/*** SET-UP ***/
	/**************/

	/* colors */
	const colorA = "#efeff0"; // whitish background color
	const colorB = "#d5cad6"; // grayish region border color
	const colorC = "#b29dbc"; // muted purple label and point color
	const colorD = "#70587c"; // saturated purple heading color
	const colorE = "#adb5bd"; // light gray box shadow color
	const colorF = "#f6bd60"; // yellow active color
	const colorG = "#e76f51"; // orange pulse color

	/* main map container */
	const w = 840;
	const h = 640;
	const m = { top: 20, right: 20, bottom: 20, left: 20 };

	/***************/
	/*** SCROLLY ***/
	/***************/

	let currentStep;
	const steps = ["Step 0", "Step 1", "Step 2"];

	/* run code reactively based on scroll position */

	// this "if...else" block will run every time the variable currentStep
	// changes and evaluate differently based on the variable's value
	$: if (currentStep == 0) {
		console.log("Step 0");
	} else if (currentStep == 1) {
		console.log("Step 1");
	} else if (currentStep == 2) {
		console.log("Step 2");
	}

	/***********/
	/*** MAP ***/
	/***********/

	/* map definitions */
	const topo = topojson.feature(topoData, topoData.objects.UKR_adm1); // a topojson method that creates a geojson object
	const geo = topo.features; // accesses the features property of the newly created  geojson object

	const projection = d3.geoAlbers().rotate([-30, 0, 0]);
	const path = d3.geoPath().projection(
		// a projection’s .fitExtent() method sets the projection’s
		// to fit within a given bounding box
		projection.fitExtent(
			[
				[m.top, m.left],
				[w - m.bottom, h - m.right],
			],
			topo
		)
	);

	/* onMount (Svelte Lifecycle) */
	let svg;
	onMount(async () => {
		// DOM elements are first accessible inside onMount
		svg = d3.select("svg").attr("width", w).attr("height", h);
	});

	let cities = citiesData.filter((d) => d.show == "true"); // filtering major cities to label
</script>

<svelte:head>
	<!-- IMPORT GOOGLE FONTS -->
	<!-- 
		CSS rules to specify the families:
		font-family: 'IBM Plex Mono', monospace;
		font-family: 'Space Grotesk', sans-serif;
		font-family: 'Spectral', serif;
	-->

	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,400;0,700;1,400;1,700&family=Space+Grotesk:wght@400;500;600;700&family=Spectral:ital,wght@0,400;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<!-- SCROLLY UKRAINE MAP -->
<section>
	<!-- a sticky base map -->
	<div class="map-container">
		<svg>
			<!-- oblasts -->
			{#each geo as g}
				<path d={path(g)} class="regions" />
			{/each}
			<!-- plotting major cities -->
			{#each cities as city}
				<!-- points -->
				<rect
					x={projection([+city.lng, +city.lat])[0]}
					y={projection([+city.lng, +city.lat])[1]}
					width="5px"
					height="5px"
					fill="steelblue"
					class="cities"
				/>
				<!-- labels -->
				<text
					x={projection([+city.lng, +city.lat])[0]}
					y={projection([+city.lng, +city.lat])[1]}
					dx="10"
					dy="7"
					class="city-label"
				>
					{city.city.toUpperCase()}
				</text>
			{/each}
		</svg>
	</div>

	<!-- a scrolly container -->
	<Scrolly bind:value={currentStep}>
		{#each steps as text, i}
			<!-- set an "active" class to the step content if the "currentStep" is 
      equal to the step index -->
			<div class="step" class:active={currentStep === i}>
				<div class="step-content">
					{@html text}
				</div>
			</div>
		{/each}
	</Scrolly>
</section>

<style>
	/* MAP STYLING */

	.map-container {
		width: 840px;
		height: 640px;
		top: 5%;
		margin: auto;
		position: sticky;
		padding: 20px;
	}

	.regions {
		fill: #efeff0;
		stroke: #d5cad6;
		stroke-width: 1.5px;
	}

	.cities {
		fill: #b29dbc;
		opacity: 0.9;
	}

	.city-label {
		fill: #b29dbc;
		font-size: 12px;
		font-family: "IBM Plex Mono", monospace;
	}

	/* STEP OVERLAY CONTENT STYLING */

	/* the container for each step */
	.step {
		height: 80vh;
		display: flex;
		place-items: center;
		justify-content: center;
	}

	/* the content for each step */
	.step-content {
		background-color: #efeff0;
		color: #ccc;
		font-family: "IBM Plex Mono", monospace;
		font-size: 12px;
		border-radius: 5px;
		padding: 0.5rem 1rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		transition: background 500ms ease;
		box-shadow: 1px 1px 5px #adb5bd;
		z-index: 10;
	}

	/* this makes the element stand out if it is active */
	.step.active .step-content {
		background: white;
		color: black;
	}
</style>
