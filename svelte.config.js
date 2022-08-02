import adapter from '@sveltejs/adapter-auto';
//import appengine from "svelte-adapter-appengine";


/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		//adapter: appengine(),
		//target: "#svelte",
		methodOverride: {
			allowed: ['PUT', 'DELETE']
		}
	}
};

export default config;

// note, I edited this file for goolge app engine accoring to the instructions here: https://github.com/HalfdanJ/svelte-adapter-appengine, after installing the svelte-adapter-appengine package.
