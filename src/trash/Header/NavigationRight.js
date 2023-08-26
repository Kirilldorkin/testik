import LanguageSelector from "../../components/LanguageSelector";
import { useTranslation } from "react-i18next";

const NavigationRight = ({ currentLanguage, setCurrentLanguage }) => {
  const { t } = useTranslation();
  return (
    <div className="navbar-right">
      <button className="navbar-button">{t("Log in")}</button>
      <button className="navbar-button">{t("Sign up")}</button>
      <LanguageSelector
        currentLanguage={currentLanguage}
        setCurrentLanguage={setCurrentLanguage}
      />
    </div>
  );
};

export default NavigationRight;
