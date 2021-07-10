<nav>
	<div class="nav-wrapper grey darken-3">
		<a href="/" class="brand-logo">Svelte Store</a>
		<ul id="nav-mobile" class="right hide-on-small-and-down">
			<li><a href="/create-product" class="btn-small orange darken-3">Create A Product</a></li>
		</ul>
	</div>
</nav>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
	/>
	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
</svelte:head>

<slot />
