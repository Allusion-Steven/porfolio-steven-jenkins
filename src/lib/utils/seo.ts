import type { PersonalInfo, TechnicalSkills } from '$lib/types/portfolio';
import type { PageMetadata, JsonLdPerson, JsonLdWebSite } from '$lib/types/seo';
import type { SITE_CONFIG } from '$lib/config/site';

export function truncateDescription(text: string, maxLength: number = 155): string {
	if (text.length <= maxLength) return text;

	const truncated = text.slice(0, maxLength);
	const lastSpace = truncated.lastIndexOf(' ');

	if (lastSpace > 0) {
		return truncated.slice(0, lastSpace) + '...';
	}

	return truncated + '...';
}

export function buildKeywords(skills: TechnicalSkills): string[] {
	const allSkills: string[] = [
		...skills.languagesCore,
		...skills.frameworks,
		...skills.infrastructure,
		...skills.backendApis,
		...skills.developmentTools,
		...skills.databases
	];

	return allSkills.slice(0, 15);
}

export function buildPageMetadata(
	personal: PersonalInfo,
	skills: TechnicalSkills,
	baseUrl: string
): PageMetadata {
	return {
		title: `${personal.name} - ${personal.title}`,
		description: truncateDescription(personal.professionalSummary),
		keywords: buildKeywords(skills),
		canonicalUrl: baseUrl,
		ogImage: `${baseUrl}${personal.headshot}`,
		ogType: 'profile'
	};
}

export function buildPersonSchema(personal: PersonalInfo, baseUrl: string): JsonLdPerson {
	return {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: personal.name,
		jobTitle: personal.title,
		description: truncateDescription(personal.professionalSummary, 250),
		url: baseUrl,
		email: personal.email,
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'West Palm Beach',
			addressRegion: 'Florida'
		},
		alumniOf: {
			'@type': 'EducationalOrganization',
			name: 'University of Miami'
		}
	} satisfies JsonLdPerson;
}

export function buildWebSiteSchema(
	config: typeof SITE_CONFIG
): JsonLdWebSite {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: config.name,
		url: config.url
	} satisfies JsonLdWebSite;
}
