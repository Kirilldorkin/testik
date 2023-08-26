import Logo from "../../assets/svg/big-logo.svg"
import Button from "../Button";

const InvitationBlock = () => {
    const handleButtonClick = () => {
        alert("Button clicked!");
      };
  return (
    <div className="invitation-block">
      <div className="logo-text">
        <img src={Logo} alt="Btrade Logo" />
        <span className="logo-placeholder"></span>
        is always at hand!
      </div>
      <div className="description">
        RingoTrade trading platform is always within reach on your favorite
        mobile device. Just open ringotrade.com or install the RingoTrade
        application for iOS and Android and earn at any time and anywhere.
      </div>
      <Button
        onClick={handleButtonClick}
        children={"quick registration"}
        type={"secondary"}
        clicked={false}
      />
    </div>
  );
};

export default InvitationBlock;
