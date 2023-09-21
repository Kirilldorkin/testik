import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Mobile from "./popups/Mobile";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className={`burger-menu ${isOpen ? "open" : ""}`}>
      <div className="burger-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className="menu-wrapper">
        <div className="menu-items">
          <Link to="/trade-now">{t("Trade now")}</Link>
          <Link to="/replenishment">{t("Replenishment")}</Link>
          <Link to="/how-to-trade">{t("How to play")}</Link>
          <hr style={{ width: "15rem", margin: "0.5rem 0" }} />
          <Link to="/about-us">{t("About Us")}</Link>
          <Link to="/news">{t("News")}</Link>
          <Link to="/contact-us">{t("Contact us")}</Link>
          <Link to="/privacy-policy">{t("Privacy Policy")}</Link>
          <Link to="/client-agreement">{t("Client agreement")}</Link>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
