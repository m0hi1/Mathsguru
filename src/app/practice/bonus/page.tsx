"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import TopNav from "@/components/layout/TopNav";
import NeoCard from "@/components/ui/NeoCard";
import NeoButton from "@/components/ui/NeoButton";
import AnswerOption from "@/components/ui/AnswerOption";
import SectionSuccess from "@/components/layout/SectionSuccess";
import OopsState from "@/components/layout/OopsState";
import { bonusChallenge } from "@/lib/data/questions";
import { useLearningStore } from "@/lib/store/learningStore";

export default function BonusChallengePage() {
  const router = useRouter();
  const { addXp, markComplete } = useLearningStore();
  const [selected, setSelected] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [overlay, setOverlay] = useState<"success" | "oops" | null>(null);

  const isCorrect = selected === bonusChallenge.correctOptionId;

  const handleSubmit = () => {
    if (!selected) return;
    setRevealed(true);
    setOverlay(isCorrect ? "success" : "oops");
  };

  const handleContinue = () => {
    if (isCorrect) {
      markComplete("practice-bonus");
      addXp(bonusChallenge.bonusXpReward);
    }
    router.push(bonusChallenge.nextRoute);
  };

  const correctValue =
    bonusChallenge.options.find(
      (o) => o.id === bonusChallenge.correctOptionId
    )?.value ?? bonusChallenge.correctOptionId;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <TopNav title="Bonus Panga! 🌟" backHref="/challenge/socho-1" />

      <main className="flex-grow px-5 py-6 max-w-2xl mx-auto w-full">
        {/* Bonus Banner */}
        <NeoCard bg="bg-primary-container" className="p-4 mb-6 flex items-center gap-4">
          <span className="text-4xl">⭐</span>
          <div>
            <h2 className="font-headline font-extrabold text-xl text-on-primary-container">
              BONUS ROUND — Double XP!
            </h2>
            <p className="font-body text-sm text-on-primary-container/80">
              Level: {bonusChallenge.level} • +{bonusChallenge.bonusXpReward} XP available
            </p>
          </div>
        </NeoCard>

        {/* Question */}
        <NeoCard bg="bg-surface-container-lowest" className="p-6 mb-6 relative overflow-hidden">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-tertiary-fixed border-[3px] border-on-surface rounded-full opacity-20" />
          <div className="flex items-start gap-4 mb-4 relative z-10">
            <div className="w-12 h-12 flex-shrink-0 bg-tertiary-container border-[3px] border-on-surface rounded-[1rem] flex items-center justify-center neo-shadow">
              <span className="material-symbols-outlined text-on-tertiary-container"
                style={{ fontVariationSettings: "'FILL' 1" }}>grade</span>
            </div>
            <div>
              <h2 className="font-headline font-extrabold text-xl text-on-surface mb-1">
                {bonusChallenge.questionText}
              </h2>
              <p className="font-body text-base text-on-surface-variant">
                {bonusChallenge.subText}
              </p>
            </div>
          </div>
          <div className="mt-3 p-3 bg-surface border-[3px] border-dashed border-on-surface rounded-[1rem]">
            <p className="font-body text-sm italic text-on-surface">
              💡 Tip: {bonusChallenge.tip}
            </p>
          </div>
        </NeoCard>

        {/* Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
          {bonusChallenge.options.map((opt) => (
            <AnswerOption
              key={opt.id}
              id={opt.id}
              label={opt.label}
              value={opt.value}
              selected={selected === opt.id}
              correct={revealed ? opt.id === bonusChallenge.correctOptionId : null}
              revealed={revealed}
              onSelect={(id) => !revealed && setSelected(id)}
            />
          ))}
        </div>

        {/* Hint */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setShowHint(!showHint)}
            className="flex items-center gap-3 px-6 py-3 bg-tertiary-container border-[3px] border-on-surface rounded-full neo-shadow active-squish transition-all"
          >
            <span className="material-symbols-outlined text-on-tertiary-container">lightbulb</span>
            <span className="font-headline font-bold text-base text-on-tertiary-container">
              Hint Chahiye?
            </span>
          </button>
        </div>

        {showHint && (
          <NeoCard bg="bg-surface-bright" className="p-5 mb-6 animate-bounce-in">
            <p className="font-body text-base text-on-surface">{bonusChallenge.hint}</p>
          </NeoCard>
        )}

        {!revealed && (
          <NeoButton
            variant="primary"
            size="lg"
            onClick={handleSubmit}
            disabled={!selected}
            className="w-full"
          >
            Final Jawab!
          </NeoButton>
        )}
      </main>

      {overlay === "success" && (
        <SectionSuccess
          xpEarned={bonusChallenge.bonusXpReward}
          message="Champion! Double XP! 🏆"
          onContinue={handleContinue}
        />
      )}
      {overlay === "oops" && (
        <OopsState
          correctAnswer={correctValue}
          hint={bonusChallenge.hint}
          onRetry={() => { setOverlay(null); setSelected(null); setRevealed(false); }}
          onContinue={handleContinue}
        />
      )}
    </div>
  );
}
