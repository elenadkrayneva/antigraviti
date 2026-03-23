'use client';
import { motion } from 'framer-motion';
import cvData from '@/data/cv.json';

export default function Hero() {
  const { profile } = cvData;

  return (
    <section className="flex flex-col gap-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold tracking-tight text-fg-primary sm:text-6xl">
          <span className="text-gradient">{profile.name}</span>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-fg-primary sm:text-xl">
          {profile.role}
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-fg-secondary">
          {profile.headline}
        </p>
      </motion.div>
    </section>
  );
}
