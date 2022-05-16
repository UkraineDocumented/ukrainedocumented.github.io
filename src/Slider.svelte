<script>
	import * as d3 from "d3"; // D3.js

	let beforeImg = "images/before.jpeg";
	let afterImg = "images/after.jpeg";

	const before = d3.select("#before").node();
</script>

<section>
	<div id="slider-container">
		<div class="layer" id="before">
			<img src={beforeImg} alt="before" />
		</div>
		<div class="layer" id="after">
			<img src={afterImg} alt="after" />
		</div>
	</div>
</section>

<style>
	*,
	section {
		margin: 0px;
		padding: 0px;
		border: 0px;
	}

	#slider-container {
		position: relative;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		cursor: col-resize;
	}

	img {
		display: block;
		position: absolute;
		width: 100vw;
		object-fit: cover;
	}

	.layer {
		overflow: hidden;
		width: 100vw;
	}
</style>
