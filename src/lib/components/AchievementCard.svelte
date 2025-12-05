<script lang="ts">
	import type { Achievement } from '$lib/types/portfolio';

	interface Props {
		achievement: Achievement;
	}

	let { achievement }: Props = $props();
	let showHighlights = $state(false);
</script>

<article class="achievement-card">
	{#if achievement.gifPath}
		<div class="achievement-gif">
			<img src={achievement.gifPath} alt="{achievement.title} demo" />
		</div>
	{/if}

	<div class="achievement-header">
		<div class="title-section">
			<h3 class="achievement-title">{achievement.title}</h3>
			{#if achievement.subtitle}
				<p class="achievement-subtitle">{achievement.subtitle}</p>
			{/if}
		</div>
		<span class="achievement-year">{achievement.year}</span>
	</div>

	<p class="achievement-overview">{achievement.overview}</p>

	{#if achievement.metrics && achievement.metrics.length > 0}
		<div class="achievement-metrics">
			{#each achievement.metrics as metric}
				<div class="metric-item">
					<div class="metric-value">{metric.value}</div>
					<div class="metric-label">{metric.label}</div>
				</div>
			{/each}
		</div>
	{/if}

	<div class="tech-stack">
		{#each achievement.techStack as tech}
			<span class="tech-tag">{tech}</span>
		{/each}
	</div>

	{#if achievement.liveUrls.length > 0}
		<div class="live-urls">
			{#each achievement.liveUrls as link}
				<a href={link.url} target="_blank" rel="noopener noreferrer" class="live-link">
					{link.label}
				</a>
			{/each}
		</div>
	{/if}

	<div class="highlights-section">
		<button class="highlights-toggle" onclick={() => (showHighlights = !showHighlights)}>
			{showHighlights ? 'Hide' : 'Show'} Details
		</button>

		{#if showHighlights}
			<ul class="highlights-list">
				{#each achievement.highlights as highlight}
					<li class="highlight-item">{highlight}</li>
				{/each}
			</ul>
		{/if}
	</div>
</article>

<style>
	.achievement-card {
		background-color: var(--color-bg);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		padding: var(--space-lg);
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
		transition:
			transform var(--transition-base),
			box-shadow var(--transition-base);
	}

	.achievement-gif {
		width: 100%;
		border-radius: var(--radius-md);
		overflow: hidden;
		margin-bottom: var(--space-md);
	}

	.achievement-gif img {
		width: 100%;
		height: auto;
		display: block;
	}

	.achievement-card:hover {
		transform: translateY(-4px);
		box-shadow: var(--shadow-lg);
	}

	.achievement-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: var(--space-md);
	}

	.title-section {
		flex: 1;
	}

	.achievement-title {
		font-size: var(--text-xl);
		font-weight: 700;
		color: var(--color-text-primary);
		margin: 0 0 var(--space-xs) 0;
	}

	.achievement-subtitle {
		font-size: var(--text-base);
		color: var(--color-text-secondary);
		font-style: italic;
		margin: 0;
	}

	.achievement-year {
		font-size: var(--text-sm);
		color: var(--color-text-secondary);
		background-color: var(--color-surface);
		padding: var(--space-xs) var(--space-sm);
		border-radius: var(--radius-sm);
		white-space: nowrap;
		font-weight: 600;
	}

	.achievement-overview {
		font-size: var(--text-base);
		color: var(--color-text-secondary);
		line-height: var(--leading-relaxed);
		margin: 0;
	}

	.achievement-metrics {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
		gap: var(--space-sm);
		padding: var(--space-md) 0;
	}

	.metric-item {
		text-align: center;
		padding: var(--space-sm);
		background-color: var(--color-surface);
		border-radius: var(--radius-md);
	}

	.metric-value {
		font-size: var(--text-lg);
		font-weight: 700;
		color: var(--color-accent);
		margin-bottom: var(--space-xs);
	}

	.metric-label {
		font-size: var(--text-xs);
		color: var(--color-text-secondary);
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.tech-stack {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-sm);
	}

	.tech-tag {
		font-size: var(--text-sm);
		padding: var(--space-xs) var(--space-sm);
		background-color: var(--color-surface);
		color: var(--color-text-secondary);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-md);
		font-weight: 500;
	}

	.live-urls {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-sm);
	}

	.live-link {
		display: inline-block;
		font-size: var(--text-sm);
		padding: var(--space-sm) var(--space-md);
		background-color: var(--color-accent);
		color: white;
		text-decoration: none;
		border-radius: var(--radius-md);
		font-weight: 500;
		transition:
			background-color var(--transition-fast),
			transform var(--transition-fast);
	}

	.live-link:hover {
		background-color: var(--color-accent-hover);
		transform: translateY(-2px);
	}

	.highlights-section {
		margin-top: var(--space-sm);
	}

	.highlights-toggle {
		width: 100%;
		padding: var(--space-sm) var(--space-md);
		background-color: var(--color-surface);
		color: var(--color-text-primary);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-md);
		font-size: var(--text-sm);
		font-weight: 600;
		cursor: pointer;
		transition:
			background-color var(--transition-fast),
			border-color var(--transition-fast);
	}

	.highlights-toggle:hover {
		background-color: var(--color-bg);
		border-color: var(--color-accent);
	}

	.highlights-list {
		margin: var(--space-md) 0 0 0;
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
		.achievement-header {
			flex-direction: column;
			gap: var(--space-sm);
		}

		.achievement-year {
			align-self: flex-start;
		}

		.achievement-metrics {
			grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
		}
	}
</style>
