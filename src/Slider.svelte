<script>
	let before = "public/images/before.jpeg";
	let after = "public/images/after.jpeg";
</script>

<section>
	<div id="slider-container">
		<img src={before} alt="before" />
		<div id="layer">
			<img src={after} alt="after" />
		</div>
	</div>
</section>

<style>
	#slider-container {
		position: relative;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		cursor: col-resize;
	}

	img {
		display: block;
		max-width: 100vw;
		max-height: 100vh;
	}
</style>
