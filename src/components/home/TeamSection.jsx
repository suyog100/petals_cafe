import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css/free-mode";
import chefImg1 from "../../assets/images/best-chef/chef-img1.png";
import chefImg2 from "../../assets/images/best-chef/chef-img2.png";
import chefImg3 from "../../assets/images/best-chef/chef-img3.png";
import chefImg4 from "../../assets/images/best-chef/chef-img4.png";
import chefImg5 from "../../assets/images/best-chef/chef-img5.png";
import chefImg6 from "../../assets/images/best-chef/chef-img6.png";
import { Link } from "react-router-dom";

const TeamSection = () => {
  return (
    <Swiper
      breakpoints={{
        767: { slidesPerView: 1, spaceBetween: 15 },
        768: { slidesPerView: 2, spaceBetween: 30 },
        1024: { slidesPerView: 3, spaceBetween: 30 },
      }}
      speed={900}
      freeMode
      spaceBetween={30}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      modules={[FreeMode, Autoplay]}
      className="mySwiper team_container"
    >
      {[chefImg1, chefImg2, chefImg3, chefImg4, chefImg5, chefImg6].map(
        (img, index) => (
          <SwiperSlide
            key={index}
            className="col-12 col-md-4 col-lg-4 swiper-slide"
          >
            <div className="carousel_imges_item hover-effect-img">
              <div className="hover-icons">
                <a
                  href="https://www.facebook.com/"
                  className="in-social slide-left"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a
                  href="https://twitter.com/"
                  className="in-social"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a
                  href="https://www.instagram.com/"
                  className="in-social slide-right"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
              <Link to="/chef">
                <div className="carousel-img swipe_gallery_img">
                  <img src={img} alt={`chef-img-${index + 1}`} />
                </div>
                <div className="hover-effect the-team"></div>
                <div
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdropteam"
                >
                  <div className="team-box">
                    {index === 4 ? (
                      <span>D. MORIS</span>
                    ) : (
                      <span>R. JONATHAN</span>
                    )}
                    <p>Head Chef</p>
                  </div>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        )
      )}
    </Swiper>
  );
};

export default TeamSection;
