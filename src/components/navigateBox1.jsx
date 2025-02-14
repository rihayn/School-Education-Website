import container from "../assets/images/Container (2).svg";

import arrow from "../assets/images/Vector (Stroke) (1).svg"
export function NavigateBox1() {
  return (
    <div className="navigatebox">
      <h2>Academics</h2>
      <img src={container} className="navigationimg" alt="" />
      <p>Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.</p>
      <button>
        <a href="">Learn More </a>
        <img src={arrow} className="arrowimg" alt="" />
      </button>
    </div>
  );
}
