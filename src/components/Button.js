const Button = ({ onClick, children, type, clicked }) => {
  return (
    <button
      className={`custom-button ${type} ${clicked ? "clicked" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
