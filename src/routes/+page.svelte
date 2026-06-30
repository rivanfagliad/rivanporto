<script lang="ts">
	import { reveal } from '$lib/reveal';

	const skills = ['Apache Kafka', 'Confluent', 'Qlik Platform', 'ETL Pipelines', 'RDBMS', 'Networking', 'IT Support', 'Cybersecurity'];

	const languages = [
		{ name: 'Bahasa Indonesia', level: 'Native / Bilingual' },
		{ name: 'English', level: 'Professional Working' },
		{ name: '日本語', level: 'Elementary' }
	];

	const experience = [
		{
			company: 'All Data International',
			role: 'Technical Support Specialist',
			period: 'Jul 2024 — Present',
			location: 'DKI Jakarta',
			points: [
				'Monitor the Qlik platform 24/7 to identify and address operational issues.',
				'Investigate and diagnose ETL data, performance, and configuration problems.',
				'Collaborate with Engineering and IT Operations to resolve technical challenges.',
				'Provide timely incident response to minimize data streaming disruptions.',
				'Preventive maintenance for Qlik, Kafka and RDBMS environments at banks including PT Bank Rakyat Indonesia (Persero) Tbk and Bank BJB Tbk.'
			]
		},
		{
			company: 'Gombu Solution',
			role: 'Technician',
			period: 'Aug 2020 — Jun 2025',
			location: 'Cikarang Selatan, West Java',
			points: []
		},
		{
			company: 'Lazada',
			role: 'IT Staff',
			period: 'Mar 2024 — Jun 2024',
			location: 'Central Cikarang, West Java',
			points: [
				'Maintained software & hardware for the Warehouse Management System.',
				'Maintained and configured network infrastructure.',
				'Reported on incoming/outgoing IT goods and daily IT activities.',
				'Troubleshot and assisted warehouse operational IT problems.'
			]
		},
		{
			company: 'Advanced Computer System Laboratory UG',
			role: 'Research & Teaching Assistant',
			period: 'Jul 2021 — Mar 2024',
			location: 'Depok, Jawa Barat',
			points: [
				'Assisted lecturers and lab head in practicum sessions.',
				'Developed practicum materials for Advanced Computer Networks.',
				'Taught FPGA, basic-to-advanced Networking and Android Mobile Computing.',
				'Reviewed assignments, tracked attendance and maintained lab facilities.'
			]
		}
	];

	const certs = [
		{ title: 'Data Streaming Engineer', org: 'Confluent', featured: true },
		{ title: 'Google Cybersecurity Specialization', org: 'Google', featured: false },
		{ title: 'Google AI Essentials Specialization', org: 'Google', featured: false },
		{ title: 'IT Support Google Specialization', org: 'Google', featured: false }
	];

	const honors = [
		'Best Technical Support Specialist for the Qlik platform project at Bank Rakyat Indonesia — Data Platform Operations (2024)',
		'Associate-to-Bachelor Degree Scholarship Awardee',
		'Student with Best Academic Achievement'
	];

	const education = [
		{ school: 'Universitas Gunadarma', degree: "Bachelor's, Computer Systems", year: '2022 — 2023' },
		{ school: 'Universitas Gunadarma', degree: "Associate's, Computer Engineering", year: '2019 — 2022' },
		{ school: 'SMAN 1 Cikarang Selatan', degree: 'Science', year: '2017 — 2019' }
	];

	const nav = [
		{ href: '#about', label: 'About' },
		{ href: '#experience', label: 'Experience' },
		{ href: '#skills', label: 'Skills' },
		{ href: '#certs', label: 'Certs' },
		{ href: '#contact', label: 'Contact' }
	];

	let menuOpen = $state(false);
</script>

