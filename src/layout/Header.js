import { useState } from "react";
import { Link } from "react-router-dom";

import Button from "../components/Button";
import BurgerMenu from "../components/BurgerMenu";

import Logo from "../assets/svg/small-logo.svg";
import FlagZh from "../assets/images/Languages/flag-zh.png";
import FlagEn from "../assets/images/Languages/flag-en.png";
import FlagKg from "../assets/images/Languages/flag-kg.png";
import FlagRu from "../assets/images/Languages/flag-ru.png";

import user from "../assets/images/user.png";

const Header = () => {
  const [showLinksTooltip, setShowLinksTooltip] = useState(false);
  const [showLanguageTooltip, setShowLanguageTooltip] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const languages = [
    { code: "zh", name: "中國人", img: FlagZh },
    { code: "en", name: "English", img: FlagEn },
    { code: "kg", name: "Кыргызча", img: FlagKg },
    { code: "ru", name: "Русский", img: FlagRu },
  ];

  const handleLanguageSelect = (languageCode) => {
    setSelectedLanguage(languageCode);
  };

  const handleLinksTooltipClick = () => {
    setShowLinksTooltip(!showLinksTooltip);
  };

  const handleLanguageTooltipClick = () => {
    setShowLanguageTooltip(!showLanguageTooltip);
  };

  const handleButtonClick = () => {
    alert("Button clicked!");
  };
  return (
    <nav className="navbar">
      <BurgerMenu className="BurgerMenu" />
      <div className="navbar-logo">
        <img src={Logo} alt="Logo" />
      </div>
      <img className="access" src={user} alt="user" />

      <div className="navbar-links">
        <Link className="capital-text" to="/">
          Trade now
        </Link>
        <div className="links-tooltip">
          <div className="text" onClick={handleLinksTooltipClick}>
            <span className="capital-text">For traders</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="9"
              viewBox="0 0 16 9"
              fill="none"
            >
              <path
                d="M7.29289 8.70711C7.68342 9.09763 8.31658 9.09763 8.70711 8.70711L15.0711 2.34315C15.4616 1.95262 15.4616 1.31946 15.0711 0.928932C14.6805 0.538408 14.0474 0.538408 13.6569 0.928932L8 6.58579L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L7.29289 8.70711ZM7 7V8H9V7H7Z"
                fill="white"
              />
            </svg>
          </div>

          {showLinksTooltip && (
            <div className="tooltip">
              <Link to={"/replenishment"}>Replenishment</Link>
              <Link to={"/how-to-trade"}>How to play</Link>
              <Link to={"/faq"}>FAQ</Link>
            </div>
          )}
        </div>
      </div>

      <div className="language-buttons-container">
        <div className="navbar-buttons">
          <Button
            onClick={handleButtonClick}
            children={"Log in"}
            type={"primary"}
            clicked={false}
          />
          <Button
            onClick={handleButtonClick}
            children={"Sing up"}
            type={"primary"}
            clicked={false}
          />
        </div>

        <div className="language-selector">
          <div className="text" onClick={handleLanguageTooltipClick}>
            <img
              src={languages.find((lang) => lang.code === selectedLanguage).img}
              alt="Flag"
            />
            <span className="capital-text">
              {languages.find((lang) => lang.code === selectedLanguage).name}
            </span>
          </div>
          {showLanguageTooltip && (
            <div className="tooltip">
              {languages
                .filter((lang) => lang.code !== selectedLanguage)
                .map((language) => (
                  <div
                    key={language.code}
                    className="text"
                    onClick={handleLanguageTooltipClick}
                  >
                    <img src={language.img} alt="Flag" />
                    <span onClick={() => handleLanguageSelect(language.code)}>
                      {language.name}
                    </span>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
