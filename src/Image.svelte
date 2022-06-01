<script>
	export let src;
	export let alt;
</script>

<section>
	<div id="image">
		<img {src} {alt} />
		<div id="caption">
			<p>
				<slot />
			</p>
		</div>
	</div>
</section>

<style>
	p {
		color: #e76f51;
		font-size: 0.85rem;
		font-family: "IBM Plex Mono", monospace;
	}

	#image {
		width: 60vw;
		margin: auto;
	}

	img {
		max-width: 100%;
	}

	#caption {
		width: 15vw;
	}
</style>
