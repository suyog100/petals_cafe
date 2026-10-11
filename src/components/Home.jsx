import React, { useEffect, useState } from "react";
import "../assets/js/custom.js";
import WOW from "wowjs";
import "wowjs/css/libs/animate.css";
import headerLogo from "../assets/images/logo/logo3.png";
import food from "../assets/images/svg/food.svg";
import foodList from "../assets/images/svg/food-list.svg";
import chef from "../assets/images/svg/chef.svg";
import foodVideo from "../assets/video/food_video.mp4";
import "swiper/swiper-bundle.css";
import "swiper/css/free-mode";
import $ from "jquery";
import Sidebar from "./Sidebar.jsx";
import BlogModal from "./blog/BlogModal.jsx";
import ChefModal from "./chef/ChefModal.jsx";
import SliderSection from "./home/SliderSection.jsx";
import AboutSection from "./home/AboutSection.jsx";
import TeamSection from "./home/TeamSection.jsx";
import MenuSection from "./home/MenuSection.jsx";
import ReservationSection from "./home/ReservationSection.jsx";
import GallerySection from "./home/GallerySection.jsx";
import BlogBox from "./blog/BlogBox.jsx";
import Footer from "./Footer.jsx";
import { Link } from "react-router-dom";

const Home = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setVisible(false);
      $(document).ready(function () {
        var target = window.location.hash;
        if (target) {
          $("html, body").animate(
            {
              scrollTop: $(target).offset()?.top,
            },
            "slow",
          );
        }
      });
    };

    fetchData();
  }, []);

  useEffect(() => {
    const wow = new WOW.WOW({ live: false });
    let scrolled = false;
    $(window).on("scroll", () => {
      if (!scrolled) {
        scrolled = true;
        wow.init();
      }
    });
  }, []);

  /* ============ Sticky Header============ */
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 40) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {visible ? (
        <div className="preloader">
          <div className="loader">
            <div className="box">
              <div className="box-inner-1">
                <div className="box-1"></div>
                <div className="box-2"></div>
              </div>
              <div className="box-inner-2">
                <div className="box-3"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div id="main-wrap">
          {/* start sidebar header */}
          <Sidebar />
          {/* end sidebar header */}

          {/* start content */}
          <div className="foholic_content">
            {/* mobile menu */}
            <div className={`mobile_header ${isSticky ? "sticky" : ""}`}>
              <div className="inn-sub-header">
                <div className="logo" id="logo">
                  <Link to="/">
                    <img
                      src={headerLogo}
                      alt="Foholic Header Logo"
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="foholic-menubar">
                  <div className="menu-ic">
                    <div className="line-menu line-half first-line"></div>
                    <div className="line-menu"></div>
                    <div className="line-menu line-half last-line"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* start slider section  */}
            <section className="foholic_slider slider-style" id="home">
              <h1 className="d-none">Hidden</h1>
              <SliderSection />
            </section>
            {/* end slider section */}

            {/* start about section */}
            <section
              className="foholic-history"
              id="about"
              style={{ textAlign: "start" }}
            >
              <AboutSection />
            </section>
            {/* end about section */}

            {/* start team section */}
            <section className="foholic_team" id="team">
              <div className="timeline-tag">
                <div className="intro-years text-center">
                  <div className="celebrate_title">Celebrating</div>
                  <h3 className="fast-counter" data-number="16">
                    1
                  </h3>
                  {/* <CountUp end={100} /> */}
                  <div className="years">Years</div>
                </div>
              </div>
              <div className="container">
                <div className="specialities-top text-center">
                  <span
                    className="wow fadeInDown"
                    data-wow-duration="2s"
                    data-wow-delay=".3s"
                  >
                    Meet the Team
                  </span>
                  <h4
                    className="foholic_title dark_head  wow fadeInDown"
                    data-wow-duration="1.2s"
                    data-wow-delay=".2s"
                  >
                    The Best Chefs
                  </h4>
                  <p className="col-12 col-lg-8 col-md-10 m-auto">
                    Nunc vehicula massa vitae felis suscipit, et semper ligula
                    eleifend. Cras neque justo, congue eget congue sit amet,
                    sodales a ipsum. Suspendisse id faucibus tellus.
                  </p>

                  <TeamSection />
                </div>
                <div className="foholic_button text-center">
                  <Link to="/chef" className="button-light">
                    Meet Our Team
                  </Link>
                </div>
              </div>
            </section>
            {/* end team section */}

            {/* start Features section */}
            <section className="foholic_features" id="features">
              <div className="container">
                <div
                  className="feature_lite text-center wow fadeIn"
                  data-wow-duration="3s"
                  data-wow-delay=".3s"
                >
                  <span
                    className="wow fadeInDown"
                    data-wow-duration="2s"
                    data-wow-delay=".3s"
                  >
                    Features
                  </span>
                  <h2
                    className="dark_head wow fadeInDown"
                    data-wow-duration="1.2s"
                    data-wow-delay=".2s"
                  >
                    Why people choose us?
                  </h2>
                </div>
                <div className="row">
                  <div className="col-12 col-lg-4">
                    <div className="dish-ic-box text-center">
                      <img src={food} alt="food-img" className="img-fluid" />
                      <h3 className="m-0">Menu for every taste</h3>
                      <p className="m-0">
                        Dolor sit amet, consectetur adipisicing elit et
                        molestias possimus
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4">
                    <div className="dish-ic-box text-center">
                      <img
                        src={foodList}
                        alt="food-list-img"
                        className="img-fluid"
                      />
                      <h3 className="m-0">Always fresh ingredients</h3>
                      <p className="m-0">
                        Assumenda possimus eaque illo iste, autem. Porro eveniet
                        autem
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4">
                    <div className="dish-ic-box text-center">
                      <img src={chef} alt="chef-img" className="img-fluid" />
                      <h3 className="m-0">Experienced chefs</h3>
                      <h4 className="d-none">hidden</h4>
                      <p className="m-0">
                        Dolor sit amet, consectetur adipisicing elit et
                        molestias possimus
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end Features section */}

            {/* start video section */}
            <section className="food_video" id="video">
              <div className="parallax-overlay"></div>
              <div className="container text-center">
                <h5
                  className="video_title wow fadeInDown"
                  data-wow-duration="2s"
                  data-wow-delay=".3s"
                >
                  Our dishes originate from traditional French cuisine. For
                  inspiration, we look to the seasons and to the natural
                  relationships between our ingredients.
                </h5>
                <div className="parallax-content">
                  {/* button start */}
                  <div className="more-wraper">
                    <div data-bs-toggle="modal" data-bs-target="#exampleModal">
                      <div className="watch-button watch-button-circle"></div>
                      <div className="watch_video_button">
                        <span>Watch Video</span>
                      </div>
                    </div>
                  </div>
                  {/* button end */}
                </div>
              </div>
            </section>
            {/* end video section */}

            {/* start menu section */}
            <section
              className="foholic_menu"
              id="menu"
              style={{ textAlign: "start" }}
            >
              <MenuSection />
            </section>
            {/* end menu section */}

            {/* start reservation section */}
            <section
              className="foholic_reservation"
              id="reservation"
              style={{ textAlign: "start" }}
            >
              <div className="parallax-overlay"></div>
              <h6 className="d-none">hidden</h6>
              <ReservationSection />
            </section>
            {/* end reservation section  */}

            {/* start gallery section */}
            <section className="foholic_gallery" id="gallery">
              <h2 className="d-none">hidden</h2>
              <div className="container">
                <div className="divide_gallery text-center">
                  <span
                    className="wow fadeInDown"
                    data-wow-duration="2s"
                    data-wow-delay=".3s"
                  >
                    Step Inside
                  </span>
                  <div
                    className="foholic_title dark_head wow fadeInDown"
                    data-wow-duration="1.2s"
                    data-wow-delay=".2s"
                  >
                    Our Gallery
                  </div>
                  <p className="col-12 col-lg-8 col-md-10 m-auto">
                    Nunc vehicula massa vitae felis suscipit, et semper ligula
                    eleifend. Cras neque justo, congue eget congue sit amet,
                    sodales a ipsum. Suspendisse id faucibus tellus.
                  </p>
                </div>
                <GallerySection />
              </div>
            </section>
            {/* end gallery section */}

            {/* start blog section */}
            <section className="blog_section" id="blog">
              <div className="our_blog">
                <div className="container">
                  <div className="text-center blog_detail">
                    <span
                      className="wow fadeInDown"
                      data-wow-duration="2s"
                      data-wow-delay=".3s"
                    >
                      Stay up to date
                    </span>
                    <h2
                      className="dark_head wow fadeInDown"
                      data-wow-duration="1.2s"
                      data-wow-delay=".2s"
                    >
                      Our Blog
                    </h2>
                    <p className="col-12 col-lg-8 col-md-10 m-auto">
                      Nunc vehicula massa vitae felis suscipit, et semper ligula
                      eleifend. Cras neque justo, congue eget congue sit amet,
                      sodales a ipsum. Suspendisse id faucibus tellus.
                    </p>
                  </div>
                </div>
              </div>
              <div className="blog_boxes">
                <BlogBox />
              </div>
            </section>
            {/* end blog section */}

            {/* start news-letter section */}
            <section
              className="newsletter-part"
              id="news-letter"
              style={{ textAlign: "start" }}
            >
              <div className="container">
                <h3 className="d-none">hidden</h3>
                <div className="row">
                  <div
                    className="col-12 col-md-12 col-lg-6 wow fadeInLeft"
                    data-wow-duration="1.8s"
                    data-wow-delay=".3s"
                  >
                    <span>SUBSCRIBE TO OUR NEWSLETTER</span>
                    <div className="news_sub_detail">
                      Happiness is an extra scoop of a soup. Discover the most
                      delicious recipes.
                    </div>
                  </div>
                  <div className="col-12 col-md-12 col-lg-6">
                    <form
                      className="newsletter__form wow fadeIn"
                      data-wow-duration="2s"
                      data-wow-delay=".3s"
                    >
                      <div className="field-class">
                        <input
                          autoComplete="off"
                          type="email"
                          id="formExample"
                          className="form-control-input"
                          placeholder="Your Email Address"
                        />
                      </div>

                      <div className="form-check mb-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="dagree"
                          name="checkbox"
                        />
                        <label className="form-check-label" htmlFor="dagree">
                          I have agree to the the terms & conditions
                        </label>
                      </div>

                      <div className="foholic_button">
                        <button className="button-light">Sign Up</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
            {/* end news-letter section */}

            {/* start location section */}
            <section className="foholic-location text-center" id="contact">
              <div className="container">
                <span
                  className="wow fadeInDown"
                  data-wow-duration="2s"
                  data-wow-delay=".3s"
                >
                  Where to Find us
                </span>
                <h3
                  className="location-title dark_head wow fadeInDown"
                  data-wow-duration="1.2s"
                  data-wow-delay=".2s"
                >
                  Our Location
                </h3>
                <div
                  className="foholic_map wow fadeIn"
                  data-wow-duration="3s"
                  data-wow-delay=".4s"
                >
                  <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.333980304133!2d-122.40701528440711!3d37.78221211950405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858086da575917%3A0x87b4d4bf6806587a!2sLUCE!5e0!3m2!1sen!2sin!4v1655354208156!5m2!1sen!2sin"
                    width="1290"
                    height="482"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </section>
            {/* end location section */}

            {/* start footer section */}
            <Footer />
            {/* end footer section */}
          </div>
          {/* end content */}

          {/* video section Modal */}
          <div
            className="modal fade video_modal"
            id="exampleModal"
            tabIndex="-1"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <video
                    width="727"
                    height="410"
                    controls
                    playsInline
                    autoPlay
                    muted
                    loop
                  >
                    <source src={foodVideo} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
          {/* end Modal */}

          {/* blog section Modal */}
          <div
            className="modal-fullscreen modal fade blog-modal"
            id="staticBackdrop"
            tabIndex="-2"
            aria-hidden="true"
            style={{ textAlign: "start" }}
          >
            <BlogModal />
          </div>

          {/* team modal */}
          <div
            className="modal fade team_blog reveal"
            id="staticBackdropteam"
            tabIndex="-1"
            aria-hidden="true"
            style={{ textAlign: "start" }}
          >
            <ChefModal />
          </div>

          {/* Scroll Bottom to Top */}
          <span className="scroll-top" id="scroll-to-top" data-scroll="up">
            <i className="fa-solid fa-angle-up"></i>
          </span>
        </div>
      )}
    </>
  );
};

export default Home;
