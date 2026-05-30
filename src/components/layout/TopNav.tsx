"use client";

import { useRouter } from "next/navigation";
import XpBadge from "@/components/ui/XpBadge";
import { useLearningStore } from "@/lib/store/learningStore";

interface TopNavProps {
  title: string;
  showXp?: boolean;
  backHref?: string;
}

export default function TopNav({
  title,
  showXp = true,
  backHref,
}: TopNavProps) {
  const router = useRouter();
  const xp = useLearningStore((s) => s.xp);

  const handleBack = () => {
    if (backHref) {
      router.push(backHref);
    } else {
      router.back();
    }
  };

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-4 md:px-8 py-3 w-full bg-background border-b-[3px] border-on-surface neo-shadow">
      <div className="flex items-center gap-3">
        <button
          onClick={handleBack}
          aria-label="Go back"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container border-[3px] border-on-surface neo-shadow-sm active-squish"
        >
          <span className="material-symbols-outlined text-on-surface text-xl">
            arrow_back
          </span>
        </button>
        <h1 className="font-headline font-bold text-lg md:text-xl text-on-surface leading-tight line-clamp-1">
          {title}
        </h1>
      </div>
      {showXp && <XpBadge xp={xp} />}
    </header>
  );
}
