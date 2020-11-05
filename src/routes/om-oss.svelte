<script lang="ts">
    import SubHeader from '../components/SubHeader.svelte';
    import car_outside from 'images/car_outside.png';
</script>

<style>
    section{
        width: 100%;
        max-width: 500px;
        margin: 50px auto;
        font-size: 20px;
        line-height: 30px;
    }

    section > img{
        width: 100%;
        max-width: 500px;
        margin: 0 auto;
    }
    section > p{
        padding: 0 20px;
    }
</style>

<svelte:head>
    <title>Om oss</title>
</svelte:head>

<SubHeader title="Om oss" description="Information om Godisbilen" />

<section>
    <img src="{car_outside}" alt="Godisbilen utsida">
    <p>Godisbilen är ett nystartar företag i Staffanstorp som levererar godis direkt hem till dig.
        Just nu finns vi i Dalby, Klågerup, Bara, Åkarp, Lund och Staffanstorps kommun men vi utökar vårt leveransområde löpande. När det blir aktuellt kommer vi annonsera detta på våra socialamedier.</p>
        <p>I vårt sortiment finner du dryck, snacks, stycksaker och lösgodis till ett rimligt pris.</p>

        <p>Om du har några frågor, kommentarer eller önskemål om sortimentet är du välkommen att kontakta oss <a href="/kontakt">här</a>.
    </p>
</section>
