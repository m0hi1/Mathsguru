import type { PracticeQuestion, MidLessonQuiz, BonusChallenge } from "@/types";

export const practiceQuestions: PracticeQuestion[] = [
  {
    id: "q1",
    title: "Panga 1: IPL Score",
    questionText: "Virat hits 45, 102, 12, 88.",
    subText: "Max score kya hai?",
    tip: "Largest number ko dhoondo!",
    options: [
      { id: "a", label: "A", value: "45" },
      { id: "b", label: "B", value: "102" },
      { id: "c", label: "C", value: "12" },
      { id: "d", label: "D", value: "88" },
    ],
    correctOptionId: "b",
    hint: "Compare all numbers one by one. Which one is the 'baap' of all numbers here? Biggest number = Maximum!",
    xpReward: 120,
    level: "Pro Player",
    questionNumber: 1,
    totalQuestions: 3,
    nextRoute: "/practice/2",
  },
  {
    id: "q2",
    title: "Panga 2: Bazaar Prices",
    questionText: "Mango prices: ₹40, ₹25, ₹60, ₹35.",
    subText: "Minimum price kaun si hai?",
    tip: "Sabse chhoti value dhoondhni hai!",
    options: [
      { id: "a", label: "A", value: "₹40" },
      { id: "b", label: "B", value: "₹25" },
      { id: "c", label: "C", value: "₹60" },
      { id: "d", label: "D", value: "₹35" },
    ],
    correctOptionId: "b",
    hint: "Sab prices mein se sabse kam kaun si? Minimum = cheapest price in the lot!",
    xpReward: 120,
    level: "Pro Player",
    questionNumber: 2,
    totalQuestions: 3,
    nextRoute: "/practice/3",
  },
  {
    id: "q3",
    title: "Panga 3: Temperature Track",
    questionText: "Delhi temperatures this week: 38°C, 41°C, 35°C, 43°C, 37°C.",
    subText: "Range of temperatures kya hai?",
    tip: "Range = Max − Min. Pehle max aur min nikalo!",
    options: [
      { id: "a", label: "A", value: "6°C" },
      { id: "b", label: "B", value: "8°C" },
      { id: "c", label: "C", value: "10°C" },
      { id: "d", label: "D", value: "5°C" },
    ],
    correctOptionId: "b",
    hint: "Max = 43°C, Min = 35°C. Range = 43 − 35 = 8°C. Bas itna hi!",
    xpReward: 150,
    level: "Pro Player",
    questionNumber: 3,
    totalQuestions: 3,
    nextRoute: "/challenge/socho-1",
  },
];

export const midLessonQuiz: MidLessonQuiz = {
  id: "mid-lesson",
  title: "Mini Panga!",
  xpPerQuestion: 50,
  nextRoute: "/practice",
  questions: [
    {
      id: "mq1",
      questionText: "Max value data ke bahar se ho sakti hai?",
      questionType: "true-false",
      correctAnswer: "false",
      hintText:
        "Recall: Maximum value is always FROM the given dataset — it can't appear from outside!",
      timeSeconds: 10,
    },
    {
      id: "mq2",
      questionText: "Range = Maximum + Minimum?",
      questionType: "true-false",
      correctAnswer: "false",
      hintText:
        "Range formula is subtraction, not addition! Range = Max MINUS Min.",
      timeSeconds: 10,
    },
    {
      id: "mq3",
      questionText:
        "Data set: 5, 9, 3, 7. Minimum value kaun si hai?",
      questionType: "mcq",
      options: [
        { id: "a", label: "5", value: "5" },
        { id: "b", label: "9", value: "9" },
        { id: "c", label: "3", value: "3" },
        { id: "d", label: "7", value: "7" },
      ],
      correctAnswer: "c",
      hintText: "Sabse chhota number = Minimum. Which is smallest here?",
      timeSeconds: 15,
    },
  ],
};

export const bonusChallenge: BonusChallenge = {
  id: "bonus",
  title: "Bonus Panga: Double XP!",
  questionText:
    "5 students' test scores: 72, 88, 95, 61, 79. Range of scores kya hai?",
  subText: "Yeh thoda mushkil hai — lekin tum kar sakte ho! 💪",
  tip: "Pehle max nikalo, phir min, phir subtract karo!",
  options: [
    { id: "a", label: "A", value: "34" },
    { id: "b", label: "B", value: "27" },
    { id: "c", label: "C", value: "23" },
    { id: "d", label: "D", value: "30" },
  ],
  correctOptionId: "a",
  hint: "Max = 95, Min = 61. Range = 95 − 61 = 34. Double XP earned!",
  xpReward: 200,
  bonusXpReward: 200,
  level: "Champion",
  questionNumber: 1,
  totalQuestions: 1,
  nextRoute: "/lesson/recap",
};
