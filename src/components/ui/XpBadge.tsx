interface XpBadgeProps {
  xp: number;
  className?: string;
}

export default function XpBadge({ xp, className = "" }: XpBadgeProps) {
  return (
    <div
      className={`flex items-center gap-1.5 px-3 py-1 bg-secondary-container border-[3px] border-on-surface rounded-full neo-shadow ${className}`}
    >
      <span
        className="material-symbols-outlined text-secondary text-base"
        style={{ fontVariationSettings: "'FILL' 1" }}
      >
        bolt
      </span>
      <span className="font-headline text-sm font-bold text-on-secondary-container">
        {xp} XP
      </span>
    </div>
  );
}
