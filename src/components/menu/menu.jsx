import { NavBottomLink } from "../navBottomLink";
import { NavBottomLink1 } from "../navBottomLink1";
import { NavBottomLink2 } from "../navBottomLink2";
import { NavBottomLink3 } from "../navBottomLink3";
import { NavBottomLink4 } from "../navBottomLink4";
import { NavBottomLink5 } from "../navBottomLink5";
import styles from "./menu.module.css";

export function Menu() {
  return (
    <ul className={styles.menu}>
      <li className="navButtonlist orange2">
        <NavBottomLink />
      </li>
      <li className="navButtonlist">
        <NavBottomLink1 />
      </li>
      <li className="navButtonlist">
        <NavBottomLink2 />
      </li>
      <li className="navButtonlist">
        <NavBottomLink3 />
      </li>
      <li className="navButtonlist">
        <NavBottomLink4 />
      </li>
      <li className="navButtonlist orange1">
        <NavBottomLink5 />
      </li>
    </ul>
  );
}
