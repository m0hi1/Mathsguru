"use client";

import { useEffect, useRef } from "react";

interface TimerBarProps {
  seconds: number;
  running: boolean;
  onExpire?: () => void;
}

export default function TimerBar({ seconds, running, onExpire }: TimerBarProps) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar || !running) return;

    bar.style.transition = "none";
    bar.style.width = "100%";
    void bar.offsetWidth;

    bar.style.transition = `width ${seconds}s linear`;
    bar.style.width = "0%";

    const timer = setTimeout(() => {
      onExpire?.();
    }, seconds * 1000);

    return () => clearTimeout(timer);
  }, [seconds, running, onExpire]);

  return (
    <div className="w-full h-4 bg-surface-container-highest border-b-[3px] border-on-surface overflow-hidden">
      <div
        ref={barRef}
        className="h-full bg-secondary border-r-[3px] border-on-surface"
        style={{ width: "100%" }}
      />
    </div>
  );
}
