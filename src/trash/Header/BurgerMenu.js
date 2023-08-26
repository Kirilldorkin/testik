import React, { useState } from "react";
import { getLanguageName, getFlagSvg } from "../../components/languageUtils";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageSelect = (language) => {
    setCurrentLanguage(language);
  };

  const availableLanguages = ["en", "ru", "kg", "zh"];
  const otherLanguages = availableLanguages.filter(
    (lang) => lang !== currentLanguage
  );

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
          <Link to="/how-to-play">{t("How to play")}</Link>
          <hr style={{ width: "90%", margin: "0.5rem 0" }} />
          <Link to="/about-us">{t("About Us")}</Link>
          <Link to="/news">{t("News")}</Link>
          <Link to="/contact-us">{t("Contact us")}</Link>
          <Link to="/privacy-policy">{t("Privacy Policy")}</Link>
          <Link to="/client-agreement">{t("Client agreement")}</Link>
          <div className="languages-wrapper">
            {otherLanguages.map((language) => (
              <div
                key={language}
                className="language"
                onClick={() => handleLanguageSelect(language)}
              >
                <img
                  src={getFlagSvg(language)}
                  alt={getLanguageName(language)}
                />
                {getLanguageName(language)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
