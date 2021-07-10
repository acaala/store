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
</script>

<h1>{product.name}</h1>
<p>{product.body}</p>
<h3>£{product.price}</h3>
