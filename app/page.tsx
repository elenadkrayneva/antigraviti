import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Projects from '@/components/projects';
import Skills from '@/components/Skills';
import Chatbot from '@/components/Chatbot';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Navigation />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
      <Chatbot />
    </main>
  );
}
