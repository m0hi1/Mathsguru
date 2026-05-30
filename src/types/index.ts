export interface VideoLesson {
  id: string;
  title: string;
  hinglishTagline: string;
  bodyText: string;
  duration: string;
  nextRoute: string;
}

export interface ConceptExplainer {
  id: string;
  type: "max" | "min" | "range";
  title: string;
  hinglishTitle: string;
  definition: string;
  example: string;
  formula?: string;
  keyPoints: string[];
  nextRoute: string;
}

export interface AnswerOption {
  id: string;
  label: string;
  value: string;
}

export interface PracticeQuestion {
  id: string;
  title: string;
  questionText: string;
  subText: string;
  tip: string;
  options: AnswerOption[];
  correctOptionId: string;
  hint: string;
  xpReward: number;
  level: string;
  questionNumber: number;
  totalQuestions: number;
  nextRoute: string;
}

export interface QuizQuestion {
  id: string;
  questionText: string;
  questionType: "true-false" | "mcq";
  options?: AnswerOption[];
  correctAnswer: string;
  hintText: string;
  timeSeconds: number;
}

export interface MidLessonQuiz {
  id: string;
  title: string;
  questions: QuizQuestion[];
  xpPerQuestion: number;
  nextRoute: string;
}

export interface SochoChallenge {
  id: string;
  title: string;
  prompt: string;
  revealHeading: string;
  revealText: string;
  xpReward: number;
  nextRoute: string;
}

export interface BonusChallenge extends PracticeQuestion {
  bonusXpReward: number;
}

export interface MasteryBadge {
  label: string;
  icon: string;
  color: string;
}

export interface MasteryData {
  topicName: string;
  subjectEmoji: string;
  xpEarned: number;
  xpMax: number;
  accuracy: number;
  streakDays: number;
  badges: MasteryBadge[];
  conceptsLearned: string[];
}

export type NavItem = {
  label: string;
  icon: string;
  href: string;
  activeOn?: string[];
};
