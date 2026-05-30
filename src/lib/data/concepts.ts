import type { ConceptExplainer } from "@/types";

export const conceptExplainers: ConceptExplainer[] = [
  {
    id: "max",
    type: "max",
    title: "Maximum Value Explained",
    hinglishTitle: "Maximum kya hota hai?",
    definition:
      "Maximum is the LARGEST value in a data set. Think of it as the 'baap' of all numbers — the one that towers above everyone else!",
    example:
      "Virat's scores: 45, 102, 12, 88. Maximum = 102 (highest score!)",
    formula: "MAX = Highest number in the set",
    keyPoints: [
      "Always part of the given data set",
      "There can only be ONE maximum",
      "Used in finding range: Range = Max − Min",
      "In cricket: highest score in innings",
      "In temperature: hottest day of the week",
    ],
    nextRoute: "/concept/min",
  },
  {
    id: "min",
    type: "min",
    title: "Minimum Value Explained",
    hinglishTitle: "Minimum kya hota hai?",
    definition:
      "Minimum is the SMALLEST value in a data set. It's the underdog — the lowest one in the crowd!",
    example:
      "Virat's scores: 45, 102, 12, 88. Minimum = 12 (poorest score ☹)",
    formula: "MIN = Lowest number in the set",
    keyPoints: [
      "Always part of the given data set",
      "There can only be ONE minimum",
      "Paired with Maximum to calculate Range",
      "In market: lowest price in the bazaar",
      "In weather: coldest night of the month",
    ],
    nextRoute: "/concept/range",
  },
  {
    id: "range",
    type: "range",
    title: "Range — The Spread Story",
    hinglishTitle: "Range = Max ke aur Min ke beech ki doori",
    definition:
      "Range tells you how SPREAD OUT your data is. Subtract the minimum from the maximum and you have the range!",
    example:
      "Scores: 45, 102, 12, 88. Max=102, Min=12. Range = 102 − 12 = 90",
    formula: "RANGE = Maximum − Minimum",
    keyPoints: [
      "Range = Max − Min (always this order!)",
      "A large range means data is spread widely",
      "A small range means data is clustered together",
      "Cricket use: Range of runs across matches",
      "Temperature use: Range of daily temperatures",
    ],
    nextRoute: "/quiz/mid-lesson",
  },
];
