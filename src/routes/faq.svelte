<script lang="ts">
    import SubHeader from '../components/SubHeader.svelte';
</script>

<style>
    #faq_container {
        max-width: 600px;
        margin: 50px auto;
    }

    .faq > h4 {
        font-size: 22px;
        margin: 30px 0 0 0;
    }

    .faq > p {
        margin: 10px 0 0 0;
        padding-left: 20px;
    }

    .faq > p > a {
        color: inherit;
    }
</style>

<svelte:head>
    <title>Vanliga frågor</title>
</svelte:head>

<SubHeader title="Vanliga frågor">
    <p>Hittar du inte svaret här? <a href="/kontakt">Kontakta oss</a>.</p>
</SubHeader>

<div id="faq_container">
    <section class="faq">
        <h4>Vilka betalningsmetoder kan användas?</h4>
        <p>Vi accepterar både swish och kortköp (ej kontanter).</p>
    </section>
    <section class="faq">
        <h4>Kostar det något att få bilen utkörd?</h4>
        <p>
            Ja, vi tar ut en kostnad på 45kr per beställning. Vid köp för 100kr
            eller mer bjuder vi på denna avgift.
        </p>
    </section>
    <section class="faq">
        <h4>Hur beställer jag hem godisbilen?</h4>
        <p>
            Från
            <a href=".">startsidan</a>
            klickar du på "Beställ nu". Ett formulär visas och du behöver fylla
            i ditt telefonnummer samt en adress vart vi ska komma. När du
            klickar på skicka är din beställning lagd och du får upp en beräknad
            leveranstid.
        </p>
    </section>
    <section class="faq">
        <h4>Kan jag beställa hem godisbilen utanför era leveransområden?</h4>
        <p>
            Man kan alltid skicka ett sms till
            <a href="sms:0708650300">070-865 03 00</a>
            så ser vi ifall vi har tid att komma till dig.
        </p>
    </section>
    <section class="faq">
        <h4>Finns ni på socialamedier?</h4>
        <p>
            Ni hittar oss både på
            <a
                href="https://www.facebook.com/Godisbilennu-112916336786817">Facebook</a>
            och
            <a href="https://www.instagram.com/godisbilen.nu/">Instagram</a>.
            Där uppdaterar vi våra aktuella händelser, tävlingar och erbjudande.
        </p>
    </section>
    <section class="faq">
        <h4>Hur länge varar varje stopp?</h4>
        <p>Vi har beräknat varje stopp till 8 minuter.</p>
    </section>
    <section class="faq">
        <h4>
            Hur lång tid tar det från det jag beställt till bilen kommer ut?
        </h4>
        <p>Leveranstiden beror på aktuell köplats och körsträcka.</p>
    </section>
    <section class="faq">
        <h4>Kan ni inte börja köra i min by/stad?</h4>
        <p>
            Vi utökar våra leveransområden löpande. Håll utkik på våra
            socialamedier för att veta när nya byar och städer införs.
        </p>
    </section>
    <section class="faq">
        <h4>Finns det gelatinfritt godis?</h4>
        <p>Vi har flera olika sorter som är gelatinfria.</p>
    </section>
</div>
