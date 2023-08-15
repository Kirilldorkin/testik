const StepCard = (image, h2, p) => {
  return (
    <div className="step-container">
      <img src={image} alt={image} />
      <div className="step-text">
        <h2>{h2}</h2>
        <p>{p}</p>
      </div>
    </div>
  );
};

export default StepCard;
