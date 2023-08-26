import { useState, useRef } from "react";
import { useTranslation } from "react-i18next"; 
import i18n from "../i18n"; 
import { getFlagSvg, getLanguageName } from "./languageUtils";

const LanguageSelector = ({ currentLanguage, setCurrentLanguage }) => {
  const [isLanguageTooltipVisible, setIsLanguageTooltipVisible] =
    useState(false);
  const languageTooltipRef = useRef(null);
  const secondLanguageTooltipRef = useRef(null);
  const { t } = useTranslation(); 

  const availableLanguages = ["en", "ru", "kg", "zh"];
  const tooltipLanguages = availableLanguages.filter(
    (lang) => lang !== currentLanguage
  );
  const shuffledLanguages = [...tooltipLanguages];
  for (let i = shuffledLanguages.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledLanguages[i], shuffledLanguages[j]] = [
      shuffledLanguages[j],
      shuffledLanguages[i],
    ];
  }

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    setCurrentLanguage(language);
    setIsLanguageTooltipVisible(false);
  };

  return (
    <div className="navbar-languages">
      <div
        className={`tooltip-language language ${
          isLanguageTooltipVisible ? "active" : ""
        }`}
        onClick={() => setIsLanguageTooltipVisible(!isLanguageTooltipVisible)}
        ref={languageTooltipRef}
      >
        <img src={getFlagSvg(currentLanguage)} alt={currentLanguage} />{" "}
        {getLanguageName(currentLanguage)}
      </div>
      <div
        className={`tooltip-languages ${
          isLanguageTooltipVisible ? "active" : ""
        }`}
        ref={secondLanguageTooltipRef}
      >
        {shuffledLanguages.map((language) => (
          <div
            key={language}
            className="language"
            onClick={() => handleLanguageChange(language)}
          >
            <img src={getFlagSvg(language)} alt={t("languageName")} />{" "}
            {getLanguageName(language)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;