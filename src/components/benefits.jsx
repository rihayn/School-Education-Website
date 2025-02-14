import { BenefitsBottom } from "./benefitsBottom";
import { BenefitsTop } from "./benefitsTop";

export function Benefits() {
  return (
    <div className="benefits container">
      <BenefitsTop />
      <BenefitsBottom />
    </div>
  );
}
