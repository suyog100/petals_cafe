import React, { useState } from "react";
import menuPost from "../../assets/images/menu/menu-post1.png";
import { menuItems, menuSections } from "./mock";

const MenuSection = () => {
  const [menuNavList, setMenuNavList] = useState("nav-starter-tab");

  const handleChangeMenuNav = (e) => {
    setMenuNavList(e?.target?.id);
  };

  const renderMenuSection = (sectionId, key) => {
    return (
      <div
        className={`menu-visible tab-pane fade show ${
          menuNavList === sectionId ? "active" : ""
        }`}
        key={key}
        id={`nav-${sectionId}`}
        role="tabpanel"
        aria-labelledby={`nav-${sectionId}`}
      >
        {/* Menu items for the section */}
        {menuItems.map((menuItem, index) => (
          <div className="menu_wrappe" key={index}>
            <div className="dish_title d-flex">
              <span>{menuItem.name}</span>
              <div className="item-divider"></div>
              <span className="food_price">{menuItem.price}</span>
            </div>
            <p className="food_info">{menuItem.description}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-12 col-lg-6">
          <div
            className="table_menu wow fadeIn"
            data-wow-duration="2s"
            data-wow-delay=".4s"
          >
            <span>What's on the table</span>
            <h6 className="dark_head">The Menu</h6>
            <p>
              Sed luctus massa purus, sed dapibus ex condimentum sed. Vestibulum
              eget imperdiet metus, varius facilisis nisl. Integer et sem eros.
              Pellentesque ullamcorper imperdiet laoreet. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <img src={menuPost} alt="menu-post1" className="img-fluid" />
          </div>
        </div>
        <div
          className="col-12 col-md-12 col-lg-6 wow fadeIn"
          data-wow-duration="2s"
          data-wow-delay=".4s"
        >
          <nav className="menu_nav">
            <div
              className="food_menu_item nav nav-tabs"
              id="nav-tab"
              role="tablist"
            >
              {/* Render menu section tabs */}
              {menuSections.map((section) => (
                <button
                  key={section.id}
                  className={`navs-tabs ${
                    menuNavList === section.id ? "active" : ""
                  }`}
                  id={section.id}
                  data-bs-toggle="tab"
                  data-bs-target={`#nav-${section.label.toLowerCase()}`}
                  type="button"
                  role="tab"
                  aria-controls={`nav-${section.label.toLowerCase()}`}
                  aria-selected={menuNavList === section.id ? "true" : "false"}
                  onClick={handleChangeMenuNav}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </nav>
          <div className="menu_content tab-content" id="nav-tabContent">
            {/* Render menu sections */}
            {menuSections.map((section, index) =>
              renderMenuSection(section.id, index)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
