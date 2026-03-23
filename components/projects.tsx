'use client';
import { motion } from 'framer-motion';
import styles from './projects.module.css';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import projectsData from '@/data/projects.json';
import Image from 'next/image';

export default function Projects() {
  const openChatbot = () => {
    window.dispatchEvent(new CustomEvent('open-chatbot'));
  };

  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>Consulting Case Studies</h2>
          <p className={styles.sectionSubtitle}>Solving business problems through data-driven performance analysis.</p>
        </motion.div>
        
        <div className={styles.grid}>
          {projectsData.map((project: any, index: number) => {
            const imageMap: {[key: string]: string} = {
              "ai-startup": "/images/project_ai.png",
              "digify-active": "/images/project_digify.png",
              "oblicuo": "/images/project_oblicuo.png"
            };
            const imagePath = imageMap[project.id] || "/images/hero_bg.png";

            return (
              <motion.div 
                key={project.id} 
                className={`glass-panel ${styles.card}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                onClick={openChatbot}
              >
                <div className={styles.imageContainer}>
                  <Image 
                    src={imagePath} 
                    alt={project.title} 
                    fill 
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className={styles.imageOverlay} />
                  <div className={styles.cardBadge}>{project.tags[0]}</div>
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardHeader}>
                    <h3 className={styles.title}>{project.title}</h3>
                    <ArrowUpRight size={22} className={styles.icon} />
                  </div>
                  <p className={styles.description}>{project.description}</p>
                  
                  <div className={styles.challengeBox}>
                    <span className={styles.label}>Challenge:</span>
                    <p className={styles.problem}>{project.problem}</p>
                  </div>

                  <div className={styles.resultBox}>
                    <span className={styles.label}>Outcome:</span>
                    <p className={styles.result}>{project.result}</p>
                  </div>

                  <div className={styles.tags}>
                    {project.tags.map((tag: string) => (
                      <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
