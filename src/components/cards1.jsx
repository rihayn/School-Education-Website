import profileContainer1 from "../assets/images/Profile Container (1).svg";
import stars from "../assets/images/Container.svg";

export function Cards1() {
  return (
    <div className="cards">
      <img src={profileContainer1} alt="" />
      <h2>David K</h2>
      <img src={stars} alt="" />
      <p>
        Choosing Little Learners Academy for my daughter was the best decision.
        She has thrived in their nurturing and stimulating environment.
      </p>
    </div>
  );
}
