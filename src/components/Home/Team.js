import "./TeamStyles.css";
import Slider from "./TeamSlider/slider";

function Trip() {
  return (
    <div className="team">
      <h1>Our Teams</h1>
      <p>You can discover togetherness, unity and belief with and within us.</p>
      <div>
        <Slider />
      </div>
    </div>
  );
}

export default Trip;
