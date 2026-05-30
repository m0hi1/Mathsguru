import ConceptExplainerClient from "@/components/screens/ConceptExplainerClient";
import { conceptExplainers } from "@/lib/data/concepts";

const concept = conceptExplainers.find((c) => c.id === "max")!;

export default function MaxExplainerPage() {
  return <ConceptExplainerClient concept={concept} />;
}
