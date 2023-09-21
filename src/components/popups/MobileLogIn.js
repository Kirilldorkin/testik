const MobileLogIn = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div className="mobile-login">
      <div className="popup-content">{children}</div>
    </div>
  );
};

export default MobileLogIn;
