import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import P5Sketch from '../components/P5Sketch';
import styles from './styles/Home.module.css';

export const metadata: Metadata = {
  title: "Moses' Portfolio",
  description: 'A hero page with p5.js sketch integrated.',
};

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <P5Sketch />
      </main>
      <section id="projects" className={styles.projectsSection}>
        <nav className={styles.navbar}>
          <Link href="/">
            <img src="/assets/logo.png" alt="Logo" className={styles.navLogo} />
          </Link>
        </nav>
        <div className={styles.projectContent}>
          <div className={styles.textSection}>
            <h1 className={styles.projectTitle}>A NEW KIND OF TRAVEL FORUM</h1>
            <p className={styles.projectSubtitle}>Reliable, offline information for Gen Z backpackers.</p>
            <Link href="/projectDetail" className={styles.viewProjectButton}>
              View Project
            </Link>
          </div>
          <Link href="/projectDetail" >
          <div className={styles.imageSection}>
            <Image
              src="/assets/project_banner.png"
              alt="Project Image"
              layout="responsive"
              width={1200}
              height={1200}
              className={styles.projectImage}
            />
          </div>
          </Link>
        </div>
        <footer className={styles.footer}>
          <div className={styles.footerLeft}>
            Copyright © 2024 Min Htet Zaw. All rights reserved.
          </div>
          <div className={styles.footerRight}>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:someone@example.com">Contact</a>
          </div>
        </footer>
      </section>
    </div>
  );
}
