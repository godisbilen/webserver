<script lang="ts">
    import SubHeader from '../../components/SubHeader.svelte';
    import OrderForm from '../../components/OrderForm.svelte';
    import validator from 'validator';
    import { getNotificationsContext } from 'svelte-notifications';
    const { addNotification } = getNotificationsContext();

    let phone_number: string;
    let full_address: string;
    let lat: number;
    let lng: number;

    const placeOrder = () => {
        if (!validator.isMobilePhone(phone_number, 'sv-SE')) {
            addNotification({
                text: 'Telefonnummret är inte giltigt',
                position: 'bottom-right',
                type: 'danger',
            });
            return;
        }
        const data = {
            phone_number,
            full_address,
            coordinates: [lng, lat],
        };
        console.log(data);
        // Send request to API
    };
</script>

<SubHeader title="Beställ godisbilen" />
<OrderForm
    on:submit={placeOrder}
    bind:phone_number
    bind:full_address
    bind:lat
    bind:lng />
