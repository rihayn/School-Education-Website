import container from "../assets/images/Container (2).svg";

import arrow from "../assets/images/Vector (Stroke) (1).svg"
export function NavigateBox2() {
  return (
    <div className="navigatebox">
      <h2>Student Life</h2>
      <img src={container} className="navigationimg"  alt="" />
      <p>Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.</p>
      <button>
        <a href="">Learn More </a>
        <img src={arrow} className="arrowimg" alt="" />
      </button>
    </div>
  );
}
