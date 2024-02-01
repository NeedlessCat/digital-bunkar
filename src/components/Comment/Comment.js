import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./css/style.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import img1 from "./images/user1.jpg";
import img2 from "./images/user2.jpg";
import img3 from "./images/user3.jpg";

const Comment = () => {
  return (
    <>
      <div className="trip">
        <h1>Feedbacks</h1>
        <p>
          You can discover togetherness, unity and belief with and within us.
        </p>
      </div>
      <Swiper
        slidesPerView={1}
        grabCursor={true}
        loop={true}
        // autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper edits"
      >
        <SwiperSlide>
          <div className="contain">
            <div className="testimonial">
              <div className="testi-content swiper-wrapper">
                <div className="slide swiper-slide">
                  <img src={img1} alt="" className="image" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam, saepe provident dolorem a quaerat quo error facere
                    nihil deleniti eligendi ipsum adipisci, fugit, architecto
                    amet asperiores doloremque deserunt eum nemo.
                  </p>
                  <i className="bx bxs-quote-alt-left quote-icon"></i>
                  <div className="details">
                    <span className="name">Marnie Lotter</span>
                    <span className="job">Web Developer</span>
                  </div>
                </div>
              </div>
              <div className="swiper-button-next nav-btn"></div>
              <div className="swiper-button-prev nav-btn"></div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="contain">
            <div className="testimonial">
              <div className="testi-content swiper-wrapper">
                <div className="slide swiper-slide">
                  <img src={img2} alt="" className="image" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam, saepe provident dolorem a quaerat quo error facere
                    nihil deleniti eligendi ipsum adipisci, fugit, architecto
                    amet asperiores doloremque deserunt eum nemo.
                  </p>
                  <i className="bx bxs-quote-alt-left quote-icon"></i>
                  <div className="details">
                    <span className="name">Marnie Lotter</span>
                    <span className="job">Web Developer</span>
                  </div>
                </div>
              </div>
              <div className="swiper-button-next nav-btn"></div>
              <div className="swiper-button-prev nav-btn"></div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="contain">
            <div className="testimonial">
              <div className="testi-content swiper-wrapper">
                <div className="slide swiper-slide">
                  <img src={img3} alt="" className="image" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam, saepe provident dolorem a quaerat quo error facere
                    nihil deleniti eligendi ipsum adipisci, fugit, architecto
                    amet asperiores doloremque deserunt eum nemo.
                  </p>
                  <i className="bx bxs-quote-alt-left quote-icon"></i>
                  <div className="details">
                    <span className="name">Marnie Lotter</span>
                    <span className="job">Web Developer</span>
                  </div>
                </div>
              </div>
              <div className="swiper-button-next nav-btn"></div>
              <div className="swiper-button-prev nav-btn"></div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </SwiperSlide>

        <svg
          className="after"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#edf3e9"
            fillOpacity="1"
            d="M0,224L60,208C120,192,240,160,360,165.3C480,171,600,213,720,218.7C840,224,960,192,1080,192C1200,192,1320,224,1380,240L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </Swiper>
    </>
  );
};

export default Comment;
