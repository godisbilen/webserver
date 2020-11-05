<script lang="ts">
    import logo from 'images/logo.svg';

    export let status: number;
    export let error: Error;

    const dev = process.env.NODE_ENV === 'development';
</script>

<style>
    #error_container {
        margin: 0 auto;
        text-align: center;
    }

    #error_code {
        font-size: 150px;
        margin: 15px;
    }

    #error_message {
        font-size: 30px;
        margin: 15px;
    }

    .error_hint {
        font-size: 16px;
        margin: 15px auto;
        width: 300px;
    }

    img {
        width: 90%;
        max-width: 500px;
        margin: 50px;
        display: inline-block;
        padding: 0;
    }
</style>

<svelte:head>
    <title>{status}</title>
</svelte:head>

{#if status == 404}
    <div id="error_container">
        <h3 id="error_code">404</h3>
        <h4 id="error_message">Sidan hittades inte</h4>
        <p class="error_hint">
            Det kan bero på ett stavfel, att sidan inte längre finns eller att
            den har flyttats.
        </p>
        <p class="error_hint">
            Klicka
            <a href="/">här</a>
            för att komma till startsidan
        </p>
        <img src={logo} alt="Godisbilen.nu logotyp" />
    </div>
{/if}

{#if dev && error.stack}
    <pre>{error.stack}</pre>
{/if}
