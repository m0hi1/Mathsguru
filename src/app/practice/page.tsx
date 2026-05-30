import Link from "next/link";
import TopNav from "@/components/layout/TopNav";
import NeoCard from "@/components/ui/NeoCard";
import NeoButton from "@/components/ui/NeoButton";

export default function PracticeStartPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <TopNav title="Practice Zone" backHref="/quiz/mid-lesson" />

      <main className="flex-grow flex flex-col items-center justify-center px-5 py-8 max-w-lg mx-auto w-full">
        {/* Level Badge */}
        <div className="mb-8">
          <span className="bg-primary-container text-on-primary-container font-headline font-bold px-6 py-2 border-[3px] border-on-surface rounded-full neo-shadow text-lg">
            🎮 Practice Level 1
          </span>
        </div>

        {/* Hero Card */}
        <NeoCard bg="bg-secondary-container" className="w-full p-8 mb-8 text-center">
          <div className="text-6xl mb-4">✏️</div>
          <h1 className="font-headline font-extrabold text-3xl text-on-secondary-container mb-3">
            Time to Practice!
          </h1>
          <p className="font-body text-lg text-on-secondary-container/80 mb-6">
            Theory seekh li? Ab actual questions solve karte hain! 3 pangas aayenge — har ek mein XP milega.
          </p>
          <Link href="/practice/1">
            <NeoButton variant="primary" size="lg" icon="play_arrow" className="w-full">
              Shuru Karein!
            </NeoButton>
          </Link>
        </NeoCard>

        {/* What&apos;s coming */}
        <NeoCard bg="bg-surface-container-low" className="w-full p-5">
          <h3 className="font-headline font-bold text-base mb-4">
            3 Pangas aayenge:
          </h3>
          <div className="space-y-3">
            {[
              { num: 1, label: "IPL Score — Find the Maximum", xp: 120 },
              { num: 2, label: "Bazaar Prices — Find the Minimum", xp: 120 },
              { num: 3, label: "Temperature Range — Calculate Range", xp: 150 },
            ].map((item) => (
              <div key={item.num} className="flex items-center gap-3">
                <span className="w-7 h-7 bg-primary-container border-[2px] border-on-surface rounded-full flex items-center justify-center font-headline font-bold text-sm text-on-primary-container">
                  {item.num}
                </span>
                <span className="font-body text-sm flex-1">{item.label}</span>
                <span className="font-headline font-bold text-sm text-secondary">
                  +{item.xp} XP
                </span>
              </div>
            ))}
          </div>
        </NeoCard>
      </main>
    </div>
  );
}
