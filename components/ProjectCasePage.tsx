'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowDown, ExternalLink, Github, CheckCircle2, Layers, GitCommit } from 'lucide-react';
import styles from './ProjectCasePage.module.css';

interface MetaItem {
  label: string;
  value: string;
}

interface SectionItem {
  title: string;
  content: string;
}

interface RoadmapItem {
  stage: string;
  title: string;
  description: string;
}

interface LogicFlowItem {
  num: string;
  title: string;
  text: string;
}

interface ContributionSplit {
  independentlyLed: string[];
  contributedTo: string[];
}

interface KeyInsight {
  num: string;
  headline: string;
  detail: string;
}

interface ResearchStat {
  number: string;
  label: string;
}

export interface ProjectCaseProps {
  slug: string;
  route: string;
  type: string;
  title: string;
  summary: string;
  github: string;
  githubLabel: string;
  liveSite?: string;
  liveSiteLabel?: string;
  tags: string[];
  metadataStrip: MetaItem[];
  challenge: {
    text: string;
    quote: string;
  };
  approach?: {
    intro: string;
    criteria: string[];
  };
  foundation?: SectionItem[];
  research?: SectionItem[];
  researchStats?: ResearchStat[];
  keyInsights?: KeyInsight[];
  logicFlow?: LogicFlowItem[];
  strategicRecommendation: {
    headline: string;
    principles: string[];
  };
  roadmap?: RoadmapItem[];
  journeySteps?: { step: string; name: string; desc: string }[];
  channelComparison?: { criterion: string; search: string; display: string }[];
  performanceMetrics?: { metric: string; detail: string }[];
  optimisationGrid?: { category: string; action: string }[];
  spotlightSegment?: {
    title: string;
    desc: string;
    need: string;
    communication: string;
  };
  journeyStages?: { stage: string; name: string; desc: string }[];
  kpiChain?: string[];
  contributionSplit: ContributionSplit;
  outcome: {
    text: string;
    disclaimer: string;
  };
  seo: {
    title: string;
    description: string;
  };
}

const ALL_PROJECTS = [
  { slug: 'ai-startup-strategy', title: 'AI Startup', route: '/projects/ai-startup-strategy' },
  { slug: 'digify-active', title: 'Digify Active', route: '/projects/digify-active' },
  { slug: 'oblicuo-customer-strategy', title: 'Oblicuo', route: '/projects/oblicuo-customer-strategy' },
];

