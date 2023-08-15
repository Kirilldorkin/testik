import React, { useState } from "react";
// import { getLanguageName, getFlagSvg } from "./languageUtils";
import { useTranslation } from "react-i18next";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [currentLanguage, setCurrentLanguage] = useState("en");

  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // const handleLanguageSelect = (language) => {
  //   setCurrentLanguage(language);
  // };

  // const availableLanguages = ["en", "ru", "kg", "zh"];
  // const otherLanguages = availableLanguages.filter(
  //   (lang) => lang !== currentLanguage
  // );

  return (
    <div className={`burger-menu ${isOpen ? "open" : ""}`}>
      <div className="burger-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className="menu-wrapper">
        <div className="menu-items">
          <a href="#">{t("Trade now")}</a>
          <a href="#">{t("Replenishment")}</a>
          <a href="#">{t("How to play")}</a>
          <hr style={{ width: "90%", margin: "0.5rem 0" }} />
          <a href="#">{t("About Us")}</a>
          <a href="#">{t("News")}</a>
          <a href="#">{t("Contact us")}</a>
          <a href="#">{t("Privacy Policy")}</a>
          <a href="#">{t("Client agreement")}</a>
          {/* <div className="languages-wrapper">
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
