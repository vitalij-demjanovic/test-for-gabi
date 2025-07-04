'use client';

import { useState, useEffect } from 'react';
import { Question } from '@/types/question';

type Props = {
  question: Question;
  onNext: () => void;
};

export default function QuizQuestion({ question, onNext }: Props) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleClick = (option: string) => {
    if (isAnswered) return;

    setSelectedOption(option);
    setIsAnswered(true);

    if (option === question.correctAnswer) {
      console.log('✅ Správne');
    } else {
      console.log('❌ Nesprávne');
    }

    // ⏳ Po 1.5 sekunde prejde na ďalšiu
    setTimeout(() => {
      onNext();
      setSelectedOption(null);
      setIsAnswered(false);
    }, 1500);
  };

  return (
    <div>
      <div className='mb-10 rounded-lg bg-white px-6 py-6 shadow-sm'>
        <h1 className='text-xl font-bold'>{question.question}</h1>
        <p className='mt-2 text-sm text-gray-500'>
          Otázka od: <strong>{question.author}</strong>
        </p>
      </div>

      <div className='grid gap-4 md:grid-cols-2'>
        {question.options.map((option, index) => {
          const isSelected = selectedOption === option;
          const isCorrect = option === question.correctAnswer;

          let bgClass = 'bg-white text-gray-800 hover:bg-blue-100';

          if (isAnswered) {
            if (isCorrect) {
              bgClass = 'bg-green-500 text-white border-green-600';
            } else if (isSelected) {
              bgClass = 'bg-red-500 text-white border-red-600';
            } else {
              bgClass = 'bg-white text-gray-400';
            }
          } else if (isSelected) {
            bgClass = 'bg-blue-500 text-white border-blue-600';
          }

          return (
            <div
              key={index}
              onClick={() => handleClick(option)}
              className={`cursor-pointer rounded-lg border px-6 py-6 text-center text-xl font-bold shadow-sm transition duration-300 ${bgClass}`}
            >
              {option}
            </div>
          );
        })}
      </div>
    </div>
  );
}
