<script>
	export let content;
</script>

<div class="container"><h1>{@html content}</h1></div>

<style>
	.container {
		text-align: center;
		justify-content: center;
		width: 60vw;
		margin: auto;
		position: absolute;
	}
	h1 {
		padding-top: 30vh;
		text-align: center;
		margin: 10px;
		color: white;
		text-shadow: 0px 0px 10px #000;
		font-weight: 500;
		font-size: 35px;
		font-family: "Public Sans", sans-serif;
	}
</style>
