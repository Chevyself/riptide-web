<script lang="ts">
</script>

<style lang="scss">
.center {
	display: grid;
	place-items: center;
}
#bg {
  height: 100%;
  width: 100%;
  
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
section {
  height: 100%;
  width: 100%;
}
</style>

<svelte:head>
	<title>Riptide</title>
</svelte:head>

<div style="background-image: url('bg.gif'); position: absolute;" id="bg">
	<section style="background:transparent;" id="landing">

	</section>

	<section id="track" class="center">
		<!-- Embed Spotify track -->
		<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3JvrhDOgAt6p7K8mDyZwRd?utm_source=generator&theme=0" height="38%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
	</section> 
</div>

