<script>
</script>

<section>
	<div id="container">
		<p><slot name="content" /></p>
	</div>
</section>

<style>
	section {
		text-align: center;
		width: 100vw;
		overflow: hidden;
	}

	#container {
		text-align: center;
		width: 40vw;
		margin: auto;
		position: sticky;
	}

	p {
		text-align: left;
		margin: 10px;
		font-size: 1.25rem;
		font-weight: 400;
		line-height: 1.5rem;
		font-family: "Public Sans", sans-serif;
	}
</style>
