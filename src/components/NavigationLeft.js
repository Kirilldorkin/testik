import { useState, useRef } from "react";
import { ReactComponent as ArrowSvg } from "../assets/svg/Arrow.svg";
import LogoPng from "../assets/images/Logo.png";
import { useTranslation } from "react-i18next";

const NavigationLeft = () => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const tooltipRef = useRef(null);

  const { t } = useTranslation();

  return (
    <div className="navbar-left">
      <div className="navbar-logo active">
        <img src={LogoPng} alt="Logo" />
      </div>
      <div className="center">
        <p>{t("Trade now")}</p>
        <div
          className={`tooltip ${isTooltipVisible ? "active" : ""}`}
          onClick={() => setIsTooltipVisible(!isTooltipVisible)}
          ref={tooltipRef}
        >
          {t("For traders")} <ArrowSvg className="array" />
          <div className="tooltip-text">
            <p>{t("Replenishment")}</p>
            <p>{t("How to play")}</p>
            <p>{t("FAQ")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationLeft;
