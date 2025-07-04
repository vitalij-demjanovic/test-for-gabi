'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // ✅ import routera
import StepIndicator from '@/components/StepIndicator';
import QuizQuestion from '@/components/QuizQuestion';
import { questions } from '@/data/question-data';

export default function Page() {
  const [currentStep, setCurrentStep] = useState(1);
  const router = useRouter();

  const handleNext = () => {
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
