"use client";

import Link from "next/link";
import TopNav from "@/components/layout/TopNav";
import NeoCard from "@/components/ui/NeoCard";
import NeoButton from "@/components/ui/NeoButton";
import { masteryData } from "@/lib/data/modules";
import { useLearningStore } from "@/lib/store/learningStore";

export default function MasterySummaryPage() {
  const storeXp = useLearningStore((s) => s.xp);
  const displayXp = Math.max(storeXp, masteryData.xpEarned);
  const fillPercent = Math.min((displayXp / masteryData.xpMax) * 100, 100);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <TopNav title="Module Mastery" backHref="/evaluation" showXp={false} />

      <main className="flex-grow px-5 md:px-10 py-8 max-w-2xl mx-auto w-full">
        {/* Trophy Header */}
        <div className="text-center mb-8">
          <div className="text-7xl mb-3 animate-bounce-in">🏆</div>
          <h1 className="font-headline font-extrabold text-3xl md:text-4xl text-on-surface mb-2 leading-tight">
            Mastery Achieved!
          </h1>
          <p className="font-body text-lg text-on-surface-variant">
            {masteryData.subjectEmoji} {masteryData.topicName}
          </p>
        </div>

        {/* XP Bar */}
        <NeoCard bg="bg-secondary-container" className="p-5 mb-6">
          <div className="flex justify-between items-center mb-3">
            <span className="font-headline font-bold text-lg text-on-secondary-container">
              Total XP Earned
            </span>
            <span className="font-headline font-extrabold text-2xl text-on-secondary-container">
              {displayXp}/{masteryData.xpMax}
            </span>
          </div>
          <div className="h-6 w-full bg-secondary-fixed-dim border-[3px] border-on-surface rounded-full overflow-hidden flex">
            <div
              className="h-full bg-secondary transition-all duration-1000 ease-out border-r-[3px] border-on-surface"
              style={{ width: `${fillPercent}%` }}
            />
          </div>
          <div className="flex justify-between mt-2">
            <span className="font-body text-xs font-bold text-on-secondary-container">
              0
            </span>
            <span className="font-body text-xs font-bold text-secondary">
              {Math.round(fillPercent)}% Complete
            </span>
            <span className="font-body text-xs font-bold text-on-secondary-container">
              {masteryData.xpMax}
            </span>
          </div>
        </NeoCard>

        {/* Stats Row */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <NeoCard bg="bg-surface-container" className="p-5 text-center">
            <div className="text-3xl mb-2">🎯</div>
            <p className="font-headline font-extrabold text-3xl text-on-surface">
              {masteryData.accuracy}%
            </p>
            <p className="font-body text-xs font-bold uppercase tracking-widest text-on-surface-variant mt-1">
              Accuracy
            </p>
          </NeoCard>
          <NeoCard bg="bg-surface-container" className="p-5 text-center">
            <div className="text-3xl mb-2">🔥</div>
            <p className="font-headline font-extrabold text-3xl text-on-surface">
              {masteryData.streakDays}
            </p>
            <p className="font-body text-xs font-bold uppercase tracking-widest text-on-surface-variant mt-1">
              Day Streak
            </p>
          </NeoCard>
        </div>

        {/* Badges */}
        <NeoCard bg="bg-surface-container-low" className="p-5 mb-6">
          <h3 className="font-headline font-bold text-lg mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">workspace_premium</span>
            Badges Earned
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {masteryData.badges.map((badge, i) => (
              <div
                key={i}
                className={`${badge.color} border-[3px] border-on-surface rounded-[1rem] p-3 flex items-center gap-3 neo-shadow-sm animate-bounce-in`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <span
                  className="material-symbols-outlined text-2xl text-on-surface"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {badge.icon}
                </span>
                <span className="font-headline font-bold text-sm text-on-surface">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </NeoCard>

        {/* Concepts Learned */}
        <NeoCard bg="bg-surface-container-low" className="p-5 mb-8">
          <h3 className="font-headline font-bold text-lg mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary">menu_book</span>
            Concepts Mastered
          </h3>
          <ul className="space-y-3">
            {masteryData.conceptsLearned.map((concept, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="material-symbols-outlined text-secondary flex-shrink-0"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                <span className="font-body text-sm text-on-surface">{concept}</span>
              </li>
            ))}
          </ul>
        </NeoCard>

        {/* CTAs */}
        <div className="flex flex-col gap-3">
          <NeoButton
            variant="secondary"
            size="lg"
            icon="share"
            className="w-full"
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: "MathsGuru AI",
                  text: `I just mastered ${masteryData.topicName} with ${displayXp} XP! 🏆`,
                });
              }
            }}
          >
            Share Your Achievement!
          </NeoButton>
          <Link href="/">
            <NeoButton variant="ghost" size="lg" icon="home" iconPosition="left" className="w-full">
              Back to Hub
            </NeoButton>
          </Link>
        </div>
      </main>
    </div>
  );
}
