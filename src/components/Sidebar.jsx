import React, { useEffect } from "react";
import headerLogo from "../assets/images/logo/logo3.png";

import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  useEffect(() => {
    function scrollToTarget(target) {
      const $target = document.querySelector(target);
      if ($target) {
        window.scrollTo({
          top: $target.offsetTop + 1,
          behavior: "smooth",
        });
      }
    }
    scrollToTarget("#home");
    function handleClick(e) {
      e.preventDefault();
      const target = e.currentTarget.getAttribute("value");
      scrollToTarget(target);
      window.history.pushState("", "", target);
    }

    const divsWithValueAttribute = document.querySelectorAll('div[value^="#"]');
    divsWithValueAttribute.forEach((div) => {
      div.addEventListener("click", handleClick);
    });

    return () => {
      divsWithValueAttribute.forEach((div) => {
        div.removeEventListener("click", handleClick);
      });
    };
  }, []);

  return (
    <header className="foholic-fixed-sidebar sidebar-right" id="header">
      <div className="header-container">
        <div className="menu-wrap">
          <div className="header-logo">
            <Link to="/">
              <img
                src={headerLogo}
                alt="Foholic Header Logo"
                className="img-fluid"
                style={{ maxWidth: "140px" }}
              />
            </Link>
          </div>
          <nav className="fixed-menu-wrap" id="top-nav">
            <ul className="navbar-navs">
              <li className="menu-list">
                <div
                  className="nav-links"
                  value="#home"
                  onClick={() => navigate("/#home")}
                >
                  Home
                </div>
              </li>
              <li className="menu-list">
                <div
                  className="nav-links"
                  value="#about"
                  onClick={() => navigate("/#about")}
                >
                  About
                </div>
              </li>
              <li className="menu-list">
                <div
                  className="nav-links"
                  value="#team"
                  onClick={() => navigate("/#team")}
                >
                  Team
                </div>
              </li>
              <li className="menu-list">
                <div
                  className="nav-links"
                  value="#menu"
                  onClick={() => navigate("/#menu")}
                >
                  Menu
                </div>
              </li>
              <li className="menu-list">
                <div
                  className="nav-links"
                  value="#reservation"
                  onClick={() => navigate("/#reservation")}
                >
                  Reservation
                </div>
              </li>
              <li className="menu-list">
                <div
                  className="nav-links"
                  value="#gallery"
                  onClick={() => navigate("/#gallery")}
                >
                  Gallery
                </div>
              </li>
              <li className="menu-list">
                <div
                  className="nav-links"
                  value="#blog"
                  onClick={() => navigate("/#blog")}
                >
                  Blog
                </div>
              </li>
              <li className="menu-list">
                <div
                  className="nav-links"
                  value="#contact"
                  onClick={() => navigate("/#contact")}
                >
                  Contact
                </div>
              </li>
            </ul>
          </nav>
          <div className="menu-table">
            <span className="table-detail">Book Your Table</span>
            <div className="booking-number">
              <a href="tel:(123)-456-7788">(+977) 123-456-7788</a>
            </div>
          </div>
          <div className="foholic-social-ic">
            <a
              href="https://www.facebook.com/profile.php?id=61588258383844"
              className="social-ic"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com/"
              className="social-ic"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/petals_cafe.np/"
              className="social-ic"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://www.youtube.com/"
              className="social-ic"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Sidebar;
