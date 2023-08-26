import { useState } from "react";

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`accordion-item ${isOpen ? "open" : ""}`}>
      <div className="accordion-title" onClick={() => setIsOpen(!isOpen)}>
        <div className={`arrow ${isOpen ? "open" : ""}`}>
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M13 15L25.9904 0L0.00961876 0L13 15Z" fill="#FFD12E" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M15 13L0 0.00961876L0 25.9904L15 13Z" fill="#FFD12E" />
            </svg>
          )}
        </div>
        {title}
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export default AccordionItem;
