<script lang="ts">
	import type { PersonalInfo } from '$lib/types/portfolio';

	interface Props {
		personal: PersonalInfo;
	}

	let { personal }: Props = $props();
</script>

<section class="contact section">
	<div class="container">
		<h2 class="section-title">Get In Touch</h2>
		<div class="contact-content">
			<p class="contact-description">
				I'm always open to discussing new opportunities, interesting projects, or potential collaborations.
			</p>
			<div class="contact-links">
				<a href="mailto:{personal.email}" class="contact-link primary">
					Email Me
				</a>
				<div class="social-links">
					<a href="https://{personal.github}" target="_blank" rel="noopener noreferrer" class="contact-link">
						GitHub
					</a>
					<a href="https://{personal.linkedin}" target="_blank" rel="noopener noreferrer" class="contact-link">
						LinkedIn
					</a>
					{#if personal.website}
						<a href="https://{personal.website}" target="_blank" rel="noopener noreferrer" class="contact-link">
							Website
						</a>
					{/if}
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.contact {
		background-color: var(--color-surface);
	}

	.contact-content {
		max-width: 600px;
		margin: 0 auto;
		text-align: center;
	}

	.contact-description {
		font-size: var(--text-lg);
		color: var(--color-text-secondary);
		margin-bottom: var(--space-xl);
		line-height: var(--leading-relaxed);
	}

	.contact-links {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-lg);
	}

	.contact-link {
		font-size: var(--text-base);
		font-weight: 600;
		color: var(--color-accent);
		text-decoration: none;
		padding: var(--space-sm) var(--space-lg);
		border-radius: var(--radius-md);
		transition: all var(--transition-base);
		min-width: 120px;
		text-align: center;
	}

	.contact-link:hover {
		color: var(--color-accent-hover);
		text-decoration: underline;
	}

	.contact-link.primary {
		background-color: var(--color-accent);
		color: white;
		padding: var(--space-md) var(--space-xl);
		font-size: var(--text-lg);
	}

	.contact-link.primary:hover {
		background-color: var(--color-accent-hover);
		text-decoration: none;
		transform: translateY(-2px);
		box-shadow: var(--shadow-md);
	}

	.social-links {
		display: flex;
		gap: var(--space-lg);
		justify-content: center;
		flex-wrap: wrap;
	}

	@media (max-width: 640px) {
		.contact-description {
			font-size: var(--text-base);
		}

		.social-links {
			flex-direction: column;
			gap: var(--space-md);
		}
	}
</style>
