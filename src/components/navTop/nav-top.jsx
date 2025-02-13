import { NavTopLink } from "../navTopLink/navTopLink";
import styles from "./nav-top.module.css";

export function NavTop() {
  return (
    <div className={styles.navTop}>
      <NavTopLink />
    </div>
  );
}
