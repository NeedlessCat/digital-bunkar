import "./style.css";

const card = () => {
  return (
    <>
      <div className="trip">
        <h1>Subscriptions</h1>
        <p>
          You can discover togetherness, unity and belief with and within us.
        </p>
      </div>
      <div className="plans">
        <div className="contain1">
          <h2 className="title">
            Unlock Exclusive <br /> Content
          </h2>
          <h3 className="price">
            $29<span>/month</span>
          </h3>
          <p className="description">
            Gain exclusive access to our premium content library. Explore and
            enjoy high-quality videos on your preferred devices.
          </p>
          <b className="offer">Act fast! Offer ends on September 20, 2023.</b>
          <a className="subscribe-button" href="#">
            Subscribe Now
          </a>
          <div className="ribbon-wrap">
            <div className="ribbon">Special Offer!</div>
          </div>
        </div>
        <div className="contain1">
          <h2 className="title">
            Unlock Exclusive <br /> Content
          </h2>
          <h3 className="price">
            $29<span>/month</span>
          </h3>
          <p className="description">
            Gain exclusive access to our premium content library. Explore and
            enjoy high-quality videos on your preferred devices.
          </p>
          <b className="offer">Act fast! Offer ends on September 20, 2023.</b>
          <a className="subscribe-button" href="#">
            Subscribe Now
          </a>
          <div className="ribbon-wrap">
            <div className="ribbon">Special Offer!</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default card;
