<!-- 
	[Tooltip.svelte]
	This is the component for a tooltip. It holds the basic styling and structure
	for a tooltip. It should be paired with tooltip.js, which recognizes mouse
	events and handles the actions.
-->
<script>
	export let content;
	export let x;
	export let y;
</script>

<div class="tooltip" style="top: {y + 20}px; left: {x - 150}px;">
	{@html content}
</div>

<style>
	.tooltip {
		position: absolute;
		padding: 10px;
		border-radius: 3px;
		width: 300px;
		background-color: var(--whitish);
		box-shadow: 1px 1px 5px #adb5bd;
		pointer-events: none;
		stroke: black;
	}

	:global(.tooltip p) {
		font-family: "IBM Plex Mono", monospace;
		margin: 0;
		font-size: 12px;
	}
</style>
