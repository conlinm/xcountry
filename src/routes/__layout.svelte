<script>
    // import "/src/app.css";
    import Header from '../lib/header.svelte';
    import Footer from '../lib/footer.svelte';
    // page is imported from the app/stores module provided by sveltekit
    import { page } from '$app/stores';
</script>
<!-- $page.url.pathname, is reactive, and provides the route of the current page. This if conditional will prevent the header from being displayed on the root or Welcome page -->
<div class="flex flex-col h-screen ">
{#if $page.url.pathname !== '/'}
<Header />
{/if}
<main class="flex-grow">
    <slot />
</main>

<Footer />
</div>