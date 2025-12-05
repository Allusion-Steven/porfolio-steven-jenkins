export interface PageMetadata {
	title: string;
	description: string;
	keywords: string[];
	canonicalUrl: string;
	ogImage: string;
	ogType: 'website' | 'profile';
}

export interface JsonLdPerson {
	'@context': 'https://schema.org';
	'@type': 'Person';
	name: string;
	jobTitle: string;
	description: string;
	url: string;
	email: string;
	address: {
		'@type': 'PostalAddress';
		addressLocality: string;
		addressRegion: string;
	};
	alumniOf: {
		'@type': 'EducationalOrganization';
		name: string;
	};
}

export interface JsonLdWebSite {
	'@context': 'https://schema.org';
	'@type': 'WebSite';
	name: string;
	url: string;
}
