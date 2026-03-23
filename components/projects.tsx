'use client';
import { motion } from 'framer-motion';
import projectsData from '@/data/projects.json';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

export default function Projects() {
  return (
    <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-bg-primary/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-fg-primary lg:sr-only">Projects</h2>
      </div>

      <ul className="group/list space-y-12">
        {projectsData.map((project, index) => (
          <motion.li 
            key={project.id} 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-bg-secondary lg:group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] lg:group-hover:drop-shadow-lg"></div>
              
              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3>
                  <a className="inline-flex items-baseline font-medium leading-tight text-fg-primary hover:text-brand-accent focus-visible:text-brand-accent  group/link text-base" href="#" target="_blank" rel="noreferrer" aria-label={project.title}>
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>
                      {project.title} <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                    </span>
                  </a>
                </h3>
                <p className="mt-2 text-sm leading-normal text-fg-secondary">
                  {project.description}
                </p>
                <ul className="mt-4 flex flex-wrap" aria-label="Technologies used">
                  {project.tags.map((tag, idx) => (
                    <li key={idx} className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-brand-accent-muted px-3 py-1 text-xs font-medium leading-5 text-brand-accent">
                        {tag}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="z-10 sm:order-1 sm:col-span-2">
                <div className="relative aspect-video rounded border-2 border-border-subtle transition group-hover:border-fg-muted sm:aspect-square">
                  <Image
                    src={`/images/${project.id === 'ai-startup' ? 'project_ai.png' : project.id === 'oblicuo' ? 'project_oblicuo.png' : 'project_digify.png'}`}
                    alt={project.title}
                    fill
                    className="object-cover rounded grayscale transition-all group-hover:grayscale-0"
                  />
                </div>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
