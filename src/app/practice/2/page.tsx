import PracticeQuestionClient from "@/components/screens/PracticeQuestionClient";
import { practiceQuestions } from "@/lib/data/questions";

const question = practiceQuestions.find((q) => q.id === "q2")!;

export default function PracticeQ2Page() {
  return <PracticeQuestionClient question={question} />;
}
