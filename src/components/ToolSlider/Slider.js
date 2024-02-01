import "./SliderStyle.css";
import images from "./SliderData.js";

const Slider = () => {
  const NextImage = function () {
    let lists = document.querySelectorAll(".item");
    document.getElementById("slide").appendChild(lists[0]);
  };
  const PrevImage = function () {
    let lists = document.querySelectorAll(".item");
    document.getElementById("slide").prepend(lists[lists.length - 1]);
  };

  return (
    <div className="container">
      <div id="slide">
        {images.map((pic) => (
          <div
            key={pic.id}
            className="item"
            style={{ backgroundImage: `url(${pic.image})` }}
            onClick={NextImage}
          >
            <div className="content">
              <div className="name">{pic.title}</div>
              <div className="des">{pic.content}</div>
              <button>{pic.button}</button>
            </div>
          </div>
        ))}
      </div>
      <div className="buttons">
        <button id="prev" onClick={PrevImage}>
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <button id="next" onClick={NextImage}>
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Slider;
