import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContent}`}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Elena Krayneva. All rights reserved.
        </p>
        <div className={styles.links}>
          <a 
            href="https://www.linkedin.com/in/elena-d-krayneva/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.link}
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
