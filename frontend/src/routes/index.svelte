<script lang="ts">
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
{#if products.length > 0}
	{#each products as product}
		<div class="row">
			<div class="col s12 m6">
				<div class="card blue-grey darken-1">
					<div class="card-content white-text">
						<div>
							<span class="card-title">{product.name}</span>
						</div>
						<p>{product.body}</p>
						<p class="right-align card-title">£{product.price}</p>
						<div class="card-action">
							<a href="/">View more</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/each}
{:else}
	<p>No Products yet..</p>
{/if}
