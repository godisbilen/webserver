<script lang="ts">
	import Notifications from 'svelte-notifications';
	import cssVars from 'svelte-css-vars';
	import Nav from '../components/Nav.svelte';

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
		position: relative;
		max-width: 56em;
		margin-top: var(--headerHeight);
	}
</style>

<div use:cssVars={styleVars}>
	<Notifications>
		<Nav {segment}/>
		<main>
			<slot></slot>
		</main>
	</Notifications>
</div>