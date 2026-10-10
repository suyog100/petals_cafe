import React from "react";
import aboutImg from "../../assets/images/about/about-img1.png";
import aboutImg2 from "../../assets/images/about/about-img2.png";
import aboutImg3 from "../../assets/images/about/about-img3.png";
import aboutImg4 from "../../assets/images/about/about-img4.png";
import restaurantText from "../../assets/images/about/restaurant-text.png";

const AboutSection = () => {
  return (
    <div className="container">
      <div className="restro-history">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6">
            <div
              className="our_history wow fadeIn"
              data-wow-duration="3s"
              data-wow-delay=".3s"
            >
              <span
                className="wow fadeInDown"
                data-wow-duration="2s"
                data-wow-delay=".3s"
              >
                Our History
              </span>
              <h2
                className="foholic_title wow fadeInDown"
                data-wow-duration="1.2s"
                data-wow-delay=".2s"
              >
                Welcome to Petals Cafe
              </h2>
              <p className="foholic_subcontent">
                Sed luctus massa purus, sed dapibus ex condimentum sed.
                Vestibulum eget imperdiet metus, varius facilisis nisl. Integer
                et sem eros. Pellentesque ullamcorper imperdiet laoreet. Orci
                varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus.
                <br></br>
                <br></br>Donec in consectetur sem, quis blandit nulla. Vivamus
                nulla nibh, dictum nec urna et, tristique elementum mi. Aenean
                suscipit sem nec neque pharetra, sed pretium leo feugiat. Etiam
                magna nunc, varius sit amet eleifend sit amet, lobortis nec
                nulla.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-6">
            <div className="resto-img text-end">
              <div className="theme-btn">
                <div className="round-text">
                  <img
                    src={restaurantText}
                    className="img-fluid restaurant-text-img"
                    alt="restaurant-text"
                  />
                  <div className="foholic_letter">P</div>
                </div>
              </div>
              <img src={aboutImg} alt="history img-1" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      <div className="food_tasting">
        <div className="row">
          <div className="col-12 col-md-5 col-lg-5">
            <div
              className="season_tast wow fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay="1s"
            >
              <img src={aboutImg2} alt="history img-2" className="img-fluid" />
            </div>
          </div>
          <div className="col-12 col-md-7 col-lg-7">
            <div
              className="tasting_content  wow fadeInRight"
              data-wow-duration="1s"
              data-wow-delay="0.8s"
            >
              <h3 className="foholic_title">
                Our tasting menu presents a seasonal selection from our trusted
                farmers, foragers and hunters.
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="resto_foods">
        <h3
          className="foholic_title text-center col-lg-8 m-auto wow fadeIn"
          data-wow-duration="3s"
          data-wow-delay=".4s"
        >
          Celebrating the season of food for the whole year. Enjoy the taste
          that differs.
        </h3>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <div
              className="fo-abo-last wow fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay="0.6s"
            >
              <p className="foholic_subcontent">
                Nunc vehicula massa vitae felis suscipit, et semper ligula
                eleifend. Cras neque justo, congue eget congue sit amet, sodales
                a ipsum. Suspendisse id faucibus tellus. Praesent viverra augue
                nec neque molestie dapibus. Integer pellentesque porta orci, id
                facilisis libero. Vivamus luctus orci orci, ut varius dolor
                posuere sed. Interdum et.
              </p>
              <div className="foholic_button">
                <a href="#menu" className="button-light">
                  View Our Menu
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-8">
            <div className="food-differs">
              <img
                src={aboutImg3}
                alt="history img-3"
                className="img-fluid float-end"
              />
              <img
                src={aboutImg4}
                alt="history img-4"
                className="img-fluid top-img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
