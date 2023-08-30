import Button from "../Button";

const HeroSection = ({ heading, text, buttonText, onButtonClick, clicked }) => {
  return (
    <div className="hero-section">
      <div className="ellipse-overlay"></div>
      <h1>{heading}</h1>
      <p>{text}</p>
      <Button
        onClick={onButtonClick}
        children={buttonText}
        type={"secondary"}
        clicked={clicked}
      />
    </div>
  );
};

export default HeroSection;
