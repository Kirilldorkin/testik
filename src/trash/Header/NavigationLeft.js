import { useState, useRef } from "react";
// import { ReactComponent as ArrowSvg } from "../../assets/svg/Arrow.svg";
// import LogoPng from "../../assets/images/Logo.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const NavigationLeft = () => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const tooltipRef = useRef(null);

  const { t } = useTranslation();

  return (
    <div className="navbar-left">
      <div className="navbar-logo active">
        {/* <img src={LogoPng} alt="Logo" /> */}
      </div>
      <div className="center">
        <Link to="/trade-now">{t("Trade now")}</Link>
        <div
          className={`tooltip ${isTooltipVisible ? "active" : ""}`}
          onClick={() => setIsTooltipVisible(!isTooltipVisible)}
          ref={tooltipRef}
        >
          {t("For traders")} 
          <div className="tooltip-text">
            <Link to="/replenishment">{t("Replenishment")}</Link>
            <Link to="/how-to-play">{t("How to play")}</Link>
            <Link to="/faq">{t("FAQ")}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationLeft;
