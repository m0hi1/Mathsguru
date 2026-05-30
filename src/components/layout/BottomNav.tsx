"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", icon: "home", href: "/" },
  { label: "Chat", icon: "forum", href: "/chat" },
  { label: "Quiz", icon: "quiz", href: "/quiz/mid-lesson" },
  { label: "Story", icon: "auto_stories", href: "/story" },
  { label: "Report", icon: "bar_chart", href: "/mastery" },
];

export default function BottomNav() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center bg-surface px-4 py-2 border-t-[3px] border-on-surface neo-shadow-top">
      {navItems.map((item) => {
        const active = isActive(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center justify-center gap-0.5 transition-transform active:scale-95 ${
              active ? "text-on-surface scale-110" : "text-outline hover:text-primary"
            }`}
          >
            <span
              className="material-symbols-outlined text-2xl"
              style={
                active
                  ? { fontVariationSettings: "'FILL' 1" }
                  : undefined
              }
            >
              {item.icon}
            </span>
            <span className="text-[10px] font-bold font-body">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
