<script>
	let newProduct = { name: '', price: null, body: '' };
	const url = 'http://localhost:4000/api/v1/create-product';
	const submitHandler = () => {
		const options = {
			method: 'POST',
			body: JSON.stringify({ newProduct }),
			headers: {
				'Content-Type': 'application/json'
			}
		};

		fetch(url, options)
			.then((res) => res.json())
			.then((res) => (window.location.href = res.redirect));
	};
</script>

<h3 class="center-align">Create a product</h3>
<div class="row">
	<form on:submit|preventDefault={submitHandler} class="col s12">
		<div class="row">
			<div class="input-field col s6">
				<input id="product-name" type="text" bind:value={newProduct.name} />
				<label class="active" for="product-name">Product Name</label>
			</div>
		</div>
		<div class="row">
			<div class="input-field col s6">
				<input id="product-price" type="number" bind:value={newProduct.price} />
				<label class="active" for="product-price">Product Price</label>
			</div>
		</div>

		<div class="row">
			<div class="input-field col s6">
				<textarea
					id="product-body"
					class="materialize-textarea"
					data-length="120"
					bind:value={newProduct.body}
				/>
				<label for="product-body">Textarea</label>
			</div>
		</div>

		<div>
			<button class="btn-small">Create</button>
		</div>
	</form>
</div>
