'use client';

import { useEffect, useState } from 'react';
import QuizResult from '@/components/QuizResult';

export default function Page() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const delays = [1000, 2000, 3000, 4000, 5000, 6000];

    const timeouts = delays.map((delay, index) =>
      setTimeout(() => setStep(index + 1), delay)
    );

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div className='container'>
      <div className='flex h-screen items-center justify-items-center'>
        <div className='text-center'>
          <h1 className='text-dark mb-10 text-5xl font-bold'>
            Hotovo! Test máš za sebou – skvelá práca! 🥳 Ďakujeme, že si sa
            zapojila.
          </h1>
          <div className='mb-10'>
            <QuizResult />
          </div>
          <h2 className='m-auto mb-10 max-w-[650px] text-3xl'>
            Tvoj darček je na dosah… priprav sa!
          </h2>

          <div className='relative h-20'>
            {step === 1 && (
              <p className='fade-in-out absolute inset-0 text-5xl font-bold'>
                5
              </p>
            )}
            {step === 2 && (
              <p className='fade-in-out absolute inset-0 text-5xl font-bold'>
                4
              </p>
            )}
            {step === 3 && (
              <p className='fade-in-out absolute inset-0 text-5xl font-bold'>
                3
              </p>
            )}
            {step === 4 && (
              <p className='fade-in-out absolute inset-0 text-5xl font-bold'>
                2
              </p>
            )}
            {step === 5 && (
              <p className='fade-in-out absolute inset-0 text-5xl font-bold'>
                1
              </p>
            )}
            {step === 6 && (
              <h3 className='fade-in-out absolute inset-0 mt-6 text-5xl font-semibold'>
                Skontroluj si prosím notifikácie na svojom mobile.
              </h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
