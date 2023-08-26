import PageBanner from "../components/PageBanner";
import backgroundImg from "../assets/images/pages-bg/about-us.png";

const AboutUs = () => {
  return (
    <>
      <PageBanner backgroundImage={backgroundImg} title="About us" />
      <div className="container about-page">
        <div className="text-container">
          <h1 className="medium-text">Giving Traders Endless Possibilities</h1>
          <p>
            RingoTrade is today's leading options trading platform. As options
            have become more popular than ever, RingoTrade provides traders with
            an excellent trader experience in terms of security, features,
            user-friendliness, tools, and education.
            <br /> <br />
            RingoTrade commits to excellence in providing a trading platform
            that can be used for private and institutional investors worldwide.
            The staff at RingoTrade is there for traders 24/7, with professional
            brokers guiding traders every step of the way.
          </p>
        </div>

        <div className="text-container">
          <h1 className="medium-text">Benefits of the ringotrade platform:</h1>
          <ol className="indented-list">
            <li>Web-based, no downloading necessary</li>
            <li>Simple trading — easy to understand with clear explanations</li>
            <li>Diverse products</li>
            <li>Safe — clear risk/profit ratios stated in option</li>
            <li>Quick and easy deposits/withdrawals</li>
          </ol>
          <p>
            Our vision is to give you, the trader, the safest, most convenient,
            and all around best trading experience every. Our pricing and
            execution modules ensure the use of the most updated and advanced
            technologies. Through our partnership with feeds provider, we
            receive live and accurate data streams, and our terms and conditions
            clearly state the difference between real time market price, and
            option prices. We provide expiry graphs for any given moment, to
            ensure trader confidence so there are never any questions on the
            trader's end.
            <br /> <br />
            Client's funds are held in a segregated account. Funds are used only
            for trading options through our website upon client's instructions
            and are never used for any other cause. Our liabilities and
            exposures are professionally handled and we guarantee payouts of
            your profits based on our terms.
            <br /> <br />
            RingoTrade and its partners have a team of professional forex
            brokers, experts in derivatives and risk management. We cover every
            aspect of options trading, so that you have the best trader
            experience. Ever.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
