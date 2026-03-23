'use client';
import { motion } from 'framer-motion';
import cvData from '@/data/cv.json';

export default function Skills() {
  const { skills_categorized } = cvData;

  return (
    <section id="skills" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-bg-primary/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-fg-primary lg:sr-only">Skills</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(skills_categorized).map(([category, skills], index) => (
          <motion.div 
            key={category} 
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-xs font-bold uppercase tracking-widest text-fg-muted">
              {category.replace('_', ' ')}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {(skills as string[]).map((skill) => (
                <li key={skill}>
                  <div className="rounded-md border border-border-subtle bg-bg-secondary px-3 py-1.5 text-xs font-medium text-fg-primary transition-all hover:border-brand-accent hover:text-brand-accent cursor-default">
                    {skill}
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
