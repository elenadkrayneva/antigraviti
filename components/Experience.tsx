'use client';
import { motion } from 'framer-motion';
import cvData from '@/data/cv.json';
import { ArrowUpRight } from 'lucide-react';

export default function Experience() {
  const { experience } = cvData;

  return (
    <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-bg-primary/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-fg-primary lg:sr-only">Experience</h2>
      </div>
      
      <ol className="group/list space-y-12">
        {experience.map((item, index) => (
          <motion.li 
            key={index} 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-fg-muted sm:col-span-2">
                {item.date}
              </header>

              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-fg-primary font-serif italic text-xl">
                  <div>
                    <a className="inline-flex items-baseline font-medium leading-tight text-fg-primary hover:text-brand-accent focus-visible:text-brand-accent  group/link text-base" href="#" target="_blank" rel="noreferrer" aria-label={`${item.role} at ${item.company}`}>
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>
                        {item.role} · <span className="inline-block">{item.company} <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" /></span>
                      </span>
                    </a>
                  </div>
                </h3>
                <div className="mt-2 text-sm leading-normal text-fg-secondary">
                  <ul className="list-disc list-inside space-y-1">
                    {item.bullets.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
