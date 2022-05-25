<script>
	/* import dependencies */
	import { onMount } from "svelte";
	import * as d3 from "d3"; // D3.js
	import * as topojson from "topojson"; // TopoJSON

	import Tooltip from "./Tooltip.svelte";

	/* import data */
	import topoData from "./assets/ukraine-regions.json";
	import citiesData from "./assets/ukraine-cities.json";
	import ukraineData from "./assets/ukraine-data.json";

	/* main map container */
	const w = 840 * 1.5;
	const h = 640 * 1.5;
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
	onMount(async () => {
		// DOM elements are first accessible inside onMount
		svg = d3.select("#explore").attr("width", w).attr("height", h);
	});
</script>

<section>
	<!-- a sticky base map -->
	<div class="map-container">
		<svg id="explore">
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

			{#each data as d}
				<circle
					cx={projection([+d.long, +d.lat])[0]}
					cy={projection([+d.long, +d.lat])[1]}
					r="5px"
					opacity="0.65"
					fill="#7c6c83"
				/>
			{/each}
		</svg>
	</div>
</section>

<style>
	section {
		text-align: center;
		width: 100vw;
		overflow: hidden;
		padding-top: 20px;
	}
	#expore {
		width: 1260px;
		height: 960px;
	}
	/* MAP STYLING */
	/* TO DO: add global styles for containers */
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
		fill: #b29dbc;
		opacity: 0.9;
	}

	.city-label {
		fill: #b29dbc;
		font-size: 12px;
		font-family: "IBM Plex Mono", monospace;
	}
</style>
