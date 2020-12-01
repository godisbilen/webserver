<script lang="ts">
    import { Form, FormRow, InputContainer } from '@albinmedoc/svelte-form';
    import {
        AutoComplete,
        Map,
        Marker,
        InfoWindow,
    } from '@albinmedoc/svelte-googlemaps';

    export let phone_number: string = undefined;
    export let full_address: string = undefined;
    export let lat: number = undefined;
    export let lng: number = undefined;

    let search: string,
        place: google.maps.places.PlaceResult = undefined;

    $: lat = place ? place.geometry.location.lat() : undefined;
    $: lng = place ? place.geometry.location.lng() : undefined;

    let map: google.maps.Map = undefined;

    const map_options = {
        zoom: 16,
        disableDefaultUI: true,
    };

    const updatePlace = (_place: google.maps.places.PlaceResult) => {
        place = _place;
        full_address = search;
        if (map !== undefined) {
            if (place.geometry.viewport) {
                map.fitBounds(place.geometry.viewport);
            } else {
                map.setCenter(place.geometry.location);
            }
        }
    };
</script>

<style>
    .map_container {
        margin: 0 auto;
        width: 100%;
        max-width: 600px;
        height: 400px;
    }
</style>

<Form on:submit>
    <FormRow>
        <InputContainer>
            <p>
                Godisbilen.nu är en tjänst att få godis, snacks och dryck
                hemkört. När din beställning är lagd och bilen är framme går du
                in i bilen och väljer själv vad du ska ha.
            </p>
            <h3>Komihåg!</h3>
            <p>Minsta belopp: 100kr</p>
            <p>Betalning sker vid leverans (endast Swish och kort)</p>
        </InputContainer>
    </FormRow>
    <FormRow>
        <InputContainer label="Telefonnummer">
            <input
                bind:value={phone_number}
                type="tel"
                placeholder=" "
                required />
        </InputContainer>
    </FormRow>
    <FormRow>
        <InputContainer label="Adress">
            <AutoComplete
                api_key={process.env.GOOGLE_MAPS_API_KEY}
                placeholder=" "
                required={true}
                bind:value={search}
                on:placeChanged={(event) => {
                    updatePlace(event.detail);
                }} />
        </InputContainer>
    </FormRow>
    {#if place}
    <div class="map_container">
        <Map
            on:ready={() => {
                updatePlace(place);
            }}
            bind:map
            api_key={process.env.GOOGLE_MAPS_API_KEY}
            options={map_options}>
            <Marker options={{ position: place.geometry.location }}>
                <InfoWindow
                    options={{ content: full_address }}
                    visible={true} />
            </Marker>
        </Map>
    </div>
{/if}
    <FormRow>
        <InputContainer>
            <input type="submit" value="Lägg beställning" />
        </InputContainer>
    </FormRow>
    <FormRow>
        <InputContainer>
            <p>
                Genom att klicka på "Skicka" accepterar jag de
                <a href="villkor">allmänna villkoren</a>
                och
                <a href="/villkor#gdpr">personuppgiftspolicyn</a>.
            </p>
        </InputContainer>
    </FormRow>
</Form>
