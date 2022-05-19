<script>
	/* import dependencies */
	import { onMount } from "svelte";
	import * as d3 from "d3"; // D3.js

	export let content;
</script>

<div class="container"><p>{content}</p></div>

<style>
	.container {
		text-align: center;
		justify-content: center;
		width: 60vw;
		margin: auto;
		position: absolute;
	}
	p {
		padding-top: 40vh;
		text-align: center;
		margin: 10px;
		color: white;
		text-shadow: 0px 0px 10px #000;
		font-weight: 700;
		font-size: 40px;
		font-family: "IBM Plex Sans", sans-serif;
	}
</style>
