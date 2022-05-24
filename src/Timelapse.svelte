<script>
	import Button from "./Button.svelte"; // reusable button component
	import Panel from "./Panel.svelte"; // reusable panel component

	/* import dependencies */
	import { onMount } from "svelte";
	import * as d3 from "d3"; // D3.js
	import * as topojson from "topojson"; // TopoJSON

	/* import data */
	import topoData from "./assets/ukraine-regions.json";
	import citiesData from "./assets/ukraine-cities.json";
	import ukraineData from "./assets/ukraine-data.json";

	let svg;
	let timelapse;
	let label;
	let tooltip;
	let playButton;
	let timer;
	let inverted;
	let pointer = 1;

	/***********/
	/*** MAP ***/
	/***********/

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

	/***********************/
	/*** PLOTTING POINTS ***/
	/***********************/
	/* adapted from: https://bl.ocks.org/officeofjane/47d2b0bfeecfcb41d2212d06d095c763 */

	const start = new Date("02/24/22");
	const end = new Date("04/19/22");
	const numDays = Math.round((end - start) / (1000 * 60 * 60 * 24)); // denominator: # of miliseconds in a day
	const formatTime = d3.timeFormat("%m/%d/%y"); // i.e. returns 02/14/22
	const parseTime = d3.timeFormat("%B %e, %A"); // i.e. returns February 14, 2022
	const parseMonthDay = d3.timeFormat("%B %e"); // i.e.
	const parseDayOfWeek = d3.timeFormat("%A"); // i.e. returns

	const xScale = d3
		.scaleTime()
		.domain([start, end])
		.range([1, numDays])
		.clamp(true); // allows the domain value to always be in range

	function update(data, inverted) {
		// filter and plot points in a timelapse fashion
		let filtered = data.filter((d) => d.date <= formatTime(inverted));
		timelapse = svg
			.selectAll(".timelapse-point")
			.data(filtered)
			.join((enter) =>
				enter
					.append("circle")
					.attr("class", "timelapse-point")
					.attr("r", 3)
					.text("test")
					.transition()
					.duration(300)
					.attr("class", "pulse")
					.transition()
					.duration(300)
					.attr("class", "timelapse-point")
			)
			.attr("cx", (d) => projection([+d.long, +d.lat])[0]) // TO DO: make sure looping correctly
			.attr("cy", (d) => projection([+d.long, +d.lat])[1]);

		//let monthDay = parseMonthDay(inverted);
		//let dayOfWeek = parseDayOfWeek(inverted);

		label.data(filtered).text(parseTime(inverted));
	}

	onMount(async () => {
		// DOM elements are first accessible inside onMount
		svg = d3.select("svg").attr("width", w).attr("height", h);
		playButton = d3.select(".play-button");
		label = svg
			.append("text")
			.text(parseTime(start))
			.attr("id", "label")
			.attr("x", m.left)
			.attr("y", h - 3 * m.bottom);

		playButton.on("click", function () {
			const button = d3.select(this);
			if (button.text() == "Play" || button.text() == "Restart") {
				timer = setInterval(function () {
					inverted = xScale.invert(pointer);
					update(data, inverted);
					if (pointer < numDays) {
						pointer++;
					} else {
						clearInterval(timer);
						pointer = 1;
						button.text("Restart");
					}
				}, 450);
				button.text("Pause");
			} else {
				clearInterval(timer);
				button.text("Play");
			}
		});
	});
</script>

<section>
	<Button type="play-button">Play</Button>
	<div class="timelapse-container">
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
</section>

<style>
	section {
		text-align: center;
		width: 100vw;
		overflow: hidden;
		padding-top: 20px;
	}
	.timelapse-container {
		text-align: center;
		width: 100vw;
		height: 100vh;
		margin: auto;
		position: sticky;
		padding: 20px;
	}

	:global(.timelapse-point) {
		fill: #7c6c83;
		opacity: 0.65;
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

	:global(#label) {
		background-color: #efeff0;
		font-weight: 600;
		border: none;
		padding: 10px 15px;
		fill: #70587c;
		font-size: 16px;
		font-family: "IBM Plex Mono", monospace;
		text-decoration: none;
	}
</style>
