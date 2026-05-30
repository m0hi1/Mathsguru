"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import TopNav from "@/components/layout/TopNav";
import NeoCard from "@/components/ui/NeoCard";
import NeoButton from "@/components/ui/NeoButton";
import { useLearningStore } from "@/lib/store/learningStore";

const BAR_COUNT = 36;

function generateBars(animated: boolean) {
  return Array.from({ length: BAR_COUNT }, () =>
    animated ? Math.random() * 80 + 20 : 30
  );
}

export default function RangeVoiceExplainerPage() {
  const router = useRouter();
  const { markComplete, addXp } = useLearningStore();

  const [isPlaying, setIsPlaying] = useState(false);
  const [bars, setBars] = useState(() => generateBars(false));
  const [maxVal, setMaxVal] = useState(80);
  const [minVal, setMinVal] = useState(20);
  const animRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const animateWaveform = useCallback(() => {
    if (animRef.current) clearTimeout(animRef.current);
    setBars(generateBars(true));
    animRef.current = setTimeout(animateWaveform, 150);
  }, []);

  useEffect(() => {
    if (isPlaying) {
      animateWaveform();
    } else {
      if (animRef.current) clearTimeout(animRef.current);
      setBars(generateBars(false));
    }
    return () => {
      if (animRef.current) clearTimeout(animRef.current);
    };
  }, [isPlaying, animateWaveform]);

  const range = maxVal - minVal;

  const handleContinue = () => {
    markComplete("concept-range");
    addXp(80);
    router.push("/quiz/mid-lesson");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background pb-24">
      <TopNav title="The Range Mystery" backHref="/concept/min" />

      <main className="max-w-2xl mx-auto px-4 pt-8 w-full">

        {/* Bhaiya Voice Card */}
        <NeoCard bg="bg-surface-container-lowest" className="p-6 mb-8 overflow-hidden">
          {/* Avatar + description */}
          <div className="flex items-start gap-4 mb-6">
            <div className="w-16 h-16 rounded-full border-[3px] border-on-surface bg-secondary-container flex-shrink-0 flex items-center justify-center neo-shadow-sm overflow-hidden">
              <span
                className="material-symbols-outlined text-4xl text-secondary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                record_voice_over
              </span>
            </div>
            <div className="flex-1">
              <p className="font-headline font-bold text-lg text-primary mb-1">
                Bhaiya explains...
              </p>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                Range = Max − Min. Bhaiya explains why this gap matters in
                statistics.
              </p>
            </div>
          </div>

          {/* Audio Waveform */}
          <NeoCard
            bg="bg-surface-container"
            className="p-4 mb-4 flex items-end justify-center overflow-hidden"
            style={{ height: "128px" }}
            shadow={false}
          >
            <div className="flex items-end gap-[3px] h-full w-full">
              {bars.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-primary border-[1px] border-on-surface rounded-t-sm"
                  style={{
                    height: `${h}%`,
                    transition: isPlaying ? "height 0.15s ease" : "height 0.3s ease",
                    opacity: isPlaying ? 1 : 0.4,
                  }}
                />
              ))}
            </div>
          </NeoCard>

          {/* Player controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`
                flex-1 border-[3px] border-on-surface rounded-[1rem] py-3 px-5
                font-headline font-bold text-on-primary
                neo-shadow active-squish transition-all
                flex items-center justify-center gap-2
                ${isPlaying ? "bg-secondary" : "bg-primary-container"}
              `}
            >
              <span className="material-symbols-outlined">
                {isPlaying ? "pause" : "play_arrow"}
              </span>
              {isPlaying ? "Pause" : "Listen Now"}
            </button>
            <div className="flex items-center gap-2 px-4 py-3 bg-surface-container-high border-[3px] border-on-surface rounded-[1rem] neo-shadow-sm">
              <span className="material-symbols-outlined text-secondary">
                graphic_eq
              </span>
              <span className="font-body text-sm font-bold">0:42</span>
            </div>
          </div>
        </NeoCard>

        {/* Live Range Adjuster */}
        <NeoCard bg="bg-surface-bright" className="p-6 mb-8">
          <h2 className="font-headline font-bold text-xl text-on-surface mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary">tune</span>
            Live Range Adjuster
          </h2>

          <div className="space-y-8">
            {/* Max slider */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="font-body text-xs font-bold uppercase tracking-widest text-primary">
                  Maximum Value
                </span>
                <span className="bg-secondary-container px-3 py-1 border-[2px] border-on-surface rounded-full font-headline font-bold text-lg text-on-secondary-container neo-shadow-sm">
                  {maxVal}
                </span>
              </div>
              <input
                type="range"
                min={minVal + 1}
                max={100}
                value={maxVal}
                onChange={(e) => setMaxVal(Number(e.target.value))}
                className="w-full h-3 rounded-full border-[2px] border-on-surface cursor-pointer"
                style={{
                  appearance: "none",
                  background: `linear-gradient(to right, #ff6b00 0%, #ff6b00 ${((maxVal - (minVal + 1)) / (100 - (minVal + 1))) * 100}%, #e4e2dd ${((maxVal - (minVal + 1)) / (100 - (minVal + 1))) * 100}%, #e4e2dd 100%)`,
                  accentColor: "#ff6b00",
                }}
              />
            </div>

            {/* Min slider */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="font-body text-xs font-bold uppercase tracking-widest text-tertiary">
                  Minimum Value
                </span>
                <span className="bg-tertiary-fixed px-3 py-1 border-[2px] border-on-surface rounded-full font-headline font-bold text-lg text-on-tertiary-fixed neo-shadow-sm">
                  {minVal}
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={maxVal - 1}
                value={minVal}
                onChange={(e) => setMinVal(Number(e.target.value))}
                className="w-full h-3 rounded-full border-[2px] border-on-surface cursor-pointer"
                style={{
                  appearance: "none",
                  background: `linear-gradient(to right, #ba005b 0%, #ba005b ${((minVal - 1) / (maxVal - 2)) * 100}%, #e4e2dd ${((minVal - 1) / (maxVal - 2)) * 100}%, #e4e2dd 100%)`,
                  accentColor: "#ba005b",
                }}
              />
            </div>
          </div>

          {/* Live result */}
          <div className="mt-8 pt-6 border-t-[3px] border-on-surface">
            <div className="grid grid-cols-3 gap-2 items-center text-center mb-6">
              <div className="flex flex-col items-center">
                <span className="font-body text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">
                  MAX
                </span>
                <span className="font-headline font-extrabold text-3xl text-primary">
                  {maxVal}
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="material-symbols-outlined text-on-surface-variant text-2xl">
                  remove
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-body text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">
                  MIN
                </span>
                <span className="font-headline font-extrabold text-3xl text-tertiary">
                  {minVal}
                </span>
              </div>
            </div>

            {/* Range result card */}
            <NeoCard
              bg="bg-secondary-container"
              className="p-5 flex flex-col items-center justify-center relative overflow-hidden"
              style={{
                transform: `scale(${0.95 + (range / 100) * 0.1})`,
                transition: "transform 0.2s ease",
              }}
            >
              {/* Dot pattern bg */}
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(#1c1b1b 1px, transparent 1px)",
                  backgroundSize: "10px 10px",
                }}
              />
              <span className="font-body text-xs font-bold uppercase tracking-widest text-on-secondary-container opacity-70 relative z-10 mb-1">
                Total Range
              </span>
              <span className="font-headline font-extrabold text-5xl text-on-secondary-container relative z-10 transition-all">
                {range}
              </span>
              <span className="font-body text-sm text-on-secondary-container/70 relative z-10 mt-1">
                = {maxVal} − {minVal}
              </span>
            </NeoCard>
          </div>
        </NeoCard>

        {/* Concept chip */}
        <NeoCard bg="bg-primary-fixed" className="p-4 mb-8 flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-full border-[2px] border-on-surface flex items-center justify-center flex-shrink-0">
            <span className="material-symbols-outlined text-on-primary">
              lightbulb
            </span>
          </div>
          <p className="font-body text-sm text-on-primary-fixed-variant leading-relaxed">
            Think of <strong>Range</strong> as the &ldquo;spread&rdquo; of your data. Large range
            means data is scattered; small range means data is closely packed!
          </p>
        </NeoCard>

        <NeoButton
          variant="primary"
          size="lg"
          icon="arrow_forward"
          onClick={handleContinue}
          className="w-full"
        >
          Got It! Aage Badho
        </NeoButton>
      </main>
    </div>
  );
}
