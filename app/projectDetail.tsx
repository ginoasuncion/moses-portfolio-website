// app/projectDetail/page.tsx
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link'; // Import Link from Next.js
import styles from '../styles/ProjectDetail.module.css';

export const metadata: Metadata = {
  title: "Project Detail",
  description: 'Detailed view of the project.',
};

export default function ProjectDetail() {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        {/* Big rectangular banner */}
        <div className={styles.bannerContent}>
          <h1>Project Detail</h1>
          <p>Here is the detailed view of the project.</p>
        </div>
      </div>

      {/* Burger menu */}
      <div className={styles.logoMenu}>
        <Link href="/">
          <a>
            <img src="/assets/burger_menu.png" alt="Menu" className={styles.logo} />
          </a>
        </Link>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerLeft}>
          Copyright © 2024 Min Htet Zaw. All rights reserved.
        </div>
        <div className={styles.footerRight}>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:someone@example.com">Contact</a>
        </div>
      </footer>
    </div>
  );
}
