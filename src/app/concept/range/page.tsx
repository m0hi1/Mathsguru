import ConceptExplainerClient from "@/components/screens/ConceptExplainerClient";
import { conceptExplainers } from "@/lib/data/concepts";

const concept = conceptExplainers.find((c) => c.id === "range")!;

export default function RangeExplainerPage() {
  return <ConceptExplainerClient concept={concept} />;
}
