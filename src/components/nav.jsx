import { NavBottom } from "./navBottom/nav-bottom";
import { NavTop } from "./navTop/nav-top";

export function Nav() {
  return (
    <div className="header-container">
      <nav >
        <NavTop />

        <NavBottom />
      </nav>
    </div>
  );
}
