<script context="module">
	export async function load({ page, fetch }) {
		const url = `http://localhost:4000/api/v1/product/${page.params.slug}`;

		const res = await fetch(url).then((r) => r.json());

		const product = res.product;
		return { props: { product } };
	}
</script>

<script>
	export let product;

	const deleteProduct = async () => {
		const endpoint = `http://localhost:4000/api/v1/product/${product._id}`;

		fetch(endpoint, {
			method: 'DELETE'
		})
			.then((r) => r.json())
			.then((data) => (window.location.href = data.redirect))
			.catch((err) => console.log(err));
	};
</script>

<h1>{product.name}</h1>
<p>{product.body}</p>
<h3>£{product.price}</h3>

<button on:click={deleteProduct} class="btn-small">Delete</button>
