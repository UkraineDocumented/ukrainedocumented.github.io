<script>
	export let subtitle;
	export let content;
</script>

<section>
	<div class="container">
		<h2>{subtitle}</h2>
		<p>{@html content}</p>
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
		font-size: 1.2rem;
		font-weight: 400;
		line-height: 1.2rem;
		font-family: "Public Sans", sans-serif;
	}

	.container {
		text-align: center;
		width: 650px;
		margin: auto;
		position: sticky;
	}
</style>
