<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '$lib/styles/global.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Steven Jenkins - Software Developer</title>
	<meta name="description" content="Software developer portfolio showcasing web development projects and technical skills." />
</svelte:head>

{@render children()}
