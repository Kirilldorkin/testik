const LogIn = ({ isOpen, children }) => {
    if (!isOpen) return null;
  
    return (
      <div className="log-in">
        <div className="popup-content">{children}</div>
      </div>
    );
  };
  
  export default LogIn;
  