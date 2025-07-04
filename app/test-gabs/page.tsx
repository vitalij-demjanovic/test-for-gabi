'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // ✅ import routera
import StepIndicator from '@/components/StepIndicator';
import QuizQuestion from '@/components/QuizQuestion';
import { questions } from '@/data/question-data';

const CORRECT_KEY = 'quiz_correct_count';
const WRONG_KEY = 'quiz_wrong_count';

export default function Page() {
  const [currentStep, setCurrentStep] = useState(1);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const storedCorrect = localStorage.getItem(CORRECT_KEY);
    const storedWrong = localStorage.getItem(WRONG_KEY);

    if (storedCorrect) setCorrectCount(Number(storedCorrect));
    if (storedWrong) setWrongCount(Number(storedWrong));
  }, []);

  const saveToLocalStorage = (correct: number, wrong: number) => {
    localStorage.setItem(CORRECT_KEY, correct.toString());
    localStorage.setItem(WRONG_KEY, wrong.toString());
  };

  const handleNext = (isCorrect: boolean) => {
    let newCorrect = correctCount;
    let newWrong = wrongCount;

    if (isCorrect) newCorrect += 1;
    else newWrong += 1;

    setCorrectCount(newCorrect);
    setWrongCount(newWrong);
    saveToLocalStorage(newCorrect, newWrong);

    if (currentStep < questions.length) {
      setCurrentStep(prev => prev + 1);
    } else {
      router.push('/end-test');
    }
  };

  const currentQuestion = questions[currentStep - 1];

  return (
    <div className='container'>
      <div className='mt-10 mb-10'>
        <StepIndicator
          currentStep={currentStep}
          totalSteps={questions.length}
        />
      </div>
      <QuizQuestion question={currentQuestion} onNext={handleNext} />
    </div>
  );
}
