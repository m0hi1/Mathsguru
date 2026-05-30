import PracticeQuestionClient from "@/components/screens/PracticeQuestionClient";
import { practiceQuestions } from "@/lib/data/questions";

const question = practiceQuestions.find((q) => q.id === "q3")!;

export default function PracticeQ3Page() {
  return <PracticeQuestionClient question={question} />;
}
