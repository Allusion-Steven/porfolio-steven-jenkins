<script lang="ts">
	import type { Education } from '$lib/types/portfolio';

	interface Props {
		education: Education;
	}

	let { education }: Props = $props();
</script>

<section class="education section">
	<div class="container">
		<h2 class="section-title">Education</h2>
		<div class="education-card">
			<h3 class="degree">{education.degree}</h3>
			{#if education.minors && education.minors.length > 0}
				<p class="minors">Minors in {education.minors.join(' & ')}</p>
			{/if}
			<p class="institution">{education.institution}</p>
			<p class="location-date">
				{education.location} | {education.graduationDate}
			</p>
		</div>
	</div>
</section>

<style>
	.education {
		background-color: var(--color-surface);
	}

	.education-card {
		max-width: 700px;
		margin: 0 auto;
		background-color: var(--color-bg);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		padding: var(--space-xl);
		text-align: center;
	}

	.degree {
		font-size: var(--text-2xl);
		font-weight: 700;
		color: var(--color-text-primary);
		margin-bottom: var(--space-sm);
	}

	.minors {
		font-size: var(--text-base);
		color: var(--color-text-secondary);
		font-style: italic;
		margin-bottom: var(--space-md);
	}

	.institution {
		font-size: var(--text-lg);
		color: var(--color-accent);
		font-weight: 600;
		margin-bottom: var(--space-xs);
	}

	.location-date {
		font-size: var(--text-base);
		color: var(--color-text-secondary);
	}
</style>
