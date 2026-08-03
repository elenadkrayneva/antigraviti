import { Metadata } from 'next';
import ProjectCasePage, { ProjectCaseProps } from '@/components/ProjectCasePage';
import projectCasesData from '@/data/project_cases.json';

const project = projectCasesData.projects.find(
  (p) => p.slug === 'oblicuo-customer-strategy'
) as ProjectCaseProps;

export const metadata: Metadata = {
  title: project.seo.title,
  description: project.seo.description,
};

export default function OblicuoCustomerStrategyPage() {
  return <ProjectCasePage project={project} />;
}
