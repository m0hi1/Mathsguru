import type { SochoChallenge } from "@/types";

export const sochoChallenges: SochoChallenge[] = [
  {
    id: "socho-1",
    title: "Dimaag ki Batti Jalao! 💡",
    prompt:
      "Without calculating, if I add 10 to every number in a data set, what happens to the RANGE?",
    revealHeading: "Soch liya? Yeh dekho!",
    revealText:
      "The Range stays THE SAME! 🤯 Adding a constant to every value shifts all numbers equally — so Max increases by 10, Min increases by 10, and Max − Min is unchanged. Range = Same!",
    xpReward: 180,
    nextRoute: "/practice/bonus",
  },
];
