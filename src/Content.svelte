<script>
	export let subtitle;
</script>

<section>
	<div class="container">
		<h2>{subtitle}</h2>
		<p><slot name="content" /></p>
	</div>
</section>

<style>
	section {
		text-align: center;
		width: 100vw;
		overflow: hidden;
	}
	h2 {
		text-align: center;
		margin: 10px;
		padding-top: 20px;
		font-size: 30px;
		font-weight: 900;
		font-family: "Public Sans", sans-serif;
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
	}
</style>
