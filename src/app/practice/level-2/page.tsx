"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import NeoCard from "@/components/ui/NeoCard";
import { useLearningStore } from "@/lib/store/learningStore";

const decorativeSymbols = ["+", "×", "−", "÷", "%", "∑", "π", "√"];

export default function PracticeLevel2Page() {
  const router = useRouter();
  const xp = useLearningStore((s) => s.xp);
  const [started, setStarted] = useState(false);

  const handleStart = () => {
    setStarted(true);
    setTimeout(() => router.push("/practice/bonus"), 400);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background overflow-hidden">
      {/* Decorative floating symbols */}
      {decorativeSymbols.map((sym, i) => (
        <span
          key={i}
          className="fixed pointer-events-none font-headline font-extrabold text-4xl text-primary opacity-10 select-none"
          style={{
            left: `${(i * 13 + 5) % 95}vw`,
            top: `${(i * 17 + 8) % 90}vh`,
            transform: `rotate(${i * 45}deg)`,
          }}
        >
          {sym}
        </span>
      ))}

      {/* Custom header with streak badge */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 w-full bg-background border-b-[3px] border-on-surface neo-shadow">
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.push("/practice/3")}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container border-[3px] border-on-surface neo-shadow-sm active-squish"
          >
            <span className="material-symbols-outlined text-on-surface">arrow_back</span>
          </button>
          <h1 className="font-headline font-bold text-lg text-on-surface">Practice Zone</h1>
        </div>
        <div className="bg-secondary-container px-3 py-1 border-[2px] border-on-surface rounded-full flex items-center gap-1 neo-shadow-sm">
          <span
            className="material-symbols-outlined text-secondary text-base"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            local_fire_department
          </span>
          <span className="font-body text-sm font-bold text-on-secondary-container">
            {Math.max(1, Math.floor(xp / 100))} Streak
          </span>
        </div>
      </header>

      <main className="flex-grow max-w-lg mx-auto px-4 pt-6 pb-32 w-full">
        {/* Hero Card */}
        <section className="mb-8">
          <NeoCard
            bg="bg-surface-container-lowest"
            className="overflow-hidden"
            shadow
          >
            {/* Card header band */}
            <div className="bg-primary-container p-6 border-b-[3px] border-on-surface text-center">
              <h2 className="font-headline font-extrabold text-3xl md:text-4xl text-on-primary leading-tight">
                Ab Teri Baari, Champ!
              </h2>
            </div>

            {/* Avatar + message */}
            <div className="p-8 flex flex-col items-center text-center">
              {/* Avatar placeholder circle */}
              <div className="relative w-40 h-40 mb-6">
                <div className="absolute inset-0 bg-secondary-fixed border-[3px] border-on-surface rounded-full -rotate-3" />
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center bg-secondary-container border-[3px] border-on-surface rounded-full">
                  <span
                    className="material-symbols-outlined text-6xl text-secondary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    thumb_up
                  </span>
                  <p className="font-headline font-bold text-xs text-on-secondary-container mt-1">
                    Bhaiya
                  </p>
                </div>
              </div>

              <p className="font-body text-lg text-on-surface mb-6 px-2 leading-relaxed">
                &ldquo;You&apos;ve crushed the concept! Now, let&apos;s see those skills in
                action. Ready to solve some spicy problems?&rdquo;
              </p>

              {/* Reward badge preview */}
              <div className="w-full bg-tertiary-fixed border-[3px] border-on-surface rounded-[1rem] p-4 flex items-center gap-4 neo-shadow active-squish cursor-default">
                <div className="bg-surface-container-lowest p-2 rounded-full border-[2px] border-on-surface neo-shadow-sm flex-shrink-0">
                  <span
                    className="material-symbols-outlined text-tertiary text-3xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    military_tech
                  </span>
                </div>
                <div className="text-left">
                  <p className="font-body text-xs font-bold uppercase tracking-widest text-on-tertiary-fixed opacity-70">
                    Reward Awaiting
                  </p>
                  <h3 className="font-headline font-bold text-lg text-on-tertiary-fixed">
                    Quick Learner 🏅
                  </h3>
                </div>
              </div>
            </div>
          </NeoCard>
        </section>

        {/* Bento stats grid */}
        <section className="grid grid-cols-2 gap-4 mb-10">
          <NeoCard bg="bg-surface-container" className="p-5">
            <span className="material-symbols-outlined text-primary mb-2 block">
              timer
            </span>
            <p className="font-body text-xs font-bold uppercase tracking-widest text-on-surface-variant">
              Estimated Time
            </p>
            <p className="font-headline font-bold text-2xl text-on-surface mt-1">
              15 Mins
            </p>
          </NeoCard>
          <NeoCard bg="bg-surface-container" className="p-5">
            <span className="material-symbols-outlined text-secondary mb-2 block">
              task_alt
            </span>
            <p className="font-body text-xs font-bold uppercase tracking-widest text-on-surface-variant">
              Questions
            </p>
            <p className="font-headline font-bold text-2xl text-on-surface mt-1">
              10 Mix
            </p>
          </NeoCard>
        </section>

        {/* CTA */}
        <button
          onClick={handleStart}
          className={`
            w-full border-[3px] border-on-surface rounded-[1rem] py-5
            font-headline font-bold text-xl text-on-primary
            active-squish neo-shadow transition-all
            ${started ? "bg-secondary" : "bg-primary-container"}
          `}
        >
          <span className="flex items-center justify-center gap-3">
            {started ? "Let's Go! 🚀" : "Start Practice Session"}
            {!started && (
              <span className="material-symbols-outlined">arrow_forward</span>
            )}
          </span>
        </button>

        <p className="text-center mt-6 font-body italic text-on-surface-variant">
          &ldquo;Chak de phatte! You&apos;ve got this.&rdquo;
        </p>
      </main>
    </div>
  );
}
