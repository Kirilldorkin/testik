const MobileSignUp = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div className="mobile-signup">
      <div className="popup-content">{children}</div>
    </div>
  );
};

export default MobileSignUp;