
<script lang="ts">
import { onMount } from "svelte";
import { dataset_dev, set_data } from "svelte/internal";


let data: string

    async function testApi() {
        await fetch(`http://localhost:4000/api`).then((r) => r.json()).then(d => data = d.message)
        
        console.log(data)
    }


    onMount(testApi)
</script>

<h1>Welcome to SvelteStore</h1>
<p>{data}</p>
