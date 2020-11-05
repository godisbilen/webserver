<script lang="ts">
    import logo from 'images/logo.svg';
	import HamburgerButton from './HamburgerButton.svelte';

	export let segment: string;
	
	let nav_active = false;

	function hide_nav(_: string){
        nav_active = false;
    }
	
	// Hide navigation when url change
    $:  hide_nav(segment);
</script>

<style>
    header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 70px;
        display: flex;
        justify-content: space-between;
        background-color: var(--headerBackgroundColor);
        -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.397);
        -moz-box-shadow: 0 0 5px rgba(0, 0, 0, 0.397);
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.397);
        z-index: 2;
    }

    #logo {
        display: flex;
        align-items: center;
        padding: 0 15px;
        position: relative;
    }

    #logo > img {
        height: calc(100% - 20px);
        display: none;
    }

    @media (min-width: 325px) {
        #logo > img {
            display: block;
        }
	}

    nav {
        z-index: 1;
        position: fixed;
        top: var(--headerHeight);
        min-height: calc(100vh - var(--headerHeight));
        right: calc(var(--navWidth) * -1);
        width: var(--navWidth);
        transition: right 0.3s ease-in-out;
        color: #e86ed0;
        background-color: var(--headerBackgroundColor);
        -webkit-box-shadow: -1px 0 5px rgba(0, 0, 0, 0.397);
        -moz-box-shadow: -1px 0 5px rgba(0, 0, 0, 0.397);
        box-shadow: -1px 0 5px rgba(0, 0, 0, 0.397);
    }

    nav.is-active {
        right: 0;
    }

    nav.is-active + :global(main) {
        width: calc(100% - var(--navWidth));
    }

    nav > section > h3 {
        text-align: center;
        font-size: 30px;
    }

    nav > section > ul {
        list-style-type: none;
    }

    nav > section > ul > li > a {
        font-size: 23px;
        color: #e86ed0;
        line-height: 50px;
    }
</style>

<header>
    <a href="/" id="logo">
        <img src="{logo}" alt="Godisbilen logo" title="Startsida" />
    </a>
    <HamburgerButton bind:active={nav_active} />
</header>
<nav role="navigation" class="{nav_active ? 'is-active' : ''}">
    <section>
        <h3>Snabblänkar</h3>
        <ul>
            <li><a href="/sortiment">Vårt sortiment</a></li>
            <li><a href="/kalas">Kalas</a></li>
            <li><a href="/leveransomrade">Leveransområde</a></li>
            <li><a href="/villkor">Allmänna villkor</a></li>
            <li><a href="/faq">Vanliga frågor</a></li>
            <li><a href="/kontakt">Kontakta oss</a></li>
            <li><a href="/om-oss">Om oss</a></li>
        </ul>
    </section>
</nav>
