"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface LearningState {
  xp: number;
  completedScreens: string[];
  questionAnswers: Record<string, string>;

  addXp: (amount: number) => void;
  markComplete: (screenId: string) => void;
  saveAnswer: (questionId: string, answerId: string) => void;
  reset: () => void;
}

export const useLearningStore = create<LearningState>()(
  persist(
    (set) => ({
      xp: 0,
      completedScreens: [],
      questionAnswers: {},

      addXp: (amount) =>
        set((state) => ({ xp: state.xp + amount })),

      markComplete: (screenId) =>
        set((state) => ({
          completedScreens: state.completedScreens.includes(screenId)
            ? state.completedScreens
            : [...state.completedScreens, screenId],
        })),

      saveAnswer: (questionId, answerId) =>
        set((state) => ({
          questionAnswers: { ...state.questionAnswers, [questionId]: answerId },
        })),

      reset: () =>
        set({ xp: 0, completedScreens: [], questionAnswers: {} }),
    }),
    {
      name: "mathsguru-learning",
    }
  )
);
