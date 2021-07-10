<script lang="ts">
	import ProductCard from '$lib/ProductCard.svelte';
    import { onMount } from 'svelte';

	let products = [];

	async function fetchAllProducts() {
		await fetch(`http://localhost:4000/api/v1`)
			.then((r) => r.json())
			.then((d) => (products = d.products));

		console.log(products);
	}

	onMount(fetchAllProducts);
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
	/>
</svelte:head>

<h2 class="center-align">Welcome to SvelteStore</h2>
{#if products.length > 0 && products != undefined}
	{#each products as product}
		<ProductCard {...product} />
	{/each}
{:else}
	<p>No Products yet..</p>
{/if}
