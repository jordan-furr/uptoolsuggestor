'use client';
import styles from "./page.module.css";
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [fadeOut, setFadeOut] = useState(false);

  const handleBegin = () => {
    setFadeOut(true);
    setTimeout(() => {
      router.push('/quiz');
    }, 800); // match your CSS transition duration
  };

  return (
    <div className={`${styles.page} ${fadeOut ? styles.fadeOut : styles.fadeIn}`}>
      <main className={styles.main}>
        <h1 className={styles.title}>ready to find your tool?</h1>
        <p>you have more options than you think</p>

        <div className={styles.ctas}>
          <button onClick={handleBegin} className={styles.primary}>
            begin
          </button>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://www.upschool.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          go to upschool.org
        </a>
      </footer>
    </div>
  );
}
