import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css/free-mode";
import sliderImg1 from "../../assets/images/slider/slider-img1.png";
import sliderImg4 from "../../assets/images/slider/slider-img4.png";
import sliderImg3 from "../../assets/images/slider/slider-img3.png";
import slideVideo from "../../assets/video/slide_video.mp4";
import shapeImg1 from "../../assets/images/svg/shape-img1.svg";
import shapeImg2 from "../../assets/images/svg/shape-img2.svg";

const SliderSection = () => {
  return (
    <Swiper
      centeredSlides
      speed={1500}
      simulateTouch
      clickable="true"
      parallax
      effect="slide"
      watchSlidesProgress
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      className="mySwiper"
      modules={[Autoplay, Pagination, Navigation]}
    >
      {[sliderImg1, slideVideo, sliderImg3, sliderImg4].map((slide, index) => (
        <SwiperSlide key={index} className="swiper-slide">
          <div className="slide-inner">
            <div
              className="slide-bg-image"
              style={{
                backgroundImage: `url(${index === 1 ? "" : slide})`,
              }}
            >
              {index === 1 && (
                <video playsInline autoPlay muted loop>
                  <source src={slide} type="video/mp4" />
                </video>
              )}
            </div>
            <div className="parallax-overlay"></div>
            <div className="slider_shape_img1">
              <img src={shapeImg1} alt="shape-img1 img" />
            </div>
            <div className="slider_shape_img2">
              <img src={shapeImg2} alt="shape-img2 img" />
            </div>
            <div className="container">
              <div
                className="slide_inn_content text-center wow fadeIn"
                data-wow-duration="3s"
                data-wow-delay=".4s"
              >
                <span>Welcome to Petals Cafe</span>
                <div className="slide_title col-12 col-lg-10 col-md-12 m-auto">
                  {index === 2
                    ? "Different Spice For A Different Taste"
                    : "We don’t just cook we thread you to delicacies..."}
                </div>
                <div className="foholic_button">
                  <a href="#reservation" className="button-light">
                    Reservation now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
      {/* <div class="swiper-pagination"></div> */}
    </Swiper>
  );
};

export default SliderSection;
