const SignIn = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div className="sign-in">
      <div className="popup-content">{children}</div>
    </div>
  );
};

export default SignIn;
