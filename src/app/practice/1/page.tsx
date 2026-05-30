import PracticeQuestionClient from "@/components/screens/PracticeQuestionClient";
import { practiceQuestions } from "@/lib/data/questions";

const question = practiceQuestions.find((q) => q.id === "q1")!;

export default function PracticeQ1Page() {
  return <PracticeQuestionClient question={question} />;
}
