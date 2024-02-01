import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/5.jpg";
import Mountain4 from "../assets/8.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";
import Slider from "./ToolSlider/Slider";

const Destination = () => {
  return (
    <div className="destination">
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
      {/* <DestinationData
        className="first-des"
        heading="Tall Volcano, Batangas"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
        laborum aut eligendi iste tempora. Quae sit unde error labore omnis,
        ipsa voluptas accusamus ducimus maxime eligendi, assumenda adipisci
        soluta voluptate. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Enim laborum aut eligendi iste tempora. Quae sit unde error
        labore omnis, ipsa voluptas accusamus ducimus maxime eligendi,
        assumenda adipisci soluta voluptate."
        img1={Mountain1}
        img2={Mountain2}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Mt. Daguldul, Batangas"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
        laborum aut eligendi iste tempora. Quae sit unde error labore omnis,
        ipsa voluptas accusamus ducimus maxime eligendi, assumenda adipisci
        soluta voluptate. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Enim laborum aut eligendi iste tempora. Quae sit unde error
        labore omnis, ipsa voluptas accusamus ducimus maxime eligendi,
        assumenda adipisci soluta voluptate."
        img1={Mountain3}
        img2={Mountain4}
      /> */}
    </div>
  );
};

export default Destination;
