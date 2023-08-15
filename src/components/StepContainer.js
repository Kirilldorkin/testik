import StepPhoto from "../assets/images/step.png";
import DepositPhoto from "../assets/svg/Deposit.svg"
import PositionPhoto from "../assets/svg/Position.svg";
import ProfitPhoto from "../assets/svg/Profit.svg";
import { useTranslation } from "react-i18next";

const StepContainer = () => {
  const { t } = useTranslation();
  return (
    <div className="step-container">
      <div className="step-text">
        <h2>Start trading with us in 3 steps</h2>
        <img src={StepPhoto} alt="Steps photo" />
      </div>

      <div className="steps-container">
        <div className="step">
          <img src={DepositPhoto} alt="deposit" />
          <div className="step-text">
            <h2>{t("Make a deposit")}</h2>
            <p>
              {t(
                "Complete fast registration and top-up the balance of your trading account using a desired payment method"
              )}
            </p>
          </div>
        </div>
        <div className="step">
          <img src={PositionPhoto} alt="position" />
          <div className="step-text">
            <h2>{t("Open a position")}</h2>
            <p>
              {t(
                "Trade your favorite assets, get profit up to 3600% starting from 80 seconds with minimum investment from 10 KGS"
              )}
            </p>
          </div>
        </div>
        <div className="step">
          <img src={ProfitPhoto} alt="profit" />
          <div className="step-text">
            <h2>{t("Get your profit")}</h2>
            <p>
              {t(
                "Immediate withdrawal of funds is available in RingoTrade trading halls and via e-wallets"
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepContainer;
