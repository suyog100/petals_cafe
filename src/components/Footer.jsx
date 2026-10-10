import React from "react";
import message from "../assets/images/footer/message.png";
import backgroundShape1 from "../assets/images/svg/background-shape1.svg";
import backgroundShape2 from "../assets/images/svg/background-shape2.svg";
import location from "../assets/images/footer/location.png";
import callInfo from "../assets/images/footer/call-info.png";

const Footer = () => {
  return (
    <footer className="footer-area text-center" id="footer">
      <div className="parallax-overlay"></div>
      <div className="background-shape1">
        <img src={backgroundShape1} alt="background-shape1 img" />
      </div>
      <div className="background-shape2">
        <img src={backgroundShape2} alt="background-shape2 img" />
      </div>
      <div className="container">
        <span
          className="wow fadeInDown"
          data-wow-duration="2s"
          data-wow-delay=".3s"
        >
          Let's Talk
        </span>
        <h4
          className="wow fadeInDown"
          data-wow-duration="1.2s"
          data-wow-delay=".2s"
        >
          Contact Us
        </h4>
        <div
          className="row wow fadeIn"
          data-wow-duration="2s"
          data-wow-delay=".3s"
        >
          <div className="col-12 col-md-4 col-lg-4">
            <div className="location-info">
              <img src={location} alt="location-ic" className="img-fluid" />
              <p>888 Howard St, CA</p>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-4">
            <div className="location-info">
              <img src={callInfo} alt="call-info-ic" className="img-fluid" />
              <p>
                <a href="tel:+012345678899">+01 234 567 8899</a>
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-4">
            <div className="location-info">
              <img src={message} alt="message-ic" className="img-fluid" />
              <p>
                <a href="mailto:contact@foholic.com">CONTACT@FOHOLIC.COM</a>
              </p>
            </div>
          </div>
        </div>
        <div
          className="sub-footer text-center wow fadeIn"
          data-wow-duration="3s"
          data-wow-delay=".4s"
        >
          <span>2024 &copy; FOHOLIC. All rights reserved. DESIGN BY THE_KRISHNA</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
