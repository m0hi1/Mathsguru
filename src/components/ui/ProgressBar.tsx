interface ProgressBarProps {
  current: number;
  total: number;
  className?: string;
}

export default function ProgressBar({
  current,
  total,
  className = "",
}: ProgressBarProps) {
  return (
    <div className={`h-6 w-full bg-surface-container-highest border-[3px] border-on-surface rounded-full overflow-hidden flex ${className}`}>
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`
            flex-1 h-full
            ${i < current ? "bg-secondary-container" : "bg-surface-container-highest"}
            ${i < total - 1 ? "border-r-[2px] border-on-surface" : ""}
          `}
        />
      ))}
    </div>
  );
}
