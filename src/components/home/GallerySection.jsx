import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/free-mode";
import $ from "jquery";
import { galleryImages } from "./mock";
import { Autoplay, Navigation } from "swiper/modules";

const GallerySection = () => {
  useEffect(() => {
    $(".foholic_gallery").magnificPopup({
      delegate: "a.ic-plus",
      type: "image",
      gallery: {
        enabled: true,
      },
    });
  }, []);

  return (
    <Swiper
      breakpoints={{
        767: { slidesPerView: 1, spaceBetween: 15 },
        768: { slidesPerView: 2, spaceBetween: 30 },
        1024: { slidesPerView: 3, spaceBetween: 30 },
      }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        clickable: true,
      }}
      effect="scroll"
      speed={900}
      freeMode={true}
      spaceBetween={30}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      modules={[Navigation, Autoplay]}
      className="mySwiper place_gallery"
    >
      {galleryImages.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="col-12 col-md-4 col-lg-4 swiper-slide">
            <div className="photo_gallery">
              <div className="gallery_img hover-effect-img">
                <div className="hover-icons">
                  <a href={image.src} className="ic-plus">
                    <i className="fa-solid fa-plus"></i>
                  </a>
                </div>
                <div className="inside-img swipe_gallery_img">
                  <img
                    src={image.src}
                    alt={`gallery-img-${index + 1}`}
                    className="img-fluid"
                  />
                </div>
                <div className="hover-effect the-team"></div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className="swiper-button-prev">
        <i className="fa-solid fa-angle-left"></i>
      </div>
      <div className="swiper-button-next">
        <i className="fa-solid fa-angle-right"></i>
      </div>
    </Swiper>
  );
};

export default GallerySection;
