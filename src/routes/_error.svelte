<script lang="ts">
	export let status: number;
	export let error: Error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<style>
</style>

<svelte:head>
	<title>Riptide | {status}</title>
</svelte:head>

<div>
	<h1>{status}</h1>
	<p>{error.message}</p>
</div>

{#if dev && error.stack}
	<pre>{error.stack}</pre>
{/if}
