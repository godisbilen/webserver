<script lang="ts">
    import SubHeader from '../components/SubHeader.svelte';
    import party from 'images/party.jpg';
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
    <title>Kalas</title>
</svelte:head>

<SubHeader title="Kalas" description="Information om kalas" />

<section>
    <img src="{party}" alt="Kalas Godisbilen">
    <p>Ska du ha kalas och önskar att Godisbilen.nu ska komma på besök så kan du <a href=".">klicka här</a> för att skicka en förfrågan till oss. Där anger du <b>datum</b>, <b>klockslag</b>, <b>adress</b> och <b>antal personer</b>. Du kommer få en bekräftelse när din förfrågan har godkänts av oss.</p>
    <p>Det finns två upplägg vid kalas. Det ena alternativet är att personerna väljer fritt ur vårt sortiment. Minsta totalsumma är då 200kr. 
        Det andra alternativet är att personerna får välja en av våra godisburkar och fylla den med lösviktsgodis. Det finns två storlekar att välja mellan. Den stora (4,7 dl) kostar 35kr styck och den lilla (3,5 dl) kostar 25kr styck.</p>
        
    <p>Minst antal personer är 8 om adressen ligger inom vårt leveransområde. Om adressen ligger utanför vårt leveransområde kan en utkörningsavgift tillkomma. Hör av dig för exakt prisuppgift.
        Skulle antalet personer vara färre än 8 kan vi köra ut mot en tilläggsavgift. Hör av dig för exakt prisuppgift eller eventuella frågor.</p>
</section>