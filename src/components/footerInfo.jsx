import logo from "../assets/images/Logo (1).svg";
import icon from "../assets/images/Icon.svg";
import icon1 from "../assets/images/Icon (1).svg";
import icon2 from "../assets/images/Icon (2).svg";

export function FooterInfo() {
  return (
    <div className="footerInfo">
      <img src={logo} alt="" />
      <p>
        We believe in the power of play to foster creativity, problem-solving
        skills, and imagination.
      </p>
      <div className="infoBoxes">
        <img src={icon} alt="" />
        <h5>hello@littlelearners.com</h5>
      </div>
      <div className="infoBoxes">
        <img src={icon1} alt="" />
        <h5>+91 91813 23 2309</h5>
      </div>
      <div className="infoBoxes">
        <img src={icon2} alt="" />
        <h5>Somewhere in the World</h5>
      </div>
    </div>
  );
}
