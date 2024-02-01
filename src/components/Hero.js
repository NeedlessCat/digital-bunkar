import "./HeroStyles.css";

function Hero(props) {
  return (
    <>
      <div
        className={props.cName}
        style={{ backgroundImage: `url(${props.heroImg})` }}
      >
        <svg
          className="after"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#edf3e9"
            fillOpacity="1"
            d="M0,96L40,133.3C80,171,160,245,240,234.7C320,224,400,128,480,106.7C560,85,640,139,720,138.7C800,139,880,85,960,96C1040,107,1120,181,1200,208C1280,235,1360,213,1400,202.7L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass}>
            {props.buttonText}
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
