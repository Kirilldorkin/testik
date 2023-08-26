import Trading from "../../assets/images/trading-block.png";

import Deposit from "../../assets/svg/Trading-block/deposit.svg";
import Position from "../../assets/svg/Trading-block/position.svg";
import Profit from "../../assets/svg/Trading-block/profit.svg";

const TradingBlock = () => {
  const steps = [
    {
      title: "Make a deposit",
      description:
        "Complete fast registration and top-up the balance of your trading account using a desired payment method",
      image: Deposit,
    },
    {
      title: "Open a position",
      description:
        "Trade your favorite assets, get profit up to 3600% starting from 80 seconds with minimum investment from 10 KGS",
      image: Position,
    },
    {
      title: "Get your profit",
      description:
        "Immediate withdrawal of funds is available in RingoTrade trading halls and via e-wallets",
      image: Profit,
    },
  ];
  return (
    <div className="trading-block">
      <div className="block-content">
        <h1>Start trading with us in 3 steps</h1>
        <div className="image-section">
          <img src={Trading} alt="Trading" className="block-image" />
        </div>
      </div>

      <div className="block-content">
        <div className="steps-section">
          {steps.map((step, index) => (
            <div className="step" key={index}>
              <div className="step-content">
                <div className="image">
                  <img src={step.image} alt={step.image} />
                </div>
                <div className="text">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TradingBlock;
