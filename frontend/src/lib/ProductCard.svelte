<script>
    export let name;
    export let body;
    export let price;

</script>
<div class="row">
    <div class="col s12 m6">
        <div class="card blue-grey darken-1">
            <div class="card-content white-text">
                <div>
                    <span class="card-title">{name}</span>
                </div>
                <p>{body}</p>
                <p class="right-align card-title">£{price}</p>
                <div class="card-action">
                    <a href="/">View more</a>
                </div>
            </div>
        </div>
    </div>
</div>