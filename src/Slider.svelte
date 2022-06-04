<script>
	export let beforeImg; // path to before image
	export let afterImg; //path to after image

	/* import dependencies */
	import { onMount } from "svelte";
	import * as d3 from "d3"; // importing D3.js

	/* import sub-components */
	import { tooltip } from "./tooltip"; // a tooltip function to handle mouse event

	let layer;

	onMount(async () => {
		layer = d3.select("#img-after"); // selecting the after image as the layer
		d3.select("#container").on("mousemove", (event) => {
			// the following code "clips" the layer so only part of it is visible
			layer.style("clip-path", `inset(0 0 0 ${event.pageX}px)`);
		});
	});
</script>

<section>
	<div id="container">
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

		<div id="intro"><h1><slot /></h1></div>

		<span
			id="info"
			content="<p>The satellite image on the left is taken from February 22, 2022, two days before Russia’s invasion of Ukraine. The right-side image is from May 1, 2022. Much of the steel works has been destroyed. <i>(Credit: Planet Labs PBC)</i></p> "
			use:tooltip>WHAT'S PICTURED?</span
		>
	</div>
</section>

<style>
	*,
	section {
		text-align: center;
		justify-content: center;
		display: flex;
		margin: 0px;
		padding: 0px;
		border: 0px;
	}

	/* SLIDER HERO IMAGE STYLING */

	#container {
		text-align: center;
		justify-content: center;
		cursor: ew-resize;
		position: relative;
		overflow: visible;
		height: 100vh;
		width: 100vw;
	}

	#container .layer {
		height: 100vh;
	}

	#img-before {
		max-width: 100vw;
		min-width: 100vw;
		position: absolute;
		background-size: 100% auto !important;
		filter: brightness(70%) contrast(120%);
	}

	#img-after {
		max-width: 100vw;
		min-width: 100vw;
		position: absolute;
		background-size: 100% auto !important;
		filter: brightness(70%) contrast(120%);
	}

	/* INTRODUCTORY TEXT STYLING */

	#intro {
		position: absolute;
		width: 70vw;
		top: 25vh;
		color: white;
		text-shadow: 0px 0px 10px #000;
		font-size: 1.75rem;
		font-family: "Public Sans", sans-serif;
	}

	/* TOOLTIP TEXT STYLING */

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
</style>
