<script>
	import '../app.css';
	import Nav from '$lib/components/Nav.svelte';
</script>

<svelte:head>
	<title>Aktivitäten Stundenplan</title>
</svelte:head>
<div class="px-7 lg:px-32">
	<Nav />
	<main>
		<slot />
	</main>
</div>
