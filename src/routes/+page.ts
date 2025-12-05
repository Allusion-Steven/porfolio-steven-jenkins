import type { PageLoad } from './$types';
import portfolioData from '$lib/data/portfolio.json';
import { buildPageMetadata, buildPersonSchema, buildWebSiteSchema } from '$lib/utils/seo';
import { SITE_CONFIG } from '$lib/config/site';

export const prerender = true;

export const load: PageLoad = () => {
	const metadata = buildPageMetadata(
		portfolioData.personal,
		portfolioData.resume.technicalSkills,
		SITE_CONFIG.url
	);

	return {
		metadata,
		personSchema: buildPersonSchema(portfolioData.personal, SITE_CONFIG.url),
		websiteSchema: buildWebSiteSchema(SITE_CONFIG)
	};
};
