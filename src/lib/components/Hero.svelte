<script lang="ts">
	import type { PersonalInfo } from '$lib/types/portfolio';

	interface Props {
		personal: PersonalInfo;
	}

	let { personal }: Props = $props();
</script>

<section class="hero">
	<div class="container">
		<h1 class="hero-name">{personal.name}</h1>
		<p class="hero-title">{personal.title}</p>
		<p class="hero-summary">{personal.summary}</p>
		<div class="hero-links">
			<span class="hero-location">{personal.location}</span>
			<span class="separator">•</span>
			<a href="mailto:{personal.email}" class="hero-link">{personal.email}</a>
			<span class="separator">•</span>
			<a href="https://{personal.github}" target="_blank" rel="noopener noreferrer" class="hero-link">
				GitHub
			</a>
			<span class="separator">•</span>
			<a href="https://{personal.linkedin}" target="_blank" rel="noopener noreferrer" class="hero-link">
				LinkedIn
			</a>
			{#if personal.website}
				<span class="separator">•</span>
				<a href="https://{personal.website}" target="_blank" rel="noopener noreferrer" class="hero-link">
					Website
				</a>
			{/if}
		</div>
	</div>
</section>

<style>
	.hero {
		padding: var(--space-3xl) 0 var(--space-2xl);
		text-align: center;
	}

	.hero-name {
		font-size: clamp(2.5rem, 5vw, 4rem);
		font-weight: 700;
		color: var(--color-text-primary);
		margin-bottom: var(--space-sm);
	}

	.hero-title {
		font-size: var(--text-2xl);
		color: var(--color-text-secondary);
		margin-bottom: var(--space-lg);
		font-weight: 500;
	}

	.hero-summary {
		font-size: var(--text-lg);
		color: var(--color-text-secondary);
		max-width: 700px;
		margin: 0 auto var(--space-xl);
		line-height: var(--leading-relaxed);
	}

	.hero-links {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		gap: var(--space-sm);
		font-size: var(--text-base);
	}

	.hero-location {
		color: var(--color-text-secondary);
	}

	.separator {
		color: var(--color-border);
	}

	.hero-link {
		color: var(--color-accent);
		text-decoration: none;
		font-weight: 500;
		transition: color var(--transition-fast);
	}

	.hero-link:hover {
		color: var(--color-accent-hover);
		text-decoration: underline;
	}

	@media (max-width: 768px) {
		.hero {
			padding: var(--space-2xl) 0 var(--space-xl);
		}

		.hero-summary {
			font-size: var(--text-base);
		}

		.hero-links {
			font-size: var(--text-sm);
		}
	}

	@media (max-width: 640px) {
		.hero-links {
			flex-direction: column;
			gap: var(--space-xs);
		}

		.separator {
			display: none;
		}
	}
</style>
