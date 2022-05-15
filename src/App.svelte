<script>
	/* IMPORTS */

	/* import sub-components */
	import Scrolly from "./Scrolly.svelte"; // Russell Goldenberg's Scrolly component

	import { tweened } from "svelte/motion";
	import { onMount } from "svelte";
	import * as d3 from "d3"; // D3.js
	import * as topojson from "topojson"; // TopoJSON

	/* import data */
	import topo from "./assets/ukraine-regions.json";
	import cities from "./assets/ukraine-cities.json";

	/* SET-UP/CONFIG */

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

	/* HANDLING THE SCROLLY */
	let currentStep;
	const steps = ["Step 0", "Step 1", "Step 2"];

	/* run code reactively based on scroll position
	 * this "if...else" block will run every time the variable
	 * currentStep changes and evaluate differently based on
	 * the variable's value */

	$: if (currentStep == 0) {
		console.log("Step 0");
	} else if (currentStep == 1) {
		console.log("Step 1");
	} else if (currentStep == 2) {
		console.log("Step 2");
	}
</script>

<svelte:head>
	<!-- IMPORT GOOGLE FONTS -->
	<!-- CSS rules to specify the families:
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

<section>
	<!-- A SCROLLY CONTAINER -->
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
		background-color: #f8f9fa;
		color: #ccc;
		font-family: "IBM Plex Mono", monospace;
		font-size: 12px;
		border-radius: 5px;
		padding: 0.5rem 1rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		transition: background 500ms ease;
		box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
		z-index: 10;
	}

	/* this makes the element stand out if it is active */
	.step.active .step-content {
		background: white;
		color: black;
	}
</style>
