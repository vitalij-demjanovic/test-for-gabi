'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const CORRECT_KEY = 'quiz_correct_count';
const WRONG_KEY = 'quiz_wrong_count';

export default function QuizResult() {
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);

  useEffect(() => {
    const storedCorrect = localStorage.getItem(CORRECT_KEY);
    const storedWrong = localStorage.getItem(WRONG_KEY);

    if (storedCorrect) setCorrectCount(Number(storedCorrect));
    if (storedWrong) setWrongCount(Number(storedWrong));
  }, []);

  return (
    <div className='mt-10 mb-10 flex flex-col items-center justify-around rounded-3xl bg-white px-6 py-6 shadow-sm'>
      <h2 className='mb-5 text-3xl font-bold'>Tvoj výsledok</h2>
      <div className='flex gap-20'>
        <div className='flex flex-col items-center'>
          <Image src={'/check.png'} alt='right' width={50} height={50} />
          <p className='mt-2 text-lg font-semibold text-green-600'>
            {correctCount}
          </p>
        </div>
        <div className='flex flex-col items-center'>
          <Image src={'/cross.png'} alt='wrong' width={50} height={50} />
          <p className='mt-2 text-lg font-semibold text-red-600'>
            {wrongCount}
          </p>
        </div>
      </div>
    </div>
  );
}
