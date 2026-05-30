"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import TopNav from "@/components/layout/TopNav";
import NeoButton from "@/components/ui/NeoButton";
import NeoCard from "@/components/ui/NeoCard";
import { videoLessons } from "@/lib/data/lessons";
import { useLearningStore } from "@/lib/store/learningStore";

const lesson = videoLessons[1];

export default function VideoLesson2Page() {
  const [isPlaying, setIsPlaying] = useState(false);
  const router = useRouter();
  const { markComplete, addXp } = useLearningStore();

  const handleContinue = () => {
    markComplete("lesson-video-2");
    addXp(80);
    router.push(lesson.nextRoute);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <TopNav title={lesson.title} backHref="/lesson/video-1" />

      <main className="flex-grow flex flex-col items-center justify-center px-5 md:px-12 py-8">
        <NeoCard
          bg="bg-surface-container"
          className="w-full max-w-4xl overflow-hidden mb-10"
        >
          <div className="relative w-full aspect-video bg-surface-container-high">
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-primary-fixed to-secondary-container">
              <div className="text-8xl mb-4">🥭</div>
              <p className="font-headline font-bold text-2xl text-on-surface text-center px-6">
                Sabzi Bazaar Data
              </p>
              <p className="font-body text-sm text-on-surface-variant mt-1">
                Math lesson video — mock preview
              </p>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-20 h-20 bg-primary-container border-[3px] border-on-surface rounded-full neo-shadow active-squish flex items-center justify-center transition-all"
              >
                <span
                  className="material-symbols-outlined text-5xl text-on-primary-container"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {isPlaying ? "pause" : "play_arrow"}
                </span>
              </button>
            </div>
            <div className="absolute bottom-3 left-3 right-3 flex items-center gap-3 bg-surface/90 border-[3px] border-on-surface rounded-[1rem] px-4 py-2 neo-shadow">
              <div className="flex-1 h-3 bg-surface-variant border-[2px] border-on-surface rounded-full overflow-hidden">
                <div className="w-2/3 h-full bg-primary-container border-r-[2px] border-on-surface" />
              </div>
              <span className="font-body text-xs font-bold">{lesson.duration}</span>
              <span className="material-symbols-outlined text-base cursor-pointer">fullscreen</span>
            </div>
          </div>
        </NeoCard>

        <div className="max-w-2xl w-full text-center space-y-4">
          <div className="inline-block bg-primary-fixed text-on-primary-fixed font-headline font-bold px-5 py-2 border-[3px] border-on-surface neo-shadow rounded-[1rem] animate-float">
            {lesson.hinglishTagline}
          </div>
          <h2 className="font-headline font-extrabold text-2xl md:text-3xl leading-tight text-on-surface">
            Bazaar mein <span className="text-primary underline decoration-[4px] decoration-secondary">min</span> aur{" "}
            <span className="text-secondary underline decoration-[4px] decoration-primary">max</span> price dhoondte hain!
          </h2>
          <p className="font-body text-lg text-on-surface-variant max-w-lg mx-auto leading-relaxed">
            {lesson.bodyText}
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-3">
            <NeoButton variant="primary" size="lg" icon="play_arrow" onClick={handleContinue}>
              Continue!
            </NeoButton>
          </div>
        </div>
      </main>
    </div>
  );
}
