"use client";

import NeoButton from "@/components/ui/NeoButton";

interface SectionSuccessProps {
  xpEarned: number;
  message?: string;
  onContinue: () => void;
}

export default function SectionSuccess({
  xpEarned,
  message = "Sahi Jawab! Ekdum Sahi!",
  onContinue,
}: SectionSuccessProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-on-surface/40 backdrop-blur-sm animate-slide-up">
      <div className="w-full max-w-lg bg-secondary-container border-t-[3px] border-x-[3px] border-on-surface rounded-t-[2rem] p-6 neo-shadow animate-bounce-in">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="text-5xl animate-bounce-in">🎉</div>
          <h2 className="font-headline font-bold text-2xl text-on-secondary-container">
            {message}
          </h2>
          <div className="flex items-center gap-2 bg-surface border-[3px] border-on-surface rounded-full px-4 py-2 neo-shadow">
            <span
              className="material-symbols-outlined text-secondary text-xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              bolt
            </span>
            <span className="font-headline font-bold text-xl text-on-surface">
              +{xpEarned} XP
            </span>
          </div>
          <NeoButton
            variant="secondary"
            size="lg"
            icon="arrow_forward"
            onClick={onContinue}
            className="w-full mt-2"
          >
            Aage Badho!
          </NeoButton>
        </div>
      </div>
    </div>
  );
}
