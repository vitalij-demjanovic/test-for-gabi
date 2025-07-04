type StepIndicatorProps = {
  currentStep: number;
  totalSteps: number;
};

export default function StepIndicator({
  currentStep,
  totalSteps
}: StepIndicatorProps) {
  return (
    <div className='rounded-lg bg-white px-6 py-6 shadow-sm'>
      <div className='flex items-center gap-3'>
        {Array.from({ length: totalSteps }).map((_, i) => {
          const step = i + 1;
          const isActive = step === currentStep;

          return (
            <div
              key={step}
              className={`flex h-12 w-12 items-center justify-center rounded-xl text-sm font-semibold transition-all ${
                isActive
                  ? 'bg-indigo-500 text-white'
                  : 'border border-gray-200 bg-gray-100 text-gray-500'
              } `}
            >
              {step.toString().padStart(2, '0')}
            </div>
          );
        })}
      </div>
    </div>
  );
}
