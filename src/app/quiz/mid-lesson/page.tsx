"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import TopNav from "@/components/layout/TopNav";
import NeoCard from "@/components/ui/NeoCard";
import NeoButton from "@/components/ui/NeoButton";
import TimerBar from "@/components/ui/TimerBar";
import AnswerOption from "@/components/ui/AnswerOption";
import SectionSuccess from "@/components/layout/SectionSuccess";
import OopsState from "@/components/layout/OopsState";
import { midLessonQuiz } from "@/lib/data/questions";
import { useLearningStore } from "@/lib/store/learningStore";

export default function MidLessonQuizPage() {
  const router = useRouter();
  const { addXp, markComplete } = useLearningStore();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [timerRunning, setTimerRunning] = useState(true);
  const [totalXp, setTotalXp] = useState(0);
  const [overlay, setOverlay] = useState<"success" | "oops" | null>(null);

  const question = midLessonQuiz.questions[currentIdx];
  const isLastQuestion = currentIdx === midLessonQuiz.questions.length - 1;

  const handleSelect = (id: string) => {
    if (revealed) return;
    setSelected(id);
  };

  const handleSubmit = () => {
    if (!selected) return;
    setTimerRunning(false);
    setRevealed(true);

    const isCorrect = selected === question.correctAnswer;
    if (isCorrect) {
      const xp = midLessonQuiz.xpPerQuestion;
      setTotalXp((prev) => prev + xp);
      setOverlay("success");
    } else {
      setOverlay("oops");
    }
  };

  const handleTimerExpire = () => {
    if (!selected) {
      setTimerRunning(false);
      setRevealed(true);
      setOverlay("oops");
    }
  };

  const handleNext = () => {
    setOverlay(null);
    if (isLastQuestion) {
      markComplete("quiz-mid-lesson");
      addXp(totalXp);
      router.push(midLessonQuiz.nextRoute);
    } else {
      setCurrentIdx((i) => i + 1);
      setSelected(null);
      setRevealed(false);
      setTimerRunning(true);
    }
  };

  const trueFalseOptions = [
    { id: "true", label: "✓", value: "Sahi" },
    { id: "false", label: "✗", value: "Galat" },
  ];

  const options =
    question.questionType === "true-false"
      ? trueFalseOptions
      : (question.options ?? []);

  const isCorrect = selected === question.correctAnswer;
  const correctValue =
    question.questionType === "true-false"
      ? question.correctAnswer === "true"
        ? "Sahi (True)"
        : "Galat (False)"
      : (question.options?.find((o) => o.id === question.correctAnswer)
          ?.value ?? question.correctAnswer);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <TopNav title={midLessonQuiz.title} />
      <TimerBar
        seconds={question.timeSeconds}
        running={timerRunning}
        onExpire={handleTimerExpire}
        key={`${currentIdx}-timer`}
      />

      <main className="flex-grow flex flex-col items-center justify-center px-5 py-8 max-w-lg mx-auto w-full">
        {/* Question counter */}
        <div className="self-start mb-6">
          <span className="bg-primary-container text-on-primary-container font-headline font-bold text-sm px-4 py-2 border-[3px] border-on-surface rounded-full neo-shadow">
            Sawaal {currentIdx + 1}/{midLessonQuiz.questions.length}
          </span>
        </div>

        {/* Question Card */}
        <NeoCard
          bg="bg-surface-container-lowest"
          className="w-full p-6 md:p-8 mb-8 relative"
        >
          <div className="absolute -top-5 -right-3 bg-tertiary-container border-[3px] border-on-surface p-2 rounded-[1rem] rotate-12 neo-shadow">
            <span className="material-symbols-outlined text-on-tertiary-container">
              quiz
            </span>
          </div>
          <h2 className="font-headline font-bold text-xl md:text-2xl text-on-surface mb-3">
            {question.questionText}
          </h2>
          <p className="font-body text-sm text-on-surface-variant italic">
            Think carefully before answering!
          </p>
        </NeoCard>

        {/* Options */}
        {question.questionType === "true-false" ? (
          <div className="w-full grid grid-cols-2 gap-4 mb-6">
            <button
              onClick={() => handleSelect("true")}
              className={`
                flex flex-col items-center justify-center gap-3 p-6
                border-[3px] border-on-surface rounded-[1rem] neo-shadow active-squish transition-all
                ${selected === "true"
                  ? revealed
                    ? isCorrect
                      ? "bg-secondary-container"
                      : "bg-error-container"
                    : "bg-secondary-container"
                  : "bg-secondary-container hover:opacity-90"
                }
              `}
            >
              <span className="material-symbols-outlined text-4xl text-secondary"
                style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <span className="font-headline font-bold text-xl">Sahi</span>
            </button>
            <button
              onClick={() => handleSelect("false")}
              className={`
                flex flex-col items-center justify-center gap-3 p-6
                border-[3px] border-on-surface rounded-[1rem] neo-shadow active-squish transition-all
                ${selected === "false"
                  ? revealed
                    ? !isCorrect
                      ? "bg-secondary-container"
                      : "bg-error-container"
                    : "bg-error-container/50"
                  : "bg-error-container hover:opacity-90"
                }
              `}
            >
              <span className="material-symbols-outlined text-4xl text-error"
                style={{ fontVariationSettings: "'FILL' 1" }}>cancel</span>
              <span className="font-headline font-bold text-xl">Galat</span>
            </button>
          </div>
        ) : (
          <div className="w-full space-y-3 mb-6">
            {options.map((opt) => (
              <AnswerOption
                key={opt.id}
                id={opt.id}
                label={opt.label}
                value={opt.value}
                selected={selected === opt.id}
                correct={revealed ? opt.id === question.correctAnswer : null}
                revealed={revealed}
                onSelect={handleSelect}
              />
            ))}
          </div>
        )}

        {/* Hint */}
        <NeoCard bg="bg-surface-container" className="w-full p-4 mb-6">
          <div className="flex gap-3 items-start">
            <div className="bg-primary border-[2px] border-on-surface rounded-full p-1.5 flex-shrink-0">
              <span className="material-symbols-outlined text-on-primary text-base">lightbulb</span>
            </div>
            <p className="font-body text-sm italic text-on-surface">
              &ldquo;{question.hintText}&rdquo;
            </p>
          </div>
        </NeoCard>

        {/* Submit / Next */}
        {!revealed && (
          <NeoButton
            variant="primary"
            size="lg"
            onClick={handleSubmit}
            disabled={!selected}
            className="w-full"
          >
            Jawab Do!
          </NeoButton>
        )}
      </main>

      {overlay === "success" && (
        <SectionSuccess
          xpEarned={midLessonQuiz.xpPerQuestion}
          onContinue={handleNext}
        />
      )}
      {overlay === "oops" && (
        <OopsState
          correctAnswer={correctValue}
          hint={question.hintText}
          onRetry={() => {
            setOverlay(null);
            setSelected(null);
            setRevealed(false);
            setTimerRunning(true);
          }}
          onContinue={handleNext}
        />
      )}
    </div>
  );
}
