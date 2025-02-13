import { Menu } from "../menu/menu";
import { NavButton } from "../navButton/navButton";
import styles from "./navBottom.module.css";
export function NavBottom() {
  return (
    <div className={styles.navBottom}>
      <NavButton />

      <Menu />
    </div>
  );
}
