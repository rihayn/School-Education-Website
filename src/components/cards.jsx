import profileContainer from "../assets/images/Profile Container.svg"
import stars from "../assets/images/Container.svg"

export function Cards() {
  return (
    <div className="cards">
      <img src={profileContainer} alt="" />
      <h2>Jennifer B</h2>
      <img src={stars} alt="" />
      <p>
        Little Learners Academy has been a second home for my child. The caring
        staff and engaging programs have made her excited to go to school every
        day!
      </p>
    </div>
  );
}