<header class="topbar">
	<a href="#top" class="brand">RFA</a>
	<button
		class="hamburger"
		aria-label="Toggle menu"
		aria-expanded={menuOpen}
		aria-controls="primary-nav"
		onclick={() => (menuOpen = !menuOpen)}
	>
		<span class:open={menuOpen}></span>
		<span class:open={menuOpen}></span>
		<span class:open={menuOpen}></span>
	</button>
	<nav id="primary-nav" class:open={menuOpen}>
		{#each nav as n}
			<a href={n.href} onclick={() => (menuOpen = false)}>{n.label}</a>
		{/each}
	</nav>
</header>

<main id="top">
	<!-- HERO -->
	<section class="hero" use:reveal>
		<div class="hero__card">
			<h1>Rivan Fagli Adzhi</h1>
			<p class="hero__role">Technical Support Specialist · Data Pipeline · Technician</p>
			<p class="hero__loc">Bekasi, Jawa Barat, Indonesia</p>
			<div class="hero__actions">
				<a class="btn" href="mailto:rivanfagliadzhi@gmail.com">Get in touch →</a>
				<a class="btn btn--secondary" href="https://www.linkedin.com/in/rivanfagli" target="_blank" rel="noreferrer">LinkedIn</a>
			</div>
		</div>
	</section>

	<!-- ABOUT + QUOTE -->
	<section id="about" class="grid-2">
		<div class="card" use:reveal>
			<h2>About Me</h2>
			<p>
				I keep data flowing. As a Technical Support Specialist I monitor and troubleshoot
				streaming platforms around the clock — diagnosing ETL, performance and configuration
				issues across Kafka, Confluent and Qlik for enterprise banking clients.
			</p>
			<p style="margin-top:16px">
				My background spans hands-on hardware/network technician work, warehouse IT operations,
				and university research & teaching in networking and embedded systems.
			</p>
		</div>
		<div class="quote" use:reveal>
			<h2>"Keep the pipeline alive, keep the business moving."</h2>
		</div>
	</section>

	<!-- EXPERIENCE -->
	<section id="experience">
		<h2 class="section-title" use:reveal>Experience</h2>
		<div class="stack">
			{#each experience as job}
				<article class="card" use:reveal>
					<div class="job-head">
						<h3>{job.role}</h3>
						<span class="tag">{job.period}</span>
					</div>
					<p class="job-meta">{job.company} · {job.location}</p>
					{#if job.points.length}
						<ul>
							{#each job.points as p}<li>{p}</li>{/each}
						</ul>
					{/if}
				</article>
			{/each}
		</div>
	</section>

	<!-- SKILLS + LANGUAGES -->
	<section id="skills" class="grid-2">
		<div class="card" use:reveal>
			<h2>Skills</h2>
			<div class="tags">
				{#each skills as s}<span class="tag">{s}</span>{/each}
			</div>
		</div>
		<div class="card" use:reveal>
			<h2>Languages</h2>
			<ul class="lang-list">
				{#each languages as l}
					<li><strong>{l.name}</strong><span>{l.level}</span></li>
				{/each}
			</ul>
		</div>
	</section>

	<!-- CERTIFICATIONS -->
	<section id="certs">
		<h2 class="section-title" use:reveal>Certifications</h2>
		<div class="cert-grid">
			{#each certs as c}
				<article class="card" class:featured={c.featured} use:reveal>
					{#if c.featured}<span class="badge" style="margin-bottom:12px">★ FEATURED</span>{/if}
					<h3>{c.title}</h3>
					<p class="job-meta">{c.org}</p>
				</article>
			{/each}
		</div>
		<div class="honors" use:reveal>
			<h2>Honors & Awards</h2>
			<ul>{#each honors as h}<li>{h}</li>{/each}</ul>
		</div>
	</section>

	<!-- EDUCATION -->
	<section id="education">
		<h2 class="section-title" use:reveal>Education</h2>
		<div class="stack">
			{#each education as e}
				<article class="card edu" use:reveal>
					<div>
						<h3>{e.school}</h3>
						<p class="job-meta">{e.degree}</p>
					</div>
					<span class="tag">{e.year}</span>
				</article>
			{/each}
		</div>
	</section>

	<!-- CONTACT -->
	<section id="contact">
		<div class="contact-card" use:reveal>
			<h2>Let's work together</h2>
			<p>Open to opportunities in technical support, data streaming and IT operations.</p>
			<div class="hero__actions">
				<a class="btn" href="mailto:rivanfagliadzhi@gmail.com">rivanfagliadzhi@gmail.com</a>
				<a class="btn btn--secondary" href="https://www.linkedin.com/in/rivanfagli" target="_blank" rel="noreferrer">linkedin.com/in/rivanfagli</a>
			</div>
		</div>
	</section>

	<footer>
		<p>© {new Date().getFullYear()} Rivan Fagli Adzhi</p>
	</footer>
</main>

<style>
	.topbar {
		position: sticky;
		top: 0;
		z-index: 50;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 16px 24px;
		background: var(--white);
		border-bottom: 4px solid var(--ink);
	}
	.brand {
		font-family: 'Space Grotesk', sans-serif;
		font-weight: 700;
		font-size: 24px;
		letter-spacing: -0.05em;
		text-decoration: none;
	}
	.topbar nav {
		display: flex;
		gap: 6px;
		flex-wrap: wrap;
	}
	.topbar nav a {
		text-decoration: none;
		font-weight: 600;
		font-size: 15px;
		padding: 8px 14px;
		border-radius: 8px;
		border: 3px solid transparent;
	}
	.topbar nav a:hover {
		background: var(--surface);
	}
	.topbar nav a:focus-visible {
		outline: 3px solid var(--accent);
		outline-offset: 2px;
	}

	.hamburger {
		display: none;
		flex-direction: column;
		justify-content: center;
		gap: 5px;
		width: 48px;
		height: 48px;
		padding: 0 11px;
		background: var(--cta);
		border: 3px solid var(--ink);
		border-radius: 8px;
		cursor: pointer;
	}
	.hamburger span {
		display: block;
		height: 3px;
		width: 100%;
		background: var(--ink);
		border-radius: 2px;
		transition: transform 0.2s ease, opacity 0.2s ease;
	}
	.hamburger span.open:nth-child(1) {
		transform: translateY(8px) rotate(45deg);
	}
	.hamburger span.open:nth-child(2) {
		opacity: 0;
	}
	.hamburger span.open:nth-child(3) {
		transform: translateY(-8px) rotate(-45deg);
	}
	.hamburger:focus-visible {
		outline: 3px solid var(--accent);
		outline-offset: 2px;
	}

	@media (max-width: 768px) {
		.hamburger {
			display: flex;
		}
		.topbar nav {
			position: absolute;
			top: 100%;
			left: 0;
			right: 0;
			flex-direction: column;
			gap: 8px;
			padding: 16px;
			background: var(--white);
			border-bottom: 4px solid var(--ink);
			box-shadow: 0 8px 0 var(--ink);
			display: none;
		}
		.topbar nav.open {
			display: flex;
		}
		.topbar nav a {
			border: 3px solid var(--ink);
			text-align: center;
		}
	}

	main {
		max-width: 1080px;
		margin: 0 auto;
		padding: 48px 24px 0;
	}

	section {
		margin-bottom: 64px;
	}

	.section-title {
		font-size: clamp(28px, 5vw, 44px);
		margin-bottom: 32px;
	}

	/* HERO */
	.hero {
		margin-top: 16px;
	}
	.hero__card {
		background: var(--accent);
		border: 4px solid var(--ink);
		border-radius: 8px;
		box-shadow: 8px 8px 0 var(--ink);
		padding: 48px;
	}
	.hero__card h1 {
		font-size: clamp(40px, 9vw, 80px);
		margin: 0 0 8px;
	}
	.hero__role {
		font-weight: 600;
		font-size: clamp(18px, 3vw, 24px);
	}
	.hero__loc {
		opacity: 0.85;
		margin-bottom: 32px;
	}
	.hero__actions {
		display: flex;
		gap: 16px;
		flex-wrap: wrap;
	}

	/* GRID */
	.grid-2 {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 32px;
	}

	.quote {
		background: var(--cta);
		border: 4px solid var(--ink);
		border-radius: 8px;
		box-shadow: 8px 8px 0 var(--ink);
		padding: 48px;
		display: flex;
		align-items: center;
	}
	.quote h2 {
		font-size: clamp(22px, 3vw, 32px);
		line-height: 1.2;
	}

	.stack {
		display: flex;
		flex-direction: column;
		gap: 32px;
	}

	.job-head {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 16px;
		flex-wrap: wrap;
	}
	.job-head h3 {
		font-size: 24px;
	}
	.job-meta {
		font-weight: 600;
		color: var(--accent);
		margin: 8px 0 16px;
	}
	.featured .job-meta {
		color: var(--ink);
	}
	ul {
		padding-left: 22px;
	}
	li {
		margin-bottom: 8px;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
		margin-top: 16px;
	}

	.lang-list {
		list-style: none;
		padding: 0;
		margin-top: 16px;
	}
	.lang-list li {
		display: flex;
		justify-content: space-between;
		border-bottom: 2px dashed var(--ink);
		padding: 12px 0;
	}
	.lang-list li:last-child {
		border-bottom: none;
	}

	.cert-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 32px;
		margin-bottom: 32px;
	}
	.featured {
		background: var(--accent);
	}

	.honors {
		background: var(--ink);
		color: var(--white);
		border-radius: 8px;
		padding: 32px;
	}
	.honors h2 {
		margin-bottom: 16px;
	}

	.edu {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 16px;
		flex-wrap: wrap;
	}

	.contact-card {
		background: var(--cta);
		border: 4px solid var(--ink);
		border-radius: 8px;
		box-shadow: 8px 8px 0 var(--ink);
		padding: 48px;
		text-align: center;
	}
	.contact-card h2 {
		font-size: clamp(28px, 5vw, 44px);
		margin-bottom: 12px;
	}
	.contact-card .hero__actions {
		justify-content: center;
		margin-top: 24px;
	}

	footer {
		border-top: 4px solid var(--ink);
		padding: 24px 0;
		text-align: center;
		font-size: 15px;
	}

	@media (max-width: 720px) {
		.grid-2,
		.cert-grid {
			grid-template-columns: 1fr;
		}
		.hero__card,
		.quote,
		.contact-card {
			padding: 28px;
		}
	}
</style>
