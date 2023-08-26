const CardComponent = ({ title, description, imageSrc, imageClass }) => {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <img src={imageSrc} alt={imageClass} className={imageClass} />
    </div>
  );
};

export default CardComponent;
