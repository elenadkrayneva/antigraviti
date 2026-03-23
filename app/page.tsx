'use client';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Projects from '@/components/projects';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

export default function Home() {
  return (
    <>
      {/* 
        Left Column: Fixed/Sticky 
        Inspired by Brittany Chiang
      */}
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
        <div>
          <Hero />
          <Navigation />
        </div>
        
        {/* Socials can go here later */}
        <div className="hidden lg:block mt-8">
          {/* Add social links here */}
        </div>
      </header>

      {/* 
        Right Column: Scrolling Content
      */}
      <main className="pt-24 lg:w-1/2 lg:py-24">
        <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-bg-primary/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-fg-primary lg:sr-only">About</h2>
          </div>
          <div>
            <p className="mb-4 text-fg-secondary italic text-lg leading-relaxed">
              MSc Digital Marketing & Analytics student with a strong interest in marketing performance, growth strategy, and data-driven decision-making. 
            </p>
            <p className="mb-4 text-fg-secondary">
              Through applied academic projects, I have developed experience in campaign analysis, funnel evaluation, and KPI-based performance reporting. 
              I am particularly interested in translating marketing data into strategic insights and optimization opportunities.
            </p>
          </div>
        </section>

        <Experience />
        <Projects />
        <Skills />
        <Footer />
        <Chatbot />
      </main>
    </>
  );
}
