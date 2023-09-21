const Mobile = ({ isOpen, children }) => {
    if (!isOpen) return null;
  
    return (
      <div className="mobile">
        <div className="popup-content">{children}</div>
      </div>
    );
  };
  
  export default Mobile;
  