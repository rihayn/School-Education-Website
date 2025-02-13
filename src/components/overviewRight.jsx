import SubCounter from "../assets/images/SubContainer.svg"
export function OverviewRight() {
  return (
    <div className="overviewRight">
      <p className="welcome">Welcome to Little Learners Academy</p>
      <h1>
        Where Young Minds Blossom and <span>Dreams Take Flight.</span>{" "}
      </h1>
      <p className="overviewDescription">
        Our kinder garden school provides a nurturing and stimulating
        environment, fostering a love for learning that lasts a lifetime. Join
        us as we embark on an exciting educational journey together!
      </p>
      <img src={SubCounter} alt="" className="overviewImg2" />
    </div>
  );
}
