<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import ProfessionalSummary from '$lib/components/ProfessionalSummary.svelte';
	import Achievements from '$lib/components/Achievements.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import TechnicalSkills from '$lib/components/TechnicalSkills.svelte';
	import Education from '$lib/components/Education.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import portfolioData from '$lib/data/portfolio.json';
</script>

<Hero personal={portfolioData.personal} />
<ProfessionalSummary summary={portfolioData.personal.professionalSummary} />
<Achievements achievements={portfolioData.resume.achievements} />
<Experience experience={portfolioData.resume.experience} />
<TechnicalSkills skills={portfolioData.resume.technicalSkills} />
<Education education={portfolioData.resume.education} />
<Contact personal={portfolioData.personal} />
