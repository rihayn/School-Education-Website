import { BenefitsBottom } from "../components/benefitsBottom";
import { BenefitsTop } from "../components/benefitsTop";

export function Benefits() {
  return (
    <div className="benefits container">
      <BenefitsTop />
      <BenefitsBottom />
    </div>
  );
}
