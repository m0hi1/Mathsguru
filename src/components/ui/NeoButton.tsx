"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";

interface NeoButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: string;
  iconPosition?: "left" | "right";
}

const variantStyles = {
  primary:
    "bg-primary-container text-on-primary-container hover:opacity-90",
  secondary:
    "bg-secondary-container text-on-secondary-container hover:opacity-90",
  tertiary:
    "bg-tertiary-container text-on-tertiary-container hover:opacity-90",
  ghost: "bg-surface-container-low text-on-surface hover:bg-surface-container",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm font-bold",
  md: "px-6 py-3 text-base font-bold",
  lg: "px-8 py-4 text-lg font-bold",
};

const NeoButton = forwardRef<HTMLButtonElement, NeoButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      icon,
      iconPosition = "right",
      children,
      className = "",
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={`
          inline-flex items-center justify-center gap-2
          border-[3px] border-on-surface rounded-[1rem]
          neo-shadow active-squish
          font-headline cursor-pointer
          transition-all duration-100
          disabled:opacity-50 disabled:cursor-not-allowed
          ${variantStyles[variant]}
          ${sizeStyles[size]}
          ${className}
        `}
        {...props}
      >
        {icon && iconPosition === "left" && (
          <span className="material-symbols-outlined">{icon}</span>
        )}
        {children}
        {icon && iconPosition === "right" && (
          <span className="material-symbols-outlined">{icon}</span>
        )}
      </button>
    );
  }
);

NeoButton.displayName = "NeoButton";
export default NeoButton;
