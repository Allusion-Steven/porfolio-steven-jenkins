<script lang="ts">
	import type { TechnicalSkills } from '$lib/types/portfolio';

	interface Props {
		skills: TechnicalSkills;
	}

	let { skills }: Props = $props();
</script>

<section class="technical-skills section">
	<div class="container">
		<h2 class="section-title">Technical Skills</h2>
		<div class="skills-grid">
			<div class="skill-category">
				<h3 class="category-title">Languages & Core</h3>
				<ul class="skill-list">
					{#each skills.languagesCore as skill}
						<li class="skill-tag">{skill}</li>
					{/each}
				</ul>
			</div>
			<div class="skill-category">
				<h3 class="category-title">Frameworks</h3>
				<ul class="skill-list">
					{#each skills.frameworks as skill}
						<li class="skill-tag">{skill}</li>
					{/each}
				</ul>
			</div>
			<div class="skill-category">
				<h3 class="category-title">Infrastructure</h3>
				<ul class="skill-list">
					{#each skills.infrastructure as skill}
						<li class="skill-tag">{skill}</li>
					{/each}
				</ul>
			</div>
			<div class="skill-category">
				<h3 class="category-title">Development Tools</h3>
				<ul class="skill-list">
					{#each skills.developmentTools as skill}
						<li class="skill-tag">{skill}</li>
					{/each}
				</ul>
			</div>
			<div class="skill-category">
				<h3 class="category-title">Backend & APIs</h3>
				<ul class="skill-list">
					{#each skills.backendApis as skill}
						<li class="skill-tag">{skill}</li>
					{/each}
				</ul>
			</div>
			<div class="skill-category">
				<h3 class="category-title">Databases</h3>
				<ul class="skill-list">
					{#each skills.databases as skill}
						<li class="skill-tag">{skill}</li>
					{/each}
				</ul>
			</div>
			<div class="skill-category">
				<h3 class="category-title">Creative Tools</h3>
				<ul class="skill-list">
					{#each skills.creativeTools as skill}
						<li class="skill-tag">{skill}</li>
					{/each}
				</ul>
			</div>
			<div class="skill-category">
				<h3 class="category-title">Methodologies</h3>
				<ul class="skill-list">
					{#each skills.methodologies as skill}
						<li class="skill-tag">{skill}</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>

<style>
	.technical-skills {
		background-color: var(--color-bg);
	}

	.skills-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: var(--space-xl);
	}

	.skill-category {
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
	}

	.category-title {
		font-size: var(--text-lg);
		font-weight: 600;
		color: var(--color-text-primary);
		margin: 0;
	}

	.skill-list {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-sm);
		margin: 0;
		padding: 0;
	}

	.skill-tag {
		font-size: var(--text-sm);
		padding: var(--space-sm) var(--space-md);
		background-color: var(--color-surface);
		color: var(--color-text-secondary);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-md);
		font-weight: 500;
	}

	@media (max-width: 768px) {
		.skills-grid {
			grid-template-columns: 1fr;
			gap: var(--space-lg);
		}
	}
</style>
