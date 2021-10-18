<script lang="ts">
	import { onMount } from "svelte";
	import delay from "./utils/delay";

	let apod: string = "Loading...";

	onMount(async () => {
		let res: Response = await fetch("/apod.json");
		let resJson = await res.json();

		await delay(1000);

		apod = JSON.stringify(resJson, null, 2);
	});
</script>

<main>
	<pre>{apod}</pre>
</main>

<style>
</style>
