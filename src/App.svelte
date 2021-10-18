<script lang="ts">
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";

	import Header from "./Header.svelte";
	import StarryBackground from "./StarryBackground.svelte";
	import LoadingSpinner from "./LoadingSpinner.svelte";

	import fetchApod from "./api/apod";
	import type { ApodData } from "./api/apod.type";
	import delay from "./utils/delay";

	let apod: ApodData;

	onMount(async () => {
		await delay(1000);
		apod = await fetchApod();
	});

	function getCDNLink(directUrl: string): string {
		const parsed: URL = new URL(directUrl);
		return `https://cdn.statically.io/img/${parsed.hostname}/f=auto${parsed.pathname}`;
	}
</script>

<main>
	<Header />
	{#if apod}
		<a href={apod.hdurl ?? apod.url}>
			<img transition:fade src={getCDNLink(apod.url)} alt={apod.title} />
		</a>
	{:else}
		<LoadingSpinner />
	{/if}
	<StarryBackground />
</main>

<style>
	main {
		width: clamp(16rem, 90vw, 800px);
		margin-left: auto;
		margin-right: auto;
	}

	img {
		background-color: #fff;
		padding: 1px;
		max-width: 100%;
		border-radius: 1%;
	}
</style>
