<script lang="ts">
	import type { Achievement } from '$lib/types/portfolio';
	import AchievementCard from './AchievementCard.svelte';

	interface Props {
		achievements: Achievement[];
	}

	let { achievements }: Props = $props();
</script>

<section class="achievements section">
	<div class="container">
		<h2 class="section-title">Key Technical Achievements</h2>
		<div class="achievements-grid">
			{#each achievements as achievement (achievement.id)}
				<AchievementCard {achievement} />
			{/each}
		</div>
	</div>
</section>

<style>
	.achievements {
		background-color: var(--color-bg);
	}

	.achievements-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
		gap: var(--space-xl);
	}

	@media (max-width: 768px) {
		.achievements-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
