import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1> Up Tool Suggester </h1>
        <p> let's start.</p>

        <div className={styles.ctas}>
          <Link
            className={styles.primary}
            href="/begin"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Begin
          </Link>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="www.upschool.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Go to upschool.org
        </a>
      </footer>
    </div>
  );
}
