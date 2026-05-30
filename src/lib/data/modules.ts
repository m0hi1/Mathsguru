import type { MasteryData } from "@/types";

export const journeySteps = [
  { label: "Video Lesson 1", route: "/lesson/video-1", icon: "smart_display" },
  { label: "Video Lesson 2", route: "/lesson/video-2", icon: "smart_display" },
  { label: "Max Explainer", route: "/concept/max", icon: "menu_book" },
  { label: "Min Explainer", route: "/concept/min", icon: "menu_book" },
  { label: "Range Explainer", route: "/concept/range", icon: "menu_book" },
  { label: "Mini Quiz", route: "/quiz/mid-lesson", icon: "quiz" },
  { label: "Practice Start", route: "/practice", icon: "edit_square" },
  { label: "Practice Q1", route: "/practice/1", icon: "edit_square" },
  { label: "Practice Q2", route: "/practice/2", icon: "edit_square" },
  { label: "Practice Q3", route: "/practice/3", icon: "edit_square" },
  { label: "Socho Challenge", route: "/challenge/socho-1", icon: "psychology" },
  { label: "Bonus Challenge", route: "/practice/bonus", icon: "star" },
  { label: "Lesson Recap", route: "/lesson/recap", icon: "replay" },
  { label: "Final Evaluation", route: "/evaluation", icon: "verified" },
  { label: "Mastery Summary", route: "/mastery", icon: "emoji_events" },
];

export const masteryData: MasteryData = {
  topicName: "Maximum & Minimum",
  subjectEmoji: "📊",
  xpEarned: 940,
  xpMax: 1000,
  accuracy: 87,
  streakDays: 3,
  badges: [
    { label: "First Win", icon: "emoji_events", color: "bg-primary-container" },
    { label: "Speed Demon", icon: "bolt", color: "bg-secondary-container" },
    { label: "No Hint Used", icon: "visibility_off", color: "bg-tertiary-container" },
    { label: "Perfect Score", icon: "grade", color: "bg-secondary-fixed-dim" },
  ],
  conceptsLearned: [
    "Maximum — largest value in a data set",
    "Minimum — smallest value in a data set",
    "Range = Maximum − Minimum",
    "Real-world use: cricket, markets, weather",
  ],
};
