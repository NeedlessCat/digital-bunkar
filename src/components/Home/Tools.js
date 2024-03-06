import "./ToolStyle.css";
import Slider from "./ToolSlider/Slider";

const Tool = () => {
  return (
    <div className="hubtool">
      <p className="version">Version 1.0.0</p>
      <h1>All-in-one Bunkar's ToolHub</h1>
      <p className="general">
        We have created a web service to help digitalize the works of the
        well-working and well-established textile industrial world. Here are the
        services available to you through our organization.
      </p>
      <div className="sliding-section">
        <Slider />
      </div>
    </div>
  );
};

export default Tool;
