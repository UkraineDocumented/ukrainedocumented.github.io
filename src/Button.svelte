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
	}

	.primary {
		background-color: #efeff0;
		color: #70587c;
		font-size: 14px;
		font-family: "IBM Plex Mono", monospace;
	}

	.primary:hover {
		background-color: #f6bd60;
	}
</style>
