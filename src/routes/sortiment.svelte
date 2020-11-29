<script lang="ts">
    import SubHeader from '../components/SubHeader.svelte';
    import car_inside from 'images/car_inside.png';

    const assortment = {
        Drycker: [
            {
                title: 'Coca-Cola 33cl',
                price: '15kr',
            },
            {
                title: 'Coca-Cola Zero 33cl',
                price: '15kr',
            },
            {
                title: 'Fanta 33cl',
                price: '15kr',
            },
            {
                title: 'Fanta Exotic 33cl',
                price: '15kr',
            },
            {
                title: 'Sprite 33cl',
                price: '15kr',
            },
            {
                title: 'Pepsi 33cl',
                price: '15kr',
            },
            {
                title: 'Pepsi Max 33cl',
                price: '15kr',
            },
            {
                title: 'Zingo 33cl',
                price: '15kr',
            },
            {
                title: '4st Burkar (33cl)',
                price: '40kr',
            },
            {
                title: '20st Burkar (33cl)',
                price: '160kr',
            },
            {
                title: 'Redbull 25cl',
                price: '19kr',
            },
            {
                title: 'Redbull Zero 25cl',
                price: '19kr',
            },
            {
                title: 'Capri Sun',
                price: '8kr',
            },
        ],
        Godis: [
            {
                title: 'Lösviktsgodis',
                price: '9,90kr/hg',
            },
            {
                title: 'Gott & Blandat',
                price: '18kr',
            },
            {
                title: 'Ahlgrens Bilar',
                price: '20kr',
            },
            {
                title: 'Ahlgrens Bilar Saltlakrits',
                price: '20kr',
            },
            {
                title: 'Polly Ahlgrens Bilar',
                price: '20kr',
            },
            {
                title: 'Djungelvrål',
                price: '10kr',
            },
            {
                title: 'Zoo Påse',
                price: '10kr',
            },
            {
                title: 'Fruktnappar',
                price: '10kr',
            },
            {
                title: 'Colanappar',
                price: '10kr',
            },
            {
                title: 'Lakritsnappar',
                price: '10kr',
            },
            {
                title: 'Zoo Tablettask',
                price: '6kr',
            },
            {
                title: 'Tutti Frutti Tablettask',
                price: '6kr',
            },
            {
                title: 'Fruxo Tablettask',
                price: '6kr',
            },
            {
                title: '2st Tablettaskar',
                price: '10kr',
            },
            {
                title: 'Pingvinstång',
                price: '5kr',
            },
            {
                title: '4st Pingvinstänger',
                price: '15kr',
            },
            {
                title: 'Kolasnöre',
                price: '20kr',
            },
            {
                title: 'Jordgubbssnöre',
                price: '20kr',
            },
            {
                title: 'Skittles',
                price: '20kr',
            },
            {
                title: 'Kina Puffar',
                price: '20kr',
            },
            {
                title: 'Mentos',
                price: '10kr',
            },
            {
                title: 'Hockey Pulver',
                price: '8kr',
            },
            {
                title: 'Marabou 200g',
                price: '25kr',
            },
            {
                title: 'Kitkat',
                price: '6kr',
            },
            {
                title: 'Mars*',
                price: '12kr',
            },
            {
                title: 'Snickers*',
                price: '12kr',
            },
            {
                title: 'Twix*',
                price: '12kr',
            },
            {
                title: 'Japp*',
                price: '12kr',
            },
            {
                title: 'Daim*',
                price: '12kr',
            },
            {
                title: 'Dubbel Nougat*',
                price: '12kr',
            },
            {
                title: '3st Dubbla stycksaker (Makerat med *)',
                price: '30kr',
            },
            {
                title: 'Greta Gris ägg',
                price: '15kr',
            },
            {
                title: 'Snorig Gris',
                price: '15kr',
            },
            {
                title: 'Tubble Gum',
                price: '15kr',
            },
            {
                title: 'Cleaning Robot',
                price: '15kr',
            },
            {
                title: 'Funny Monkey',
                price: '15kr',
            },
            {
                title: 'Spray',
                price: '15kr',
            },
            {
                title: 'PEZ',
                price: '20kr',
            },
        ],
        Snacks: [
            {
                title: 'Estrella Sourcream & Onion Chips',
                price: '25kr',
            },
            {
                title: 'Estrella Dillchips',
                price: '25kr',
            },
            {
                title: 'Estrella Grillchips',
                price: '25kr',
            },
            {
                title: 'Estrella Saltade Chips',
                price: '25kr',
            },
            {
                title: 'Estrella Jordnötsringar',
                price: '25kr',
            },
            {
                title: 'Estrella Jordnötter',
                price: '25kr',
            },
            {
                title: 'OLW Ostbågar',
                price: '25kr',
            },
            {
                title: 'Pringles Orginal',
                price: '25kr',
            },
            {
                title: 'Pringles Sourcream & Onion',
                price: '25kr',
            },
            {
                title: 'Estrella Popcorn',
                price: '25kr',
            },
            {
                title: 'Estrella Popcorn Cheddar',
                price: '25kr',
            },
        ],
    };
</script>

<style>
    section {
        margin: 20px auto;
        max-width: 500px;
        padding: 0 10px;
    }

    img {
        width: 100%;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin: 0;
    }

    tr {
        border: 1px solid #ddd;
    }

    tr:nth-child(even) {
        background-color: #f2f2f2;
    }

    td {
        padding: 8px;
    }

    td:nth-child(2) {
        text-align: right;
    }
</style>

<svelte:head>
    <title>Sortiment</title>
</svelte:head>

<SubHeader
    title="Vårt sortiment"
    description="Här finner du alla produkter i godisbilen" />

<section>
    <img src={car_inside} alt="Godisbilen Sortiment" />
    {#each Object.entries(assortment) as [category_name, products]}
        <h4>{category_name}</h4>
        <table>
            {#each products as product}
                <tr>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                </tr>
            {/each}
        </table>
    {/each}
</section>
