<script lang="ts">
	import Notifications from 'svelte-notifications';
	import cssVars from 'svelte-css-vars';
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';

	export let segment: string;

	$: styleVars = {
		headerHeight: '70px',
		headerBackgroundColor: '#b1e8ed',
		navWidth: '300px',
		hamburgerColor: '#e86ed0',
	};
</script>

<style>
	main {
		width: 100vw;
		min-height: calc(100vh - var(--headerHeight) - 143px); /* 100vh - header - footer */
		transition: width .3s ease-in-out;
		position: relative;
		margin-top: var(--headerHeight);
	}
</style>

<div use:cssVars={styleVars}>
	<Notifications>
		<Nav {segment}/>
		<main>
			<slot></slot>
		</main>
		<Footer/>
	</Notifications>
</div>