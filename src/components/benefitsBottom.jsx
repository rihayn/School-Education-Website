import { BenefitsBottomTop } from "./benefitsBottomTop";
import { BenefitsBottomBottom } from "./benefitsBottomBottom";

export function BenefitsBottom() {
  return (
    <div className="benefitsBottom">
      <BenefitsBottomTop />
      <BenefitsBottomBottom />
    </div>
  );
}
