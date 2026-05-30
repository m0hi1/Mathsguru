"use client";

interface AnswerOptionProps {
  id: string;
  label: string;
  value: string;
  selected: boolean;
  correct?: boolean | null;
  revealed?: boolean;
  onSelect: (id: string) => void;
}

export default function AnswerOption({
  id,
  label,
  value,
  selected,
  correct,
  revealed = false,
  onSelect,
}: AnswerOptionProps) {
  const getStyles = () => {
    if (revealed && selected) {
      return correct
        ? "bg-secondary-container border-secondary animate-bounce-in"
        : "bg-error-container border-error animate-shake";
    }
    if (selected) return "bg-secondary-container border-on-surface";
    return "bg-white border-on-surface hover:bg-surface-container-low";
  };

  return (
    <button
      onClick={() => onSelect(id)}
      className={`
        group flex items-center p-4 md:p-5
        border-[3px] rounded-[1rem] neo-shadow active-squish
        transition-all text-left w-full
        ${getStyles()}
      `}
    >
      <span
        className={`
          w-10 h-10 flex items-center justify-center
          border-[3px] border-on-surface rounded-[0.75rem]
          mr-4 font-headline font-bold text-lg flex-shrink-0
          ${selected ? "bg-white" : "bg-surface-container-high"}
        `}
      >
        {label}
      </span>
      <span className="font-headline font-bold text-lg text-on-surface">
        {value}
      </span>
      {revealed && selected && correct && (
        <span
          className="material-symbols-outlined ml-auto text-secondary"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          check_circle
        </span>
      )}
      {revealed && selected && correct === false && (
        <span
          className="material-symbols-outlined ml-auto text-error"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          cancel
        </span>
      )}
    </button>
  );
}
