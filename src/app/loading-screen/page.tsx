"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import NeoCard from "@/components/ui/NeoCard";

const messages = [
  "Thoda ruko boss, content pak raha hai... 🍛",
  "Calculations are doing a bhangra dance! 💃",
  "Simmering the formulas for maximum flavour...",
  "Adding a pinch of logic and a lot of tadka! 🌶️",
  "Almost there! The math-samosa is frying... 🥟",
];

const tips = [
  "Practice makes you the 'Asli Boss' of Math!",
  "Every expert was once a beginner. Chalo seekhte hain!",
  "Confusion se hi clarity aati hai. Keep going!",
];

function SkeletonCard({ wide = false }: { wide?: boolean }) {
  return (
    <NeoCard
      bg="bg-surface-container-lowest"
      className={`p-6 space-y-4 ${wide ? "col-span-2" : ""}`}
    >
      <div className="w-full aspect-video rounded-[0.75rem] border-[2px] border-on-surface skeleton-shimmer" />
      <div className="h-7 w-3/4 rounded-[0.5rem] skeleton-shimmer" />
      <div className="space-y-2">
        <div className="h-4 w-full rounded-[0.5rem] skeleton-shimmer" />
        <div className="h-4 w-5/6 rounded-[0.5rem] skeleton-shimmer" />
      </div>
      <div className="flex gap-3 pt-2">
        <div className="h-10 w-24 rounded-full border-[2px] border-on-surface skeleton-shimmer" />
        <div className="h-10 w-24 rounded-full border-[2px] border-on-surface skeleton-shimmer" />
      </div>
    </NeoCard>
  );
}

export default function LoadingScreenPage() {
  const router = useRouter();
  const [msgIndex, setMsgIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(15);

  useEffect(() => {
    const msgTimer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setMsgIndex((i) => (i + 1) % messages.length);
        setVisible(true);
      }, 300);
    }, 2500);

    const progressTimer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(progressTimer);
          setTimeout(() => router.push("/lesson/video-1"), 400);
          return 100;
        }
        return p + 7;
      });
    }, 400);

    return () => {
      clearInterval(msgTimer);
      clearInterval(progressTimer);
    };
  }, [router]);

  const tip = tips[Math.floor(Math.random() * tips.length)];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Shimmer keyframes injected inline */}
      <style>{`
        .skeleton-shimmer {
          background: linear-gradient(90deg, #f0eee8 25%, #eae8e2 50%, #f0eee8 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite linear;
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes spin-bounce {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .loader-icon { animation: spin-bounce 1s infinite ease-in-out; }
        .msg-fade { transition: opacity 0.3s ease; }
      `}</style>

      {/* Header */}
      <header className="flex items-center justify-between px-5 py-4 bg-surface border-b-[3px] border-on-surface neo-shadow">
        <button
          onClick={() => router.back()}
          className="w-10 h-10 flex items-center justify-center rounded-[1rem] border-[3px] border-on-surface bg-surface-container-lowest neo-shadow active-squish"
        >
          <span className="material-symbols-outlined text-on-surface">arrow_back</span>
        </button>
        <h1 className="font-headline font-bold text-lg text-on-surface">
          Max/Min: Loading...
        </h1>
        <div className="w-10" />
      </header>

      <main className="flex-grow flex flex-col items-center justify-center px-5 py-8 max-w-3xl mx-auto w-full">
        {/* Animated icon + rotating message */}
        <div className="mb-10 flex flex-col items-center text-center">
          <div className="loader-icon mb-6 w-24 h-24 bg-primary border-[3px] border-on-surface rounded-full flex items-center justify-center neo-shadow">
            <span
              className="material-symbols-outlined text-5xl text-on-primary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              restaurant
            </span>
          </div>
          <h2
            className={`font-headline font-bold text-2xl md:text-3xl px-4 msg-fade ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          >
            {messages[msgIndex]}
          </h2>
          <p className="font-body text-on-surface-variant mt-2">
            Stirring the math curry for you!
          </p>
        </div>

        {/* Skeleton cards grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <SkeletonCard />
          <SkeletonCard />
          <div className="hidden md:block">
            <SkeletonCard />
          </div>
          <div className="hidden md:block">
            <SkeletonCard />
          </div>
        </div>

        {/* Segmented progress bar */}
        <div className="w-full max-w-md">
          <div className="flex justify-between mb-2">
            <span className="font-body text-xs font-bold uppercase tracking-widest text-primary">
              Fueling Up
            </span>
            <span className="font-body text-xs font-bold text-on-surface">
              {Math.min(progress, 100)}%
            </span>
          </div>
          <div className="h-6 w-full bg-surface-container-high border-[3px] border-on-surface rounded-full overflow-hidden flex">
            {/* 5 segments */}
            {[20, 20, 20, 20, 20].map((seg, i) => {
              const segStart = i * 20;
              const filled = progress >= segStart + 20;
              const partial = progress > segStart && progress < segStart + 20;
              const partialWidth = partial
                ? `${((progress - segStart) / 20) * 100}%`
                : "100%";
              return (
                <div
                  key={i}
                  className={`h-full flex-1 ${i < 4 ? "border-r-[2px] border-on-surface" : ""} relative overflow-hidden`}
                >
                  {filled && (
                    <div className="absolute inset-0 bg-secondary" />
                  )}
                  {partial && (
                    <div
                      className="absolute inset-y-0 left-0 bg-secondary transition-all duration-300"
                      style={{ width: partialWidth }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* Footer tip */}
      <footer className="p-4 text-center border-t-[3px] border-on-surface bg-surface-container-low">
        <p className="font-body text-sm italic text-on-surface-variant">
          💡 Tip: {tip}
        </p>
      </footer>
    </div>
  );
}
