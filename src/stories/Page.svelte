<script lang="ts">
	import './page.css';
	import Header from './Header.svelte';

	let user: { name: string } | null = null;
</script>

<article>
	<Header
		{user}
		on:login={() => (user = { name: 'Jane Doe' })}
		on:logout={() => (user = null)}
		on:createAccount={() => (user = { name: 'Jane Doe' })}
	/>

	<section class="storybook-page">
		<h2>Pages in Storybook</h2>
		<p>
			Render pages with mock data. This makes it easy to build and review page states without
			needing to navigate to them in your app. Here are some handy patterns for managing page data
			in Storybook:
		</p>
		<ul>
			<li>
				Use a higher-level connected component. Storybook helps you compose such data from the
				"args" of child component stories
			</li>
			<li>
				Assemble data in the page component from your services. You can mock these services out
				using Storybook.
			</li>
		</ul>
		<div class="tip-wrapper">
			<span class="tip">Tip</span>
			Adjust the width of the canvas with the
			<svg width="10" height="10" viewBox="0 0 12 12">
				<g fill="none" fill-rule="evenodd">
					<path
						d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0
            01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0
            010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"
						id="a"
						fill="#999"
					/>
				</g>
			</svg>
			Viewports addon in the toolbar
		</div>
	</section>
</article>
