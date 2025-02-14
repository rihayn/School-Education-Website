import container from "../assets/images/Container (2).svg";
import arrow from "../assets/images/Vector (Stroke) (1).svg"
export function NavigateBox() {
  return (
    <div className="navigatebox">
      <h2>About Us</h2>
      <img className="navigationimg" src={container} alt="" />
      <p>Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.</p>
      <button>
        <a href="">Learn More </a>
        <img className="arrowimg" src={arrow} alt="" />
      </button>
    </div>
  );
}
