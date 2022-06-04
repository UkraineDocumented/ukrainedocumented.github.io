<script>
	/* import sub-components */
	import Scrolly from "./Scrolly.svelte"; // Russell Goldenberg's Scrolly component

	/* import dependencies */
	import { onMount } from "svelte";
	import * as d3 from "d3"; // D3.js
	import * as topojson from "topojson"; // TopoJSON

	/* import data */
	import topoData from "./assets/ukraine-regions.json";
	import citiesData from "./assets/ukraine-cities.json";
	import ukraineData from "./assets/ukraine-data.json";

	/* main map container */
	const w = 840 * 1.25;
	const h = 640 * 1.25;
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
	let points;
	let step;

	onMount(async () => {
		// DOM elements are first accessible inside onMount
		svg = d3.select("#scrolly").attr("width", w).attr("height", h);
		points = svg
			.selectAll(".point")
			.data(ukraineData)
			.join("circle")
			.attr("cx", (d) => projection([+d.long, +d.lat])[0]) // TO DO: make sure looping correctly
			.attr("cy", (d) => projection([+d.long, +d.lat])[1]);

		step = d3.selectAll(".step");
	});

	let currentStep;
	const steps = [
		"<p>These dots represents instances where an attack on civilian infrastructure was documented on social media and verified by the Center for Information Resilience's Eyes on Russia project. <font color=#e76f51><b>Residential areas</b></font> were mostly frequently hit, followed by commercial buildings and infrastructure.</p>",
		"<h3>Kharkiv National University of Civil Engineering and Architecture</h3><img src='images/university.jpg' width='100%' alt=''/><p>There have been dozens of attacks involving educational and childcare centers. Footage shared on social media <a href='https://t.me/truexanewsua/36269'>on March 24, 2022</a>, shows the Kharkiv National University of Civil Engineering and Architecture heavily damaged by a strike. The school was founded in 1930 and has trained students from dozens of countries.</p>",
		"<h3>Central City Hospital</h3><video src='images/central-city-hospital.mp4' alt='' width='100%'></video><p>There have also been multiple attacks on healthcare facilities. Footage from <a href='https://twitter.com/EmineDzheppar/status/1501202129586905089'>a Twitter post on March 8, 2022</a> shows only the skeleton of a hospital in Izyum after it was hit by a Russian attack.",
		"<h3>Market</h3><video src='images/market.mp4' alt=''></video><p>There has also been damage to commercial centers, shopping malls and markets. <a href='https://t.me/truexanewsua/33669'>One clip posted on March 16, 2022</a>, shows a market in the heavily attacked Kharkiv city engulfed in flames.</p>",
	];

	const step0 = function () {
		points.style("visibility", "visible");
		step.style("visibility", "visible");
		points.style("opacity", 0.65);
		points
			.filter((d) => d.area_type != "Residential")
			.transition()
			.duration(400)
			.attr("r", 3)
			.attr("class", "point");
		points
			.filter((d) => d.area_type === "Residential")
			.transition()
			.duration(400)
			.style("fill", "var(--orange)")
			.attr("r", 3);
	};

	const step1 = function () {
		points.style("visibility", "hidden");
		step.style("visibility", "visible");
		points
			.filter((d) => d.id === "UW3612")
			.style("fill", "var(--orange)")
			.transition()
			.duration(400)
			.style("opacity", 1)
			.style("visibility", "visible")
			.attr("r", 5);
	};

	const step2 = function () {
		points.style("visibility", "hidden");
		step.style("visibility", "visible");
		points
			.filter((d) => d.id === "UW1895")
			.style("fill", "var(--orange)")
			.transition()
			.duration(400)
			.style("opacity", 1)
			.style("visibility", "visible")
			.attr("r", 5);
	};

	const step3 = function () {
		points.style("visibility", "hidden");
		step.style("visibility", "visible");
		points
			.filter((d) => d.id === "UW2688")
			.style("fill", "var(--orange)")
			.transition()
			.duration(400)
			.style("opacity", 1)
			.style("visibility", "visible")
			.attr("r", 5);
	};

	const step4 = function () {
		points.style("visibility", "visible").style("fill", "var(--purple)");
		step.style("visibility", "visible");
	};

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
	/* MAP STYLING */
	.map-container {
		text-align: center;
		justify-content: center;
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
		fill: var(--lightpurple);
		opacity: 0.9;
	}

	.city-label {
		fill: var(--lightpurple);
		font-size: 12px;
		font-family: "IBM Plex Mono", monospace;
	}

	/* POINTS STYLING */

	:global(.point) {
		position: absolute;
		fill: var(--purple);
		opacity: 0.65;
	}

	:global(.pulse) {
		fill: var(--orange);
		opacity: 0.35;
		stroke: var(--yellow);
		stroke-width: 10px;
	}

	/* STEP OVERLAY CONTENT STYLING */

	/* the container for each step */
	.step {
		height: 120vh;
		display: flex;
		place-items: center;
		justify-content: center;
	}

	/* the content for each step */
	.step-content {
		width: 350px;
		background-color: white;
		color: black;
		font-family: "Public Sans", sans-serif;
		font-size: 1rem;
		line-height: 1.25rem;
		border-radius: 5px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 20px;
		transition: background 500ms ease;
		box-shadow: 1px 1px 5px #adb5bd;
		z-index: 10;
		opacity: 0.85;
	}

	/* this makes the element stand out if it is active */
	.step.active .step-content {
		opacity: 1;
	}
</style>
