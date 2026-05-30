"use client";

import { useRouter } from "next/navigation";
import TopNav from "@/components/layout/TopNav";
import NeoButton from "@/components/ui/NeoButton";
import NeoCard from "@/components/ui/NeoCard";
import type { ConceptExplainer } from "@/types";
import { useLearningStore } from "@/lib/store/learningStore";

const typeConfig = {
  max: {
    emoji: "📈",
    accentBg: "bg-primary-container",
    accentText: "text-on-primary-container",
    tag: "MAX",
    tagBg: "bg-primary-container",
    xp: 60,
  },
  min: {
    emoji: "📉",
    accentBg: "bg-secondary-container",
    accentText: "text-on-secondary-container",
    tag: "MIN",
    tagBg: "bg-secondary-container",
    xp: 60,
  },
  range: {
    emoji: "↔️",
    accentBg: "bg-tertiary-container",
    accentText: "text-on-tertiary-container",
    tag: "RANGE",
    tagBg: "bg-tertiary-container",
    xp: 80,
  },
};

export default function ConceptExplainerClient({
  concept,
}: {
  concept: ConceptExplainer;
}) {
  const router = useRouter();
  const { markComplete, addXp } = useLearningStore();
  const config = typeConfig[concept.type];

  const handleContinue = () => {
    markComplete(`concept-${concept.id}`);
    addXp(config.xp);
    router.push(concept.nextRoute);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <TopNav title={concept.title} />

      <main className="flex-grow px-5 md:px-10 py-8 max-w-2xl mx-auto w-full">
        {/* Tag */}
        <div className="flex items-center gap-3 mb-6">
          <span
            className={`${config.tagBg} ${config.accentText} font-headline font-extrabold text-sm px-4 py-1 border-[3px] border-on-surface rounded-full neo-shadow`}
          >
            {config.tag}
          </span>
          <span className="text-3xl">{config.emoji}</span>
        </div>

        {/* Headline Card */}
        <NeoCard bg={config.accentBg} className="p-6 mb-6">
          <h2 className={`font-headline font-extrabold text-2xl md:text-3xl ${config.accentText} mb-3`}>
            {concept.hinglishTitle}
          </h2>
          <p className="font-body text-lg text-on-surface leading-relaxed">
            {concept.definition}
          </p>
        </NeoCard>

        {/* Formula */}
        {concept.formula && (
          <NeoCard
            bg="bg-surface-container-lowest"
            className="p-5 mb-6 flex items-center gap-4"
          >
            <span className="material-symbols-outlined text-primary text-3xl">
              functions
            </span>
            <div>
              <p className="font-body text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">
                Formula
              </p>
              <p className="font-headline font-bold text-xl text-on-surface">
                {concept.formula}
              </p>
            </div>
          </NeoCard>
        )}

        {/* Example */}
        <NeoCard bg="bg-surface-container" className="p-5 mb-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="material-symbols-outlined text-tertiary">
              sports_cricket
            </span>
            <p className="font-headline font-bold text-base">Example</p>
          </div>
          <p className="font-body text-base text-on-surface">{concept.example}</p>
        </NeoCard>

        {/* Key Points */}
        <NeoCard bg="bg-surface-container-low" className="p-5 mb-8">
          <h3 className="font-headline font-bold text-base mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary">checklist</span>
            Key Points yaad rakho
          </h3>
          <ul className="space-y-3">
            {concept.keyPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-secondary-container border-[2px] border-on-surface rounded-full flex items-center justify-center text-xs font-headline font-bold">
                  {i + 1}
                </span>
                <span className="font-body text-sm text-on-surface leading-relaxed">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </NeoCard>

        {/* CTA */}
        <NeoButton
          variant="primary"
          size="lg"
          icon="arrow_forward"
          onClick={handleContinue}
          className="w-full"
        >
          Samajh Gaya! Aage Badho
        </NeoButton>
      </main>
    </div>
  );
}
