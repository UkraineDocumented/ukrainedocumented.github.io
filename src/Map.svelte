<script>
	/* import sub-components */
	import Scrolly from "./Scrolly.svelte"; // Russell Goldenberg's Scrolly component
	import Panel from "./Panel.svelte"; // reusable panel component

	/* import dependencies */
	import { onMount } from "svelte";
	import * as d3 from "d3"; // D3.js
	import * as topojson from "topojson"; // TopoJSON

	/* import data */
	import topoData from "./assets/ukraine-regions.json";
	import citiesData from "./assets/ukraine-cities.json";
	import ukraineData from "./assets/ukraine-data.json";

	/* colors */
	const colorA = "#efeff0"; // whitish : background color
	const colorB = "#d5cad6"; // grayish : region border color
	const colorC = "#b29dbc"; // muted purple : label and point color
	const colorD = "#7c6c83"; // dark purple : heading color
	const colorE = "#adb5bd"; // light gray : box shadow color
	const colorF = "#f6bd60"; // yellow : hover color
	const colorG = "#e76f51"; // orange : highlight color

	/* main map container */
	const w = 840;
	const h = 640;
	const m = { top: 20, right: 20, bottom: 20, left: 20 };

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
	let cities = citiesData.filter((d) => d.show == "true"); // filtering major cities to label
	let data = ukraineData.filter((d) => {
		return projection([+d.long, +d.lat]) != null;
	});

	let svg;
	onMount(async () => {
		// DOM elements are first accessible inside onMount
		svg = d3.select("#scrolly").attr("width", w).attr("height", h);
		points = svg
			.selectAll(".point")
			.data(ukraineData)
			.join("circle")
			.attr("cx", (d) => projection([+d.long, +d.lat])[0]) // TO DO: make sure looping correctly
			.attr("cy", (d) => projection([+d.long, +d.lat])[1])
			.attr("r", 3)
			.attr("class", "point");
		playBtn = d3.select(".play-button");
	});

	let currentStep;
	const steps = [
		"<p>Damage to civilian infrastructure</p>",
		"<p>Residential buildings</p>",
		"<p>Hospitals and healthcare providers</p>",
		"<p>Education or childcare</p>",
		"<p>TEST</p>",
	];

	const step0 = function () {
		// default styles
		svg.selectAll(".point").style("fill", colorD).attr("r", 3);
	};

	const step1 = function () {
		svg.selectAll(".point").style("fill", colorD).attr("r", 3); // default styles
		svg
			.selectAll(".point")
			.filter((d) => d.area_type === "Residential")
			.style("fill", colorG)
			.style("opacity", 1)
			.attr("r", 4);
	};

	const step2 = function () {
		svg.selectAll(".point").style("fill", colorD).attr("r", 3); // default styles
		svg
			.selectAll(".point")
			.filter((d) => d.area_type === "Healthcare")
			.style("fill", colorG)
			.style("opacity", 1)
			.attr("r", 4);
	};

	const step3 = function () {
		svg.selectAll(".point").style("fill", colorD).attr("r", 3); // default styles
		svg
			.selectAll(".point")
			.filter((d) => d.area_type === "Education or childcare")
			.style("fill", colorG)
			.style("opacity", 1)
			.attr("r", 4);
	};

	const step4 = function () {};

	/* run code reactively based on scroll position */

	// this "if...else" block will run every time the variable currentStep
	// changes and evaluate differently based on the variable's value
	$: if (currentStep == 0) {
		step0();
	} else if (currentStep == 1) {
		step1();
	} else if (currentStep == 2) {
		step2();
	} else if (currentStep == 3) {
		step3();
	} else if (currentStep == 4) {
		step4();
	}
</script>

<!-- TO DO: separate out into another component -->

<!-- SCROLLY UKRAINE MAP -->
<section>
	<!-- a sticky base map -->
	<div class="map-container">
		<svg id="scrolly">
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
	:global(body) {
		margin: 0px;
		padding: 0px;
	}

	/* TO DO: add variables for colors */

	/* MAP STYLING */
	/* TO DO: add global styles for containers */
	.map-container {
		text-align: center;
		width: 100vw;
		height: 100vh;
		top: 15%;
		margin: auto;
		position: sticky;
		padding-top: 20px;
		overflow: hidden;
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

	/* POINTS STYLING */

	:global(.point) {
		fill: #7c6c83;
		opacity: 0.65;
	}

	:global(.point:hover) {
		fill: #f6bd60;
		opacity: 1;
		stroke: #f6bd60; /* TO DO: fix stroke width/fill on hover */
		stroke-width: 3px;
	}

	:global(.pulse) {
		fill: #e76f51;
		opacity: 0.35;
		stroke: #f6bd60;
		stroke-width: 10px;
	}

	/* TOOLTIP STYLING */

	/* TO DO: make tooltip its own component */
	:global(#tooltip) {
		position: absolute;
		padding: 10px;
		border-radius: 3px;
		width: 200px;
		background-color: #f8f9fa;
		box-shadow: 0px 0px 5px #adb5bd;
		pointer-events: none;
		stroke: black;
	}

	:global(#tooltip p) {
		font-family: "IBM Plex Mono", monospace;
		margin: 0;
		font-size: 12px;
	}

	:global(#tooltip.hidden) {
		display: none;
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
