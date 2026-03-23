'use client';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer id="footer" className="pb-16 text-sm text-fg-muted">
      <p className="max-w-md leading-normal">
        Designed & Built by Elena Krayneva. Inspired by the work of <a href="https://brittanychiang.com/" target="_blank" rel="noreferrer" className="font-medium text-fg-secondary hover:text-brand-accent focus-visible:text-brand-accent">Brittany Chiang</a> and <a href="https://www.adhamdannaway.com/" target="_blank" rel="noreferrer" className="font-medium text-fg-secondary hover:text-brand-accent focus-visible:text-brand-accent">Adham Dannaway</a>.
      </p>
      <div className="mt-8">
        <p>© 2026 Elena Krayneva. All rights reserved.</p>
      </div>
    </footer>
  );
}
