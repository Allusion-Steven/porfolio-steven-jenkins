<script lang="ts">
	interface Props {
		summary: string;
	}

	let { summary }: Props = $props();
</script>

<section class="professional-summary">
	<div class="container">
		<p class="summary-content">{summary}</p>
	</div>
</section>

<style>
	.professional-summary {
		padding: var(--space-2xl) 0;
		background-color: var(--color-surface);
	}

	.summary-content {
		max-width: 800px;
		margin: 0 auto;
		font-size: var(--text-lg);
		line-height: var(--leading-relaxed);
		color: var(--color-text-secondary);
		text-align: center;
	}

	@media (max-width: 768px) {
		.professional-summary {
			padding: var(--space-xl) 0;
		}

		.summary-content {
			font-size: var(--text-base);
		}
	}
</style>
