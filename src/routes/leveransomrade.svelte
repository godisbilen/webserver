<script lang="ts">
    import type { region } from '@godisbilen/types';
    import SubHeader from '../components/SubHeader.svelte';
    import { Map, Polygon } from '@albinmedoc/svelte-googlemaps';

    const map_options = {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 10,
        disableDefaultUI: true,
    };

    const polygon_options = {
        strokeColor: '#00FF00',
        strokeOpacity: 1.0,
        strokeWeight: 1,
        fillColor: '#00FF00',
        fillOpacity: 0.35,
    };

    const load_regions = async (): Promise<region[]> => {
        if (typeof window !== 'undefined') {
            const res = await fetch('http://localhost:5000/region');
            const regions: region[] = await res.json();
            return regions;
        }
    };

    const flip_lat_lng = (arr: Array<[number, number]>) => {
        let res = [];
        for (let i = 0; i < arr.length; i++) {
            const coordinate = arr[i];
            res[i] = { lat: coordinate[0], lng: coordinate[1] };
        }
        return res;
    };
</script>

<svelte:head>
    <title>Leveransområden</title>
</svelte:head>

<SubHeader title="Leveransområden">
    <p>Leverans utanför gränserna?</p>
    <p>
        Man kan alltid skicka ett sms till
        <a href="sms:0708650300">070-865 03 00</a>
        så ser vi ifall vi har tid att komma till dig.
    </p>
</SubHeader>
<div style="width: 100vw; height: 100vh;">
    {#await load_regions()}
        <h1>Loading...</h1>
    {:then regions}
        <Map api_key={process.env.GOOGLE_MAPS_API_KEY} options={map_options}>
            {#each regions as region}
                <Polygon
                    options={{ ...polygon_options, paths: flip_lat_lng(region.bounds.coordinates[0]) }} />
            {/each}
        </Map>
    {:catch}
        <p>Kunde inte hämta leveransområden</p>
    {/await}
</div>
