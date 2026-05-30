"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import TopNav from "@/components/layout/TopNav";
import NeoCard from "@/components/ui/NeoCard";
import NeoButton from "@/components/ui/NeoButton";
import SectionSuccess from "@/components/layout/SectionSuccess";
import { sochoChallenges } from "@/lib/data/challenges";
import { useLearningStore } from "@/lib/store/learningStore";

const challenge = sochoChallenges[0];

export default function SochoChallengeOnePage() {
  const router = useRouter();
  const { addXp, markComplete } = useLearningStore();
  const [flipped, setFlipped] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleReveal = () => {
    setFlipped(true);
  };

  const handleContinue = () => {
    markComplete("challenge-socho-1");
    addXp(challenge.xpReward);
    router.push(challenge.nextRoute);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <TopNav title="Socho Challenge!" backHref="/practice/3" />

      <main className="flex-grow flex flex-col items-center justify-center px-5 py-8 max-w-lg mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-tertiary-container border-[3px] border-on-surface rounded-full px-5 py-2 neo-shadow mb-4">
            <span className="material-symbols-outlined text-on-tertiary-container">psychology</span>
            <span className="font-headline font-bold text-on-tertiary-container">Active Recall</span>
          </div>
          <h1 className="font-headline font-extrabold text-2xl md:text-3xl text-on-surface">
            {challenge.title}
          </h1>
          <p className="font-body text-on-surface-variant mt-2">
            Soch ke jawab dena — phir reveal karo!
          </p>
        </div>

        {/* Flip Card */}
        <div className="flip-card w-full mb-8" style={{ height: "280px" }}>
          <div
            className={`flip-card-inner ${flipped ? "flipped" : ""}`}
            style={{ height: "280px" }}
          >
            {/* Front */}
            <div className="flip-card-front w-full h-full">
              <NeoCard
                bg="bg-surface-container-low"
                className="w-full h-full flex flex-col items-center justify-center p-8 text-center"
              >
                <span className="material-symbols-outlined text-5xl text-tertiary mb-4">
                  psychology
                </span>
                <h2 className="font-headline font-bold text-xl text-on-surface leading-snug">
                  {challenge.prompt}
                </h2>
                <p className="font-body text-sm text-on-surface-variant mt-4">
                  Take a moment to think... then tap Reveal!
                </p>
              </NeoCard>
            </div>

            {/* Back */}
            <div className="flip-card-back w-full h-full absolute inset-0">
              <NeoCard
                bg="bg-secondary-container"
                className="w-full h-full flex flex-col items-center justify-center p-8 text-center"
              >
                <span className="text-4xl mb-3">🤯</span>
                <h3 className="font-headline font-bold text-lg text-on-secondary-container mb-3">
                  {challenge.revealHeading}
                </h3>
                <p className="font-body text-base text-on-secondary-container leading-relaxed">
                  {challenge.revealText}
                </p>
              </NeoCard>
            </div>
          </div>
        </div>

        {/* XP reward indicator */}
        <div className="flex items-center gap-2 mb-6 bg-surface border-[3px] border-on-surface rounded-full px-4 py-2 neo-shadow">
          <span
            className="material-symbols-outlined text-secondary text-lg"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            bolt
          </span>
          <span className="font-headline font-bold text-on-surface">
            +{challenge.xpReward} XP on completion
          </span>
        </div>

        {/* Buttons */}
        {!flipped ? (
          <NeoButton
            variant="tertiary"
            size="lg"
            icon="flip"
            onClick={handleReveal}
            className="w-full"
          >
            Reveal Jawab!
          </NeoButton>
        ) : (
          <NeoButton
            variant="secondary"
            size="lg"
            icon="arrow_forward"
            onClick={() => setShowSuccess(true)}
            className="w-full"
          >
            Got It! Aage Badho
          </NeoButton>
        )}
      </main>

      {showSuccess && (
        <SectionSuccess
          xpEarned={challenge.xpReward}
          message="Dimaag ki Batti Jali! 💡"
          onContinue={handleContinue}
        />
      )}
    </div>
  );
}
