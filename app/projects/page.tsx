import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Projects | Elena Krayneva',
  description: 'Selected projects in marketing analytics, strategy, customer research, and business analysis.',
};

const ALL_PROJECTS = [
  {
    slug: 'ai-startup-strategy',
    title: 'AI Startup — Strategic Market Consulting',
    type: 'Academic consulting project',
    description:
      'Compared potential industry verticals for an early-stage AI company and developed a strategic recommendation based on market attractiveness, competitive differentiation, adoption barriers, and implementation feasibility.',
    tags: [
      'Market Research',
      'Competitive Analysis',
      'Market Prioritisation',
      'Strategic Positioning',
      'Go-to-Market Strategy',
    ],
    cta: 'View Case',
    href: '/projects/ai-startup-strategy',
  },
  {
    slug: 'digify-active',
    title: 'Digify Active — B2B Growth & Marketing Analytics',
    type: 'Applied academic project',
    context: 'Target market: SME fitness businesses',
    description:
      'Developed and tested a B2B acquisition funnel for SME fitness businesses, connecting positioning, HubSpot landing pages, Google Ads, and conversion performance analysis.',
    tags: ['Funnel Analysis', 'Google Ads', 'HubSpot', 'Marketing Analytics', 'B2B Strategy'],
    cta: 'View Case',
    href: '/projects/digify-active',
  },
  {
    slug: 'oblicuo-customer-strategy',
    title: 'Oblicuo Hi-Fi Bar — Customer Research & Social Strategy',
    type: 'Applied academic project',
    description:
      'Conducted customer research for a Barcelona hi-fi bar to understand barriers to weekday visits and translate customer insights into a measurable growth and communication strategy.',
    tags: [
      'Customer Research',
      'Qualitative Interviews',
      'Segmentation',
      'Customer Journey',
      'KPI Framework',
    ],
    cta: 'View Case',
    href: '/projects/oblicuo-customer-strategy',
  },
];

export default function ProjectsPage() {
  return (
    <main className={styles.main}>
      <div className="container">
        <header className={styles.header}>
          <h1 className={styles.title}>Projects</h1>
          <p className={styles.subtitle}>
            Selected projects in marketing analytics, strategy, customer research, and business analysis.
          </p>
        </header>

        <div className={styles.grid}>
          {ALL_PROJECTS.map((project) => (
            <article key={project.slug} className={styles.card}>
              <div>
                <div className={styles.badgeRow}>
                  <span className={styles.typeBadge}>{project.type}</span>
                  {project.context && (
                    <span className={styles.contextBadge}>{project.context}</span>
                  )}
                </div>

                <h2 className={styles.cardTitle}>{project.title}</h2>
                <p className={styles.cardDescription}>{project.description}</p>
              </div>

              <div>
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className={styles.cardFooter}>
                  <Link href={project.href} className={styles.cardLink}>
                    {project.cta} <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
