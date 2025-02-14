import button from "../assets/images/Button.svg"
import button1 from "../assets/images/Button (1).svg"
import button2 from "../assets/images/Button (2).svg"

export function FooterBottom() {
  return (
    <div>
     
      <div className="footerBottom">
      <div className="titles">
        <h3>Terms of Service</h3>
        <span>|</span>
        <h3>Privacy Policy</h3>
        <span>|</span>

        <h3>Cookie Policy</h3>
      </div>
      <div className="icons">
        <img src={button} alt="" className="iconsImg" />
        <img src={button1} alt="" className="iconsImg" />
        <img src={button2} alt="" className="iconsImg" />
      </div>
      </div>
      <h4 className="copyright">Copyright © [2023] Little Learners Academy. All rights reserved.</h4>
    </div>
  );
}
