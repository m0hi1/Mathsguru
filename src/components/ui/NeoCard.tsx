import { HTMLAttributes } from "react";

interface NeoCardProps extends HTMLAttributes<HTMLDivElement> {
  bg?: string;
  shadow?: boolean;
}

export default function NeoCard({
  bg = "bg-surface-container-lowest",
  shadow = true,
  className = "",
  children,
  ...props
}: NeoCardProps) {
  return (
    <div
      className={`
        ${bg}
        border-[3px] border-on-surface rounded-[1rem]
        ${shadow ? "neo-shadow" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}
