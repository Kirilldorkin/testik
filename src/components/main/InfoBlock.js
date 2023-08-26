import Image from "../../assets/images/image.png";
import Button from "../Button";

const InfoBlock = () => {
  const handleButtonClick = () => {
    alert("Button clicked!");
  };
  return (
    <div className="info-block">
      <div className="block-section">
        <div className="section-header">Start earning with Btrade</div>
        <div className="section-description">
          Build your business: become an agent and earn monthly. Your income
          depends on you and only you!
        </div>
        <div className="actions">
          <div className="action">
            <span className="action-number">1</span> Apply now
          </div>
          <div className="action">
            <span className="action-number">2</span> Wait for the manager's
            message
          </div>
          <div className="action">
            <span className="action-number">3</span> Start earning
          </div>
        </div>
      </div>
      <div className="block-section ">
        <div className="block-section-info">
          <div className="section-header">WHO ARE AGENTS</div>
          <div className="section-description">
            An agent is a person who looks for players, helps them with
            depositing and withdrawing account funds.
            <br /> <br />
            Being a MostBet Cash agent means having an opportunity of earning a
            lot.
          </div>
        </div>
        <div className="block-section-image">
          <img src={Image} alt="Photo 1" className="section-photo" />
        </div>
      </div>
      <div className="block-section reverse">
        <div className="block-section-info">
          <div className="section-header">WHO ARE AGENTS</div>
          <div className="section-description">
            Make payments and get a 5% commission from each player's deposit and
            2% from each withdrawal.
            <br /> <br />
            The more players and payments, the higher your earnings!
          </div>
        </div>
        <div className="block-section-image">
          <img src={Image} alt="Photo 1" className="section-photo" />
        </div>
      </div>
      <div>
        <Button
          onClick={handleButtonClick}
          children={"Become an agent"}
          type={"secondary"}
          clicked={false}
        />
      </div>
    </div>
  );
};

export default InfoBlock;
