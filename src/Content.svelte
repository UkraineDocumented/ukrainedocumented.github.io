<script>
</script>

<section>
	<div class="container">
		<p><slot name="content" /></p>
	</div>
</section>

<style>
	section {
		text-align: center;
		width: 100vw;
		overflow: hidden;
	}

	p {
		text-align: left;
		margin: 10px;
		font-size: 1.25rem;
		font-weight: 400;
		line-height: 1.5rem;
		font-family: "Public Sans", sans-serif;
	}

	.container {
		text-align: center;
		width: 650px;
		margin: auto;
		position: sticky;
		padding-bottom: 10vh;
	}
</style>
