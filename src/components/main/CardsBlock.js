import CardComponent from "./CardComponent";
import Cryptogram from "../../assets/svg/Cards-block/cryptogram.svg";
import Bitcoin from "../../assets/svg/Cards-block/bitcoin.svg";

const CardsBlock = () => {
  return (
    <div className="cards-block">
      <CardComponent
        title={"Determine where the price will go — up or down"}
        description={`
          Select an asset and investment amount, determine where the asset price will go, up or down, and click 'Call' or 'Put'.

          Just make a prognosis — whether the rate of currency pair will increase or derease, for example, EUR/USD.

          Correct prediction will bring you profit!
        `}
        imageSrc={Cryptogram}
        imageClass={"cryptogram"}
      />

      <CardComponent
        title={"Cryptocurrency"}
        description={`
          Earn money on cryptocurrency rates — it's easy!

          There are 8 popular cryptocurrency pairs available on our platform.

          Catch hype trends with RingoTrade.        
        `}
        imageSrc={Bitcoin}
        imageClass={"bitcoin"}
      />
    </div>
  );
};

export default CardsBlock;
