"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import TopNav from "@/components/layout/TopNav";
import NeoCard from "@/components/ui/NeoCard";
import NeoButton from "@/components/ui/NeoButton";
import { recapLesson } from "@/lib/data/lessons";
import { useLearningStore } from "@/lib/store/learningStore";

export default function LessonRecapPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const router = useRouter();
  const { markComplete, addXp } = useLearningStore();

  const handleContinue = () => {
    markComplete("lesson-recap");
    addXp(50);
    router.push(recapLesson.nextRoute);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <TopNav title="Lesson Recap" backHref="/practice/bonus" />

      <main className="flex-grow px-5 md:px-12 py-8 max-w-3xl mx-auto w-full">
        {/* Recap Tag */}
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-surface-container-high border-[3px] border-on-surface rounded-full px-4 py-1 font-headline font-bold text-sm neo-shadow">
            🔁 Quick Recap
          </span>
          <span className="font-body text-sm text-on-surface-variant">
            {recapLesson.duration} watch time
          </span>
        </div>

        {/* Video Frame */}
        <NeoCard bg="bg-surface-container" className="overflow-hidden mb-8">
          <div className="relative w-full aspect-video bg-surface-container-high">
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-secondary-container to-primary-fixed">
              <div className="text-7xl mb-3">📊</div>
              <p className="font-headline font-bold text-xl text-on-surface">
                Max/Min Summary Video
              </p>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-16 h-16 bg-primary-container border-[3px] border-on-surface rounded-full neo-shadow active-squish flex items-center justify-center"
              >
                <span
                  className="material-symbols-outlined text-4xl text-on-primary-container"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {isPlaying ? "pause" : "play_arrow"}
                </span>
              </button>
            </div>
          </div>
        </NeoCard>

        {/* Key Takeaways */}
        <NeoCard bg="bg-surface-container-low" className="p-6 mb-8">
          <h3 className="font-headline font-bold text-xl mb-5 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">key</span>
            Key Takeaways
          </h3>
          <div className="space-y-3">
            {recapLesson.keyTakeaways.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-8 h-8 flex-shrink-0 bg-secondary-container border-[3px] border-on-surface rounded-full flex items-center justify-center font-headline font-bold text-sm text-on-secondary-container neo-shadow-sm">
                  {i + 1}
                </div>
                <p className="font-body text-base text-on-surface pt-1">{item}</p>
              </div>
            ))}
          </div>
        </NeoCard>

        {/* Title info */}
        <div className="text-center mb-8">
          <div className="inline-block animate-float bg-surface-container border-[3px] border-on-surface rounded-[1rem] px-4 py-2 neo-shadow mb-3">
            <span className="font-headline font-bold text-base">
              {recapLesson.hinglishTagline}
            </span>
          </div>
          <p className="font-body text-on-surface-variant">
            {recapLesson.bodyText}
          </p>
        </div>

        <NeoButton
          variant="primary"
          size="lg"
          icon="verified"
          onClick={handleContinue}
          className="w-full"
        >
          Final Evaluation ke liye Taiyyar!
        </NeoButton>
      </main>
    </div>
  );
}
