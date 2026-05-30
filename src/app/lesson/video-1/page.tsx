"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import TopNav from "@/components/layout/TopNav";
import NeoButton from "@/components/ui/NeoButton";
import NeoCard from "@/components/ui/NeoCard";
import { videoLessons } from "@/lib/data/lessons";
import { useLearningStore } from "@/lib/store/learningStore";

const lesson = videoLessons[0];

export default function VideoLesson1Page() {
  const [isPlaying, setIsPlaying] = useState(false);
  const router = useRouter();
  const { markComplete, addXp } = useLearningStore();

  const handleContinue = () => {
    markComplete("lesson-video-1");
    addXp(80);
    router.push(lesson.nextRoute);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <TopNav title={lesson.title} backHref="/" />

      <main className="flex-grow flex flex-col items-center justify-center px-5 md:px-12 py-8">
        {/* Video Player Frame */}
        <NeoCard
          bg="bg-surface-container"
          className="w-full max-w-4xl overflow-hidden mb-10"
        >
          <div className="relative w-full aspect-video bg-surface-container-high">
            {/* Mock video placeholder */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-secondary-container to-primary-container">
              <div className="text-8xl mb-4">🏏</div>
              <p className="font-headline font-bold text-2xl text-on-surface text-center px-6">
                IPL Cricket Match Highlights
              </p>
              <p className="font-body text-sm text-on-surface-variant mt-1">
                Math lesson video — mock preview
              </p>
            </div>

            {/* Play/Pause Overlay */}
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

            {/* Controls Bar */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center gap-3 bg-surface/90 border-[3px] border-on-surface rounded-[1rem] px-4 py-2 neo-shadow">
              <div className="flex-1 h-3 bg-surface-variant border-[2px] border-on-surface rounded-full overflow-hidden">
                <div className="w-1/3 h-full bg-primary-container border-r-[2px] border-on-surface" />
              </div>
              <span className="font-body text-xs font-bold">
                {lesson.duration}
              </span>
              <span className="material-symbols-outlined text-base cursor-pointer">
                fullscreen
              </span>
            </div>
          </div>
        </NeoCard>

        {/* Lesson Info */}
        <div className="max-w-2xl w-full text-center space-y-4">
          <div className="inline-block bg-tertiary-container text-on-tertiary-container font-headline font-bold px-5 py-2 border-[3px] border-on-surface neo-shadow rounded-[1rem] animate-float">
            {lesson.hinglishTagline}
          </div>

          <h2 className="font-headline font-extrabold text-2xl md:text-3xl leading-tight text-on-surface">
            Aaj sikhenge{" "}
            <span className="text-primary underline decoration-[4px] decoration-secondary">
              maximum
            </span>{" "}
            aur{" "}
            <span className="text-secondary underline decoration-[4px] decoration-primary">
              minimum
            </span>
            !
          </h2>

          <p className="font-body text-lg text-on-surface-variant max-w-lg mx-auto leading-relaxed">
            {lesson.bodyText}
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-3">
            <NeoButton
              variant="primary"
              size="lg"
              icon="play_arrow"
              onClick={handleContinue}
            >
              Start Learning!
            </NeoButton>
            <NeoButton
              variant="ghost"
              size="lg"
              icon="replay"
              iconPosition="left"
              onClick={() => {}}
            >
              View Recap
            </NeoButton>
          </div>
        </div>

        {/* What you&apos;ll learn */}
        <NeoCard
          bg="bg-surface-container-low"
          className="w-full max-w-2xl p-6 mt-10"
        >
          <h3 className="font-headline font-bold text-lg mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">
              checklist
            </span>
            Is video mein kya seekhoge?
          </h3>
          <ul className="space-y-2">
            {[
              "Maximum value kya hai aur kaise nikaalte hain",
              "Real cricket data se examples",
              "Step-by-step visual walkthrough",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 font-body text-sm">
                <span
                  className="material-symbols-outlined text-secondary text-lg flex-shrink-0 mt-0.5"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                {item}
              </li>
            ))}
          </ul>
        </NeoCard>
      </main>
    </div>
  );
}
