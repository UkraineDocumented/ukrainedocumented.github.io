<script>
	export let intro;

	/* import dependencies */
	import { onMount } from "svelte";
	import * as d3 from "d3"; // D3.js

	/* import sub-components */
	import Intro from "./Intro.svelte";

	/* images */
	// images must be in the "public" folder to be accessible here
	let beforeImg = "images/before.jpeg"; // path to before image
	let afterImg = "images/after.jpeg"; //path to after image
	let layer;

	onMount(async () => {
		// DOM elements are first available in onMount
		layer = d3.select("#img-after"); // selecting the after image as the layer
		d3.select(".container").on("mousemove", (event) => {
			console.log(event.pageX);
			// the following code "clips" the layer so only part of it is visible
			layer.style("clip-path", `inset(0 0 0 ${event.pageX}px)`);
		});
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
	</div>
</section>

<style>
	*,
	section {
		display: flex;
		text-align: center;
		justify-content: center;
		margin: 0px;
		padding: 0px;
		border: 0px;
	}
	.container {
		text-align: center;
		justify-content: center;
		cursor: none;
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
</style>
