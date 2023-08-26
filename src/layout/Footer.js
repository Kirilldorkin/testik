import { useState, useEffect } from "react";
import { ReactComponent as FaceBookSvg } from "../assets/svg/Networks/FaceBook.svg";
import { ReactComponent as TelegramSvg } from "../assets/svg/Networks/Telegram.svg";
import { ReactComponent as InstagramSvg } from "../assets/svg/Networks/Instagram.svg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const { t } = useTranslation();

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer>
      <div className="footer-links">
        <Link to="/about-us">{t("About Us ") }</Link>
        <Link to="/news">{t("News")}</Link>
        <Link to="/contact-us">{t("Contact us")}</Link>
        <Link to="/privacy-policy">{t("Privacy Policy")}</Link>
        <Link to="/client-agreement">{t("Client agreement")}</Link>
        <Link to="/faq">{t("FAQ")}</Link>
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
