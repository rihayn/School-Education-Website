import container from "../assets/images/Container (2).svg";

import arrow from "../assets/images/Vector (Stroke) (1).svg";
export function NavigateBox3() {
  return (
    <div className="navigatebox">
      <h2>Admissions</h2>
      <img src={container} className="navigationimg"  alt="" />
      <p>
      Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces.
      </p>
      <button>
        <a href="">Learn More </a>
        <img src={arrow} className="arrowimg" alt="" />
      </button>
    </div>
  );
}
