// import CardsBlock from "../components/main/CardsBlock";
import HeroSection from "../components/main/HeroSection";
// import InfoBlock from "../components/main/InfoBlock";
// import InvitationBlock from "../components/main/InvitationBlock";
import TradingBlock from "../components/main/TradingBlock";

// const Main = () => {
//   const handleButtonClick = () => {
//     alert("Button clicked!");
//   };
//   return (
//     <>
//       <HeroSection
//         heading={"Investing in global financial markets has never been easier!"}
//         text={
//           "Improve your trading skills with RingoTrade - the leading financial broker in Kyrgyzstan"
//         }
//         buttonText={"quick registration"}
//         onButtonClick={handleButtonClick}
//         clicked={false}
//       />
//       <div className="container">
//         <TradingBlock />
//         <CardsBlock />
//         {/* <InvitationBlock /> */}
//         <InfoBlock />
//       </div>
//     </>
//   );
// };

// export default Main;

import HeaderContainer from "../components/HeaderContainer";
import Btrade from "../assets/svg/big-logo.svg";

import StepContainer from "../components/StepContainer";
import BTC from "../assets/svg/Cards-block/bitcoin.svg";

import { useState } from "react";
import Button from "../components/Button";

const Main = () => {
  const [clicked, setClicked] = useState(false);
  const handleButtonClick = () => {
    setClicked(!clicked);
  };
  return (
    <div style={{color: "white"}}>
      <HeaderContainer />
      <StepContainer />
      
      <div className="blocks">
        <div className="determine-block">
          <div className="text-block">
            <h2>Determine where the price will go — up or down</h2>

            <p>
              Select an asset and investment amount, determine where the asset
              price will go, up or down, and click 'Call' or 'Put'.
              <br /> <br />
              Just make a prognosis — whether the rate of currency pair will
              increase or derease, for example, EUR/USD.
              <br /> <br />
              Correct prediction will bring you profit!
            </p>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="329"
            height="91"
            viewBox="0 0 329 91"
            fill="none"
          >
            <path
              d="M15.2195 27.3257L0 19.7273V80.1613C0 86.1473 4.85266 91 10.8387 91H327.045C328.043 91 328.852 90.1912 328.852 89.1936V52.576C328.852 51.0574 328.533 49.5558 327.915 48.1685L322.355 35.6758C320.215 30.8689 314.932 28.2929 309.827 29.5672L308.292 29.9506C302.677 31.3522 296.951 28.0957 295.286 22.5533L292.802 14.2851C289.758 4.15383 275.49 3.93746 272.141 13.9717L269.179 22.843C267.182 28.8268 259.912 31.0989 254.862 27.3174C249.849 23.5628 242.631 25.7729 240.579 31.6911L228.591 66.2723C226.052 73.5977 215.95 74.258 212.478 67.3255C209.651 61.68 201.962 60.7871 197.917 65.6344L188.279 77.1823C184.314 81.9334 177.182 82.4058 172.625 78.2194L125.805 35.209C121.185 30.9645 113.937 31.5176 110.014 36.4139L89.6427 61.8402C84.1311 68.7195 73.1496 66.4925 70.7534 58.0096L56.7551 8.45269C53.9788 -1.37584 40.3926 -2.26112 36.3644 7.12406L30.021 21.9034C27.5633 27.6296 20.7948 30.1092 15.2195 27.3257Z"
              fill="url(#paint0_linear_54_344)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_54_344"
                x1="271.683"
                y1="-77"
                x2="268.5"
                y2="91"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#5ED5A8" />
                <stop offset="1" stop-color="#1A223D" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="cryptocurrency-block">
          <div className="text-block">
            <h2>Cryptocurrency</h2>

            <p>
              Earn money on cryptocurrency rates — it's easy!
              <br /> <br />
              here are 8 popular cryptocurrency pairs available on our platform.
              <br /> <br />
              Catch hype trends with RingoTrade.
            </p>
          </div>

          <img src={BTC} alt="BTC" className="BTC" />
        </div>
      </div>

      <div className="registration-blog">
        <div className="registration-heading">
          <img src={Btrade} alt="btrade" />
          <span>is always at hand!</span>
        </div>
        <p>
          RingoTrade trading platform is always within reach on your favorite
          mobile device. Just open ringotrade.com or install the RingoTrade
          application for iOS and Android and earn at any time and anywhere.
        </p>
        <div>
          <button className="header-button">quick registration</button>
        </div>
      </div>

      <div className="instruction-block">
        <div className="instruction">
          <div className="instruction-text">
            <h2 className="instruction-border">Start earning with Btrade</h2>
            <p className="instruction-description">
              Build your business: become an agent and earn monthly. Your income
              depends on you and only you!
            </p>
          </div>

          <div className="instruction-steps">
            <div className="instruction-step">
              <span>1</span> <p>Apply now</p>
            </div>

            <div className="instruction-step">
              <span>2</span> <p>Wait for the manager's message</p>
            </div>

            <div className="instruction-step">
              <span>3</span> <p>Start earning</p>
            </div>
          </div>
        </div>

        <div className="instruction">
          <div className="instruction-text">
            <h2 className="instruction-border two">WHO ARE AGENTS</h2>
            <p className="instruction-description">
              An agent is a person who looks for players, helps them with
              depositing and withdrawing account funds.
              <br /> <br />
              Being a MostBet Cash agent means having an opportunity of earning
              a lot.
            </p>
          </div>

          <div>
            <img src="" alt="img" />
          </div>
        </div>

        <div className="instruction">
          <div className="instruction-text">
            <h2 className="instruction-border two">HOW DOES IT WORK?</h2>
            <p className="instruction-description">
              Make payments and get a 5% commission from each player's deposit
              and 2% from each withdrawal.
              <br /> <br />
              The more players and payments, the higher your earnings!
            </p>
          </div>

          <div>
            <img src="" alt="img" />
          </div>
        </div>

        <div>
          <button className="header-button">Become an agent</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
