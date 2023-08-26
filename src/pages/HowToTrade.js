import PageBanner from "../components/PageBanner";
import backgroundImg from "../assets/images/pages-bg/how-to-trade.png";

const HowToTrade = () => {
  return (
    <>
      <PageBanner
        backgroundImage={backgroundImg}
        title='"Combo" option and how to trade?'
      />

      <div className="container trade-page">
        <div className="text-container">
          <p>
            Great popularity of option trading has led to the emergence of new
            kinds of options. Option "Boundary", also known as "Combo option" is
            designed to meet the trading needs of traders, who practice channel
            ways of trading. No matter how cunning and unpredictable the
            financial market can be, the behavior of asset has its legitimate
            features. 75% of the time the price is in consolidation channels,
            and it is moving along the channels predicted in advance. Just from
            this position RingoTrade approached to this kind of options,
            prescribing the ability to lock in the profits in trading terminals.
            Now the channel trading is available for all traders who prefer
            investing in options market.
            <br /> <br/>
            The main feature of "Combo" option is that a trader can obtain a
            profit up to 3600%, if he correctly predicts the probability of
            price in price channel or beyond such channel of the asset's price
            chart.
          </p>
        </div>
      </div>
    </>
  );
};

export default HowToTrade;
