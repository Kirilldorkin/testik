import { useState, useEffect } from "react";
import { ReactComponent as FaceBookSvg } from "../assets/svg/Networks/FaceBook.svg";
import { ReactComponent as TelegramSvg } from "../assets/svg/Networks/Telegram.svg";
import { ReactComponent as InstagramSvg } from "../assets/svg/Networks/Instagram.svg";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const { t } = useTranslation();

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer>
      <div className="footer-links">
        <a href="/">{t("About Us")}</a>
        <a href="/">{t("News")}</a>
        <a href="/">{t("Contact us")}</a>
        <a href="/">{t("Privacy Policy")}</a>
        <a href="/">{t("Client agreement")}</a>
        <a href="/">{t("FAQ")}</a>
      </div>
      <div className="icon-links">
        <FaceBookSvg className="icon-link" />
        <TelegramSvg className="icon-link" />
        <InstagramSvg className="icon-link" />
      </div>
      <p className="footer-year">
        &copy; 2016-{currentYear} {t("Rights Reserved")}
      </p>
    </footer>
  );
};

export default Footer;
