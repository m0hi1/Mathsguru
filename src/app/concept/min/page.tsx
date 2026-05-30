import ConceptExplainerClient from "@/components/screens/ConceptExplainerClient";
import { conceptExplainers } from "@/lib/data/concepts";

const concept = conceptExplainers.find((c) => c.id === "min")!;

export default function MinExplainerPage() {
  return <ConceptExplainerClient concept={concept} />;
}
