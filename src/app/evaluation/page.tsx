"use client";

import { useRouter } from "next/navigation";
import TopNav from "@/components/layout/TopNav";
import NeoCard from "@/components/ui/NeoCard";
import NeoButton from "@/components/ui/NeoButton";
import { useLearningStore } from "@/lib/store/learningStore";

const evalStats = [
  { label: "Total Questions", value: "5", icon: "quiz" },
  { label: "Time Limit", value: "10 min", icon: "timer" },
  { label: "Max XP", value: "500", icon: "bolt" },
];

export default function EvaluationIntroPage() {
  const router = useRouter();
  const { markComplete } = useLearningStore();

  const handleStart = () => {
    markComplete("evaluation-intro");
    router.push("/mastery");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <TopNav title="Final Evaluation" backHref="/lesson/recap" showXp />

      <main className="flex-grow flex flex-col items-center justify-center px-5 py-8 max-w-lg mx-auto w-full">
        {/* Dramatic icon */}
        <div className="text-8xl mb-6 animate-bounce-in">🏆</div>

        {/* Title card */}
        <NeoCard bg="bg-on-surface" className="w-full p-8 mb-8 text-center">
          <p className="font-body text-sm font-bold uppercase tracking-widest text-inverse-on-surface mb-2">
            Final Boss Unlock!
          </p>
          <h1 className="font-headline font-extrabold text-3xl text-surface mb-3 leading-tight">
            Apna Max/Min Mastery
            <br />
            Prove Karo!
          </h1>
          <p className="font-body text-base text-inverse-on-surface/80 leading-relaxed">
            Tune jo seekha — usse test karne ka waqt aa gaya! Yeh final evaluation hai. Teri real skill dikhegi.
          </p>
        </NeoCard>

        {/* Stats grid */}
        <div className="grid grid-cols-3 gap-3 w-full mb-8">
          {evalStats.map((stat) => (
            <NeoCard
              key={stat.label}
              bg="bg-surface-container"
              className="p-4 flex flex-col items-center gap-1 text-center"
            >
              <span className="material-symbols-outlined text-primary">{stat.icon}</span>
              <p className="font-headline font-extrabold text-xl text-on-surface">
                {stat.value}
              </p>
              <p className="font-body text-[10px] font-bold uppercase tracking-wide text-on-surface-variant">
                {stat.label}
              </p>
            </NeoCard>
          ))}
        </div>

        {/* Rules */}
        <NeoCard bg="bg-surface-container-low" className="w-full p-5 mb-8">
          <h3 className="font-headline font-bold text-base mb-3 flex items-center gap-2">
            <span className="material-symbols-outlined text-tertiary">info</span>
            Rules of the Game
          </h3>
          <ul className="space-y-2">
            {[
              "Har question ke liye limited time milega",
              "Hints available hain par XP thoda kam hoga",
              "Sab answer karo — skip mat karo",
              "Results end mein milenge with detailed breakdown",
            ].map((rule, i) => (
              <li key={i} className="flex items-start gap-2 font-body text-sm">
                <span className="text-primary font-bold flex-shrink-0">→</span>
                {rule}
              </li>
            ))}
          </ul>
        </NeoCard>

        <NeoButton
          variant="primary"
          size="lg"
          icon="play_arrow"
          onClick={handleStart}
          className="w-full"
        >
          Start Evaluation!
        </NeoButton>
      </main>
    </div>
  );
}
