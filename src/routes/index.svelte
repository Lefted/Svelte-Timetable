<script>
	import { activities } from "../stores/activityStore";
	console.log($activities);
</script>

<svelte:head>
	<title>Aktivitäten Stundenplan</title>
</svelte:head>

{#each $activities as activity}
	<p>{activity.title}</p>
{/each}