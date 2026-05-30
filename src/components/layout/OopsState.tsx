"use client";

import NeoButton from "@/components/ui/NeoButton";

interface OopsStateProps {
  correctAnswer: string;
  hint: string;
  onRetry: () => void;
  onContinue: () => void;
}

export default function OopsState({
  correctAnswer,
  hint,
  onRetry,
  onContinue,
}: OopsStateProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-on-surface/40 backdrop-blur-sm">
      <div className="w-full max-w-lg bg-error-container border-t-[3px] border-x-[3px] border-on-surface rounded-t-[2rem] p-6 neo-shadow animate-slide-up">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="text-5xl">😅</div>
          <h2 className="font-headline font-bold text-2xl text-on-error-container">
            Oops! Galat Jawab
          </h2>
          <div className="w-full bg-surface border-[3px] border-on-surface rounded-[1rem] p-4 text-left">
            <p className="font-bold text-sm text-on-surface mb-1">Sahi Jawab:</p>
            <p className="font-headline font-bold text-xl text-secondary">
              {correctAnswer}
            </p>
          </div>
          <div className="w-full bg-surface-container-low border-[3px] border-on-surface rounded-[1rem] p-4 text-left">
            <div className="flex gap-2 mb-1">
              <span className="material-symbols-outlined text-primary text-base">
                lightbulb
              </span>
              <p className="font-bold text-sm text-on-surface">Explanation:</p>
            </div>
            <p className="font-body text-sm text-on-surface-variant">{hint}</p>
          </div>
          <div className="flex gap-3 w-full mt-2">
            <NeoButton
              variant="ghost"
              size="md"
              icon="replay"
              iconPosition="left"
              onClick={onRetry}
              className="flex-1"
            >
              Try Again
            </NeoButton>
            <NeoButton
              variant="primary"
              size="md"
              icon="arrow_forward"
              onClick={onContinue}
              className="flex-1"
            >
              Aage Badho
            </NeoButton>
          </div>
        </div>
      </div>
    </div>
  );
}
