<script lang="ts">
	import type { Experience } from '$lib/types/portfolio';

	interface Props {
		experience: Experience[];
	}

	let { experience }: Props = $props();

	function formatDateRange(startDate: string, endDate: string | null): string {
		return endDate ? `${startDate} - ${endDate}` : `${startDate} - Present`;
	}
</script>

<section class="experience section">
	<div class="container">
		<h2 class="section-title">Experience</h2>
		<div class="experience-timeline">
			{#each experience as exp (exp.id)}
				<div class="experience-item">
					<div class="experience-dot"></div>
					<div class="experience-card">
						<div class="experience-header">
							<div class="company-info">
								<h3 class="company-name">{exp.company}</h3>
								<p class="job-title">{exp.title}</p>
								<p class="location-date">
									{exp.location} | {formatDateRange(exp.startDate, exp.endDate)}
								</p>
								{#if exp.concurrent}
									<p class="concurrent-note">{exp.concurrent}</p>
								{/if}
							</div>
						</div>
						<p class="experience-description">{exp.description}</p>
						<ul class="highlights">
							{#each exp.highlights as highlight}
								<li class="highlight-item">{highlight}</li>
							{/each}
						</ul>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.experience {
		background-color: var(--color-surface);
	}

	.experience-timeline {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: var(--space-2xl);
	}

	.experience-timeline::before {
		content: '';
		position: absolute;
		left: 20px;
		top: 8px;
		bottom: 0;
		width: 2px;
		background-color: var(--color-border);
	}

	.experience-item {
		position: relative;
		padding-left: var(--space-3xl);
	}

	.experience-dot {
		position: absolute;
		left: 12px;
		top: 8px;
		width: 16px;
		height: 16px;
		border-radius: 50%;
		background-color: var(--color-accent);
		border: 3px solid var(--color-surface);
		z-index: 1;
	}

	.experience-card {
		background-color: var(--color-bg);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		padding: var(--space-lg);
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
	}

	.experience-header {
		border-bottom: 1px solid var(--color-border);
		padding-bottom: var(--space-md);
	}

	.company-name {
		font-size: var(--text-xl);
		font-weight: 700;
		color: var(--color-text-primary);
		margin: 0 0 var(--space-xs) 0;
	}

	.job-title {
		font-size: var(--text-lg);
		color: var(--color-accent);
		font-weight: 600;
		margin: 0 0 var(--space-xs) 0;
	}

	.location-date {
		font-size: var(--text-sm);
		color: var(--color-text-secondary);
		margin: 0;
	}

	.concurrent-note {
		font-size: var(--text-sm);
		color: var(--color-text-secondary);
		font-style: italic;
		margin: var(--space-xs) 0 0 0;
	}

	.experience-description {
		font-size: var(--text-base);
		color: var(--color-text-secondary);
		line-height: var(--leading-relaxed);
		margin: 0;
	}

	.highlights {
		margin: 0;
		padding-left: var(--space-lg);
		list-style-type: disc;
	}

	.highlight-item {
		font-size: var(--text-sm);
		color: var(--color-text-secondary);
		line-height: var(--leading-relaxed);
		margin-bottom: var(--space-sm);
	}

	.highlight-item:last-child {
		margin-bottom: 0;
	}

	@media (max-width: 768px) {
		.experience-timeline::before {
			display: none;
		}

		.experience-item {
			padding-left: 0;
		}

		.experience-dot {
			display: none;
		}

		.experience-timeline {
			gap: var(--space-xl);
		}
	}
</style>
