<script lang="ts">
    export let title: string;
    export let description: string = undefined;
</script>

<style>
    section {
        width: calc(100% - 60px);
        text-align: center;
        background-color: #edb5f5;
        color: #fff;
        padding: 10px 30px;
    }

    section h3 {
        margin: 0;
        font-size: 40px;
    }

    section :global(p) {
        margin: 0;
        font-size: 20px;
    }

    section :global(p > a){
        color: inherit;
    }
</style>

<section>
    <h3>{title}</h3>
    {#if description}
        <p>{description}</p>
    {/if}
    <slot />
</section>