export default function ProjectCasePage({ project }: { project: ProjectCaseProps }) {
  const currentIndex = ALL_PROJECTS.findIndex((p) => p.slug === project.slug);
  const prevIndex = (currentIndex - 1 + ALL_PROJECTS.length) % ALL_PROJECTS.length;
  const nextIndex = (currentIndex + 1) % ALL_PROJECTS.length;

  const prevProject = ALL_PROJECTS[prevIndex];
  const nextProject = ALL_PROJECTS[nextIndex];

  return (
    <main className={styles.main}>
      <div className="container">
        {/* Back Link */}
        <Link href="/projects" className={styles.backLink}>
          <ArrowLeft size={16} /> Back to Projects
        </Link>

        {/* Hero Section */}
        <header className={styles.hero}>
          <div className={styles.badgeRow}>
            <span className={styles.typeBadge}>{project.type}</span>
          </div>

          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.summary}>{project.summary}</p>

          <div className={styles.tags}>
            {project.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>

          <div className={styles.actionRow}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githubBtn}
            >
              <Github size={18} /> {project.githubLabel}
            </a>

            {project.liveSite && (
              <a
                href={project.liveSite}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.liveBtn}
              >
                <ExternalLink size={18} /> {project.liveSiteLabel || 'View live site'}
              </a>
            )}
          </div>
        </header>

        {/* Compact Metadata Strip */}
        <div className={styles.metadataStrip}>
          {project.metadataStrip.map((item, idx) => (
            <div key={idx} className={styles.metaItem}>
              <span className={styles.metaLabel}>{item.label}</span>
              <span className={styles.metaValue}>{item.value}</span>
            </div>
          ))}
        </div>

        {/* Business Challenge */}
        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>Business Challenge</h2>
          <p className={styles.readableText}>{project.challenge.text}</p>
          <div className={styles.quoteBox}>
            <p className={styles.quoteText}>&ldquo;{project.challenge.quote}&rdquo;</p>
          </div>
        </section>

        {/* Strategic Decision Framework (Flowchart Scheme for AI Startup) */}
        {project.approach && (
          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Strategic Decision Framework</h2>
            <p className={styles.readableText}>{project.approach.intro}</p>
            
            <div className={styles.schemeContainer}>
              <div className={styles.schemeHeader}>
                <Layers size={16} style={{ marginRight: 6, verticalAlign: 'middle' }} /> 7-Criterion Evaluation Scheme
              </div>
              <div className={styles.flowDiagram}>
                {project.approach.criteria.map((item, idx) => (
                  <div key={idx} className={styles.flowStep}>
                    <div className={styles.flowNodeBadge}>0{idx + 1}</div>
                    <div className={styles.flowContent}>
                      <div className={styles.flowTitle}>{item.replace(/^\d+\.\s*/, '')}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Strategic Foundation (for Digify Active) */}
        {project.foundation && (
          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Strategic Foundation</h2>
            <div className={styles.subGrid}>
              {project.foundation.map((item, idx) => (
                <div key={idx} className={styles.subCard}>
                  <h3 className={styles.subHeading}>{item.title}</h3>
                  <p className={styles.readableText}>{item.content}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Research Stats Strip (for Oblicuo) */}
        {project.researchStats && (
          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Research in Numbers</h2>
            <div className={styles.statsStrip}>
              {project.researchStats.map((stat, idx) => (
                <div key={idx} className={styles.statCard}>
                  <div className={styles.statNumber}>{stat.number}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Research & Analysis */}
        {project.research && (
          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Research & Analysis</h2>
            <div className={styles.subGrid}>
              {project.research.map((item, idx) => (
                <div key={idx} className={styles.subCard}>
                  <h3 className={styles.subHeading}>{item.title}</h3>
                  <p className={styles.readableText}>{item.content}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Numbered Key Insights (01 - 04 for Oblicuo) */}
        {project.keyInsights && (
          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Key Customer Insights</h2>
            <div className={styles.insightsGrid}>
              {project.keyInsights.map((insight) => (
                <div key={insight.num} className={styles.insightCard}>
                  <span className={styles.insightNumber}>{insight.num}</span>
                  <h3 className={styles.insightHeadline}>{insight.headline}</h3>
                  <p className={styles.insightDetail}>{insight.detail}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Priority Segment Spotlight (for Oblicuo) */}
        {project.spotlightSegment && (
          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Priority Segment Spotlight</h2>
            <div className={styles.spotlightCard}>
              <h3 className={styles.spotlightTitle}>{project.spotlightSegment.title}</h3>
              <p className={styles.spotlightDesc}>{project.spotlightSegment.desc}</p>
              <div className={styles.spotlightGrid}>
                <div className={styles.spotlightItem}>
                  <div className={styles.spotlightLabel}>Primary Need</div>
                  <div className={styles.spotlightText}>{project.spotlightSegment.need}</div>
                </div>
                <div className={styles.spotlightItem}>
                  <div className={styles.spotlightLabel}>Communication Response</div>
                  <div className={styles.spotlightText}>{project.spotlightSegment.communication}</div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Customer Journey Steps (for Digify) */}
        {project.journeySteps && (
          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Customer Acquisition Journey</h2>
            <div className={styles.subGrid}>
              {project.journeySteps.map((step) => (
                <div key={step.step} className={styles.subCard}>
                  <div className={styles.insightNumber}>{step.step}</div>
                  <h3 className={styles.subHeading}>{step.name}</h3>
                  <p className={styles.readableText}>{step.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Channel Comparison (Search vs Display for Digify) */}
        {project.channelComparison && (
          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Search vs Display Comparison</h2>
            <div className={styles.subGrid}>
              {project.channelComparison.map((item, idx) => (
                <div key={idx} className={styles.subCard}>
                  <h3 className={styles.subHeading}>{item.criterion}</h3>
                  <p className={styles.readableText}><strong>Search:</strong> {item.search}</p>
                  <p className={styles.readableText}><strong>Display:</strong> {item.display}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Performance Metrics Strip (for Digify) */}
        {project.performanceMetrics && (
          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Performance Analytics</h2>
            <div className={styles.criteriaGrid}>
              {project.performanceMetrics.map((item, idx) => (
                <div key={idx} className={styles.criterionCard}>
                  <strong>{item.metric}</strong>: {item.detail}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Recommendation Logic Pipeline Flow Scheme (for AI Startup) */}
        {project.logicFlow && (
          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Recommendation Logic Pipeline</h2>
            
            <div className={styles.schemeContainer}>
              <div className={styles.schemeHeader}>
                <GitCommit size={16} style={{ marginRight: 6, verticalAlign: 'middle' }} /> 5-Step Strategic Pipeline Scheme
              </div>
              <div className={styles.flowDiagram}>
                {project.logicFlow.map((flow, idx) => (
                  <div key={flow.num}>
                    <div className={styles.flowStep}>
                      <div className={styles.flowNodeBadge}>{flow.num}</div>
                      <div className={styles.flowContent}>
                        <div className={styles.flowTitle}>{flow.title}</div>
                        <div className={styles.flowText}>{flow.text}</div>
                      </div>
                    </div>
                    {idx < project.logicFlow!.length - 1 && (
                      <div className={styles.connectorArrow}>
                        <ArrowDown size={18} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* High-Emphasis Strategic Recommendation Banner */}
        <section className={styles.recommendationBanner}>
          <span className={styles.recTag}>Strategic Recommendation</span>
          <h2 className={styles.recHeadline}>&ldquo;{project.strategicRecommendation.headline}&rdquo;</h2>
          <ul className={styles.recList}>
            {project.strategicRecommendation.principles.map((principle, idx) => (
              <li key={idx} className={styles.recItem}>
                <CheckCircle2 size={18} className={styles.recIcon} />
                <span>{principle}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Optimisation Grid (for Digify) */}
        {project.optimisationGrid && (
          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Optimisation Recommendations Grid</h2>
            <div className={styles.subGrid}>
              {project.optimisationGrid.map((opt, idx) => (
                <div key={idx} className={styles.subCard}>
                  <h3 className={styles.subHeading}>{opt.category}</h3>
                  <p className={styles.readableText}>{opt.action}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Go-to-Market Roadmap Process Scheme (for AI Startup) */}
        {project.roadmap && (
          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Go-to-Market Roadmap</h2>
            
            <div className={styles.processScheme}>
              {project.roadmap.map((item, idx) => (
                <div key={idx} className={styles.processNode}>
                  <div className={styles.processNodeNum}>{item.stage}</div>
                  <h3 className={styles.processNodeTitle}>{item.title}</h3>
                  <p className={styles.processNodeText}>{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* KPI Chain (for Oblicuo) */}
        {project.kpiChain && (
          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>KPI Measurement Framework</h2>
            <div className={styles.criteriaGrid}>
              {project.kpiChain.map((kpi, idx) => (
                <div key={idx} className={styles.criterionCard}>
                  {kpi}
                </div>
              ))}
            </div>
            <div className={styles.disclaimerBox}>
              These were proposed indicators. The project did not include a complete post-implementation commercial dataset.
            </div>
          </section>
        )}

        {/* 2-Column Contribution Section */}
        <section className={styles.contributionSection}>
          <h2 className={styles.contributionHeading}>My Contribution</h2>
          <div className={styles.contributionColumns}>
            <div className={styles.contribCol}>
              <h3 className={styles.contribTitle}>Independently Developed / Led</h3>
              <ul className={styles.bulletsList}>
                {project.contributionSplit.independentlyLed.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className={styles.contribCol}>
              <h3 className={styles.contribTitle}>Contributed To</h3>
              <ul className={styles.bulletsList}>
                {project.contributionSplit.contributedTo.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Outcome */}
        <section className={styles.outcomeSection}>
          <h2 className={styles.sectionHeading}>Outcome & Deliverables</h2>
          <p className={styles.readableText}>{project.outcome.text}</p>
          <div className={styles.disclaimerBox}>{project.outcome.disclaimer}</div>
        </section>

        {/* Bottom Project Navigation */}
        <nav className={styles.navFooter} aria-label="Project Navigation">
          <Link href={prevProject.route} className={styles.navBtn}>
            <ArrowLeft size={16} /> Previous: {prevProject.title}
          </Link>

          <Link href="/projects" className={styles.navBtn}>
            All Projects
          </Link>

          <Link href={nextProject.route} className={styles.navBtn}>
            Next: {nextProject.title} <ArrowRight size={16} />
          </Link>
        </nav>
      </div>
    </main>
  );
}
