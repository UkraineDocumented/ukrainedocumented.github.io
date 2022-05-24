<script>
	export let title;
	export let byline;
</script>

<section>
	<div class="container">
		<h1>{title}</h1>
		<p>By {byline}</p>
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
	p {
		text-align: center;
		text-align: center;
		margin: 10px;
		padding-top: 20px;
		font-size: 18px;
		font-family: "IBM Plex Mono", monospace;
		text-transform: uppercase;
	}

	.container {
		text-align: center;
		width: 800px;
		margin: auto;
		position: relative;
	}
</style>
