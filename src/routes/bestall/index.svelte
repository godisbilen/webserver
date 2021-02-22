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
                position: 'top-left',
                type: 'danger',
            });
            return;
        }
        const data = {
            phone_number,
            full_address,
            lat,
            lng,
        };
        console.log(data);

        fetch('bestall/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response: Response) => response.json())
            .then((order_info) => {
                console.log('Order:');
                console.log(order_info);
                addNotification({
                    text: 'Tack för din beställning',
                    position: 'top-left',
                });
                // Reset form
                // phone_number = full_address = lat = lng = undefined;
            })
            .catch((err) => {
                console.log('Error:');
                console.log(err);
            });
    };
</script>

<SubHeader title="Beställ godisbilen" />
<OrderForm
    on:submit={placeOrder}
    bind:phone_number
    bind:full_address
    bind:lat
    bind:lng
/>
