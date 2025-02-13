// import logoContainer from "essets/images/logoContainer.svg";
import styles from "./navButton.module.css";

export function NavButton() {
  return (
    <div className={styles.navButton}>
      <button className={styles.button}>
        <a href="little-learners" className={styles.navButtonLink}>
          LittleLearners
        </a>
      </button>
    </div>
  );
}
