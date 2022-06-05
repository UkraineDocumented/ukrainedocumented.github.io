<script>
</script>

<section>
	<div id="container">
		<h1><slot name="hed" /></h1>
		<h3>By <slot name="byline" /></h3>
	</div>
</section>

<style>
	section {
		padding-top: 20vh;
		text-align: center;
		width: 100vw;
		overflow: hidden;
	}

	h1 {
		text-align: center;
		margin: 10px;
		font-size: 50px;
		font-weight: 700;
		font-family: "Space Grotesk", sans-serif;
	}

	h3 {
		text-align: center;
		text-align: center;
		margin: 10px;
		padding-top: 20px;
		font-size: 18px;
		font-family: "IBM Plex Mono", monospace;
		text-transform: uppercase;
	}

	#container {
		text-align: center;
		width: 800px;
		margin: auto;
		position: relative;
	}
</style>
