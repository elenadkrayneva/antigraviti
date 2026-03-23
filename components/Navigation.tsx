'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navigation.module.css';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="mt-16 hidden lg:block">
      <ul className="flex flex-col gap-4">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link 
              href={item.href}
              className={`group flex items-center py-3 ${activeSection === item.href.substring(1) ? styles.active : ''}`}
            >
              <span className={`mr-4 h-px w-8 bg-fg-muted transition-all group-hover:w-16 group-hover:bg-fg-primary ${activeSection === item.href.substring(1) ? 'w-16 bg-fg-primary' : ''}`}></span>
              <span className={`text-xs font-bold uppercase tracking-widest text-fg-muted group-hover:text-fg-primary ${activeSection === item.href.substring(1) ? 'text-fg-primary' : ''}`}>
                {item.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
