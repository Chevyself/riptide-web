<script lang="ts">
</script>

<style lang="scss">
.center {
	display: grid;
	place-items: center;
}
#bg {
  height: calc((100vw - 20px) * 0.5625);
  width: 100%;
  
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#footer {
  background-color: rgb(28, 28, 28);
  height: 3rem;
  a {
	text-decoration: none;
	color: white;
  }
  a:hover {
	color: rgb(220, 220, 220);
  }
  .extra {
    width: 50%;
	float: left;
	padding: 0.4rem;
  }
  .gh-pages {
	width: 50%;
	float: right;
  }
}
section {
  height: 100%;
  width: 100%;
  background-color: rgb(4, 4, 4);
  color: white;
  text-align: justify;
  text-justify: inter-word;
}
</style>

<svelte:head>
	<title>Riptide</title>
</svelte:head>

<div>
	<div style="background-image: url('bg.gif'); position: absolute;" id="bg">
		<section style="background:transparent;" id="landing">

		</section>

		<section id="track" class="center">
			<!-- Embed Spotify track -->
			<iframe title="Spotify" style="border-radius:12px" src="https://open.spotify.com/embed/track/3JvrhDOgAt6p7K8mDyZwRd?utm_source=generator&theme=0" height="38%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
		</section> 
		
		<section style="background-color: rgb(10, 10, 10); width: 100%" id="essay" class="center">
			<div>
				<h1 style="margin-left: 1.5rem; margin-right: 1.5rem;">Ensayo</h1>
				<p style="margin-top: 1.5rem; margin-left: 1.5rem; margin-right: 1.5rem;">Este es un proyecto de Animación, que pone en imágenes, la interpretación de las líricas de la canción hecha por Vance Joy: Riptide. 
Es una animación en doces inspirada en la animación independiente contemporánea.
La letra metafórica de Riptide da la oportunidad de una representación en el dibujo de una manera mucho mas creativa.</p>
			</div>
		</section>
		
		<section id="extra" class="center">
			<h1></h1>
		</section>
		
		<section id="footer">
			<div class="extra">
				
			</div>
			<div class="gh-pages center">
				<a href="https://github.com/Chevyself/riptide-web">Hecho con Github Pages</a>
			</div>
		</section>
	</div>
</div>
