<script>
	export let type = "play-button"; // a default value
</script>

<button class={type}>
	<slot />
</button>

<style>
	button {
		cursor: pointer;
		text-align: center;
		border: none;
		padding: 10px 15px;
		text-decoration: none;
		font-size: 14px;
		font-family: "IBM Plex Mono", monospace;
	}

	.play-button {
		background-color: #efeff0;
		color: #70587c;
	}

	.play-button:hover {
		background-color: #f6bd60;
	}
</style>
