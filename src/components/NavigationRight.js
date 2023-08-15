// import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";

// { currentLanguage, setCurrentLanguage }
const NavigationRight = () => {
  const { t } = useTranslation();
  return (
    <div className="navbar-right">
      <button className="navbar-button">{t("Log in")}</button>
      <button className="navbar-button">{t("Sign up")}</button>
      {/* <LanguageSelector
        currentLanguage={currentLanguage}
        setCurrentLanguage={setCurrentLanguage}
      /> */}
    </div>
  );
};

export default NavigationRight;
