'use client';

import { useState } from 'react';
import styles from "./page.module.css";
import { FaArrowLeft } from 'react-icons/fa';

export default function QuizPage() {
  const [step, setStep] = useState(1);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const step1 = {
    question: "what needs workshopping?",
    options: ["relationships", "career", "personal life", "jumpstarting idk", "another option"],
  };

  const getStep2 = (selected: number | null) => {
    const optionsMap: Record<number, string[]> = {
      0: ["communication", "boundaries", "trust", "conflict resolution", "other"],
      1: ["job search", "career change", "work-life balance", "professional development", "other"],
      2: ["self-care", "goal setting", "time management", "stress management", "other"],
      3: ["finding purpose", "exploring interests", "building confidence", "overcoming obstacles", "other"],
      4: ["another option 1", "another option 2", "another option 3", "another option 4", "other"],
    };

    return {
      question: "let's get more specific",
      options: selected !== null && optionsMap[selected] ? optionsMap[selected] : [],
    };
  };

  const questions = step === 1 ? step1 : getStep2(selectedIndex);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
    setIsTransitioning(true);

    setTimeout(() => {
      setStep(2);
      setIsTransitioning(false);
    }, 600);
  };

  return (
    <div className={styles.page}>
      <div className={`${styles.transitionWrapper} ${isTransitioning ? styles.slideLeft : ''}`}>
        <h2 className={styles.title}>{questions.question}</h2>

        {step === 2 && <div className={styles.titleLine} />}

        <div className={styles.optionsContainer}>
  {questions.options.map((option, idx) => (
    <div key={idx} className={styles.optionWrapper}>
      <button
        onClick={() => handleSelect(idx)}
        className={`${styles.optionButton} ${selectedIndex === idx ? styles.selected : ''} ${selectedIndex !== null ? styles.hasSelection : ''}`}
      >
        {option}
      </button>

      {step === 1 && (
        <div
          className={`${styles.line} ${
            selectedIndex !== null && selectedIndex !== idx
              ? styles.lineHidden
              : selectedIndex === idx
              ? styles.lineSelected
              : ''
          }`}
        />
      )}
    </div>
  ))}
</div>
      </div>
      {step === 2 && (
        <button
          onClick={() => {
            setStep(1);
            setSelectedIndex(null);
          }}
          className={styles.backButton}
        >
          <FaArrowLeft size={18} /> back
        </button>
      )}
    </div>
  );
}
