<script>
	export let intro;
	export let beforeImg; // path to before image
	export let afterImg; //path to after image

	/* import dependencies */
	import { onMount } from "svelte";
	import * as d3 from "d3"; // D3.js

	/* import sub-components */
	import Intro from "./Intro.svelte";

	/* images */
	// images must be in the "public" folder to be accessible here

	let layer;
	let info;

	onMount(async () => {
		/* SLIDER HEADER IMAGE */

		layer = d3.select("#img-after"); // selecting the after image as the layer
		d3.select(".container").on("mousemove", (event) => {
			// the following code "clips" the layer so only part of it is visible
			layer.style("clip-path", `inset(0 0 0 ${event.pageX}px)`);
		});

		/* CAPTION TOOLTIP */

		let caption = d3
			.select("body")
			.append("div")
			.attr("id", "caption")
			.classed("hidden", true);

		let mousemove = (event) => {
			d3.select("#caption")
				.html(
					"<p>The satellite image on the left is taken from February 22, 2022, two days before Russia's invasion of Ukraine. The right-side image is from May 1, 2022. Much of the steel works has been destroyed. <i>(Credit: Planet Labs PBC)</i></p>"
				)
				.style("left", event.pageX - 150 + "px")
				.style("top", event.pageY + 20 + "px")
				.transition()
				.duration(200)
				.style("opacity", 1);
			d3.select("#caption").classed("hidden", false);
		};

		let mouseout = function (event, d) {
			d3.select("#caption").transition().duration(200).style("opacity", 0);
		};

		info = d3.select("#info");
		info.on("mousemove", mousemove).on("mouseout", mouseout);
	});
</script>

<section>
	<div class="container">
		<div
			class="layer"
			id="img-before"
			style="background-image: url({beforeImg});"
		/>
		<div
			class="layer"
			id="img-after"
			style="background-image: url({afterImg});"
		/>
		<Intro content={intro} />
		<div id="info">WHAT'S PICTURED?</div>
	</div>
</section>

<style>
	*,
	section {
		display: flex;
		margin: 0px;
		padding: 0px;
		border: 0px;
	}
	.container {
		text-align: center;
		justify-content: center;
		cursor: ew-resize;
		position: relative;
		overflow: visible;
		height: 100vh;
		width: 100vw;
	}
	.container .layer {
		height: 100vh;
	}
	#img-before {
		max-width: 100vw;
		min-width: 100vw;
		position: absolute;
		background-size: 100% auto !important;
	}
	#img-after {
		max-width: 100vw;
		min-width: 100vw;
		position: absolute;
		background-size: 100% auto !important;
	}

	#info {
		position: absolute;
		color: white;
		font-size: 14px;
		font-weight: 800;
		text-transform: uppercase;
		font-family: "IBM Plex Mono", monospace;
		text-shadow: 0px 0px 10px #000;
		bottom: 20vh;
	}

	:global(#caption) {
		position: absolute;
		padding: 10px;
		border-radius: 3px;
		width: 300px;
		background-color: #f8f9fa;
		box-shadow: 0px 0px 5px #adb5bd;
		pointer-events: none;
		stroke: black;
	}

	:global(#caption p) {
		font-family: "IBM Plex Mono", monospace;
		margin: 0;
		font-size: 12px;
	}

	:global(#caption.hidden) {
		display: none;
	}
</style>
