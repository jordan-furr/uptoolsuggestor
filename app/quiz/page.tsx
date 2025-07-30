'use client';

import {useEffect, useState} from 'react';
import styles from "./page.module.css";


export default function QuizPage() {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const question = "what needs workshopping? ";

    const options = [
    "relationships",
    "career",
    "personal life",
    "jumpstarting idk",
    "another option",
  ];

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
    console.log(`Selected option ${index + 1}`);
    // TODO: trigger next question / transition
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10);

    return () => clearTimeout(timer);
  }, []);
  
  return (
<div className={`${styles.page} ${isVisible ? styles.fadeIn : styles.hidden}`}>
  <h2 className={styles.title} style={{ marginBottom: '2rem' }}>
    {question}
  </h2>
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      height: '80vh',
      width: '100%',
    }}
  >
    {options.map((option, idx) => (
      <button
        key={idx}
        onClick={() => handleSelect(idx)}
        className={`${styles.optionButton} ${
          selectedIndex === idx ? styles.selected : ''
        }`}
      >
        {option}
        <span className={styles.line} />
      </button>
    ))}
  </div>
</div>
  );
}