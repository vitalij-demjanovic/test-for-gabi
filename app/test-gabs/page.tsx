'use client';

import { useState } from 'react';
import StepIndicator from '@/components/StepIndicator';
import QuizQuestion from '@/components/QuizQuestion';
import { questions } from '@/data/question-data';

export default function Page() {
  const [currentStep, setCurrentStep] = useState(1); // 1-indexované

  const handleNext = () => {
    if (currentStep < questions.length) {
      setCurrentStep(prev => prev + 1);
    } else {
      console.log('🎉 Hotovo! Môžeš zobraziť výsledok.');
    }
  };

  const currentQuestion = questions[currentStep - 1];

  return (
    <div className='container pt-10'>
      <div className='mb-10'>
        <StepIndicator
          currentStep={currentStep}
          totalSteps={questions.length}
        />
      </div>

      <QuizQuestion question={currentQuestion} onNext={handleNext} />
    </div>
  );
}
