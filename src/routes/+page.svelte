<script lang="ts">
	import type { PageData } from './$types';
	import Hero from '$lib/components/Hero.svelte';
	import ProfessionalSummary from '$lib/components/ProfessionalSummary.svelte';
	import Achievements from '$lib/components/Achievements.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import TechnicalSkills from '$lib/components/TechnicalSkills.svelte';
	import Education from '$lib/components/Education.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import portfolioData from '$lib/data/portfolio.json';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>{data.metadata.title}</title>
	<meta name="title" content={data.metadata.title} />
	<meta name="description" content={data.metadata.description} />
	<meta name="keywords" content={data.metadata.keywords.join(', ')} />
	<link rel="canonical" href={data.metadata.canonicalUrl} />

	<meta property="og:type" content={data.metadata.ogType} />
	<meta property="og:url" content={data.metadata.canonicalUrl} />
	<meta property="og:title" content={data.metadata.title} />
	<meta property="og:description" content={data.metadata.description} />
	<meta property="og:image" content={data.metadata.ogImage} />

	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={data.metadata.canonicalUrl} />
	<meta property="twitter:title" content={data.metadata.title} />
	<meta property="twitter:description" content={data.metadata.description} />
	<meta property="twitter:image" content={data.metadata.ogImage} />

	{@html `<script type="application/ld+json">${JSON.stringify(data.personSchema)}<\/script>`}
	{@html `<script type="application/ld+json">${JSON.stringify(data.websiteSchema)}<\/script>`}
</svelte:head>

<Hero personal={portfolioData.personal} />
<ProfessionalSummary summary={portfolioData.personal.professionalSummary} />
<Achievements achievements={portfolioData.resume.achievements} />
<Experience experience={portfolioData.resume.experience} />
<TechnicalSkills skills={portfolioData.resume.technicalSkills} />
<Education education={portfolioData.resume.education} />
<Contact personal={portfolioData.personal} />
