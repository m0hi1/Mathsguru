"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import TopNav from "@/components/layout/TopNav";
import NeoCard from "@/components/ui/NeoCard";
import NeoButton from "@/components/ui/NeoButton";
import ProgressBar from "@/components/ui/ProgressBar";
import AnswerOption from "@/components/ui/AnswerOption";
import SectionSuccess from "@/components/layout/SectionSuccess";
import OopsState from "@/components/layout/OopsState";
import type { PracticeQuestion } from "@/types";
import { useLearningStore } from "@/lib/store/learningStore";

export default function PracticeQuestionClient({
  question,
}: {
  question: PracticeQuestion;
}) {
  const router = useRouter();
  const { addXp, markComplete, saveAnswer } = useLearningStore();
  const [selected, setSelected] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [overlay, setOverlay] = useState<"success" | "oops" | null>(null);

  const isCorrect = selected === question.correctOptionId;

  const handleSubmit = () => {
    if (!selected) return;
    saveAnswer(question.id, selected);
    setRevealed(true);
    setOverlay(isCorrect ? "success" : "oops");
  };

  const handleContinue = () => {
    if (isCorrect) {
      markComplete(`practice-${question.id}`);
      addXp(question.xpReward);
    }
    router.push(question.nextRoute);
  };

  const correctValue =
    question.options.find((o) => o.id === question.correctOptionId)?.value ??
    question.correctOptionId;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <TopNav title={question.title} />

      <main className="flex-grow px-5 md:px-10 py-6 max-w-2xl mx-auto w-full mb-4">
        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="font-body text-sm font-bold text-on-surface">
              Question {question.questionNumber} of {question.totalQuestions}
            </span>
            <span className="font-body text-sm font-bold text-secondary">
              Level: {question.level}
            </span>
          </div>
          <ProgressBar current={question.questionNumber} total={question.totalQuestions} />
        </div>

        {/* Question Card */}
        <NeoCard
          bg="bg-surface-container-lowest"
          className="p-6 mb-6 relative overflow-hidden"
        >
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary-fixed border-[3px] border-on-surface rounded-full opacity-20" />
          <div className="flex items-start gap-4 mb-4 relative z-10">
            <div className="w-12 h-12 flex-shrink-0 bg-primary-container border-[3px] border-on-surface rounded-[1rem] flex items-center justify-center neo-shadow">
              <span
                className="material-symbols-outlined text-on-primary-container"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                sports_cricket
              </span>
            </div>
            <div>
              <h2 className="font-headline font-extrabold text-xl md:text-2xl text-on-surface mb-1">
                {question.questionText}
              </h2>
              <p className="font-body text-base text-on-surface-variant">
                {question.subText}
              </p>
            </div>
          </div>
          {/* Tip */}
          <div className="mt-3 p-3 bg-surface border-[3px] border-dashed border-on-surface rounded-[1rem]">
            <p className="font-body text-sm italic text-on-surface">
              💡 Tip: {question.tip}
            </p>
          </div>
        </NeoCard>

        {/* Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
          {question.options.map((opt) => (
            <AnswerOption
              key={opt.id}
              id={opt.id}
              label={opt.label}
              value={opt.value}
              selected={selected === opt.id}
              correct={revealed ? opt.id === question.correctOptionId : null}
              revealed={revealed}
              onSelect={(id) => !revealed && setSelected(id)}
            />
          ))}
        </div>

        {/* Hint toggle */}
        <div className="mb-8 flex justify-center">
          <button
            onClick={() => setShowHint(!showHint)}
            className="flex items-center gap-3 px-6 py-3 bg-tertiary-container border-[3px] border-on-surface rounded-full neo-shadow active-squish transition-all"
          >
            <span className="material-symbols-outlined text-on-tertiary-container">
              lightbulb
            </span>
            <span className="font-headline font-bold text-base text-on-tertiary-container">
              Hint Chahiye?
            </span>
          </button>
        </div>

        {showHint && (
          <NeoCard bg="bg-surface-bright" className="p-5 mb-6 animate-bounce-in">
            <div className="flex items-center gap-3 mb-2">
              <span className="material-symbols-outlined text-tertiary">psychology</span>
              <p className="font-headline font-bold text-tertiary">Quick Hint!</p>
            </div>
            <p className="font-body text-base text-on-surface">{question.hint}</p>
          </NeoCard>
        )}

        {/* Submit */}
        {!revealed && (
          <NeoButton
            variant="primary"
            size="lg"
            onClick={handleSubmit}
            disabled={!selected}
            className="w-full"
          >
            Jawab Pakka Karo!
          </NeoButton>
        )}
      </main>

      {overlay === "success" && (
        <SectionSuccess xpEarned={question.xpReward} onContinue={handleContinue} />
      )}
      {overlay === "oops" && (
        <OopsState
          correctAnswer={correctValue}
          hint={question.hint}
          onRetry={() => {
            setOverlay(null);
            setSelected(null);
            setRevealed(false);
          }}
          onContinue={handleContinue}
        />
      )}
    </div>
  );
}
