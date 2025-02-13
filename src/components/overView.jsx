import { OverviewLeft } from "./overviewLeft";
import { OverviewRight } from "./overviewRight";

OverviewRight;

export function Overview() {
  return (
    <div
    className="overview">

      <OverviewLeft />

      <OverviewRight />
    </div>
  );
}
