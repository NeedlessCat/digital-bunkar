import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";
import Slider from "./TeamSlider/slider";
import Card from "./TeamSlider/card";

function Trip() {
  return (
    <div className="trip">
      <h1>Our Teams</h1>
      <p>You can discover togetherness, unity and belief with and within us.</p>
      <div>
        <Slider />
      </div>
    </div>
  );
}

export default Trip;
