import Link from "next/link";
import NeoButton from "@/components/ui/NeoButton";
import NeoCard from "@/components/ui/NeoCard";

const sitemapCards = [
  {
    label: "Video Lessons",
    sub: "Watch & Learn",
    icon: "smart_display",
    href: "/lesson/video-1",
    iconBg: "bg-secondary",
    iconText: "text-on-secondary",
  },
  {
    label: "Concept Explainers",
    sub: "Deep Dive Theory",
    icon: "menu_book",
    href: "/concept/max",
    iconBg: "bg-tertiary",
    iconText: "text-on-tertiary",
  },
  {
    label: "Practice Zone",
    sub: "Solve Challenges",
    icon: "edit_square",
    href: "/practice",
    iconBg: "bg-primary",
    iconText: "text-on-primary",
  },
  {
    label: "Final Evaluation",
    sub: "Test Your Might",
    icon: "verified",
    href: "/evaluation",
    iconBg: "bg-on-surface",
    iconText: "text-surface",
  },
  {
    label: "Mastery Summary",
    sub: "Review Progress",
    icon: "emoji_events",
    href: "/mastery",
    iconBg: "bg-secondary-fixed-dim",
    iconText: "text-on-surface",
  },
];

export default function HubPage() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Top App Bar */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-background border-b-[3px] border-on-surface neo-shadow">
        <h1 className="font-headline font-extrabold text-xl text-on-surface">
          MathsGuru AI
        </h1>
        <div className="font-headline font-extrabold text-3xl text-primary leading-none">
          M
        </div>
      </header>

      <div className="flex-grow px-5 md:px-10 py-8 max-w-6xl mx-auto w-full">
        {/* Hero Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
          {/* Hero Card */}
          <NeoCard
            bg="bg-secondary-container"
            className="p-8 relative overflow-hidden order-2 md:order-1"
          >
            <div className="relative z-10">
              <h2 className="font-headline font-extrabold text-3xl md:text-5xl mb-4 text-on-secondary-container leading-tight">
                Oye Hero,
                <br />
                Taiyyar Ho?
              </h2>
              <p className="font-body text-lg mb-8 text-on-secondary-container/80 max-w-md leading-relaxed">
                Let&apos;s master Maxima and Minima today! Hum seekhenge
                everything from basic concepts to real-world use. MathsGuru
                Bhaiya is ready for you!
              </p>
              <Link href="/lesson/video-1">
                <NeoButton
                  variant="primary"
                  size="lg"
                  icon="play_arrow"
                  className="w-full md:w-auto"
                >
                  Start Full Journey
                </NeoButton>
              </Link>
            </div>
            {/* Decorative circle */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary opacity-20 rounded-full pointer-events-none" />
          </NeoCard>

          {/* Tutor Avatar */}
          <div className="flex justify-center order-1 md:order-2">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <NeoCard
                bg="bg-tertiary-fixed"
                className="w-full h-full rounded-full overflow-hidden flex items-center justify-center"
              >
                {/* Placeholder avatar */}
                <div className="flex flex-col items-center justify-center gap-3 p-8 text-center">
                  <span
                    className="material-symbols-outlined text-7xl text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    person
                  </span>
                  <p className="font-headline font-bold text-lg text-on-surface">
                    MathsGuru Bhaiya
                  </p>
                  <p className="font-body text-sm text-on-surface-variant">
                    Your guide to Max/Min!
                  </p>
                </div>
              </NeoCard>
              {/* Floating tag */}
              <div className="absolute -top-4 -right-4 bg-primary-container border-[3px] border-on-surface rounded-[1rem] px-3 py-1 neo-shadow animate-float">
                <span className="font-headline font-bold text-sm text-on-primary-container">
                  🏏 Chalo Seekhte Hain!
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Journey Progress Strip */}
        <section className="mb-12">
          <NeoCard bg="bg-surface-container-low" className="p-5">
            <div className="flex items-center gap-3 mb-3">
              <span className="material-symbols-outlined text-primary">route</span>
              <h3 className="font-headline font-bold text-lg">Full Journey: 15 Steps</h3>
            </div>
            <div className="flex gap-1 flex-wrap">
              {Array.from({ length: 15 }).map((_, i) => (
                <div
                  key={i}
                  className={`h-3 flex-1 min-w-[16px] rounded-full border-[2px] border-on-surface ${
                    i < 2 ? "bg-secondary-container" : "bg-surface-container-highest"
                  }`}
                />
              ))}
            </div>
            <p className="font-body text-sm text-on-surface-variant mt-2">
              2 of 15 steps completed
            </p>
          </NeoCard>
        </section>

        {/* Sitemap Grid */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-1 bg-primary rounded-full" />
            <h3 className="font-headline font-bold text-xl">
              Sitemap: Pick Your Starting Point
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {sitemapCards.map((card) => (
              <Link key={card.href} href={card.href}>
                <NeoCard
                  bg="bg-surface-container-low"
                  className="p-6 flex flex-col gap-4 active-squish hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all cursor-pointer h-full"
                >
                  <div
                    className={`w-12 h-12 rounded-full ${card.iconBg} flex items-center justify-center`}
                  >
                    <span
                      className={`material-symbols-outlined ${card.iconText}`}
                    >
                      {card.icon}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-lg mb-1 text-on-surface">
                      {card.label}
                    </h4>
                    <p className="font-body text-sm text-on-surface-variant font-bold uppercase tracking-wide">
                      {card.sub}
                    </p>
                  </div>
                </NeoCard>
              </Link>
            ))}
          </div>
        </section>

        {/* Stats Strip */}
        <section className="mt-12 grid grid-cols-3 gap-4">
          {[
            { value: "15", label: "Steps", icon: "route" },
            { value: "940", label: "Max XP", icon: "bolt" },
            { value: "3", label: "Concepts", icon: "menu_book" },
          ].map((stat) => (
            <NeoCard
              key={stat.label}
              bg="bg-surface-container"
              className="p-4 flex flex-col items-center gap-1 text-center"
            >
              <span className="material-symbols-outlined text-primary text-2xl">
                {stat.icon}
              </span>
              <p className="font-headline font-extrabold text-2xl text-on-surface">
                {stat.value}
              </p>
              <p className="font-body text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                {stat.label}
              </p>
            </NeoCard>
          ))}
        </section>
      </div>
    </main>
  );
}
