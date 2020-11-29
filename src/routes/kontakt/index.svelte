<script lang="ts">
    import SubHeader from '../../components/SubHeader.svelte';
    import {
        Form,
        FormRow,
        InputContainer,
        autoresize,
    } from '@albinmedoc/svelte-form';
    import { getNotificationsContext } from 'svelte-notifications';
    const { addNotification } = getNotificationsContext();

    let name: string,
        email: string,
        subject: string,
        order_number: string,
        message: string = undefined;

    const handleSubmit = (): void => {
        fetch('kontakt/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                subject,
                order_number,
                message,
            }),
        })
            .then((response) => response.json())
            .then(() => {
                addNotification({
                    text: 'Tack för ditt meddelande',
                    position: 'top-left',
                });
                // Reset form
                name = email = subject = order_number = message = undefined;
            })
            .catch(() => {
                addNotification({
                    text: 'Någonting gick fel, vänligen försök igen.',
                    position: 'top-left',
                    type: 'danger',
                });
            });
    };
</script>

<SubHeader title="Kontakta oss" description="Vi svarar snarast" />
<Form on:submit={handleSubmit}>
    <FormRow>
        <InputContainer label="Namn">
            <input bind:value={name} type="text" placeholder=" " required />
        </InputContainer>
    </FormRow>
    <FormRow>
        <InputContainer label="Email">
            <input bind:value={email} type="email" placeholder=" " required />
        </InputContainer>
    </FormRow>
    <FormRow>
        <InputContainer label="Ämne">
            <datalist id="subject">
                <option value="Angående beställning" />
                <option value="Fråga" />
            </datalist>
            <input
                bind:value={subject}
                list="subject"
                type="text"
                placeholder=" "
                required />
        </InputContainer>
    </FormRow>
    {#if subject === 'Angående beställning'}
        <FormRow>
            <InputContainer label="Beställningsnummer">
                <input bind:value={order_number} placeholder=" " required />
            </InputContainer>
        </FormRow>
    {/if}
    <FormRow>
        <InputContainer label="Meddelande">
            <textarea
                bind:value={message}
                use:autoresize
                placeholder=" "
                required />
        </InputContainer>
    </FormRow>
    <FormRow>
        <InputContainer><input type="submit" value="Skicka" /></InputContainer>
    </FormRow>
    <FormRow>
        <InputContainer>
            <p class="info">
                Genom att klicka på "Skicka" accepterar jag de
                <a href="villkor">allmänna villkoren</a>
                och
                <a href="/villkor#gdpr">personuppgiftspolicyn</a>.
            </p>
        </InputContainer>
    </FormRow>
</Form>
